const asyncHandler = require('express-async-handler')
const  jwt = require('jsonwebtoken')

const validateToken = asyncHandler( async (req,res,nex)=>{
    let token ;
    let authoHeader = req.headers.Authorization || req.headers.authorization
    if(authoHeader && authoHeader.startsWith("Bearer")){
        token = authoHeader.split(' ')[1]
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRETE,(err,decoded)=>{
            if(err){
                res.status(401)
                throw new Error("Error: User is not authorized!")
            }
            req.user = decoded.user
            nex()
        })
    }else{
        res.status(401)
        throw new Error("Error: User is not authorized!")
    }
    if(!token){
        res.status(401)
        throw new Error("Error: User is not authorized!")
    }
})
module.exports = validateToken