const express = require("express");

const app = express();


// -- ENV

require("dotenv").config();


// MIDDLEWARES

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// - DB
const {connectionDB} = require("./Config/Database")


// MODELS - IMPORTED
const {  createRoles , getRoles , deleteRole ,updateRole} = require("./Controllers/RolesController")


// -- USER ROLE API [ GET , POST  ]
app.route("/").get(getRoles).post(createRoles)

// -- USER ROLE API [ DELETE , UPDATE  ]
app.route("/role/:id").delete(deleteRole).put(updateRole)







// -- SERVER LISTEN
app.listen(process.env.PORT,function(){
    console.log(`The Server is running on the port ${process.env.PORT}`)
    connectionDB()
})

