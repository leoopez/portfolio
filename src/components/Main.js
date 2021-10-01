/** @format */

import React from "react";

import Presentation from "./Presentation";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Main() {
  return (
    <main className='main'>
      <Presentation />
      <Projects />
      <Skills />
    </main>
  );
}
