import express from "express";
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import cors from "cors";
import bp from "body-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bp.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.use("/product", productRouter);

export default app;
