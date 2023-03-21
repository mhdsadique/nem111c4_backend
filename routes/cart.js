

const express=require("express");
const cartRouter=express.Router()
const {CartModel}=require("../model/cart");


cartRouter.post("/cart_add",async(req,res)=>{
    const payload=req.body
    try{
         const users=new CartModel(payload)
        await users.save()
        res.send({"msg":"product addedd successfully"}) 
            
    }catch(e){
        res.send({"msg":"User cnnot addedd","err":e.message}) 
    }
})
cartRouter.get("/cart_get",async(req,res)=>{
    const query=req.query
    try{
        const users=await CartModel.find(query)
        res.send(users)
    }catch(e){
        res.send({"msg":"User already exist, please login","err":e.message}) 
    }
})
cartRouter.delete("/cart_delete/:id",async(req,res)=>{
    const noteId=req.params.id
    try{
         await CartModel.findByIdAndDelete({_id:noteId})
        res.send({"msg":"User cart deleted successfully"}) 
            
    }catch(e){
        res.send({"msg":"User cnnot delete","err":e.message}) 
    }
})

cartRouter.patch("/cart_update/:id",async(req,res)=>{
    const noteId=req.params.id
    const payload=req.body
    try{
         await CartModel.findByIdAndUpdate({_id:noteId},payload)
        res.send({"msg":"User notes updated successfully"}) 
            
    }catch(e){
        res.send({"msg":"User cnnot updated","err":e.message}) 
    }
})

module.exports={cartRouter}
