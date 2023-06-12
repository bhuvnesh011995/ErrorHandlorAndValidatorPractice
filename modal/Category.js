let dbConnection = require("./../config/db.config");
let sequelize = require("sequelize");
let datatype = sequelize.DataTypes;

let Categories = dbConnection.define("categories",{
    id:{
        primaryKey: true,
        notNull: true,
        autoIncrement: true,
        type: datatype.BIGINT
    },
    category_name:{
        type : datatype.STRING,
        allowNull: false
    }
},{
    freezeTableName:true,
    timestamps:false
})