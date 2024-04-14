import express, { NextFunction, Request, Response } from 'express'
import { createUser } from './userController'

const userRouter = express.Router()

//routes
userRouter.post('/register', createUser)


export default userRouter