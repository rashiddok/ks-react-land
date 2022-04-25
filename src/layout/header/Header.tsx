import React from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import ThemeSwitchButton from "../../components/UI/ThemeSwitchButton";

type NavLink = {
    to: string;
    label: string;
}

const Header = (props: any) => {
    const navLinks: NavLink[] = [
        {
            to: '/',
            label: 'Главная'
        },
        {
            to: '/about',
            label: 'Обо мне'
        },
        {
            to: '/contact',
            label: 'Контакты'
        },
    ]

  return (
    <div className="header container">
      <nav className="header__nav">
          {
              navLinks.map(link=>
                  <NavLink className={({isActive})=> isActive ? 'active nav__link' : 'nav__link'} to={link.to} key={link.to}>{link.label}</NavLink>
              )
          }
      </nav>
      <div className="header__logo">
        <a href="" className="logo-brand"></a>
      </div>
      <div className="header__additional">
        <a href="#" className="nav__link nav__link-standalone">
          eng
        </a>
          <ThemeSwitchButton></ThemeSwitchButton>
      </div>
    </div>
  );
};


export default Header;
