const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    'username':{
        type: String,
        required:[true,"Username required"]
    },
    'email':{
        type:String,
        required:[true,'email required!']
    },
    'password':{
        type:String,
        required:[true,'password required']
    }
})
module.exports = mongoose.model('authUsers',userSchema)