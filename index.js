const express=require("express")
require("dotenv").config()
const {connection}=require("./config/db")
const{usercontroller}=require("./routes/user.routes")
const {authenticate}=require("./middlewear/authentication")

const app=express()
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("base end point")
})

app.use("/user", usercontroller)

/* app.use(authenticate) */
/* app.use("/todo",todocontroller) */


app.listen(process.env.PORT, async()=>{
    try{
        await connection
        console.log("connected")
        console.log(`server at ${process.env.PORT}`)
    }
    catch(err){
        console.log("not connected")
    }
})