const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:String,
    email:{type:String,
        unique:true
    },
    password:{type:String,
        minlength:8,
        maxlength:15
        

    }
})

const userModel=mongoose.model('User',userSchema)

module.exports=userModel;