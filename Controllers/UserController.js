
const User = require("../Models/userModel");
exports.getAllUsers =(req,res)=>{
    res.send("listiing all users.....");
}

// exports.registerUsers = (req, res) => {
//     console.log(req.body);   //to get response in vscode

//     res.send("User Registered.....");
// };

exports.createUsers = async (req, res) => {

    try {

        console.log("req.body", req.body);

        const { UserName, emailid , password } = req.body;

        if (!UserName || !emailid || !password) {

            return res.status(400).json({
                success: false,
                message: "Please fill the fields",
            });
        }

        const user = await User.create(req.body);

        const newUser = user.toObject();

        delete newUser.password;
        
        res.status(201).json({
            success: true,
            message: "users added", user
        });
    }



    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,

        });

    }

}

