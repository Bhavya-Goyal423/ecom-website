import mongoose from "mongoose";
import UserModel from "../models/userModel.js";
import ProductModel from "../models/productModel.js";
import bcrypt from "bcrypt";

export default class UserController {
  handleSignUp = async (req, res) => {
    console.log("in sign up");
    try {
      let { name, email, password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      const data = { name, email, password: hash };
      const user = await UserModel.create(data);
      return res.json({ success: true, user });
    } catch (error) {
      console.log(error);
      if (error.message.includes("dup key"))
        return res.json({
          success: false,
          message: ["Email already registered"],
        });
      else console.log(error);
    }
  };

  handleSignIn = async (req, res) => {
    try {
      let { email, password } = req.body;
      const curUser = await UserModel.findOne({ email });
      if (!curUser)
        return res.json({
          success: false,
          message: ["Invalid username or password"],
        });
      const isPasswordValid = await bcrypt.compare(password, curUser.password);
      if (!isPasswordValid)
        return res.json({
          success: false,
          message: ["Invalid username or password"],
        });
      else {
        return res.json({
          success: true,
          message: {
            name: curUser.name,
            email: curUser.email,
            id: curUser["_id"],
            cart: curUser.cart,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  updateUser = async (req, res) => {
    const { userID, itemID } = req.params;
    const { quantity } = req.query;

    try {
      const user = await UserModel.findById(userID);
      const curObjectId = new mongoose.Types.ObjectId(itemID);

      if (!user) return res.json({ message: "User not found" });
      const curItemIndex = user.cart.findIndex((item) =>
        item.prodId.equals(curObjectId)
      );
      if (curItemIndex !== -1) {
        user.cart[curItemIndex].quantity += +quantity;
      } else {
        user.cart.push({ prodId: itemID, quantity });
      }
      const result = await user.save();
      return res.json({ status: "Success", message: "Cart Updated", result });
    } catch (error) {
      console.log(error);
      return res.json({ status: "Failed", message: "Some Error Occured" });
    }
  };
}
