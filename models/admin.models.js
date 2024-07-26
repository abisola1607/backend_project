const mongoose = require("mongoose");

// admin Schema

let adminSchema = mongoose.Schema({
    firstName : {type: String, required:true},
    lastName : {type:String,required:true},
    password : {type:String,reuired:true},
})

// admin Model
let adminModel = mongoose.model("admin", adminSchema)

module.exports = adminModel