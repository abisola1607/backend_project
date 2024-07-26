const express = require("express");
const mongoose = require("mongoose");
const ejs = require("express");
const app = express();
const adminRouter = require("./routes/admin.route")
const PORT = 3000;
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
app.use("/admin",adminRouter)

let URI = "mongodb+srv://divineblessing1807:Oluwafikayomibaby123.@cluster0.eerjudz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"




mongoose.connect(URI).then(()=>{
    console.log( "Succesfull")
})


let alladmin = []



app.listen(PORT,(err)=>{
  if (err){
    console.log("Not successful")
    }
  else{
    console.log("successful")
  }
})
