/** @format */

import React from "react";

import Button from "./UI/Button";

export default function Contact() {
  return (
    <section id='contact' className='section'>
      <div className='container'>
        <h2 className='section--title mb'>Contact</h2>
        <div className='section--content'>
          <Button name='email me' className='center' />
        </div>
      </div>
    </section>
  );
}
