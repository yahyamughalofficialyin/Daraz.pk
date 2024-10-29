const mongoose = require("mongoose");


const userAccount_Model = mongoose.Schema(


    {
        userName : {type:String},
        userEmail:{type:String},
        userPassword:{type:String},
        userImage:{type:String},
        userStatus:{type:String}
        
    }


)



module.exports = mongoose.model("userAccounts",userAccount_Model)