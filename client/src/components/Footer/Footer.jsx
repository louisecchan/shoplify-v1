import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Beauty</span>
          <span>Fashion</span>
          <span>Wellness</span>
          <span>Sale</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            pariatur debitis dolor repellendus excepturi ad adipisci fugit
            corrupti magni, neque aliquid, nam magnam. Tenetur iste officiis,
            maxime a sapiente soluta.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            pariatur debitis dolor repellendus excepturi ad adipisci fugit
            corrupti magni, neque aliquid, nam magnam. Tenetur iste officiis,
            maxime a sapiente soluta.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Shoplify</span>
          <span className="copyright">© 2023 shoplify.com</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
