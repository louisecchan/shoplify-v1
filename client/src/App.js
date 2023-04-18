import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Story from "./pages/Story/Story";

// stylesheet
import "./app.scss";

// fonts
import "./fonts/Favorit.ttf";

const Layout = () => {
  return (
    // <Router>
    <div className="app">
      <Navbar />
      {/* <Route path="/Story" component={Story} /> */}
      <Outlet />
      <Footer />
    </div>
  );
  {
    /* </Router> */
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/story",
        element: <Story />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
