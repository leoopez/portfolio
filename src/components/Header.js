/** @format */

import React, { useState } from "react";

import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const darkMode = false;
  const langMode = false;

  const showSidebar = () => setIsOpen(!isOpen);
  return (
    <header id='header' className='hdr'>
      <Navbar>
        <span className='hdr--logo'>LO.</span>
        <ul className='nv--dd'>
          <NavItem id='projects' />
          <NavItem id='technologies' />
          <NavItem id='skills' />
          <NavItem id='contact' />
        </ul>
        <div className='nv--opt'>
          <div className='nv--lg'>{langMode ? "ES " : "EN"}</div>
          <span>
            {darkMode ? <FaMoon size='3rem' /> : <FaSun size='3rem' />}
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
        <NavItem id='projects' onClick={showSidebar} />
        <NavItem id='technologies' onClick={showSidebar} />
        <NavItem id='skills' onClick={showSidebar} />
        <NavItem id='contact' onClick={showSidebar} />
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