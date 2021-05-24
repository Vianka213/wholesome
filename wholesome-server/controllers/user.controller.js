const mongoose = require("mongoose");
const passport = require("passport");
const UserModel = mongoose.model("User");

const RoleHelper =require('../helpers/role.helper');

/**
 * This function is called when a user logs in to the system. 
 * This function does all the validation the user's email and password, then returns a uniquely
 * generated token to the user.
 * @param req - HTTP request 
 * @param res HTTP response 
 * @return {Http Response} - If login is a success a token is returned, otherwise a error message is returned
 */
 module.exports.login = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err,user,info)=>{
        //error from passport
        if(err)
            return res.status(500).json({message: 'Internal Server Error: ' + err});
        //registered user
        else if(user) 
        {
            return res.status(200).json({token: user.generateJWT(), message :"Sign in successful"});
        }
        //unknown user or wrong password
        else
        {
            if(info.message == 'Missing credentials')
                return res.status(400).json(info);

            return res.status(404).json(info);
        }
            
    })(req,res);

}

/**
 * This function is called when a user registers to the system. 
 * This function does all the validation, and inserts the user into the database.
 * @param {*} req HTTP request 
 * @param {*} res HTTP response 
 * @return {Http Response} - If registration is a success a token is returned, otherwise an error message is returned
 */
 module.exports.register = (req, res) => {
    if(!( req.body.name &&  req.body.surname && req.body.email && req.body.password && req.body.passwordConf)) 
    {
        return res.status(400).send({message: "Missing credentials"});
    }
    else if (req.body.password !== req.body.passwordConf) { //pass=passconfirm
        return res.status(400).send({message: "Passwords do not match"});
    }
    else{
            UserModel.findOne({ Email: req.body.email }, function(err, cons) { //check email duplicates
                if (err) return res.status(500).send({message: 'Internal Server Error: ' + err});

                if (cons){
                    return res.status(409).send({message: 'User already exists'});
                }
                else{
                    var user = new UserModel();
                    user.Name = req.body.name;
                    user.Surname = req.body.surname;
                    user.Email = req.body.email.toLowerCase();
                    user.Password = req.body.password;
                    user.Role = [2]; 
                    user.Verified = false; 
                    user.Removed = false; 
                    user.ProfilePicture = "none";
                    user.save((err, doc) => {
                        if(!err)
                            return res.status(201).json({token: user.generateJWT(), message :"Sign up successful"});
                        else 
                        {
                            if (err.code == 11000)
                                res.status(409).send({message: 'User already exists'});
                            else
                                return res.status(500).send({message: 'Internal Server Error: ' + err});
                        }
                    });
    
                }
    
            });
    }
}

/**
 * This function returns the name and surname of the user.
 * @param {*} req HTTP request 
 * @param {*} res HTTP response 
 * @return {Http Response} - Returns name and surname of the user if no error occured in 
 * fecthing the user's details from the database.
 */
 module.exports.getName = (req, res, next) => {
    UserModel.findOne({ _id: req.ID},{Name: 1, Surname: 1, ProfilePicture: 1},(err, result) => {
        if (err) 
            return res.status(500).send({message: 'Internal Server Error: ' + err});
        else if (!result)
            return res.status(404).json({ message: 'User not found' });
        else
            return res.status(200).json({name : result.Name, surname : result.Surname, profilePicture: result.ProfilePicture});
        
    });
}

/**
 * This function returns the roles of a user. 
 * @param {*} req HTTP request 
 * @param {*} res HTTP response 
 * @return {Http Response} - Returns roles pf the user if no error occured, otherwise an error message is returned.
 */
 module.exports.getRoles = (req, res) => {
    UserModel.findOne({ _id: req.ID},{Role: 1},(err, result) => {
        if (err) 
            return res.status(500).send({message: 'Internal Server Error: ' + err});
        else if (!result)
            return res.status(404).json({ message: 'User not found' });
        
        else
        {
            var rolesOfUser = [];
            var i=0, done = false;
            for(i=0; i<result.Role.length; i++)
            {
                
                 RoleHelper.getRole(result.Role[i],(err,val)=>
                 {
                     if(err)
                        return res.status(500).send({message: 'Internal Server Error: ' + err});

                    else if(val == false) 
                        return res.status(404).json({ message: 'Role not found' });
                    else 
                    {
                        rolesOfUser.push(val);
                        if(rolesOfUser.length == result.Role.length)
                        {
                            return res.status(200).json({roles : rolesOfUser});
                        }
                    }
                });
            }  
        }
    });
    
}

/**
 * This function verifies a user. Only a security admin can make this request.
 * @param req Request body - ID of user to authenticate
 * @param res Http Response
 * @return {Http Response} - Success or error message
 */
 module.exports.verify = (req, res, next) => {
    if(!req.body.hasOwnProperty('userID'))
        return res.status(400).send({message: 'No user ID given'});

    UserModel.updateOne({ _id: req.body.userID},{Verified: true},(err, result) => {
        if (err) 
            return res.status(500).send({message: 'Internal Server Error: ' + err});
        else if (result.n ==0)
            return res.status(404).json({ message: 'User not found' }); 
        else
            return res.status(200).json({message: 'User verified'});
               
    });
}

/**
 * This function checks if the user is verified
 * @param {HTTP Request} req Request - ID of user
 * @param {HTTP Response} res 
 */
 module.exports.isVerified = (req, res) => {
    UserModel.findOne({ _id: req.ID},{Authenticate: 1},(err, result) => {
        if (err) 
            return res.status(500).send({message: 'Internal Server Error: ' + err});
        else if (!result)
            return res.status(404).json({ message: 'User not found' });
        else
            return res.status(200).json({ verified: result.Verified});
        
    });
  
}