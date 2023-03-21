
const express=require("express")
const userRouter=express.Router()
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const {UserModel}=require("../model/model");

userRouter.get("/",async(req,res)=>{
    const query=req.query
    try{
        const users=await UserModel.find(query)
        .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
        res.send(users)
    }catch(e){
        res.send({"msg":"User already exist, please login","err":e.message}) 
    }
})
userRouter.post("/register",async(req,res)=>{
    const {firstName,email,lastName ,password,}=req.body
    try{
        bcrypt.hash(password, 5, async(err, hash)=> {
            // Store hash in your password DB.
            if(err)res.send({"msg":"User already exist, please login","err":err.message}) 
            else{
                const users=new UserModel({firstName,email ,password:hash, lastName})
                await users.save()
        res.send({"msg":"User registration successfully"}) 
            }
        });
    }catch(e){
        res.send({"msg":"User cnnot register","err":e.message}) 
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email ,password}=req.body
    try{
        const user=await UserModel.find({email})
            if(user.length>0){
                bcrypt.compare(password, user[0].password, async(err, result)=> {
                  if(result){
                    var token=jwt.sign({userId:user[0]._id},"masai")
                    res.send({"msg":"User Login successfully","token":token}) 
                  }else{
        res.send({"msg":"User cannot get user","err":err.message}) 

                  }
                });
            }else{
        res.send({"msg":"wrong credential","err":err.message}) 

            }
    
    }catch(e){
        res.send({"msg":"User cnnot get user","err":e.message}) 
    }
})
module.exports={userRouter}
