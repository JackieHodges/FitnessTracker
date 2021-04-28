const router = require("express").Router();
const Workout = require("../models/Workout");
const Exercise = require("../models/Exercise");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


module.exports = router;