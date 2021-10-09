/** @format */

import React from "react";

import Item from "./UI/Item";

import { useLanguage } from "../context/language";

const items = {
  en: [
    "Responsive Design",
    "Animations",
    "Functional Programming",
    "OOP",
    "Data Structures",
    "Algoritmhs",
    "Competetive Programming",
  ],
  es: [
    "Responsive Design",
    "Animaciones",
    "Progrmación Funcional",
    "POO",
    "Estructuras de Datos",
    "Algoritmos",
    "Competetive Programming",
  ],
};

export default function Skills() {
  const { lan } = useLanguage();
  return (
    <section id={lan ? "Skills" : "Habilidades"} className='section'>
      <h2 className='section--title mb-md'>{lan ? "Skills" : "Habilidades"}</h2>
      <div className='section--content'>
        {items[lan ? "en" : "es"].map((item, id) => (
          <Item key={id} item={item} />
        ))}
      </div>
    </section>
  );
}