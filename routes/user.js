const express = require('express')
const userRouter = express.Router()

const userController = require('../controller/user')

userRouter.post('/', userController.createUser)
userRouter.get('/', userController.getAllUser)
userRouter.delete('/:id', userController.deleteUser)

module.exports = userRouter