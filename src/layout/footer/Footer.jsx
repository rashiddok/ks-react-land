import React from 'react';
import './Footer.scss'
import Socials from '../../components/socials/Socials'
import Share from '../../components/share/Share'

const Footer = () => {
  return (
    <div className="footer">
      <Share></Share>
      <Socials iconSpacing="medium"></Socials>
    </div>
  );
};

export default Footer;