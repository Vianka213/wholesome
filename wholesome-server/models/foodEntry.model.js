const mongoose = require("mongoose")

var FoodEntrySchema = new mongoose.Schema({
    ID:{
        type: mongoose.Schema.Types.ObjectId,
        required : "Required",
        unique: true
    },
    Food:{
        type: Object,
        required : "Required"
    },
    Date: {
        type: String,
        required: "Required"
    }
});

mongoose.model("FoodEntry", FoodEntrySchema);