import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";

export default class UserController {
  handleSignUp = async (req, res) => {
    try {
      let { name, email, password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      const data = { name, email, password: hash };
      const user = await UserModel.create(data);
      return res.json({ success: true, user });
    } catch (error) {
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
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
