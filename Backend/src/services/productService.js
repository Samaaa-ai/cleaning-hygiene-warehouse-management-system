const pool = require("../config/db");

const getAllProducts = async () => {
  const result = await pool.query(
    "SELECT * FROM products ORDER BY product_id"
  );

  return result.rows;
};

module.exports = { getAllProducts };