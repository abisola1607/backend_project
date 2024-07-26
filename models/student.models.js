const mongoose = require("mongoose");

//student schema
let studentSchema = mongoose.Schema({
  firstName : {type:String,required:true},
  lastName : {type:String,required:true},
  email : {type:String,required:true},
  password : {type:String,required:true},
  registrationDate : {type:String,default:Date.now()}
})

//studentModel
let studentModel = mongoose.model("student", studentSchema)

module.exports = studentModel