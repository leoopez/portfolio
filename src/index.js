/** @format */

import React from "react";
import { render } from "react-dom";

import App from "./components/App";
import "./index.scss";

import ThemeProvider from "./context/theme";
import LanguageProvider from "./context/language";

render(
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
