import React from "react";
import "./Footer.scss";
import Socials from "../Socials/Socials";
import Share from "../Share/Share";

const Footer = () => {
  return (
    <div className="footer">
      <Share></Share>
      <Socials iconSpacing="medium"></Socials>
    </div>
  );
};

export default Footer;
