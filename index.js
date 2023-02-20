
require('dotenv').config()
const express=require("express")
const { connection } = require('./confic/db')
const {userRouter}=require("./routes/routes")
const {noteRouter}=require("./routes/notes")
const { authentication } = require('./middleware/authenticat')
var cors = require('cors')
const app=express()
app.use(express.json())
app.use(cors())

app.use("/users",userRouter)
app.use(authentication)
app.use("/posts",noteRouter)
app.listen(process.env.port,async()=>{
    try{
        await connection
    console.log(`server connected to DB`)

    }catch(e){
        console.log(e.message)
    }
    console.log(`port running ${process.env.port}`)
})
