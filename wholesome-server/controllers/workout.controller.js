const mongoose = require("mongoose");
const WorkoutModel = mongoose.model("Workout");

module.exports.addWorkout = (req, res) => {
    var workout = new WorkoutModel();
    workout.UserID = req.ID;
    workout.name = req.body.name;
    workout.Type = req.body.type;
    workout.duration_min = req.body.duration;
    workout.Tags = req.body.tags;
    workout.Exercises = req.body.exercises;
    workout.nf_calories = req.body.calories;

    workout.save((err, doc) => {
        if (!err)
            return res.status(200).json({message: 'Workout successfully created'});
        else {
            if (err.code == 11000)
                res.status(409).send({message: 'Workout already exists'});
            else
                return res.status(500).send({message: 'Internal Server Error: ' + err});
        }
    })
}