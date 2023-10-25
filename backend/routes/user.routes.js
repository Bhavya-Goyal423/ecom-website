import express from "express";
import validateUser from "../validation/userValidator.js";
import UserController from "../controllers/userController.js";

const userRouter = express();
const userController = new UserController();

userRouter.route("/signup").post(validateUser, userController.handleSignUp);

export default userRouter;
