const { Product } = require("../models");
const { uploadImg } = require("../middlewares/upload/upload-img");
const getProductList = async (req, res) => {
  try {
    const productList = await Product.findAll();
    res.status(200).send(productList);
    return productList;
  } catch (err) {
    res.status(500).send(err);
    return false;
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, imgSrc, categoryID, subCategoryID, orderID } =
      req.body;
    const newProduct = {
      name,
      price,
      imgSrc,
      categoryID,
      subCategoryID,
      orderID,
    };

    await Product.create(newProduct);
    res
      .status(201)
      .send(
        `Create product successfull - productInfor: ${JSON.stringify(
          newProduct
        )}`
      );
  } catch (err) {
    res.status(500).send(err);
    return false;
  }
};

const uploadProductImg = (categoryName) => {
  return uploadImg(categoryName);
};

module.exports = { getProductList, createProduct };
