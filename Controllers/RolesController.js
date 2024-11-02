// -- Model 

const { userRoles } = require("../Models/Role")
const { userAccounts } = require("../Models/UserAccount")



//Method -------  POST
//Api   --------  http://localhost:5000/role
//Description --  USER ROLES INSERTION FUNCTIONALITY



async function createRoles(req, res) {
    const { Role_Name, Status } = req.body;

    // -- USER ROLE ALREADY EXISTS OR NOT
    const roleExist = await userRoles.find({ "Role_Name": Role_Name.toLowerCase() });


    // -- TEST CHECKER OF USER INPUTS
    const roleName_checker = /^[A-Za-z]+$/;


    if (roleName_checker.test(Role_Name)) {

        if (roleExist.length > 0) return res.send({ "error": "Already Added in the DataBase" })

        const newRole = await userRoles.create(
            {
                Role_Name: Role_Name.toLowerCase(),
                Status: Status
            }
        )


        return res.status(201).send({ "data": req.body })
    } else {
        return res.send({ "error": "Special character , extra spaces or numbers are not allowed" })
    }
}


//Method -------  GET
//Api   --------  http://localhost:5000/role
//Description --  ALL USER ROLE WILL BE GET THROUH THIS FUNCIONALITY 



async function getRoles(req, res) {
    const AllRoles = await userRoles.find();

    return res.status(200).send({ "data": AllRoles })
}







//Method -------  DELETE
//Api   --------  http://localhost:5000/role/:id
//Description --  SINGLE USER ROLE WILL DELETE


async function deleteRole(req, res) {

    try {
        // FINDING ROLE EXIST OR NOT
        const findRole = await userRoles.find({ "Role_Name": req.params.id.toLowerCase() });

        // IF ROLE NOT EXIST THEIR LENGTH WILL NOT BE GREATER THAN 0
        if (findRole.length <= 0) return res.send({ "error": "not defined in database" });

        // PERFORMING DELETE FUNCTIONALITY
        const deleteRole = await userRoles.deleteOne({ Role_Name: req.params.id })

        return res.status(200).send("Delete Role");


    } catch (error) {
        console.log(error)
    }
}



//Method -------  UPDATE
//Api   --------  http://localhost:5000/role/:id
//Description --  SINGLE USER ROLE WILL UPDATE


async function updateRole(req, res) {

    // ROLE RECORD ID TO UPDATE
    const updateRoleID = req.params.id;

    // ROLE RECORD OLD DATA 
    const role_old_data = await userRoles.findOne({ Role_Name: updateRoleID.toLowerCase() })

    console.log(role_old_data.Role_Name)

    // ROLE RECORD NEW DATA
    const { Role_Name, Status } = req.body;


    // ROLE NEW OBJECT TO UPDATE 



    const UpdateAction = await userRoles.updateOne(

        {
            "Role_Name": role_old_data.Role_Name
        },

        {
            $set: {

                Status
            }
        }


    )






    return res.send({ "message": "user updated successfully" })
}




module.exports = { createRoles, getRoles, deleteRole, updateRole }