import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    productID: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    CD: {
        type: Number,
        required: true
    },
    SD: {
        type: Number,
        required: true
    },
    RD: {
        type: Number,
        required: true
    },
    VAT: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema);

export default Product