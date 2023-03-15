

const mongoose=require("mongoose")
const noteSchema=mongoose.Schema({
    // title  : {type:String,require:true},
    // body : {type:String,require:true},
    // device : {type:String,require:true},
    // no_if_comments : {type:Number,require:true},
    image:{type:String,require:true},
    title:{type:String,require:true},
    discription:{type:String,require:true},
    price:{type:Number,require:true},
    itemfind:{type:String,require:true},
    findname:{type:String,require:true},
    user:{type:String,require:true}
},{
    versionKey:false
})
const NoteModel=mongoose.model("frotend",noteSchema)
module.exports={NoteModel}