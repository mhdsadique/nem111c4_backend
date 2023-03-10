
const express=require("express")
const noteRouter=express.Router()

const {NoteModel}=require("../model/notemodel");

noteRouter.get("/",async(req,res)=>{
    const query=req.query
    try{
        const users=await NoteModel.find(query)
        res.send(users)
    }catch(e){
        res.send({"msg":"User already exist, please login","err":e.message}) 
    }
})
noteRouter.post("/create",async(req,res)=>{
    const payload=req.body
    try{
         const users=new NoteModel(payload)
        await users.save()
        res.send({"msg":"User notes addedd successfully"}) 
            
    }catch(e){
        res.send({"msg":"User cnnot addedd","err":e.message}) 
    }
})

noteRouter.delete("/delete/:id",async(req,res)=>{
    const noteId=req.params.id
    try{
         await NoteModel.findByIdAndDelete({_id:noteId})
        res.send({"msg":"User notes deleted successfully"}) 
            
    }catch(e){
        res.send({"msg":"User cnnot delete","err":e.message}) 
    }
})


noteRouter.patch("/update/:id",async(req,res)=>{
    const noteId=req.params.id
    const payload=req.body
    try{
         await NoteModel.findByIdAndUpdate({_id:noteId},payload)
        res.send({"msg":"User notes updated successfully"}) 
            
    }catch(e){
        res.send({"msg":"User cnnot updated","err":e.message}) 
    }
})


module.exports={noteRouter}
