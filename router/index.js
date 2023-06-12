let express = require("express");
let router = express.Router();
let userRouter = require('./router.users')
let productRouter = require("./product.router")

router.get("/",async (req,res,next)=>{
    res.send(`you are at base route`);
    res.end();
})


router.get("/favicon.ico",(req,res,next)=>res.status(204).end())

router.use("/users", userRouter);
router.use("/products", productRouter);


module.exports = router;