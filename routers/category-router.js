const express = require("express");
const categoryRouter = express.Router();
const {
  createCategory,
  getCategoryList,
} = require("../controllers/category-controller");

categoryRouter.get("/", getCategoryList);
categoryRouter.post("/", createCategory);

module.exports = {
  categoryRouter,
};
