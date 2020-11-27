const express = require('express');
const productController = require("./controller");

const multerInstance = require('../config/multer');
const Product = require('./model');

const router = express.Router();


router.post("/", multerInstance.upload.single('image'), productController.createProduct);
router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.delete("/:id", productController.removeProduct);
// Update a product with noteId

//router.put("/:id", productController.updateProduct);


router.put("/:id", productController.update);







module.exports = router;



