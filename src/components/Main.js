/** @format */

import React from "react";

import Presentation from "./Presentation";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Main() {
  return (
    <main className='main'>
      <Presentation />
      <Projects />
      {/*<Technologies />
      <Skills />
      <Contact /> */}
    </main>
  );
}
