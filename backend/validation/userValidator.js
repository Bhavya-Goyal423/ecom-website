import validator from "validator";

const validateUserSignUp = (req, res, next) => {
  const errors = [];
  let { name, password, email } = req.body;
  name = name.trim();
  password = password.trim();
  email = email.trim();
  const emailCheck = validator.isEmail(email);
  if (!name) errors.push("Name is a required field");

  if (!emailCheck) {
    errors.push("Provide a valid email");
  }
  if (!password) errors.push("Password is a required field");

  if (errors.length > 0) {
    return res.json({ success: false, message: errors });
  } else next();
};
export default validateUserSignUp;
