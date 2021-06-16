const mongoose = require("mongoose")

var FoodEntrySchema = new mongoose.Schema({
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