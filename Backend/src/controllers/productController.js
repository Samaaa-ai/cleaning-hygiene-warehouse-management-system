const {
  getAllProducts,
} = require("../services/productService");

const fetchProducts = async (req, res) => {
  try {
    const products = await getAllProducts();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { fetchProducts };