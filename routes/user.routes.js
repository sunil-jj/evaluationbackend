const{Router}=require("express")

const{UserModel}=require("../model/user.model")
const jwt=require("jsonwebtoken")
require("dotenv").config()
const bcrypt=require("bcrypt")


const usercontroller=Router()

//singup
usercontroller.post("/signup", async(req,res)=>{
    const{email,password}=req.body
    const hashed_password=bcrypt.hash(password,7)
    const user= await UserModel.findOne({email})
    if(user){
        res.send("user exists")
    }
    else{
        const newuser= new UserModel({
            email,
            password:hashed_password,
        })
        await newuser.save()
        console.log("signup done")
        res.send({newuser})
    }
})


usercontroller.post("/login", async(req,res)=>{
    const{email,password}=req.body
    const user= await UserModel.find({email})
    if(!user){
        res.send("please login")
    }
    const hash=user.password
    const correct_password=bcrypt.compare(password,hash)
    if(correct_password){
        const token=jwt.sign({userId: user._id},process.env.JWT_SECRET)
        res.send({"msg":"userloggedin","token":token})
    }
    else{
        res.send("login failed")
    }
})




module.exports={usercontroller}