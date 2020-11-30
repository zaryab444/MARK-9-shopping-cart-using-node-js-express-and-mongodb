const productRoutes = require("./app/route")
const categoryroutes = require("./app/category-Route")
const cartRoutes = require('./app/cart-route')
const orderRoutes = require('./app/order-route')


module.exports = app => {
   app.use("/category", categoryroutes);
   app.use("/product", productRoutes);
   app.use("/cart", cartRoutes);
   app.use("/orders", orderRoutes)
};


/*module.exports = app => {
    app.use("/product", productRoutes);
 };*/