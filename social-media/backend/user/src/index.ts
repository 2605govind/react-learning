import express  from "express";
import 'dotenv/config'
import connectDB from "./config/db.js";
import {createClient} from 'redis';
import userRoutes from './routes/user.route.js'
import { connectRabbitMQ } from "./config/rabbitmq.js";
import cors from 'cors'

export const redisClient = createClient({
    url: process.env.REDIS_URL as string,
});


redisClient.connect().then(() => console.log("connected to Redis DB")).catch(console.error);
connectRabbitMQ();

const app = express();
const PORT = process.env.PORT || 5016;

app.use(express.json())

app.use(cors())

app.use("/api/v1", userRoutes)

app.get('/', (req, res) => {
    res.send("hello")
})



async function init() {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

init()