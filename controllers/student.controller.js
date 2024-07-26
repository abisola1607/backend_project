let studentModel = require("../models/student.models.js")

const displayIndex = (req,res)=>{
    res.render("index");
}

const displaySignUp = (req,res)=>{
    res.render("signup")
}

const getDashboard = (req,res)=>{
  studentModel.find().then((students)=>{
    console.log(students)
    res.render("dashboard", {students})
  })

}

const addStudents = (req,res)=>{
  let form = studentModel(req.body)
  form.save().then(()=>{
    console.log("data saved")
   res.redirect("dashboard")
  })
  
}

const deleteStudent =(req,res)=>{
  console.log(req.body.id)
  studentModel.findByIdAndDelete(req.body.id)
  .then((response)=>{
    console.log("Deleted successfully")
    res.redirect("/student/dashboard")
  })
  .catch((err)=>{
    console.log("There's an Error")
  })

}

const editStudent = (req,res)=>{
  console.log(req.body)
  let {firstName,lastName,email,password} =req.body.id
  studentModel.findByIdAndUpdate(req.body.id,{firstName,lastName,email,password})
  .then(()=>{
    console.log("update successful")
    res.redirect("/student/dashboard")
  
  })
  .catch((err)=>{
    console.log(err)
  })
  
}
module.exports = {displayIndex,displaySignUp,getDashboard,addStudents,deleteStudent,editStudent}