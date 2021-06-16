const mongoose = require("mongoose");
const UserLogModel = mongoose.model("UserLog");
const FoodEntryModel = mongoose.model("FoodEntry");

module.exports.addFoodEntry = (req, res) => {
    var foodEntry = new FoodEntryModel();
    foodEntry.Date = req.body.date;
    foodEntry.Food = req.body.food;
    foodEntry.save((error, foodEntryDoc) => {
        if (!error) {
            UserLogModel.findOne({UserID : req.body.ID}, function(err, result) {
                if(err) {
                    console.log('here5')
                    return res.status(500).send({message: 'Internal Server Error: ' + err});
                } else if (!result) {
                    // add to foodEntries
                    var userLog = new UserLogModel();
                    console.log('here')
                    userLog.UserID = req.body.ID;
                    userLog.FoodEntries = [foodEntryDoc]
                    userLog.Date = req.body.logDate
                    console.log('here1')
                    userLog.save((err, doc) => {
                        console.log('here2')
                        if (!err)
                            return res.status(200).json({foodEntryID : foodEntryDoc._id, food : foodEntryDoc.Food, message: 'Food logged successfully'});
                        else {
                            console.log('here3')
                            if (err.code == 11000)
                                res.status(409).send({message: 'Food entry already exists'});
                            else
                                return res.status(500).send({message: 'Internal Server Error: ' + err});
                        }
                    })
                } else {
                    console.log(result)
                    result.FoodEntries.push(foodEntryDoc);
                    result.save((err, doc) => {
                        if(!err)
                            return res.status(200).json({foodEntryID : foodEntryDoc._id, food : foodEntryDoc.Food, message: 'Food logged successfully'});
                        else
                            return res.status(500).send({message: 'Internal Server Error: ' + err});
                    });
                }
            })
        } else 
        {
            if (error.code == 11000)
                res.status(409).send({message: 'Food entry already exists'});
            else
                return res.status(500).send({message: 'Internal Server Error: ' + error});
        }
    })
}