/** @format */

import React, { useState } from "react";

import { FaSun, FaMoon, FaBars } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const showSidebar = () => setIsOpen(!isOpen);
  return (
    <header className='hdr flx__ctn'>
      <nav id='header' className='nv flx__ctn'>
        <div className='hdr--logo'>LO.</div>
        <ul className='nv__ul--dd'>
          <NavItems />
        </ul>
        <span className='menu--icon' onClick={showSidebar}>
          <FaBars size='3rem' />
        </span>
      </nav>
      <ul className={`nv__ul--md flx__ctn ${isOpen ? "open" : ""}`}>
        <NavItems />
      </ul>
    </header>
  );
}

const NavItems = ({ darkMode = false }) => {
  return (
    <>
      <NavItem id='projects' />
      <NavItem id='technologies' />
      <NavItem id='skills' />
      <NavItem id='contact' />
      <li className='nv--item'>
        {" "}
        {darkMode ? <FaMoon size='3rem' /> : <FaSun size='3rem' />}
      </li>
    </>
  );
};

const NavItem = ({ id }) => {
  const onClick = e => {
    e.preventDefault();
    console.log(id);
    document.getElementById(id).scrollIntoView();
  };
  return (
    <li className='nv--item' onClick={onClick}>
      <a href={id}>{id}</a>
    </li>
  );
};
