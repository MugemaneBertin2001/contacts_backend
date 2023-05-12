const validateToken = require('../middleWare/validateHashPassword');
const { registerUser, loginUser, currentUser } = require('../controllers/userController');

const userRouter = require('express').Router();

userRouter.route('/register').post(registerUser)
userRouter.route('/login').post(loginUser)
userRouter.get('/current',validateToken,currentUser)

module.exports = userRouter