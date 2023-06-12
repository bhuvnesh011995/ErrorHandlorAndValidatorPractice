let sequelize = require("sequelize");


let dbconnection = new sequelize(
    "brijeshdb",
    "root",
    "2006",
    {
        host: "localhost",
        dialect: "mysql",
        operatorAliases: false,
        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle: 10000
        }
    }

);

try
{
    dbconnection.authenticate();
    console.log(`db connection successfull`)
} catch(err){
    console.log(`there is error ${err}`)
}

module.exports= dbconnection;


