import "./signin.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useValue } from "../../context/CustomContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useValue();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/shop");
  }, [user, navigate]);

  const displayErrors = async (errors, index) => {
    if (index < errors.length) {
      toast.error(errors[index]);
    }
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 1000)
    );
    await displayErrors(errors, index + 1);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    const res = await fetch("http://localhost:3000/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (!result.success) {
      displayErrors(result.message, 0);
    } else {
      localStorage.setItem("user", JSON.stringify(result.message));
      setUser(result.message);
      toast.success("Login Successfull");
      setTimeout(() => {
        navigate("/shop");
      }, 1000);
    }
  };

  return (
    <>
      <div className="section-signin">
        <div className="sign-in-wrapper">
          <h3 className="get-started">Get Started Now</h3>
          <p>Enter your credentials to access your account</p>
          <form noValidate className="sign-in-form" onSubmit={handleSumbit}>
            <div className="email-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="email-input"
                placeholder="xyz@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
            <button className="btn btn-medium btn-signin">Sign In</button>
          </form>
          <p className="sign-up-title">
            Don&apos;t have an account?{" "}
            <Link className="btn-signup" to={"/signup"}>
              SignUp
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
