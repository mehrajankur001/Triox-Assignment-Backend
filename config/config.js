import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
const config = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
}

export default config