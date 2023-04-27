import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import "./navbar.scss";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  return (
    <div className="navbar">
      <div className="wrapper">
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="3"></rect>
            <rect y="30" width="100" height="3"></rect>
            <rect y="60" width="100" height="3"></rect>
          </svg>
        </button>
        {/* <div className={isNavExpanded ? "navbar expanded" : "navbar"}> */}
        <div className="left">
          <div className="item">
            <img src="/img/locale.png" className="localeImg" alt="" />
          </div>
          <div className="item">
            <Link className="link un" to="/">
              Sale
            </Link>
          </div>
          <div className="item">
            <Link className="link un" to="/products/1">
              Beauty
            </Link>
          </div>
          <div className="item">
            <Link className="link un" to="/products/2">
              Fashion
            </Link>
          </div>
          <div className="item">
            <Link className="link un" to="/products/3">
              Wellness
            </Link>
          </div>
        </div>
        {/* </div> */}
        <div className="center">
          <Link className="link" to="/">
            SHOPLIFY
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link un" to="/story">
              Our Story
            </Link>
          </div>
          <div className="item">
            <Link className="link un" to="/stores">
              Stores
            </Link>
          </div>
          <div className="item">
            <Link className="link un" to="/login">
              Login
            </Link>
          </div>
          <div className="item">
            <Link className="link un" to="/register">
              Register
            </Link>
          </div>
          <div className="icons">
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <WorkOutlineIcon className="muiIcons" />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
