const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userName:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    caption : String,
    
    image:{
        public_id:String,
        url: String,
    },
    createdAt:{
        type:Date,
        default: Date.now(),
    },
    likes:{
        type:Number,
        required:true,
    },
    dislikes:{
        type: Number,
        required:true,
    },
    comments:[
        {
            user: mongoose.Schema.Types.ObjectId,
            type:String,
            required:true,
        },
    ]
})

module.exports = mongoose.model("POST",postSchema);