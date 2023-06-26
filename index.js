const express=require("express")
require("dotenv").config()
const {connection}=require("./config/db")

const app=express()


app.get("/",(req,res)=>{
    res.send("base end point")
})

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