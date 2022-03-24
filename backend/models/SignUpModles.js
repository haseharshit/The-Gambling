const mongoose= require("mongoose")

const signupTemplate= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        unique: true,
        required: true,
        dropDups: true,
    },
    email:{
        type: String,
        unique: true,
        required:true,
        lowercase:true,
        dropDups: true,
    },
    password:{
        type:String,
        required: true
    },
    coins:{
        type: Number,
        default: 200
    },
    date:{
        type: Date,
        default:Date.now
    }
})
module.exports= mongoose.model("userData", signupTemplate)