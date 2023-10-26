import ProductModel from "../models/productModel.js";

export default class ProductController {
  createProduct = async (req, res) => {
    try {
      const product = await ProductModel.create(req.body);
      return res.json({ status: "success", product });
    } catch (error) {
      console.log(error);
      res.json({
        staus: "failed",
        message: "Some error occured in creating product",
      });
    }
  };

  getAllProducts = async (req, res) => {
    try {
      const products = await ProductModel.find({});
      return res.json({ status: "success", data: products });
    } catch (error) {
      console.log(error);
      return res.json({
        status: "failed",
        message: "Some error occured in fetching for products",
      });
    }
  };
}
