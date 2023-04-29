import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import "./navbar.scss";
import { Hamburger } from "./Hamburger";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // hamburger
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  // cart
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <nav className="navbar">
      <div
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </div>

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
            <Link className="shop-nameM" to="/">
              SHOPLIFY
            </Link>
          </li>
          <li>
            <Link className="link un story" to="/story">
              About
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

        {open && <Cart />}
      </div>
    </nav>
  );
};

export default Navbar;
