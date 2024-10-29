
const express = require("express");  
// Commit: "Import express"




const app = express();  
// Commit: "Initialize app"




require("dotenv").config();  
// Commit: "Load .env variables"




const {connectionDB} = require("./Config/Database");  
// Commit: "Import DB connection"

const userAccounts = require("./Models/UserAccount")



app.listen(process.env.PORT, function() {
    console.log("Server is running on port " + process.env.PORT);
    connectionDB();
});  
// Commit: "Start server & connect DB"
