import products from './data/products.js'
import connectDB from "./config/db.js"
import colors from 'colors'
import Product from './models/product.js'
connectDB()

const importData = async () => {
    try {

        await Product.deleteMany()

        const sampleProducts = products.map(product => {
            return { ...product }
        })
        await Product.insertMany(sampleProducts);
        console.log("Data Imported".green.inverse.blue)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Product.deleteMany()
        console.log('Data Destroied'.yellow.inverse.red)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') destroyData()
else importData()