import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import "./navbar.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { ReactComponent as StarIcon } from "../../icons/star.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/locale.png" className="localeImg" alt="" />
            <KeyboardArrowDownIcon className="arrowIcons" />
          </div>
          <div className="item">
            <Link className="link" to="/">
              What's New
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Beauty
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Fashion
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Wellness
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            SHOPLIFY
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/story">
              Our Story
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Login
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Register
            </Link>
          </div>
          <div className="icons">
            <SearchIcon className="muiIcons" />
            <StarIcon className="on9Icons" />
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
