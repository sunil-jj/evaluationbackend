const express=require("express")
require("dotenv").config()

const app=express()


app.get("/",(req,res)=>{
    res.send("base end point")
})

app.listen(process.env.PORT,()=>{
    console.log(`server at ${process.env.PORT}`)
})