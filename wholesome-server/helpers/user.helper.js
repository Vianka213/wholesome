const mongoose = require("mongoose");
const UserModel = mongoose.model("User");

/**
 * checks to see if user has a role of "Security Administrator".
 * @param {HTTP Request} req ID of user.
 * @param {HTTP Response} res  
 * @param {Function} next Next function to be called.
 */
 module.exports.isAdmin = (req, res, next) => {

    UserModel.findOne({ _id: req.ID},(err, result) => {
        if (err) 
            return res.status(500).send({message: 'Internal Server Error: ' + err});
        else if (!result)
            return res.status(404).json({ message: 'User not found' });
        
        else
        {
            if(result.Role.includes(3))
                next();
            else
                return res.status(403).json({ message: "Access denied"});
        }
    });
    
}