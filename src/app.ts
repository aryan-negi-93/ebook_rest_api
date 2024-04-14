import { error } from "console";
import { config } from "../src/config/config"
import express, { NextFunction, Response, Request } from "express";
import createHttpError, { HttpError } from "http-errors";
import globalErrorHandler from "./middlewares/globalerrorHandler";
import userRouter from "./user/userRouter";


const app = express()

// Routes 

app.get('/', (req: Request, res: Response, next: NextFunction) => {

    res.json({ message: "welcome to elib apis" })
})

app.use('/api/users', userRouter)
// global error handler // yaad rakhna ye last mai hona chahiye  // globle err handler ak midleware hota hai 
app.use(globalErrorHandler)
export default app;

