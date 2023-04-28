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
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <img src="/img/locale.png" className="localeImg" alt="" />
          </li>
          <li>
            <Link className="localeImgM link un" to="/">
              Language
            </Link>
          </li>
          <li>
            <Link className="sale link un" to="/">
              Sale
            </Link>
          </li>
          <li>
            <Link className="link un" to="/products/1">
              Beauty
            </Link>
          </li>
          <li>
            <Link className="link un" to="/products/2">
              Fashion
            </Link>
          </li>
          <li>
            <Link className="link un" to="/products/3">
              Wellness
            </Link>
          </li>
          <li>
            <Link className="link shop-name" to="/">
              SHOPLIFY
            </Link>
          </li>
          <li>
            <Link className="link un" to="/story">
              Our Story
            </Link>
          </li>
          <li>
            <Link className="link un" to="/stores">
              Stores
            </Link>
          </li>
          <li>
            <Link className="link un" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="link un" to="/register">
              Register
            </Link>
          </li>
          <li className="icons">
            <Link className="cartIcon" onClick={() => setOpen(!open)}>
              <WorkOutlineIcon className="muiIcons" />
              <span>{products.length}</span>
            </Link>
          </li>
          <li className="iconsM">
            <Link className="cartText un" onClick={() => setOpen(!open)}>
              Shopping Bag&nbsp;(<span>{products.length}</span>)
            </Link>
          </li>
        </ul>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
