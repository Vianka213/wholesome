const mongoose = require("mongoose");
const RoleModel = mongoose.model("Role");

 /**
  * Get role name from ID
  * @param {Number} id ID of role.
  * @param {*} done 
  * @return {String} - Role of given ID.
  */
module.exports.getRole = (id, done)=>{
    RoleModel.findOne({ID: id},(err, result) => {
        if(err) 
            done(err);
        else if (!result)
            done(null,false);
        else if(result)
           done(null, result.Role);
        
    });
}

module.exports.getRoles = (user, done)=>{
    var roles = [];
    var roleLen =  user.Role.length;
    var inlen = roleLen;
    for(i=0; i<roleLen;i++)
    {
        RoleModel.findOne({ID: user.Role[i]},(err, result) => {
            if(err) 
                done(err);
            else if (result)
                roles.push(result.Role);
            else if (!result)
                inlen = inlen-1;

            if(roles.length== inlen)
               done(null, roles, user);
            
        });
    }
    
}

/**
  * Get ID of role.
  * @param {String} name Name of role.
  * @param {*} done 
  * @return {Int} - Role ID of given role.
  */
 module.exports.getRoleID = (name, done)=>{
    RoleModel.findOne({Role: name},(err, result) => {
        if(err) 
            done(err);
        else if (!result)
            done(null,false);
        else if(result)
           done(null, result.ID);
        
    });
}