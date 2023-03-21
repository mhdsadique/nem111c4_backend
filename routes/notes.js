
const express=require("express")
const noteRouter=express.Router()

const {NoteModel}=require("../model/notemodel");
// let myquery = {};
noteRouter.get("/",async(req,res)=>{
    const { q, _gte, _lte, _limit, _page, _sort, _order } =req.query;
    const query=req.query
    // const data=["page","sort","limit","fields"]
    // data.forEach(e=>delete query[e])
    // let querystr=JSON.stringify(query)
    // querystr=querystr.replace(/\b(gte|gt|lte|lt)\b/g,match=>`$${match}`)
    try{
        const users=await NoteModel.find(query)
        .sort({ [_sort]: _order })
        .limit(_limit )
        .skip((_page - 1) * _limit);
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
// ------------------cart--------------

module.exports={noteRouter}
