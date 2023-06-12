let express = require("express");
let serverConfig = require("./config/server.config");
let app  = express();
let router = require("./router/index");
let bodyParser = require("body-parser")
let ErrorHandler = require("./middleware/ErrorHandler")


app.use(bodyParser.json())
app.use(router);
app.use(ErrorHandler);



app.listen(serverConfig.PORT, ()=>{
    console.log(`server started at port ${serverConfig.PORT}`)
})