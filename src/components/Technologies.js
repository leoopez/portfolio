/** @format */

import React from "react";

import Item from "./UI/Item";

const items = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Git",
  "TypeScript",
  "Bootstrap",
  "Tailwindcss",
];

export default function Technologies() {
  return (
    <section id='skills' className='section'>
      <div className='container'>
        <h2 className='sctn--title'>Technologies</h2>
        <div className='flx__ct--center sctn--content'>
          {items.map((item, key) => (
            <Item key={key} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
