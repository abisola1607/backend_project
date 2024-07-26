const express = require("express")
const router = express.Router();
let {displaySignUp,getDashboard,addadmin, deleteAdmin} = require("../controllers/admin.controller.js")



router.get("/signup",displaySignUp)

router.get("/dashboard",getDashboard)


router.post("/register",addadmin)



router.post("/delete",deleteAdmin)



module.exports = router
