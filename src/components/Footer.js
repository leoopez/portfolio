/** @format */

import React from "react";

import Button from "./UI/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <Button name='CV' />
      <FaLinkedin size='2rem' />
      <FaGithub size='2rem' />
    </footer>
  );
}
