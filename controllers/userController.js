const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt');
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel');

const registerUser = asyncHandler(async (req,res)=>{
    const {username,email,password} = req.body
    if(!username || !email || !password){
        res.status(404)
        throw new Error("Error: all fields required")
    }

    const isEmailUsed = await userModel.findOne({email})

    if(isEmailUsed == null){
        const createdUser = await userModel.create({
            username,
            email,
            password:md5(password)
        })
        res.status(200).json({
            "Message":"User registered",
            "User":createdUser
    
    })
    }else{
        res.status(404)
        throw new Error("Error: Email already used")
    }


 
})
const loginUser = asyncHandler(async (req,res)=>{
    const {email, password} = req.body
    if(!email || !password){
        res.status(404)
        throw new Error("Error: all fields are mandatory!")
    }
    const user = await userModel.findOne({email})
    if(user && (md5(password)==user.password)){
        const accessToken = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            }

        },
        process.env.ACCESS_TOKEN_SECRETE,
        {expiresIn:"1000m"})
        res.status(200).json({accessToken})
    }
    else{
        res.status(401)
        throw new Error("Either email or password is incorrect!")
    }

})
const currentUser = asyncHandler(async (req,res)=>{
    res.json(req.user)
})


module.exports = {registerUser,loginUser,currentUser}