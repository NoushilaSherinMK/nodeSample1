// import express from"express";

// const app =express();  // create express application


// // start the server on port 4000
// app.listen(4000,function() {
//     console.log("Server is running on port 4000");
// });



// import express from "express";

// const app = express();

// // GET request to the home route
// app.get("/", function (req, res) {
//     res.send("Hello World");
// });


// app.listen(4000, function () {
//     console.log("Server is running on port 4000");
// });


// common js

// const express = require("express");
// const PORT = 4000;
// const app = express();
//  app.listen(PORT ,() => {
//     console.log(`Server is running at port ${PORT} `);
//  });



// const productRoutes = require("./routes/ProductRoutes.js");
// const userRoutes = require("./routes/UserRoutes.js");

require("dotenv").config();
const app = require("./app");
const databaseConection = require("./config/databaseConnection");
databaseConection();







// const PORT = 4000;

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port  ${process.env.PORT}`);
});