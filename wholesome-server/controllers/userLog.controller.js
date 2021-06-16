const mongoose = require("mongoose");
const UserLogModel = mongoose.model("UserLog");
const FoodEntryModel = mongoose.model("FoodEntry");

module.exports.addFoodEntry = (req, res) => {
    var foodEntry = new FoodEntryModel();
    foodEntry.Date = req.body.date;
    foodEntry.Food = req.body.food;
    foodEntry.save((error, foodEntryDoc) => {
        if (!error) {
            UserLogModel.findOne({UserID : req.body.ID, Date : req.body.logDate}, function(err, result) {
                if(err) {
                    return res.status(500).send({message: 'Internal Server Error: ' + err});
                } else if (!result) {
                    // add to foodEntries
                    var userLog = new UserLogModel();
                    userLog.UserID = req.body.ID;
                    userLog.FoodEntries = [foodEntryDoc]
                    userLog.Date = req.body.logDate
                    userLog.save((err, doc) => {
                        if (!err)
                            return res.status(200).json({foodEntryID : foodEntryDoc._id, food : foodEntryDoc.Food, message: 'Food logged successfully'});
                        else {
                            if (err.code == 11000)
                                res.status(409).send({message: 'Food entry already exists'});
                            else
                                return res.status(500).send({message: 'Internal Server Error: ' + err});
                        }
                    })
                } else {
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

module.exports.getUserLog = (req, res) => {
    UserLogModel.findOne({UserID : req.ID, Date : req.query.logDate}, function(err, result) {
        if(err) {
            return res.status(500).send({message: 'Internal Server Error: ' + err});
        } else if (!result) {
            return res.status(404).json({ message: 'No log' }); 
        } else {
            return res.status(200).json({log: result});
        }
    })
}

module.exports.getFoodEntry = (req, res) => {
    FoodEntryModel.findOne({_id : req.query.entryID}, function(err, result) {
        if(err) {
            return res.status(500).send({message: 'Internal Server Error: ' + err});
        } else if (!result) {
            return res.status(404).json({ message: 'No log' }); 
        } else {
            return res.status(200).json({food: result});
        }
    })
}

module.exports.updateFoodEntry = (req, res) => {
    FoodEntryModel.updateOne({_id : req.body.foodEntryID}, {Food: req.body.food}, function(err, result) {
        if(err) {
            return res.status(500).send({message: 'Internal Server Error: ' + err});
        } else if (!result) {
            return res.status(404).json({ message: 'No log' }); 
        } else {
            return res.status(200).json({message: 'Updated successfully'});
        }
    })
}

module.exports.deleteFoodEntry = (req, res) => {
    UserLogModel.updateOne({UserID : req.ID, Date: req.body.logDate},{ $pull: { 'FoodEntries': req.body.foodEntryID}},(err1, result1) => {
        if (err1) 
            return res.status(500).send({message: 'Internal Server Error: ' + err1});
        else if (result1.n == 0)
            return res.status(404).json({ message: 'No food entries for the given user were found' }); 
        else
        {        
            FoodEntryModel.deleteOne({_id : req.body.foodEntryID}, function(err, result) {
                console.log('find')
                if(err) {
                    console.log('err')
                    return res.status(500).send({message: 'Internal Server Error: ' + err});
                } else if (!result) {
                    console.log('here')
                    return res.status(404).json({ message: 'No log' }); 
                } else {
                    console.log('success')
                    return res.status(200).json({message: 'Deleted successfully'});
                }
            });
        }
    })
}