const router = require("express").Router();
const Workout = require("../models/Workout");
const Exercise = require("../models/Exercise");

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

// router.put("/api/workouts/:id", (req, res) => {
//     Workout.exercise.update(
//         {
//             _id: mongojs.ObjectId(req.params.id)
//         },
//         {
//             $push: {
                
//             }
//         }
//     )
// });

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