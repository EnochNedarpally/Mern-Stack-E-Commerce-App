const router=require("express").Router();
const User=require("../models/User")
const CryptoJS=require("crypto-js")
const jwt=require("jsonwebtoken");
const { json } = require("express");
//Create Account
router.post("/register",async(req,res)=>{
    
    try {
        const newUser= new User({
            username:req.body.username,
            email:req.body.email,
            password:CryptoJS.AES.encrypt(req.body.password, process.env.PASS_KEY).toString(),
        })
        const savedUser= await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
   
})
//Login Route
router.post("/login",async(req,res)=>{
    try {
        const user= await User.findOne({username:req.body.username})
        if(!user){
            return res.status(401).json("User not found");
        }
        else
        { 
        const hashedPassword=CryptoJS.AES.decrypt(user.password, process.env.PASS_KEY)
        const originalPassword=hashedPassword.toString(CryptoJS.enc.Utf8);
            if(originalPassword!==req.body.password){
                return res.status(401).json("Invalid Credentials");
            }
        const{password,...others}=user._doc;
        const accessToken=jwt.sign(
            {
                id:user._id,
                isAdmin:user.isAdmin
            },
            process.env.JWT_KEY,
            {expiresIn:"3d"}
        )
        res.status(200).json({...others,accessToken});
        }
    } catch (error) {
        res.status(500).json(error);
    }
   
})

module.exports=router;