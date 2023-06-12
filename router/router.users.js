let express = require("express");
let userRouter = express.Router();
let Usercontroller = require("./../controller/user.controller");



userRouter.get("/", Usercontroller.getAllUsers);
userRouter.get("/:userId", Usercontroller.getUserById)
userRouter.post("/",Usercontroller.adduser);
userRouter.delete("/:userId", Usercontroller.deleteUser)
userRouter.put("/:userId", Usercontroller.updateUser)


module.exports = userRouter