import React from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import ThemeSwitchButton from "../ThemeSwitchButton";

type HeaderLink = {
  to: string;
  label: string;
};

const Header = (props: any) => {
  const navLinks: HeaderLink[] = [
    {
      to: "/",
      label: "Главная",
    },
    {
      to: "/about",
      label: "Обо мне",
    },
    {
      to: "/contact",
      label: "Контакты",
    },
  ];

  return (
    <div className="header container">
      <nav className="header__nav">
        {navLinks.map((link) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "active nav__link" : "nav__link"
            }
            to={link.to}
            key={link.to}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="header__logo">
        <Link to={"/"} className="logo-brand"></Link>
      </div>
      <div className="header__additional">
        <button className="nav__link nav__link-standalone">eng</button>
        <ThemeSwitchButton></ThemeSwitchButton>
      </div>
    </div>
  );
};

export default Header;
