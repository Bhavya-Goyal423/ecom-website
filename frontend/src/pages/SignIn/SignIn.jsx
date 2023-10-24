import "./signin.css";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="section-signin">
      <div className="sign-in-wrapper">
        <h3 className="get-started">Get Started Now</h3>
        <p>Enter your credentials to access your account</p>
        <form className="sign-in-form">
          <div className="email-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="email-input"
              placeholder="xyz@gmail.com"
            />
          </div>
          <div className="password-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="password-input"
              placeholder="••••••••"
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
  );
}
