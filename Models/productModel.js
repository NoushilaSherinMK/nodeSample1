const mongoose =require("mongoose");
const productSchema = new mongoose.Schema({
    ProductName:{
        type:String,
        minlength:[2,"product name should include min 2 characters"],
        required:[true,"please enter product"]
    },
    ProductPrice:{
        type:Number,
        required:[true,"Please enter productprice"]
    },
     ProductDescription:{
        type:String,
        required:[true,"Please enter productdescription"]
    },
     ProductPhoto:{
        type:String,
        required:[true,"Please enter productPhoto"]
    },

})

const Product = mongoose.model("Product",productSchema)
module.exports = Product;