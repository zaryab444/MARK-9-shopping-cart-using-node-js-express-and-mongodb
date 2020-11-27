const express = require('express');
const categoryController = require("./category-controller");


const router = express.Router();




router.post("/", categoryController.createCategory);
router.get("/", categoryController.getCategory);
router.get("/:id", categoryController.getCategoryById);
router.delete("/:id", categoryController.removeCategory);

router.put("/:id", categoryController.update);


module.exports = router;