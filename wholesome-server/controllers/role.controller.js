const mongoose = require("mongoose");
const RoleModel = mongoose.model("Role");

/**
 * This function gets a role of the given ID.
 * @param {HTTP Request} req Request body - ID of role
 * @param {HTTP Response} res 
 * @returns {String} error message or role.
 */
 module.exports.getRole = (req, res) => {

    RoleModel.findOne({ ID: req.query.ID},(err, result) => {
        if(err) 
        {
            return res.status(500).send({message: 'Internal Server Error: ' + error});
        }
        else if (!result)
        {
            return res.status(404).json({ message: 'Role record not found' });
        }
        else if (result)
        {
            return res.status(200).json({ role : result.Role});
        }
    });
}