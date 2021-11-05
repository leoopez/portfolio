/** @format */

import React from "react";
import { useLanguage } from "../context/language";

import Button from "./UI/Button";

import { FaLinkedin, FaGithub } from "react-icons/fa";

const LINKEDIN_URL = "https://www.linkedin.com/in/leonardo-ortiz-l%C3%B3pez/";
const GITHUB_URL = "https://github.com/leoopez";

export default function Contact() {
  const { lan } = useLanguage();
  // const [emailForm, setEmai]
  return (
    <section id={lan ? "Contact" : "Contacto"} className='section'>
      <div className='container'>
        <h2 className='section--title mb'>{lan ? "Contact" : "Contacto"}</h2>
        <div className='section--content'>
          <Button
            name={lan ? "email me" : "envíeme un correo"}
            className='center'
          />
          <a target='_blank' href={LINKEDIN_URL}>
            <FaLinkedin size='4rem' />
          </a>
          <a target='_blank' href={GITHUB_URL}>
            <FaGithub size='4rem' />
          </a>
        </div>
      </div>
    </section>
  );
}
