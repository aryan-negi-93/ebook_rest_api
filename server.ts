import { config } from './src/config/config';
import app from './src/app'
import connectDb from './src/config/db';



const startServer = async () => {
    // connect database
    await connectDb()
    const port = config.port || 3000;
    app.listen(port, () => {
        console.log(`LIstening on port ${port}`);
    })
}
startServer()

