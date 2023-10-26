import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    unique: true,
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
  },
  description: {
    type: String,
    required: [true, "Product mush have a description"],
  },
  stock: {
    type: Number,
    default: 0,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    default: [],
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: [
      {
        user: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    default: [],
  },
});

const ProductModel = new model("Product", productSchema);

export default ProductModel;
