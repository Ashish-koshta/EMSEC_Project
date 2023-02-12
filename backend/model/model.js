const mongoose= require("mongoose");
const registerSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    is_completed:
    {
        type:String,
        required:true
    },
    end_date:{
        type:Date,
        required:true
    }
}) 
const Register = new mongoose.model("Register",registerSchema)
module.exports=Register;