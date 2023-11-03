import express from "express";
import ProductController from "../controllers/productController.js";

const productRouter = express();
const productController = new ProductController();

productRouter.route("/create").post(productController.createProduct);
productRouter.route("/").get(productController.getAllProducts);
productRouter.route("/:id").get(productController.getProductById);

export default productRouter;
