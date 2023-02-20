

const mongoose=require("mongoose")
const noteSchema=mongoose.Schema({
    title  : {type:String,require:true},
    body : {type:String,require:true},
    device : {type:String,require:true},
    no_if_comments : {type:Number,require:true},
},{
    versionKey:false
})
const NoteModel=mongoose.model("frotend",noteSchema)
module.exports={NoteModel}