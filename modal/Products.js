let dbConnection = require("./../config/db.config")
let sequelize = require("sequelize")
let datatype = sequelize.DataTypes;

let Product = dbConnection.define("products",{
    name :{
        type: datatype.STRING,
        allowNull: false
    },
   company_name: {
        type: datatype.STRING,
        allowNull:false,
        defaultValue : "other"
    },
    subcatagory:{
        type : datatype.STRING,
        defaultValue : "other catagory"
    },
    price:{
            type: datatype.FLOAT
    }

},{
    freezeTableName: true,
    timestamps:false
})

// Product.sync({alter:true})


module.exports = Product;