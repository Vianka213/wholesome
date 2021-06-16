const mongoose = require("mongoose")

var IngredientSchema = new mongoose.Schema({
    Food:{
        type: Object,
        required : "Required"
    }
});

mongoose.model("Ingredient", IngredientSchema);