import {userController} from '@/app/controllers/UserController'
import express from 'express'

const userRouter = express.Router()

// Now we can directly use the controller methods
userRouter.post('/register', userController.signup)
userRouter.post('/login', userController.login)

export default userRouter
