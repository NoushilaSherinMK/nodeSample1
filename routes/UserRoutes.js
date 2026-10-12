const express = require("express");
const { getAllUsers,createUsers } = require("../Controllers/UserController");
const router = express.Router();


function sampleUserRouterMiddleware(req,res,next){
    console.log("inside router middleware");
    next();
}

router.route("/users").get(getAllUsers)
router.route("/create").post( sampleUserRouterMiddleware,createUsers);

router.get("/error", (req, res, next) => {

    const error = new Error("Something went wrong error handling");

    next(error);

});

module.exports = router;
 