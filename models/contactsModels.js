const  mongoose  = require("mongoose");

const contactsSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'authUsers'

    },
    name: {
        type: String,
        required:[true,"Contacts user"],
    },
    email : {
        type:String,
        require:[true, "Contact email"],
    },
    phoneNumber:{
        type:String,
        required:[true,"Phone number"]
    }

},
{
    timestamps:true
}
);
module.exports = mongoose.model('Contacts',contactsSchema);