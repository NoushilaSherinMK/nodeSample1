const mongoose =require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema({
    UserName:{
        type:String,
        minlength:[2,"user name should include min 2 characters"],
        required:[true,"please enter username"]
    },
    emailid:{
        type:String,
        required:[true,"Please enter emailid"]
    },
     password:{
        type:String,
        required:[true,"Please enter password"]
    },
    status:{
        type:Boolean,
        default:true,
    },
    role:{
        type:String,
        anum:["asdmin" , "seller" , "user"],
        default:"user"

    }
    
});

UserSchema.pre("save",async function(){
    if(!this.isModified("password"))return;
    this.password = await bcrypt.hash(this.password,10);
});

const User = mongoose.model("User",UserSchema)
module.exports = User;