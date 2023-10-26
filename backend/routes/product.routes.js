import express from "express";
import ProductController from "../controllers/productController.js";

const productRouter = express();
const productController = new ProductController();

productRouter.route("/create").post(productController.createProduct);
productRouter.route("/").get(productController.getAllProducts);

export default productRouter;
