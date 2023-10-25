import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB = process.env.DATABASE_URI;

app.listen(3000 || process.env.PORT, () => {
  mongoose
    .connect(DB)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("Server listening at port 3000");
});
