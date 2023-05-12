const {getContacts, getContact, createContact, updateContact, deleteContact } = require('../controllers/contactsControllers')
const validateToken = require('../middleWare/validateHashPassword')

const contactsRouter = require('express').Router()
contactsRouter.use(validateToken)
contactsRouter.route('/').get(getContacts).post(createContact)
contactsRouter.route('/:id').get(getContact).put(updateContact).delete(deleteContact)
module.exports = contactsRouter