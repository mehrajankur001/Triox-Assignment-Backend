import express from 'express'
const router = express.Router();

import { getAllProducts, getProductByProductID, createProduct } from '../controllers/products.js';

router.route('/allProducts').get(getAllProducts)
router.route('/add').post(createProduct)
router.route('/getByProductID').post(getProductByProductID)

export default router