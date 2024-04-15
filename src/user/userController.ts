import { error } from "console";
import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body


        // validation
    if (!name || !email || !password) {
        const error = createHttpError(400, "all fields are required")
        return next(error)
        // return res.json({ message: "all fields are required" })
    }

 
      
    // process-logic
      
    // response 

}

export { createUser };  
