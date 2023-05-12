const constantStatus = require("../constants");


const errorHandler = (err,req, res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case constantStatus.VALIDATION_ERROR:
            res.json({
                title:"Validation failure",
                message:err.message,
                stackTrace: err.stack
            })
            break;
        case constantStatus.NOT_FOUND:
            res.json({
                title:"Not found",
                message:err.message,
                stackTrace: err.stack
            })
            break;
        case constantStatus.SERVER_ERROR:
            res.json({
                title:"Internal error",
                message:err.message,
                stackTrace: err.stack
            })
            break;
        case constantStatus.UNAUTHORIZED:
            res.json({
                title:"Unauthorized",
                message:err.message,
                stackTrace: err.stack
            })
            break;
        case constantStatus.FORBIDDEN:
            res.json({
                title:"Forbidden",
                message:err.message,
                stackTrace: err.stack
            })
            break;
        }
}
module.exports = errorHandler