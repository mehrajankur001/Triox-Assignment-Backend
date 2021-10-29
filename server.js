import express from "express"
import connectDB from "./config/db.js"
import config from "./config/config.js"
import cors from 'cors'

const app = express()
const PORT = 5000
app.use(cors())
app.use(express.json())

//Connecting with database
connectDB()

app.get('/', (req, res) => {
    res.send("Hi I am Here")
})

import productRouter from './routes/products.js'
app.use('/api/product', productRouter)

app.listen(PORT, () => console.log(`PORT ${PORT}`.magenta));
