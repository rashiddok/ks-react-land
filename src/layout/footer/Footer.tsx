import React from "react";
import "./Footer.scss";
import Socials from "../../components/Socials/Socials";
import Share from "../../components/Share/Share";

const Footer = () => {
  return (
    <div className="footer">
      <Share></Share>
      <Socials iconSpacing="medium"></Socials>
    </div>
  );
};

export default Footer;
