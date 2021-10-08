/** @format */

import React, { useState } from "react";

import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

import { useTheme } from "../context/theme";
import { useLanguage } from "../context/language";

import { navbar } from "../portfolio";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lan, toggleLan } = useLanguage();

  const showSidebar = () => setIsOpen(!isOpen);
  return (
    <header id='header' className='hdr'>
      <Navbar>
        <span className='hdr--logo'>LO.</span>
        <ul className='nv--dd'>
          {navbar[lan ? "en" : "es"].map(p => (
            <NavItem key={p} id={p} />
          ))}
        </ul>
        <div className='nv--opt'>
          <div className='nv--lg' onClick={toggleLan}>
            {lan ? "EN " : "ES"}
          </div>
          <span onClick={toggleTheme}>
            {theme ? <FaMoon size='3rem' /> : <FaSun size='3rem' />}
          </span>
          <span className='menu--icon' onClick={showSidebar}>
            <FaBars size='3rem' />
          </span>
        </div>
      </Navbar>
      <ul className={`nv--md flx__ctn ${isOpen ? "open" : ""}`}>
        <span className='close--icon' onClick={showSidebar}>
          <FaTimes size='3rem' />
        </span>
        {navbar[lan ? "en" : "es"].map(p => (
          <NavItem key={p} id={p} onClick={showSidebar} />
        ))}
      </ul>
    </header>
  );
}

const Navbar = ({ children }) => {
  return <nav className='nv'>{children}</nav>;
};

const NavItem = ({ id, onClick = f => f }) => {
  const scrollIntoView = e => {
    e.preventDefault();
    console.log(id);
    document.getElementById(id).scrollIntoView();
  };

  return (
    <li
      className='nv--item'
      onClick={e => {
        scrollIntoView(e);
        onClick();
      }}>
      <a href={id}>{id}</a>
    </li>
  );
};