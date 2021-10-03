/** @format */

import React from "react";

import Item from "./UI/Item";

const items = [
  "Responsive Design",
  "Animations",
  "Functional Programming",
  "OOP",
  "Data Structures",
  "Algoritmhs",
  "Competetive Programming",
];

export default function Skills() {
  return (
    <section id='skills' className='section'>
      <h2 className='section--title mb-md'>Skills</h2>
      <div className='section--content'>
        {items.map((item, id) => (
          <Item key={id} item={item} />
        ))}
      </div>
    </section>
  );
}