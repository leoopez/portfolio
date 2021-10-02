/** @format */

import React, { useState } from "react";

import "./Header.css";

import { FaBars } from "react-icons/fa";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const showSidebar = () => setIsOpen(!isOpen);
  return (
    <header className='flx__ct--center hdr'>
      <nav className='flx__ct--center nv'>
        <div className='hdr--logo'>LO.</div>
        <ul className='nv__ul--dd'>
          <NavItems />
        </ul>
        <span className='menu--icon' onClick={showSidebar}>
          <FaBars size='2rem' />
        </span>
      </nav>
      <ul className={`flx__ct--center nv__ul--md ${isOpen ? "open" : ""}`}>
        <NavItems />
      </ul>
    </header>
  );
}

const NavItems = () => {
  return (
    <>
      <li>
        <a className='nv--item'>projects</a>
      </li>
      <li>
        <a className='nv--item'>skills</a>
      </li>
      <li>
        <a className='nv--item'>contact</a>
      </li>
      <li>
        <a className='nv--item'>DM</a>
      </li>
    </>
  );
};
