/** @format */

import React from "react";

export default function Header() {
  return (
    <header className='container hdr'>
      <nav className='flx__ct--center nv'>
        <div className='hdr--logo'>LO.</div>
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
      </nav>
    </header>
  );
}
