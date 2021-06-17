const mongoose = require("mongoose")

var ExerciseEntrySchema = new mongoose.Schema({
    Exercise:{
        type: Object,
        required : "Required"
    },
    Date: {
        type: String,
        required: "Required"
    }
});

mongoose.model("ExerciseEntry", ExerciseEntrySchema);