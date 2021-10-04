/** @format */

import React from "react";

export default function Presentation() {
  return (
    <section id='presentation' className='section'>
      <h1 className='mb-bg'>
        Hi, I am <span className='name'>Leonardo Ortiz</span>
      </h1>
      <div className='presentation__ctr box__shadow '>
        <div className='ter-header mb-md'>
          <span className='th-1'>&#9679;</span>
          <span className='th-2'>&#9679;</span>
          <span className='th-3'>&#9679;</span>
        </div>
        <div className='grl__container'>
          <p className='command cm-1'>
            &#10095; Welcome to my <span className='name'>Porfolio</span>
          </p>
          <p className='command cm-2'>
            &#10095; <span className='name'>Front End</span> Engineer
          </p>
          <p className='command cm-3'>
            &#10095; <span className='name'>JavaScript</span> Developer
          </p>
        </div>
      </div>
    </section>
  );
}
