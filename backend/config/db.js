const mongoose = require("mongoose")
require("dotenv").config();
const baseUri = process.env.BASE_URI;
exports.dbconnect = ()=>{
    // hariompandit
    mongoose.connect(baseUri)
    .then( ()=>{
        console.log("Database connection successfull")
    })
    .catch( (error)=>{
        console.log("Databse not connect ")
        console.log(error)
        process.exit(1)
    })
}
