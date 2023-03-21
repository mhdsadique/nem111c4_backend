



const mongoose=require("mongoose")
const cartSchema=mongoose.Schema({
    image:{type:String},
    title:{type:String},
    discription:{type:String},
    price:{type:Number},
    itemfind:{type:String},
    findname:{type:String},
    menu:{type:[String]},
    user:{type:String}
},{
    versionKey:false
})
const CartModel=mongoose.model("cart",cartSchema)
module.exports={CartModel}