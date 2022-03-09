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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n/*  Primary App Class\n */\n//==============================================================================\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.html = {\n      s2Object: document.getElementById('s2-object'),\n      s2ColourA: document.getElementById('s2-colour-a'),\n      s2ColourB: document.getElementById('s2-colour-b'),\n      s2StartButton: document.getElementById('s2-start-button')\n    };\n    this.html.s2StartButton.onclick = this.s2StartButton_onClick.bind(this);\n  }\n\n  _createClass(App, [{\n    key: \"s2StartButton_onClick\",\n    value: function s2StartButton_onClick(e) {\n      var s2Object = this.html.s2Object;\n      var startVal = this.html.s2ColourA.value;\n      var endVal = this.html.s2ColourB.value;\n      var s2AnimationSteps = [{\n        background: startVal,\n        offset: 0.0\n      }, {\n        background: endVal,\n        offset: 1.0\n      }];\n      var s2Timing = {\n        duration: 3000,\n        iterations: Infinity\n      };\n      s2Object.animate(s2AnimationSteps, s2Timing);\n    }\n  }]);\n\n  return App;\n}(); //==============================================================================\n\n/*  Initialisations\n */\n//==============================================================================\n\n\nvar app;\n\nwindow.onload = function () {\n  window.app = new App();\n}; //==============================================================================\n\n//# sourceURL=webpack://web-animation-experiment/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;