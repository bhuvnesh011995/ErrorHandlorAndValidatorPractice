let productsController = require("./../controller/product.controller");
let express = require("express");
let router = express.Router();
let productValidator = require("./../middleware/valitator.product")

router.get("/",[],productsController.getAllProduct);
router.delete("/:productId",[productValidator.deleteById],productsController.deleteProduct);
router.get("/:productId",[productValidator.getProductById],productsController.getProductById);
router.post("/",[productValidator.postDetailsCheck],productsController.addProduct);
router.put("/:productId",[productValidator.updateValueCheck],productsController.updateProduct)
router.post("/add",[],productsController.bulkAddProduct);
module.exports = router;