/** @format */

import React from "react";

import Item from "./UI/Item";

import { useLanguage } from "../context/language";
const items = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "SASS",
  "Git",
  "Bootstrap",
  "Tailwindcss",
];

export default function Technologies() {
  const { lan } = useLanguage();
  return (
    <section id={lan ? "Technologies" : "Tecnologías"} className='section'>
      <div className='container'>
        <h2 className='section--title mb-md'>{lan ? "Technologies" : "Tecnologías"}</h2>
        <div className='flx__ct--center section--content'>
          {items.map((item, key) => (
            <Item key={key} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
