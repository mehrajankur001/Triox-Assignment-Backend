import asyncHandler from 'express-async-handler'
import Product from '../models/product.js'

export const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.find(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('product Not found')
    }

})

export const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find().select('-_id -createdAt -updatedAt -__v')
    res.json(products)
})

export const getProductByProductID = asyncHandler(async (req, res) => {
    const product = await Product.findOne({ productID: req.body.productID })

    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('product Not found')
    }

})

export const createProduct = asyncHandler(async (req, res) => {

    const { productID, description, CD, RD, SD, VAT } = req.body
    if (productID.length !== 7) {
        res.status(404)
        throw new Error('Length of ProductId must be seven')
    } else {
        const product = new Product({
            productID,
            description,
            CD,
            RD,
            SD,
            VAT
        })

        const createdProduct = await product.save()
        res.status(201).json(createdProduct)
    }

})
