import express from "express";


const app = express()

// Routes 

app.get('/', (req: any, res: any, next: any) => {
    res.json({ message: "welcome to elib apis" })
})

export default app;

