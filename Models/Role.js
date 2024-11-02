const mongoose = require("mongoose");



const Roles_Model = mongoose.Schema(

    {

        Role_Name : {  type:String   , required : [true,"Role name must me enter"] },
        Status: { type:String , required:[true,"please enter the status"] }
        
    }

)

const userRoles=mongoose.model("userRoles",Roles_Model);
module.exports = {userRoles}