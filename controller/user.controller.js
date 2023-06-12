let Users = require('./../modal/User')
let dbconnection = require("./../config/db.config")



async function insertusers(){
    await Users.bulkCreate([
        {
            name:"brijesh",
            password: "abc@123"
        },
        {
            name: "bhvnesh",
            password: "abcd@1234"
        }
    ])
}

async function getAllUsers(req,res,next){
    let users = await Users.findAll();
    res.write(JSON.stringify(users));
    res.end();
}

async function getUserById(req,res,next){
    let ID = req.params.userId
    if(!ID) res.status(400).send("ID not passed")
    let user = await Users.findAll({
        where:{
            id : ID
        }
    })
    res.send(JSON.stringify(user))
    res.end();
}

let adduser = async function(req,res,next){
    let user = req.body;
   await Users.create({
    name:user.name,
    password: user.password
   })
    res.end();
}

let deleteUser = async function(req,res,next){
    let id = req.params.userId;
    await Users.destroy({
        where:{
            id : id
        }
    })
    res.end();
}

let updateUser = async function(req,res,next){
 let id = req.params.userId;
 let user = req.body;
 Users.update({
    "name" : user.name
 },
 {
    where:{
        id: id
    }
 })
 res.end();
}


// insertusers();

module.exports = {getAllUsers,getUserById,adduser,deleteUser,updateUser}
