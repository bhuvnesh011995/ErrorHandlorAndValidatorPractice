let products = require("./../modal/Products")
let deleteById = async (req,res,next)=>{
    let id = await products.findByPk(req.params.productId);
    if(!id) return res.status(400).send("id not found")
    next();
}

let getProductById = async (req,res,next)=>{
    let id = await products.findByPk(req.params.productId);
    if(!id) return res.status(404).send("product not found")
    next();
}

let postDetailsCheck = async (req,res,next)=>{
    let {name,company_name,subcatagory,price} = req.body;

    if(!name) return res.status(404).send("name is mandatory")
    

    if(typeof(name)!="string" || typeof(company_name) != "string" || typeof(subcatagory)!="string")
        return res.status(404).send("pass correct input")

    if(typeof(price)!="number") return res.status(404).send("pass Number in Price")


    if(!company_name) company_name = "other";
    if(!subcatagory) subcatagory ="other catagory";

    let product = await products.findOne({
        where:{name:name,
            company_name :company_name,
            subcatagory:subcatagory
        }
    })
    console.log(product)
    if(product) return res.status(404).send("product already exist")

    next();
}

let updateValueCheck = async (req,res,next)=>{
try {
    let id = await products.findByPk(req.params.productId)
    if(!id) {
        let err = new Error("id doesn't exist");
        err.statusCode = 404;
        throw err;
    };
    let {name,company_name,subcatagory,price} = req.body;
    if(!(name|| company_name||subcatagory||price)) { 
        let err = new Error("Pass some value");
        err.statusCode = 404;
        throw err;
    }
    next()}
    catch(err){
        next(err)
    }
}

module.exports =    {
                    deleteById,
                    getProductById,
                    postDetailsCheck,
                    updateValueCheck
                    }