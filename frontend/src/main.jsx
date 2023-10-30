import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import ContactUs from "./pages/contactus/ContactUs";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import { CustomContext } from "./context/CustomContext";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/Signup/SignUp";
import CurProduct from "./pages/curProduct/curProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "shop", element: <Shop /> },
      { path: "about", element: <About /> },
      { path: "contactus", element: <ContactUs /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
      { path: "shop/:id", element: <CurProduct /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // </React.StrictMode>
  <CustomContext>
    <RouterProvider router={router} />
  </CustomContext>
);
