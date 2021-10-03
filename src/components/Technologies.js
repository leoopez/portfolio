/** @format */

import React from "react";

import Item from "./UI/Item";

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
  return (
    <section id='technologies' className='section'>
      <div className='container'>
        <h2 className='section--title mb-md'>Technologies</h2>
        <div className='flx__ct--center section--content'>
          {items.map((item, key) => (
            <Item key={key} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
