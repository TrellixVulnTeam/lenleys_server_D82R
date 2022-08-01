const express = require("express");
const rootRouter = express.Router();
const { userRouter } = require("./user-router");
const { categoryRouter } = require("./category-router");
const { productRouter } = require("./product-router");
// ? User
rootRouter.use("/user", userRouter);
// ? Category
rootRouter.use("/category", categoryRouter);
// ? Product
rootRouter.use("/product", productRouter);
module.exports = { rootRouter };
