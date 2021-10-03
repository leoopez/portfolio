/** @format */

import React from "react";

import Item from "./UI/Item";

const items = [
  "Responsive Design",
  "Functional Programming",
  "OOP",
  "Data Structures & Algoritmhs",
];

export default function Skills() {
  return (
    <section id='skills' className='section'>
      <div className='container'>
        <h2 className='sctn--title'>Skills</h2>
        <div className='flx__ct--center sctn--content'>
          {items.map((item, id) => (
            <Item key={id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}