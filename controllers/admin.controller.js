let adminModel = require("../models/admin.models")

const displaySignUp = (req,res)=>{
    res.render("signUp")
}

const getDashboard = (req,res)=>{
      adminModel.find().then((admin)=>{
      res.render("adminboard", {admin})

    })
}

const addadmin = (req,res)=>{
  let form = adminModel(req.body)
  form.save().then(()=>{
    console.log("data saved")
   res.redirect("adminboard")
  })
  
}

const deleteAdmin =(req,res)=>{
  console.log(req.body.id)
  studentModel.findByIdAndDelete(req.body.id)
  .then((response)=>{
    console.log("Deleted successfully")
    res.redirect("adminboard")
  })
  .catch((err)=>{
    console.log("There's an Error")
  })

}

module.exports = {displaySignUp,getDashboard,addadmin,deleteAdmin}

