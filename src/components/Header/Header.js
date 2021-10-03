/** @format */

import React, { useState } from "react";

import { FaSun, FaMoon, FaBars } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const showSidebar = () => setIsOpen(!isOpen);
  return (
    <header className='hdr flx__ctn mb-bg'>
      <nav className='nv flx__ctn'>
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
      <li>
        <a className='nv--item'>projects</a>
      </li>
      <li>
        <a className='nv--item'>technologies</a>
      </li>
      <li>
        <a className='nv--item'>skills</a>
      </li>
      <li>
        <a className='nv--item'>contact</a>
      </li>
      <li>
        <a className='nv--item'>{darkMode ? <FaMoon /> : <FaSun />}</a>
      </li>
    </>
  );
};
