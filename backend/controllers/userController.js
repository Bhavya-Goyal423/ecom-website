import UserModel from "../models/userModel.js";

export default class UserController {
  handleSignUp = async (req, res) => {
    try {
      const user = await UserModel.create(req.body);
      return res.json({ success: true, user });
    } catch (error) {
      if (error.message.includes("dup key"))
        return res.json({
          success: false,
          message: ["Email already registered"],
        });
    }
  };
}
