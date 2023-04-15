import React from "react";
import "./contact.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Sign up for email updates and promotions</span>
        <div className="mail">
          <input type="text" placeholder="Email address" />
          <button>SUBSCRIBE</button>
        </div>
        <div className="icons">
          {/* <FontAwesomeIcon icon={faFacebookF} className="fa-2xs" /> */}
          <FacebookIcon className="icon" />
          <TwitterIcon className="icon" />
          <InstagramIcon className="icon" />
          <YouTubeIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
