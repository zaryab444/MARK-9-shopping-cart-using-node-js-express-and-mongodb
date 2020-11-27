const productRoutes = require("./app/route")
const categoryroutes = require("./app/category-Route")
const cartRoutes = require('./app/cart-route')



module.exports = app => {
   app.use("/category", categoryroutes);
   app.use("/product", productRoutes);
   app.use("/cart", cartRoutes);
};


/*module.exports = app => {
    app.use("/product", productRoutes);
 };*/