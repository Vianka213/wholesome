const mongoose = require("mongoose");
const RecipeModel = mongoose.model("Recipe");
const IngredientModel = mongoose.model("Ingredient");

module.exports.addRecipe = (req, res) => {
    var recipe = new RecipeModel();
    recipe.UserID = req.ID;
    recipe.food_name = req.body.name;
    recipe.Meal = req.body.meal;
    recipe.Tags = req.body.tags;
    recipe.Ingredients = req.body.ingredients;
    recipe.nf_calories = req.body.calories;
    recipe.Protein = req.body.protein;
    recipe.Fat = req.body.fat;
    recipe.Carbs = req.body.carbs;
    recipe.serving_qty = req.body.quantity;
    recipe.serving_unit = req.body.unit;
    recipe.save((err, doc) => {
        if (!err)
            return res.status(200).json({message: 'Recipe successfully created'});
        else {
            if (err.code == 11000)
                res.status(409).send({message: 'Recipe already exists'});
            else
                return res.status(500).send({message: 'Internal Server Error: ' + err});
        }
    })
}

module.exports.updateRecipe = (req, res) => {
    RecipeModel.updateOne({_id : req.body.recipeID}, {food_name: req.body.name, Meal: req.body.meal, Tags: req.body.tags,
    Ingredients: req.body.ingredients, nf_calories: req.body.calories, Protein: req.body.protein, Fat: req.body.fat, 
    Carbs: req.body.carbs, serving_qty: req.body.quantity, serving_unit: req.body.unit
    }, function(err, result) {
        if(err) {
            return res.status(500).send({message: 'Internal Server Error: ' + err});
        } else if (!result) {
            return res.status(404).json({ message: 'No log' }); 
        } else {
            return res.status(200).json({message: 'Updated successfully'});
        }
    })
}

module.exports.deleteRecipe = (req, res) => {
    RecipeModel.deleteOne({_id : req.body.recipeID}, function(err, result) {
        if(err) {
            return res.status(500).send({message: 'Internal Server Error: ' + err});
        } else if (!result) {
            return res.status(404).json({ message: 'No recipe' }); 
        } else {
            return res.status(200).json({message: 'Deleted recipe successfully'});
        }
    });
}

module.exports.getRecipes = (req, res) => {
    RecipeModel.find({UserID: req.ID}, function(err, result) {
        if(err) {
            return res.status(500).send({message: 'Internal Server Error: ' + err});
        } else if (!result) {
            return res.status(404).json({ message: 'No recipes found' }); 
        } else {
            return res.status(200).json({recipes: result});
        }
    });
}