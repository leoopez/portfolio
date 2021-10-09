/** @format */

import React, { useState, useEffect } from "react";

import { FaArrowUp } from "react-icons/fa";

export default function BackTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const header = document.getElementById("header");

    let observer = new IntersectionObserver(
      entries => entries.forEach(entry => setShow(!entry.isIntersecting)),
      {}
    );

    observer.observe(header);
  }, []);

  const onClick = e => {
    e.preventDefault();
    document.getElementById("root").scrollIntoView();
  };

  return show ? (
    <span className='icon back__top flx__ctn' onClick={onClick}>
      <FaArrowUp size='2rem' />
    </span>
  ) : null;
}
