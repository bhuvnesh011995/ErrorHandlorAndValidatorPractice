let sequelize = require("sequelize");
let datatype = sequelize.DataTypes;

let dbconnection = require("./../config/db.config")

let Users = dbconnection.define("users",{
    id:{
        primaryKey:true,
        type: datatype.BIGINT,
        autoIncrement: true,
        allowNull: true,
    },
    name : {
        type: datatype.STRING,
        allowNull:true
    },
    password :{
        type: datatype.STRING,
        allowNull: true
    },
    createdAt : {
        type: datatype.DATE,
        defaultValue: sequelize.NOW
    }
},
{
    freezeTableName: true,
    timestamps:false
})

// Users.sync({force:true,alter:true});

module.exports = Users;