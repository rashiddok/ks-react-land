import React from "react";
import "./Socials.scss";
import { FontAwesomeIcon, Props } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import SocialsItem from "./SocialsItem";

type ComponentProps = {
  iconSpacing?: string;
  iconSize?: string;
};

// @ts-ignore
const Socials = ({
  iconSpacing = "small",
  iconSize = "lg",
}: ComponentProps) => {
  const socials = [
    {
      url: "#",
      icon: faInstagram,
    },
    {
      url: "#",
      icon: faBehance,
    },
    {
      url: "#",
      icon: faLinkedin,
    },
  ];
  return (
    <div className={["social_media", iconSpacing].join(" ")}>
      {socials.map((v, idx) => (
        <SocialsItem url={v.url} icon={v.icon} size={iconSize} key={idx} />
      ))}
    </div>
  );
};

Socials.propTypes = {
  iconSpacing: PropTypes.string,
};

export default Socials;
