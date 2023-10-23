// import { Outlet } from "react-router-dom";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import UserIcon from "../../icons/UserIcon";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Navbar() {
  // ? State to handle when user click for sign in or sign up
  const [isUserClicked, setIsUserClicked] = useState(false);

  return (
    <>
      <div className="header">
        <div className="logo-box">
          <Link to={"/"} className="logo">
            Chair Heaven
          </Link>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-items">
              <NavLink className={"nav-link"} to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink className={"nav-link"} to={"/shop"}>
                Shop
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink className={"nav-link"} to={"/about"}>
                About
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink className={"nav-link"} to={"/contactus"}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="user-login-signup">
          <UserIcon setIsUserClicked={setIsUserClicked} />
          {isUserClicked && (
            <div className="user-dropdown">
              <Link to={"/signin"}>Sign In</Link>
              <Link to={"/signup"}>Sign Up</Link>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}
