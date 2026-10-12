const express = require("express");
const { getAllProducts ,createProducts} = require("../Controllers/ProductController");
const router = express.Router();


router.route("/all").get(getAllProducts);
router.route("/create").post(createProducts);
module.exports = router;
 
