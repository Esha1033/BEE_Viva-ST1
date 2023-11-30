const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
     title:{type:String ,required : true ,max:255},
     content:{type:String,required:true,max:5000},
     author:{type:String,required:true},
     tags:{type:String},
     comments:{type:Object}
});

const commentSchema = new mongoose.Schema({
    content:{type:String ,required : true ,max:1000},
    author:{type:String,required:true},
    createdAt:{type:Date}
});

module.exports=mongoose.model("Post",postSchema);
module.exports=mongoose.model("Comment",commentSchema);