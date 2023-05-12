const { log } = require('console')
const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/dbConnection')
const errorHandler = require('./middleWare/errorHandler')
const contactsRouter = require('./routes/contactsRoute')
const userRouter = require('./routes/usersRoute')
dotenv.config()

const App = express()
const port = process.env.PORT || 5000

connectDB();
App.use(express.json())
App.use('/api/contacts',contactsRouter)
App.use('/api/user',userRouter)
App.use(errorHandler)

App.listen(port,()=>{
    log(`Server is running on ${port}`)
})