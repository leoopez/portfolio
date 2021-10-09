/** @format */

import React from "react";
import { useLanguage } from "../context/language";

import Button from "./UI/Button";

export default function Contact() {
  const { lan } = useLanguage();
  return (
    <section id={lan ? "Contact" : "Contacto"} className='section'>
      <div className='container'>
        <h2 className='section--title mb'>{lan ? "Contact" : "Contacto"}</h2>
        <div className='section--content'>
          <Button
            name={lan ? "email me" : "envíeme un correo"}
            className='center'
          />
        </div>
      </div>
    </section>
  );
}
