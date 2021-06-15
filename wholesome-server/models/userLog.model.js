const mongoose = require("mongoose")

var UserLogSchema = new mongoose.Schema({
    UserID: {
        type: mongoose.Schema.Types.ObjectId,
        required : "ID required.",
        unique: true
    },
    FoodEntries: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FoodEntry'
        }
    ]
});

mongoose.model("UserLog", UserLogSchema);