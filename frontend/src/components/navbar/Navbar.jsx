// import { Outlet } from "react-router-dom";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import UserIcon from "../../icons/UserIcon";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useValue } from "../../context/CustomContext";
import CartIcon from "../../icons/CartIcon";

export default function Navbar() {
  const [isUserClicked, setIsUserClicked] = useState(false);
  const { cart, user, setUser } = useValue();
  const [dropdown, setDropDown] = useState(false);

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
          onClick={() => {
            setDropDown(true);
          }}
        >
          <path
            fill="#888888"
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          ></path>
        </svg>
        <div className={`dropdown-menu ${dropdown ? "active" : ""}`}>
          <svg
            onClick={() => {
              setDropDown(false);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="icon icon-close"
          >
            <path
              fill="none"
              stroke="#888888"
              strokeLinecap="round"
              strokeWidth="2"
              d="M20 20L4 4m16 0L4 20"
            />
          </svg>
          <ul className="dropdown-list">
            <li className="nav-items">
              <NavLink
                className={"nav-link"}
                to={"/"}
                onClick={() => {
                  setDropDown(false);
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink
                className={"nav-link"}
                to={"/shop"}
                onClick={() => {
                  setDropDown(false);
                }}
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink
                className={"nav-link"}
                to={"/about"}
                onClick={() => {
                  setDropDown(false);
                }}
              >
                About
              </NavLink>
            </li>
          </ul>
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
