const mongoose = require('mongoose');
require("../config/config.js");

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

const User = require("./user.model")
const Role = require("./role.model")
const FoodEntry = require("./foodEntry.model")
const UserLog = require("./userLog.model");
const Ingredient = require("./ingredient.model");
const Recipe = require("./recipe.model")
const ExerciseEntry = require("./exerciseEntry.model");
const Workout = require("./workout.model");