const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  restockProduct,
  getLowStock
} = require('../controllers/productController');

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/low-stock', getLowStock);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.post('/:id/restock', restockProduct);

module.exports = router;
