import express from "express";
import UserController from "../controllers/userController.js";
import {
  validateUserSignUp,
  validateUserSignIn,
} from "../validation/userValidator.js";

const userRouter = express();
const userController = new UserController();

userRouter
  .route("/signup")
  .post(validateUserSignUp, userController.handleSignUp);

userRouter
  .route("/signin")
  .post(validateUserSignIn, userController.handleSignIn);

userRouter
  .route("/:userID/:itemID")
  .patch(userController.updateUser)
  .delete(userController.removeCartItem);

export default userRouter;
