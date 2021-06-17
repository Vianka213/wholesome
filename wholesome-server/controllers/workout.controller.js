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

module.exports.deleteWorkout = (req, res) => {
    WorkoutModel.deleteOne({_id : req.body.workoutID}, function(err, result) {
        if(err) {
            return res.status(500).send({message: 'Internal Server Error: ' + err});
        } else if (!result) {
            return res.status(404).json({ message: 'No workout' }); 
        } else {
            return res.status(200).json({message: 'Deleted workout successfully'});
        }
    });
}

module.exports.getWorkouts = (req, res) => {
    WorkoutModel.find({UserID: req.ID}, function(err, result) {
        if(err) {
            return res.status(500).send({message: 'Internal Server Error: ' + err});
        } else if (!result) {
            return res.status(404).json({ message: 'No workouts found' }); 
        } else {
            return res.status(200).json({workouts: result});
        }
    });
}