const mongoose = require("mongoose")

var UserLogSchema = new mongoose.Schema({
    UserID: {
        type: mongoose.Schema.Types.ObjectId,
        required : "ID required."
    },
    Date : {
        type: String,
        required: "Required"
    },
    FoodEntries: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FoodEntry'
        }
    ],
    ExerciseEntries: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ExerciseEntry'
        }
    ],
    Water: {
        type: Number
    }
});

mongoose.model("UserLog", UserLogSchema);