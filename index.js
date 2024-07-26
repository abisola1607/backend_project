const express = require("express");
const mongoose = require("mongoose");
const ejs = require("express");
const app = express();
const studentRouter = require("./routes/student.route")
const adminRouter = require("./routes/admin.route")
require("dotenv").config()
const PORT = 3000;
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
app.use("/student",studentRouter)
app.use("/admin",adminRouter)



let URI = process.env.MONGO_DB_URI



mongoose.connect(URI).then(()=>{
    console.log(" connected successfully")
})


let allStudents = []



app.listen(PORT,(err)=>{
  if (err){
    console.log("Not successful")
    }
  else{
    console.log("successful")
  }
})
