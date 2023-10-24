import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="section-signin">
      <div className="sign-in-wrapper">
        <h3 className="get-started">Get Started Now</h3>
        <p>Enter your details to create your account</p>
        <form className="sign-in-form">
          <div className="name-box">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              className="name"
              placeholder="Bhavya Goyal"
            />
          </div>
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
  );
}
