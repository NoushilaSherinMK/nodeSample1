const Product = require("../Models/productModel");

exports.getAllProducts = (req, res) => {
    res.status(201).json({
        success: true,
        message: "listing products",
    });

}

exports.createProducts = async (req, res) => {

    try {

        console.log("req.body", req.body);

        const { ProductName, ProductPrice, ProductDescription, ProductPhoto } = req.body;

        if (!ProductName || !ProductPrice || !ProductDescription || !ProductPhoto) {

            return res.status(400).json({
                success: false,
                message: "Please fill the fields",
            });
        }

        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            message: "Product added", product
        });
    }



    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,

        });

    }

}