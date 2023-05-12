const asyncHandler = require('express-async-handler')
const contacts = require('../models/contactsModels')
// controllers for contacts

//@desc get all contacts
//@rote get::api/contacts
//@access private

const getContacts = asyncHandler(
    async (req,res)=>{
        const contactsData = await contacts.find()
        res.status(200).json({contactsData})
    }
)

//@desc get a contact
//@rote get::api/contacts/:id
//@access private
const getContact = asyncHandler(
    async (req,res)=>{
        const singleContact = await contacts.findById(req.params.id);
        if(!singleContact){
            res.status(404)
            throw new Error("Not found")
        }
        res.status(200).json(singleContact)
    }
)


//@desc create a new  contact
//@route post::api/contacts
//@access private
const createContact = asyncHandler(
    async (req,res)=>{
        const {name,email,phoneNumber} = req.body;
        if(!name || !email || !phoneNumber){
            res.status(400).json({message:"there's a missing entity!"})
        }
       
    const CreatedData = await contacts.create({
            name,
            email,
            phoneNumber,
            user_id:req.user.id
        })
    
    res.status(200).json({CreatedData})
    }
)


//@desc update a contact
//@rote put::api/contact/:id
//@access private
const updateContact = asyncHandler(
    async (req,res)=>{
        const existingContact = await contacts.findById(req.params.id);
        if(!existingContact){
            res.status(404)
            throw new Error("Not found")
        }
        const updatedContact = await contacts.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}

        )
        res.status(200).json(updatedContact);

    }
    
)

//@desc delete a particular contact
//@rote delete::api/contacts/:id
//@access private
const deleteContact = asyncHandler(
    async(req,res)=>{
        const existingContact = await contacts.findById(req.params.id);
        if(!existingContact){
            res.status(404)
            throw new Error("Not found")
        }
        await contacts.findByIdAndDelete(req.params.id)
        res.status(200).json(existingContact)
    }
)
module.exports = {getContacts, getContact, createContact, updateContact, deleteContact }