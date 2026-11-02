const userModel=require("../models/user.model.js");
const jwt=require("jsonwebtoken")
async function registerUser(req,res){
    const{username,email,password}=req.body;
    const isUserAlreadyExists=await userModel.findOne({
        email
    })
    if(isUserAlreadyExists){
        return res.status(409).json({
            message:"user already exits"
        })

    }
    
    if (password.length < 8) {
    return res.status(400).json({
        message: "Password must be at least 8 characters long."
    });
     }
    else if (password.length > 20) {
    return res.status(400).json({
        message: "Password cannot be more than 20 characters long."
    });
    } else {
    // Password length is valid
    console.log("Valid password length");
    }


    const user=await userModel.create({
        username,email,password
    })
    const token=jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)
    res.cookie("token",token)
    res.status(201).json({
        message:"user successfully created ",
        user
        
    }) 
}

module.exports={registerUser};