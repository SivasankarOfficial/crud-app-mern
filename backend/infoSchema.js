const mongoose=require('mongoose')

const infoSchema=mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true
    },
    Age:{
        type:Number,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    CreatedTime:{
        type:Date,
        default:Date.now()
    }

})

module.exports=mongoose.model("infoschema",infoSchema)