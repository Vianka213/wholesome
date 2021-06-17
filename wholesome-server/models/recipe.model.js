const mongoose = require("mongoose")

var RecipeSchema = new mongoose.Schema({
    UserID: {
        type: mongoose.Schema.Types.ObjectId
    },
    food_name: {
        type: String
    },
    Meal: {
        type: String
    },
    serving_qty: {
        type: Number
    },
    serving_unit: {
        type: String
    },
    Tags: {
        type: String
    },
    Ingredients: [
        {
            type: Object
        }
    ],
    nf_calories: {
        type: Number
    },
    Protein: {
        type: Number
    },
    Fat: {
        type: Number
    },
    Carbs: {
        type: Number
    }
});

mongoose.model("Recipe", RecipeSchema);