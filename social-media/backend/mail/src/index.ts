import express from 'express'
import 'dotenv/config'
import { startSendOTPConsumer } from './consumer.js';

const app = express();

startSendOTPConsumer()

app.listen(process.env.PORT, () => {
    console.log(`Server is running at PORT: ${process.env.PORT}`)
})

