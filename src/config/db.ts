
import { config } from "./config"
import mongoose from "mongoose"

const connectDb = async () => {
    try {

        mongoose.connection.on('connected', () => {
            console.log("connected to database successfully ");
        })

        mongoose.connection.on('error', (err) => {
            console.log('error in connecting to database!', err);
        })

        await mongoose.connect(config.databaseUrl as string)

    } catch (err) {
        console.error("failed to connect to database ", err)
        process.exit(1); // ager error aya toh server chalakar kya fayda wo stop ho jayga esa
    }
}

export default connectDb


