const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/product');

router.post('/', productCtrl.createProduct);
router.get('/', productCtrl.getAllProducts);
router.get('/:id', productCtrl.getDetailProduct);
router.patch('/:id', productCtrl.modifyProduct);
router.delete('/:id', productCtrl.removeProduct);