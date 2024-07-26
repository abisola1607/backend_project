const express = require("express")
const router = express.Router();
let {displayIndex, displaySignUp,getDashboard,addStudents, deleteStudent, editStudent} = require("../controllers/student.controller.js")



router.get("/signup",displaySignUp)

router.get("/dashboard",getDashboard)

router.get("/good",displayIndex);

router.post("/register",addStudents)



router.post("/delete",deleteStudent)

router.post("/edit",editStudent)


module.exports = router
