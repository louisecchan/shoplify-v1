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
          <h1>Customer Care</h1>
          <span>Track An Order</span>
          <span>Create A Return</span>
          <span>FAQs</span>
          <span>Delivery</span>
          <span>Privacy Policy</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <p>
            Shoplify is a destination of discovery for all genders – a place to
            be inspired, to find connection and to explore all aspects of a
            stylish life. With a selection of more than 500 of the world's most
            sought-after brands, we're on a mission to provide men with
            everything they need to look their best, and through our content and
            community offering we're helping them to feel their best, too.
          </p>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <p>
            For any enquiries please contact us.
            <br /> We're available 24 hours, 7 days a week. <br /> <br />
            Email us at customercare@shoplify.com <br />
            <br />
            Call us on 0800 088 6808
          </p>
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
