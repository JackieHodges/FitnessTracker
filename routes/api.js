const router = require("express").Router();
const Workout = require("../models/Workout");
const mongojs = require("mongojs");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        // .sort({ date: -1 })
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.updateOne(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        {
            $push: {
                exercises: req.body
            }
        },

        (error, edited) => {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log(edited);
                res.send(edited);
            }
        }
    )
});

router.post("/api/workouts", (req, res) => {
    Workout.create(req.body, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});


module.exports = router;