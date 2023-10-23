import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import ContactUs from "./pages/contactus/ContactUs";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "shop", element: <Shop /> },
      { path: "about", element: <About /> },
      { path: "contactus", element: <ContactUs /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
