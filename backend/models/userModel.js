import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is a required field"],
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email is a required field"],
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is a required field"],
  },
  orders: {
    type: [{ productName: Schema.Types.ObjectId, date: Date, status: String }],
    default: [],
  },
  cart: {
    type: [
      {
        id: {
          type: Schema.Types.ObjectId,
          required: true,
          unique: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    _id: false,
    default: [],
  },
});

const UserModel = new model("User", userSchema);

export default UserModel;
