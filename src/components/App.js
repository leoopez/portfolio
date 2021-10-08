/** @format */

import React, { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import BackTop from "./UI/BackTop";

export default function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div id='root' className={theme ? "light" : "dark"}>
      <Header />
      <Main />
      <BackTop />
    </div>
  );
}
