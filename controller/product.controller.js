let products = require("./../modal/Products");



let insertProduct =async function(){
   await products.bulkCreate([
        {
            name: "glass",
            subcatagory:"big Glass",
            price: 50,
            company_name: "mahalaxmi"
        },
        {
            name:"plate",
            price: 66,
            company_name:"mahalaxmi"
        },
        {
            name:"cooker",
            subcatagory:"1/2 lt",
            price:450,
            company_name : "mahalaxmi"
        },
        {
            name:"cooker",
            subcatagory:"2 lt",
            price: 700,
            company_name:"prestise"
        }
    ])
    
}

// insertProduct();


let deleteProduct = async function (req,res,next){
    let id = req.params.productId

    await products.destroy({
        where:{
            id: id
        }
    })
    res.send("product deleted")
    res.end()
}


let getProductById = async function(req,res,next){
    let id = req.params.productId;
   let product=  await products.findOne({where:{
        id:id
    }})
    res.send(product);
    res.end();
}


let addProduct = async (req,res,next)=>{
    let {name,company_name,subcatagory,price} = req.body

    name = name.toString().trim();
    if(company_name) company_name = company_name.toString().trim();
    if(subcatagory) subcatagory = subcatagory.toString().trim();
    if(price) price = Math.round(price*100)/100;

    
    await products.create({
        name:   name,
        price: price,
        company_name : company_name,
        subcatagory : subcatagory
    })

    res.send("product added");
    res.end();
}

let getAllProduct = async function(req,res,next){
    let productlist = await products.findAll();
    res.send(JSON.stringify(productlist)).status(200)
    res.end();
}


let updateProduct = async (req,res,next)=>{
    await products.update({
        name:req.body.name,
        company_name:req.body.company_name,
        subcatagory: req.body.subcatagory,
        price: req.body.price
    },
    {
        where:{
            id:req.params.productId
        }
    })
    res.send("product updated")
    res.end();
}


let bulkAddProduct = async (req,res,next)=>{
    let product = req.body
    await products.bulkCreate(product);
    res.send('products added')
    res.end();
}




module.exports = {  bulkAddProduct,
                    getAllProduct,
                    deleteProduct,
                    getProductById,
                    addProduct,
                    updateProduct
                }