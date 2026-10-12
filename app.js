const express = require("express");
const app = express();

// app.use(express.urlencoded({extended:true}));
app.use(express.urlencoded({ extended: true }))

function sampleMiddleware(req, res, next) {
    console.log("inside sample middle ware");
    // res.json({
    //     success: false,
    //     message: "Response from middleware"
    // })
    next();
}
app.use(sampleMiddleware);


const productRoutes = require("./routes/ProductRoutes");
const userRoutes = require("./routes/UserRoutes");

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/users", userRoutes);


app.use((err, req, res, next) => {

    console.log(" insideError handling middleware");

    res.status(500).json({
        success: false,
        message: err.message
    });

});


module.exports = app;





// app.get("/products", (req,res) => {
//     res.send("Listening products");
// });

// app.get("/users", (req,res) => {
//     res.send("Listening users");
// });
// app.post("/register", (req,res) => {
//     res.send("Listening users");
// })




