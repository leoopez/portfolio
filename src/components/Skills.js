/** @format */

import React from "react";

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

export default function Skills() {
  return (
    <section id='skills' class='section'>
      {items.map((item, key) => (
        <SkillsItem key={key} item={item} />
      ))}
    </section>
  );
}

const SkillsItem = ({ item }) => {
  return <div>{item}</div>;
};
