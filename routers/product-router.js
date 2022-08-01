const express = require("express");
const {
  getProductList,
  createProduct,
} = require("../controllers/product-controller");
const productRouter = express.Router();
productRouter.get("/", getProductList);
productRouter.post("/", createProduct);
module.exports = { productRouter };
