const mongoose = require("mongoose")

var WorkoutSchema = new mongoose.Schema({
    UserID: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String
    },
    Type: {
        type: String
    },
    duration_min: {
        type: Number
    },
    Tags: {
        type: String
    },
    Exercises: [
        {
            type: Object
        }
    ],
    nf_calories: {
        type: Number
    }
});

mongoose.model("Workout", WorkoutSchema);