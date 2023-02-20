
var jwt = require('jsonwebtoken');

const authentication=(req,res,next)=>{
const token=req.headers.authorization

if(token){
    jwt.verify(token, 'masai', (err, decoded) =>{
        if(decoded){
            req.body.user=decoded.userId
            next()
        }else{
            res.send({"msg":"Please Login First","err":err.message})
        }
      });
}else{
    res.send({"msg":"Please Login First didnt get you"})
}
}

module.exports={authentication}