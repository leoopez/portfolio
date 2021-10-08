/** @format */

import React, { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import BackTop from "./UI/BackTop";

import { useTheme } from "../context/theme";

export default function App() {
  const { theme } = useTheme();
  return (
    <div className={theme ? "app dark" : "app"}>
      <Header />
      <Main />
      <BackTop />
    </div>
  );
}
