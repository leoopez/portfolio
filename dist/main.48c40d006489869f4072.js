/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/** @format */\r\n\r\n//Elemets\r\nconst presentation = document.getElementById('presentation');\r\nconst tecnologies = document.getElementById('tecnologies');\r\nconst projects = document.getElementById('projects');\r\nconst contact = document.getElementById('contact');\r\n\r\nconst sections = [presentation, tecnologies, projects, contact];\r\n\r\nconst State = {\r\n  currentSection: 0,\r\n};\r\n\r\nconst moveSection = (direction = \"up\") => {\r\n  if (direction) {\r\n    if (State.currentSection === sections.length - 1) State.currentSection = 0;\r\n    else State.currentSection++;\r\n  }\r\n  else {\r\n    if (State.currentSection === 0) State.currentSection = sections.length - 1;\r\n    else State.currentSection--;\r\n  }\r\n};\r\n\r\nwindow.addEventListener('keypress', e => {\r\n    if (e.key === 'Enter') {\r\n        moveSection(\"up\");\r\n        sections[State.currentSection].scrollIntoView({ behavior: 'smooth', block: 'center' });\r\n    }\r\n})\n\n//# sourceURL=webpack://portafolio-shilo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;