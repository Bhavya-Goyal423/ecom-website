import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useValue } from "../../context/CustomContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user } = useValue();

  useEffect(() => {
    if (user) navigate("/shop");
  }, [user, navigate]);

  const displayError = async (errors, index) => {
    if (index < errors.length) {
      toast.error(errors[index]);
    }
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 500)
    );
    await displayError(errors, index + 1);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    const data = { name, email, password };

    const res = await fetch("http://localhost:3000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (!result.success) {
      displayError(result.message, 0);
    } else if (result.success) {
      toast.success("Account Created, Redirecting to Login");
      setName("");
      setEmail("");
      setPassword("");
      console.log("Here");
      setTimeout(() => {
        navigate("/signin");
      }, 0);
    }
  };

  return (
    <>
      <div className="section-signin">
        <div className="sign-in-wrapper">
          <h3 className="get-started">Get Started Now</h3>
          <p>Enter your details to create your account</p>
          <form className="sign-in-form" noValidate onSubmit={handleSumbit}>
            <div className="name-box">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="name"
                placeholder="Bhavya Goyal"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="email-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="email-input"
                placeholder="xyz@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password-box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="password-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-medium btn-signin">Sign Up</button>
          </form>
          <p className="sign-up-title">
            Already have an account?{" "}
            <Link className="btn-signup" to={"/signin"}>
              SignIn
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
