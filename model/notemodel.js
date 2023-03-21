

const mongoose=require("mongoose")
const noteSchema=mongoose.Schema({
    // title  : {type:String,require:true},
    // body : {type:String,require:true},
    // device : {type:String,require:true},
    // no_if_comments : {type:Number,require:true},
    image:{type:String},
    title:{type:String},
    discription:{type:String},
    price:{type:Number},
    itemfind:{type:String},
    findname:{type:String},
    menu:{type:String},
    user:{type:String}
},{
    versionKey:false
})
const NoteModel=mongoose.model("frotend",noteSchema)
module.exports={NoteModel}