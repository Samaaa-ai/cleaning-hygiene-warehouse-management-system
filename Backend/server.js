require("dotenv").config();

const express = require("express");
const pool = require("./src/config/db");
const productRoutes = require("./src/routes/productRoutes");

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      message: "Database Connected Successfully",
      serverTime: result.rows[0].now
    });
  } catch (error) {
    console.error("ERROR:", error.message);

    res.status(500).json({
      message: "Database Connection Failed",
      error: error.message
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});