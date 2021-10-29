import mongoose from 'mongoose'
import config from './config.js'
import colors from 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`Connected to DATABASE ${conn.connection.host}`.magenta)
    } catch (error) {
        console.error(`Error Message ${error}`)
        process.exit(1);
    }
}

export default connectDB