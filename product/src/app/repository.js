const Product = require("./model");
const Category = require("./category-model");

//Basically we write two methods that will get all cart items in our database and add an item to the cart model
const Cart  = require("./cart-model");

exports.products = async () => {
    const products = await Product.find();
    return products;
};
exports.productById = async id => {
    const product = await Product.findById(id);
    return product;
}
exports.createProduct = async payload => {
    const newProduct = await Product.create(payload);
    return newProduct;
}
exports.removeProduct = async id => {
    const product = await Product.findByIdAndRemove(id);
    return product;
}

/*exports.updateProduct = async (id, payload) => {
    const product = await Product.findByIdAndUpdate(id, {$set:req.body}, function(err, result){
        if(err){
            console.log(err);
        }
        console.log("RESULT: " + result);
    });
    return {product, id}
}*/


exports.category = async () => {
    const category = await Category.find();
    return category;
};
exports.categoryById = async id => {
    const category = await Category.findById(id);
    return category;
}
exports.createCategory = async payload => {
    const newCategory = await Category.create(payload);
    return newCategory
}
exports.removeCategory = async id => {
    const category = await Category.findByIdAndRemove(id);
    return category
}

exports.update = async id => {
    const category = await Category.findByIdAndUpdate(id);
    return category
}


//populate function let you reference document in other collection
exports.cart = async () => {
    const carts = await Cart.find().populate({
        path: "items.productId",
        select: "name price total"
    });;
    return carts[0];
};
exports.addItem = async payload => {
    const newItem = await Cart.create(payload);
    return newItem
}