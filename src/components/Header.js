/** @format */

import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='container hdr'>
      <nav className='flx__ct--center nv'>
        <div className='hdr--logo'>LO.</div>
        {isOpen ? (
          <ul className='flx__ct--center nv--ul'>
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
          </ul>
        ) : (
          <span className='icon' onClick={() => setIsOpen(isOpen => !isOpen)}>
            <FaBars size='1.8rem' />
          </span>
        )}
      </nav>
    </header>
  );
}
