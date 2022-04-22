import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = (props: any) => {
  return (
    <div className="header container">
      <nav>
        <ul className="header__nav">
          <li className="nav__link active">
            <Link to={"/"}>Главная</Link>
          </li>
          <li className="nav__link">
            <Link to={"/about"}>Обо мне</Link>
          </li>
          <li className="nav__link">
            <Link to={"/contact"}>Контакты</Link>
          </li>
        </ul>
      </nav>
      <div className="header__logo">
        <a href="" className="logo-brand"></a>
      </div>
      <div className="header__additional">
        <a href="#" className="nav__link nav__link-standalone">
          eng
        </a>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
