// import { Outlet } from "react-router-dom";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import UserIcon from "../../icons/UserIcon";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useValue } from "../../context/CustomContext";
import CartIcon from "../../icons/CartIcon";

export default function Navbar() {
  // ? State to handle when user click for sign in or sign up
  const [isUserClicked, setIsUserClicked] = useState(false);
  const { cart, user, setUser } = useValue();

  useEffect(() => {
    const curUser = localStorage.getItem("user");

    if (curUser) {
      setUser(JSON.parse(curUser));
    }
  }, [setUser]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <>
      <div className="header">
        <div className="logo-box">
          <Link to={"/"} className="logo">
            Chair Heaven
          </Link>
        </div>
        <svg
          className="menu-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#888888"
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          ></path>
        </svg>
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
          </ul>
        </nav>
        <div className="user-login-signup">
          <Link className="cart" to={"/cart"}>
            <CartIcon />
            <span className="cart-items">{cart.length}</span>
          </Link>

          <UserIcon setIsUserClicked={setIsUserClicked} />
          {isUserClicked && !user && (
            <div className="user-dropdown">
              <Link to={"/signin"} onClick={() => setIsUserClicked(false)}>
                Sign In
              </Link>
              <Link to={"/signup"} onClick={() => setIsUserClicked(false)}>
                Sign Up
              </Link>
            </div>
          )}
          {isUserClicked && user && (
            <div className="user-dropdown">
              <p className="user-name">{user.name}</p>
              <button className="btn btn-logout" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}
