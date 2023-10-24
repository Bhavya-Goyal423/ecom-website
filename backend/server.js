import app from "./app.js";

app.listen(3000 || process.env.PORT, () => {
  console.log("Server listening at port 3000");
});
