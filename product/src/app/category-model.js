const mongoose = require("mongoose");


const categorySchema = mongoose.Schema({
  Categoryname: {
    type: String,
    required: 'Category Name is required',
    max: 100
},
},

{timestamps: true}


);

const Cateogry = mongoose.model("Category", categorySchema );
module.exports  = Cateogry;



