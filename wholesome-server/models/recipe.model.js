const mongoose = require("mongoose")

var RecipeSchema = new mongoose.Schema({
    UserID: {
        type: mongoose.Schema.Types.ObjectId
    },
    Name: {
        type: String
    },
    Meal: {
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
    Calories: {
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