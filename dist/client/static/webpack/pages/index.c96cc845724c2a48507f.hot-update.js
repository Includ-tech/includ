webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home.js":
/*!****************************!*\
  !*** ./components/home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TypingAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TypingAnimation */ "./components/TypingAnimation.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/home.module.scss */ "./styles/home.module.scss");
/* harmony import */ var _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PreFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PreFooter */ "./components/PreFooter.js");
/* harmony import */ var _Recognitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Recognitions */ "./components/Recognitions.js");
var _jsxFileName = "E:\\work\\includ-tech.github.io\\src\\client\\components\\home.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var processArray = [{
  label: "ideation",
  title: "Ideation",
  content: "Any web application starts with an idea, a solution to a problem, or an automation tool for some industry. We can assist companies in this step, as our experience with different projects allows us to see whether something is feasible, and how to implement it better."
}, {
  label: "research",
  title: "Research",
  content: "Each project needs a detailed analysis before being handed over to development. We work together with the project stakeholders to prepare a detailed competition analysis, to identify short-term and long-term business goals, to prepare a list of features, and split these to planned releases; research phase results in an initial list of development milestones, and a rollout plan with preliminary timeline estimations."
}, {
  label: "sprint_phases",
  title: "Sprint Phases",
  content: "Development is divided into 2-4-week sprints, and at the end of each sprint, a potentially shippable product is delivered. Each sprint includes design, development, testing, and release of a number of features, this way we incrementally add planned functionalities to the product."
}, {
  label: "support",
  title: "Support",
  content: "A great web application is not just a piece of functioning code. It is also technical documentation and user tutorials, and a reliable support team behind it, which is able to resolve any technical or user experience issues. We provide technical and customer support for our products and include this service for our customers."
}];
var Home = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_c = _s(function () {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("ideation"),
      processLabel = _useState[0],
      setProcessLabel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      preFooterHovered = _useState2[0],
      setPreFooterHovered = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      prefooterLeave = _useState3[0],
      setPrefooterLeave = _useState3[1];

  var processContent = processArray.filter(function (el) {
    return el.label == processLabel;
  });
  console.log(preFooterHovered);
  return __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["home"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["HeroBanner"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "pb-5 align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "12",
    className: "pb-sm-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: " dark-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "We build great websites & web apps with"), __jsx("h1", {
    className: "dark-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx(_TypingAnimation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }))), __jsx("h4", {
    className: "hero-sub-heading ".concat(_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["subHeading"]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Providing top-notch digital solutions with a focus on your online business profitability.")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "12",
    className: "pb-5 d-sm-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["hero"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/assets/images/hero-banner.svg",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "bg-dark mb-5",
    style: {
      paddingTop: "50px",
      paddingBottom: "80px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    className: "".concat(_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["techSolutions"], " "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "10",
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("h", {
    className: "small-heading text-center",
    style: {
      paddingTop: "2rem",
      paddingBottom: "2rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "ABOUT US"), __jsx("h", {
    className: "large-sub-heading",
    style: {
      marginTop: "30px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, "Includ is a team of passionate people highly motivated to provide expert level Web app solutions to businesses. We are focused on building high quality websites, fully responsive web interfaces, hybrid mobile applications and providing website design services. We use latest technologies to deliver an optimised product with high performance. We have worked with various clients in different sectors. We also provide website maintenance and support services thereby maintaining a long lasting relationship with the client."))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: {
      span: 5,
      offset: 1
    },
    className: "pt-5 pb-sm-5 d-none d-sm-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "Web Development"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "We provide website development and web app development services including ecommerce websites."), __jsx("a", {
    href: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, "Learn more"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    className: "pt-5 pb-sm-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/assets/images/website-development.svg",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    className: "pt-5 pb-5 d-sm-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "Web Development"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, "We provide website development and web app development services including ecommerce websites."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, "Learn more")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    className: "pt-5 pb-sm-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/assets/images/hybrid-app-development.svg",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "5",
    className: "pt-5 pb-5 text-sm-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, "Hybrid App Development"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, "We provide hybrid app development services to businesses."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, "Learn more")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: {
      span: 5,
      offset: 1
    },
    className: "pt-5 pb-5 d-none d-sm-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, "Web Designing"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, "We provide website designing services to clients."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, "Learn more"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    className: "pt-5 pb-sm-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/assets/images/website-designing.svg",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    className: "pt-5 pb-5 d-sm-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, "Web Designing"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, "We provide website designing services to clients."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, "Learn more"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    sm: "fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: {
      paddingTop: "60px",
      paddingBottom: "2rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "d-flex justify-content-between align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "m-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  }, "Recent Projects"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./portfolio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 15
    }
  }, "View More")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 6,
    className: "pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["container"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "".concat(_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["image"]),
    src: "/assets/images/home-banner2.png",
    alt: "Avatar",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["middle"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["text"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 19
    }
  }, "WrkSpot"), __jsx("h4", {
    style: {
      paddingBottom: "2rem",
      paddingTop: "1rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 19
    }
  }, "Hotel Management Software | Hotel Employee Management"))), __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["viewProject"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio/wrkspot",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }
  }, __jsx("h", {
    style: {
      display: "inline"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 19
    }
  }, "View Project", " ", __jsx("svg", {
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 23
    }
  }))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 6,
    className: "pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["container"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "".concat(_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["image"]),
    src: "/assets/images/home-banner2.png",
    alt: "Avatar",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["middle"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["text"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 19
    }
  }, "igrenEnergi"), __jsx("h4", {
    style: {
      paddingBottom: "2rem",
      paddingTop: "1rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 19
    }
  }, "Battery Management System | Intelligent and Patented"))), __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["viewProject"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio/igrenenergi",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }, __jsx("h", {
    style: {
      display: "inline"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 19
    }
  }, "View Project", " ", __jsx("svg", {
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 23
    }
  }))))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: {
      paddingTop: "60px",
      paddingBottom: "40px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 13
    }
  }, "Ready to Catch up on Your Application Development?"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "d-inline-block linkButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 15
    }
  }, "Lets start a project together"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    className: "pt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 11
    }
  }, __jsx("div", {
    id: "animationLine",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 15
    }
  }, "Our Process"), __jsx("svg", {
    viewBox: "70 100 700 300",
    preserveAspectRatio: "xMidYMid meet",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 15
    }
  }, __jsx("g", {
    id: "background",
    transform: "translate(200.000000, 80.000000)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 17
    }
  }, __jsx("path", {
    fill: "none",
    stroke: "#d7e3e4",
    strokeDasharray: "5",
    strokeWidth: "2",
    d: "M5,145.6034H455",
    id: "path",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 19
    }
  }), __jsx("circle", {
    id: "pulse",
    r: "6",
    fill: "#d7e3e4",
    opacity: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 19
    }
  }, __jsx("animateMotion", {
    id: "op",
    dur: "0.6s",
    begin: "indefinite",
    repeatCount: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 21
    }
  }, __jsx("mpath", {
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    xlinkHref: "#path",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 23
    }
  })), __jsx("animate", {
    id: "blue-dot-dissapear",
    attributeType: "XML",
    attributeName: "r",
    from: "0",
    to: "0",
    dur: "0.1s",
    fill: "freeze",
    begin: "op.end+0s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 21
    }
  })), __jsx("circle", {
    onMouseEnter: function onMouseEnter() {
      return setProcessLabel("ideation");
    },
    id: "circle1_hover_surface",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "100",
    cx: "0",
    cy: "145",
    r: "80",
    opacity: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 19
    }
  }), __jsx("circle", {
    id: "circle1_medium",
    fill: "none",
    stroke: "#6C63FF",
    strokeWidth: "1",
    cx: "0",
    cy: "145",
    r: "14",
    opacity: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 19
    }
  }), __jsx("circle", {
    id: "circle1",
    className: "ProcessCircle",
    fill: "#6C63FF",
    cx: "0",
    cy: "145",
    r: "5",
    opacity: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 19
    }
  }), __jsx("text", {
    id: "ideation",
    className: "ProcessText is-visible@s",
    x: "-50",
    y: "250px",
    fill: "".concat(processLabel == "ideation" ? "#6C63FF" : "#000"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 19
    }
  }, "Ideation"), __jsx("circle", {
    onMouseEnter: function onMouseEnter() {
      return setProcessLabel("research");
    },
    id: "circle2_hover_surface",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "100",
    cx: "150",
    cy: "145",
    r: "80",
    opacity: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 19
    }
  }), __jsx("circle", {
    id: "circle2_medium",
    className: "ProcessCircleMedium",
    fill: "none",
    stroke: "#E36767",
    strokeWidth: "1",
    cx: "150",
    cy: "145",
    r: "14",
    opacity: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 19
    }
  }, __jsx("animate", {
    id: "second-medium",
    attributeType: "XML",
    attributeName: "opacity",
    from: "0",
    to: "1",
    dur: "0.7s",
    fill: "freeze",
    begin: "op.begin+0.28s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 21
    }
  })), __jsx("circle", {
    id: "circle2",
    className: "ProcessCircle",
    fill: "#E36767",
    cx: "150",
    cy: "145",
    r: "5",
    opacity: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 19
    }
  }, __jsx("animate", {
    id: "second",
    attributeType: "XML",
    attributeName: "r",
    from: "0",
    to: "5",
    dur: "0.08s",
    fill: "freeze",
    begin: "op.begin+0.19s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 21
    }
  })), __jsx("text", {
    id: "research",
    className: "ProcessText is-visible@s",
    x: "95",
    y: "250",
    fill: "".concat(processLabel == "research" ? "#E36767" : "#000"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 19
    }
  }, "Research", __jsx("animate", {
    id: "research-anim",
    attributeType: "XML",
    attributeName: "y",
    from: "350",
    to: "250",
    dur: "0.28s",
    fill: "freeze",
    begin: "op.begin+0.2s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 21
    }
  }), __jsx("animate", {
    id: "research-anim-opacity",
    attributeType: "XML",
    attributeName: "opacity",
    from: "0",
    to: "0.6",
    dur: "0.6s",
    fill: "freeze",
    begin: "op.begin+0.2s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 21
    }
  })), __jsx("circle", {
    onMouseEnter: function onMouseEnter() {
      return setProcessLabel("sprint_phases");
    },
    id: "circle3_hover_surface",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "100",
    cx: "300",
    cy: "145",
    r: "80",
    opacity: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 19
    }
  }), __jsx("circle", {
    id: "circle3_medium",
    className: "ProcessCircleMedium",
    fill: "none",
    stroke: "#E9BC29",
    strokeWidth: "1",
    cx: "300",
    cy: "145",
    r: "14",
    opacity: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 19
    }
  }, __jsx("animate", {
    id: "third-medium",
    attributeType: "XML",
    attributeName: "opacity",
    from: "0",
    to: "1",
    dur: "0.7s",
    fill: "freeze",
    begin: "op.begin+0.43s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 21
    }
  })), __jsx("circle", {
    id: "circle3",
    className: "ProcessCircle",
    fill: "#E9BC29",
    cx: "300",
    cy: "145",
    r: "5",
    opacity: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 19
    }
  }, __jsx("animate", {
    id: "third",
    attributeType: "XML",
    attributeName: "r",
    from: "0",
    to: "5",
    dur: "0.08s",
    fill: "freeze",
    begin: "op.begin+0.29s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 21
    }
  })), __jsx("text", {
    id: "sprint",
    className: "ProcessText",
    x: "225",
    y: "250",
    fill: "".concat(processLabel == "sprint_phases" ? "#E9BC29" : "#000"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 19
    }
  }, "Sprint phases", __jsx("animate", {
    id: "sprint-anim",
    attributeType: "XML",
    attributeName: "y",
    from: "350",
    to: "250",
    dur: "0.31s",
    fill: "freeze",
    begin: "op.begin+0.2s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 21
    }
  }), __jsx("animate", {
    id: "sprint-anim-opacity",
    attributeType: "XML",
    attributeName: "opacity",
    from: "0",
    to: "0.6",
    dur: "0.6s",
    fill: "freeze",
    begin: "op.begin+0.2s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 21
    }
  })), __jsx("circle", {
    onMouseEnter: function onMouseEnter() {
      return setProcessLabel("support");
    },
    id: "circle4_hover_surface",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "100",
    cx: "450",
    cy: "145",
    r: "80",
    opacity: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 19
    }
  }), __jsx("circle", {
    id: "circle4_medium",
    className: "ProcessCircleMedium",
    fill: "none",
    stroke: "#37B18E",
    strokeWidth: "1",
    cx: "450",
    cy: "145",
    r: "14",
    opacity: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 19
    }
  }, __jsx("animate", {
    id: "fourth-medium",
    attributeType: "XML",
    attributeName: "opacity",
    from: "0",
    to: "1",
    dur: "0.7s",
    fill: "freeze",
    begin: "op.begin+0.59s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 21
    }
  })), __jsx("circle", {
    id: "circle4",
    className: "ProcessCircle",
    fill: "#37B18E",
    cx: "450",
    cy: "145",
    r: "5",
    opacity: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 19
    }
  }, __jsx("animate", {
    id: "fourth",
    attributeType: "XML",
    attributeName: "r",
    from: "0",
    to: "5",
    dur: "0.08s",
    fill: "freeze",
    begin: "op.begin+0.38s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 21
    }
  })), __jsx("text", {
    id: "support",
    className: "ProcessText is-visible@s",
    x: "410",
    y: "250",
    fill: "".concat(processLabel == "support" ? "#37B18E" : "#000"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 19
    }
  }, "Support", __jsx("animate", {
    id: "support-anim",
    attributeType: "XML",
    attributeName: "y",
    from: "350",
    to: "250",
    dur: "0.34s",
    fill: "freeze",
    begin: "op.begin+0.2s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 21
    }
  }), __jsx("animate", {
    id: "support-anim-opacity",
    attributeType: "XML",
    attributeName: "opacity",
    from: "0",
    to: "0.6",
    dur: "0.6s",
    fill: "freeze",
    begin: "op.begin+0.2s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 21
    }
  })))), __jsx("div", {
    className: "text-center",
    style: {
      paddingBottom: "5rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 15
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
      columnNumber: 17
    }
  }, processContent[0].title), __jsx("div", {
    className: "text-center d-flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638,
      columnNumber: 17
    }
  }, __jsx("p", {
    style: {
      maxWidth: "40rem",
      paddingTop: "1rem",
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639,
      columnNumber: 19
    }
  }, processContent[0].content))))))), __jsx(_PreFooter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654,
      columnNumber: 7
    }
  }));
}, "qTuj5VDwPAH7qVtK+1QIBNuYidA="));
_c2 = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c, _c2;

$RefreshReg$(_c, "Home$React.memo");
$RefreshReg$(_c2, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "../../node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLmpzIl0sIm5hbWVzIjpbInByb2Nlc3NBcnJheSIsImxhYmVsIiwidGl0bGUiLCJjb250ZW50IiwiSG9tZSIsIlJlYWN0IiwibWVtbyIsInVzZVN0YXRlIiwicHJvY2Vzc0xhYmVsIiwic2V0UHJvY2Vzc0xhYmVsIiwicHJlRm9vdGVySG92ZXJlZCIsInNldFByZUZvb3RlckhvdmVyZWQiLCJwcmVmb290ZXJMZWF2ZSIsInNldFByZWZvb3RlckxlYXZlIiwicHJvY2Vzc0NvbnRlbnQiLCJmaWx0ZXIiLCJlbCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpblRvcCIsInNwYW4iLCJvZmZzZXQiLCJkaXNwbGF5IiwibWF4V2lkdGgiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUcsQ0FDbkI7QUFDRUMsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsT0FBSyxFQUFFLFVBRlQ7QUFHRUMsU0FBTyxFQUNMO0FBSkosQ0FEbUIsRUFPbkI7QUFDRUYsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsT0FBSyxFQUFFLFVBRlQ7QUFHRUMsU0FBTyxFQUNMO0FBSkosQ0FQbUIsRUFhbkI7QUFDRUYsT0FBSyxFQUFFLGVBRFQ7QUFFRUMsT0FBSyxFQUFFLGVBRlQ7QUFHRUMsU0FBTyxFQUNMO0FBSkosQ0FibUIsRUFtQm5CO0FBQ0VGLE9BQUssRUFBRSxTQURUO0FBRUVDLE9BQUssRUFBRSxTQUZUO0FBR0VDLFNBQU8sRUFDTDtBQUpKLENBbkJtQixDQUFyQjtBQTJCQSxJQUFNQyxJQUFJLGdCQUFHQyw0Q0FBSyxDQUFDQyxJQUFOLFNBQVcsWUFBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLFVBQUQsQ0FEcEI7QUFB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QUUsTUFGUDtBQUdMTyxlQUFTLEVBQUU7QUFITixLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPR2IsY0FBYyxDQUFDLENBQUQsQ0FBZCxDQUFrQlgsT0FQckIsQ0FERixDQUZGLENBelZGLENBREYsQ0FERixDQWxCRixDQWxPRixFQWltQkUsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBam1CRixDQURGO0FBa3JCRCxDQTFyQlksa0NBQWI7TUFBTUMsSTtBQTRyQlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM5NmNjODQ1NzI0YzJhNDg1MDdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgVHlwaW5nQW5pbWF0aW9uIGZyb20gXCIuL1R5cGluZ0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBQcmVGb290ZXIgZnJvbSBcIi4vUHJlRm9vdGVyXCI7XHJcbmltcG9ydCBSZWNvZ25pdGlvbnMgZnJvbSBcIi4vUmVjb2duaXRpb25zXCI7XHJcblxyXG5jb25zdCBwcm9jZXNzQXJyYXkgPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6IFwiaWRlYXRpb25cIixcclxuICAgIHRpdGxlOiBcIklkZWF0aW9uXCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIkFueSB3ZWIgYXBwbGljYXRpb24gc3RhcnRzIHdpdGggYW4gaWRlYSwgYSBzb2x1dGlvbiB0byBhIHByb2JsZW0sIG9yIGFuIGF1dG9tYXRpb24gdG9vbCBmb3Igc29tZSBpbmR1c3RyeS4gV2UgY2FuIGFzc2lzdCBjb21wYW5pZXMgaW4gdGhpcyBzdGVwLCBhcyBvdXIgZXhwZXJpZW5jZSB3aXRoIGRpZmZlcmVudCBwcm9qZWN0cyBhbGxvd3MgdXMgdG8gc2VlIHdoZXRoZXIgc29tZXRoaW5nIGlzIGZlYXNpYmxlLCBhbmQgaG93IHRvIGltcGxlbWVudCBpdCBiZXR0ZXIuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogXCJyZXNlYXJjaFwiLFxyXG4gICAgdGl0bGU6IFwiUmVzZWFyY2hcIixcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgIFwiRWFjaCBwcm9qZWN0IG5lZWRzIGEgZGV0YWlsZWQgYW5hbHlzaXMgYmVmb3JlIGJlaW5nIGhhbmRlZCBvdmVyIHRvIGRldmVsb3BtZW50LiBXZSB3b3JrIHRvZ2V0aGVyIHdpdGggdGhlIHByb2plY3Qgc3Rha2Vob2xkZXJzIHRvIHByZXBhcmUgYSBkZXRhaWxlZCBjb21wZXRpdGlvbiBhbmFseXNpcywgdG8gaWRlbnRpZnkgc2hvcnQtdGVybSBhbmQgbG9uZy10ZXJtIGJ1c2luZXNzIGdvYWxzLCB0byBwcmVwYXJlIGEgbGlzdCBvZiBmZWF0dXJlcywgYW5kIHNwbGl0IHRoZXNlIHRvIHBsYW5uZWQgcmVsZWFzZXM7IHJlc2VhcmNoIHBoYXNlIHJlc3VsdHMgaW4gYW4gaW5pdGlhbCBsaXN0IG9mIGRldmVsb3BtZW50IG1pbGVzdG9uZXMsIGFuZCBhIHJvbGxvdXQgcGxhbiB3aXRoIHByZWxpbWluYXJ5IHRpbWVsaW5lIGVzdGltYXRpb25zLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6IFwic3ByaW50X3BoYXNlc1wiLFxyXG4gICAgdGl0bGU6IFwiU3ByaW50IFBoYXNlc1wiLFxyXG4gICAgY29udGVudDpcclxuICAgICAgXCJEZXZlbG9wbWVudCBpcyBkaXZpZGVkIGludG8gMi00LXdlZWsgc3ByaW50cywgYW5kIGF0IHRoZSBlbmQgb2YgZWFjaCBzcHJpbnQsIGEgcG90ZW50aWFsbHkgc2hpcHBhYmxlIHByb2R1Y3QgaXMgZGVsaXZlcmVkLiBFYWNoIHNwcmludCBpbmNsdWRlcyBkZXNpZ24sIGRldmVsb3BtZW50LCB0ZXN0aW5nLCBhbmQgcmVsZWFzZSBvZiBhIG51bWJlciBvZiBmZWF0dXJlcywgdGhpcyB3YXkgd2UgaW5jcmVtZW50YWxseSBhZGQgcGxhbm5lZCBmdW5jdGlvbmFsaXRpZXMgdG8gdGhlIHByb2R1Y3QuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogXCJzdXBwb3J0XCIsXHJcbiAgICB0aXRsZTogXCJTdXBwb3J0XCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIkEgZ3JlYXQgd2ViIGFwcGxpY2F0aW9uIGlzIG5vdCBqdXN0IGEgcGllY2Ugb2YgZnVuY3Rpb25pbmcgY29kZS4gSXQgaXMgYWxzbyB0ZWNobmljYWwgZG9jdW1lbnRhdGlvbiBhbmQgdXNlciB0dXRvcmlhbHMsIGFuZCBhIHJlbGlhYmxlIHN1cHBvcnQgdGVhbSBiZWhpbmQgaXQsIHdoaWNoIGlzIGFibGUgdG8gcmVzb2x2ZSBhbnkgdGVjaG5pY2FsIG9yIHVzZXIgZXhwZXJpZW5jZSBpc3N1ZXMuIFdlIHByb3ZpZGUgdGVjaG5pY2FsIGFuZCBjdXN0b21lciBzdXBwb3J0IGZvciBvdXIgcHJvZHVjdHMgYW5kIGluY2x1ZGUgdGhpcyBzZXJ2aWNlIGZvciBvdXIgY3VzdG9tZXJzLlwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBIb21lID0gUmVhY3QubWVtbygoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2Nlc3NMYWJlbCwgc2V0UHJvY2Vzc0xhYmVsXSA9IHVzZVN0YXRlKFwiaWRlYXRpb25cIik7XHJcbiAgY29uc3QgW3ByZUZvb3RlckhvdmVyZWQsIHNldFByZUZvb3RlckhvdmVyZWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByZWZvb3RlckxlYXZlLCBzZXRQcmVmb290ZXJMZWF2ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgbGV0IHByb2Nlc3NDb250ZW50ID0gcHJvY2Vzc0FycmF5LmZpbHRlcigoZWwpID0+IGVsLmxhYmVsID09IHByb2Nlc3NMYWJlbCk7XHJcbiAgY29uc29sZS5sb2cocHJlRm9vdGVySG92ZXJlZCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWV9PlxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT17c3R5bGVzLkhlcm9CYW5uZXJ9PlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwicGItNSBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIGNsYXNzTmFtZT1cInBiLXNtLTVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiBkYXJrLWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgV2UgYnVpbGQgZ3JlYXQgd2Vic2l0ZXMgJmFtcDsgd2ViIGFwcHMgd2l0aFxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGFyay1ibGFja1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPFR5cGluZ0FuaW1hdGlvbiAvPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17YGhlcm8tc3ViLWhlYWRpbmcgJHtzdHlsZXMuc3ViSGVhZGluZ31gfT5cclxuICAgICAgICAgICAgICBQcm92aWRpbmcgdG9wLW5vdGNoIGRpZ2l0YWwgc29sdXRpb25zIHdpdGggYSBmb2N1cyBvbiB5b3VyIG9ubGluZVxyXG4gICAgICAgICAgICAgIGJ1c2luZXNzIHByb2ZpdGFiaWxpdHkuXHJcbiAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIGNsYXNzTmFtZT1cInBiLTUgZC1zbS1ub25lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9oZXJvLWJhbm5lci5zdmdcIiB3aWR0aD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3c+PC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctZGFyayBtYi01XCJcclxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjUwcHhcIiwgcGFkZGluZ0JvdHRvbTogXCI4MHB4XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGVjaFNvbHV0aW9uc30gYH0+XHJcbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPENvbCBzbT1cIjEwXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGwtaGVhZGluZyB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjJyZW1cIiwgcGFkZGluZ0JvdHRvbTogXCIycmVtXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBQk9VVCBVU1xyXG4gICAgICAgICAgICAgIDwvaD5cclxuICAgICAgICAgICAgICA8aCBjbGFzc05hbWU9XCJsYXJnZS1zdWItaGVhZGluZ1wiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICBJbmNsdWQgaXMgYSB0ZWFtIG9mIHBhc3Npb25hdGUgcGVvcGxlIGhpZ2hseSBtb3RpdmF0ZWQgdG9cclxuICAgICAgICAgICAgICAgIHByb3ZpZGUgZXhwZXJ0IGxldmVsIFdlYiBhcHAgc29sdXRpb25zIHRvIGJ1c2luZXNzZXMuIFdlIGFyZVxyXG4gICAgICAgICAgICAgICAgZm9jdXNlZCBvbiBidWlsZGluZyBoaWdoIHF1YWxpdHkgd2Vic2l0ZXMsIGZ1bGx5IHJlc3BvbnNpdmUgd2ViXHJcbiAgICAgICAgICAgICAgICBpbnRlcmZhY2VzLCBoeWJyaWQgbW9iaWxlIGFwcGxpY2F0aW9ucyBhbmQgcHJvdmlkaW5nIHdlYnNpdGVcclxuICAgICAgICAgICAgICAgIGRlc2lnbiBzZXJ2aWNlcy4gV2UgdXNlIGxhdGVzdCB0ZWNobm9sb2dpZXMgdG8gZGVsaXZlciBhblxyXG4gICAgICAgICAgICAgICAgb3B0aW1pc2VkIHByb2R1Y3Qgd2l0aCBoaWdoIHBlcmZvcm1hbmNlLiBXZSBoYXZlIHdvcmtlZCB3aXRoXHJcbiAgICAgICAgICAgICAgICB2YXJpb3VzIGNsaWVudHMgaW4gZGlmZmVyZW50IHNlY3RvcnMuIFdlIGFsc28gcHJvdmlkZSB3ZWJzaXRlXHJcbiAgICAgICAgICAgICAgICBtYWludGVuYW5jZSBhbmQgc3VwcG9ydCBzZXJ2aWNlcyB0aGVyZWJ5IG1haW50YWluaW5nIGEgbG9uZ1xyXG4gICAgICAgICAgICAgICAgbGFzdGluZyByZWxhdGlvbnNoaXAgd2l0aCB0aGUgY2xpZW50LlxyXG4gICAgICAgICAgICAgIDwvaD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgIG1kPXt7IHNwYW46IDUsIG9mZnNldDogMSB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwdC01IHBiLXNtLTUgZC1ub25lIGQtc20tYmxvY2tcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDM+V2ViIERldmVsb3BtZW50PC9oMz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgV2UgcHJvdmlkZSB3ZWJzaXRlIGRldmVsb3BtZW50IGFuZCB3ZWIgYXBwIGRldmVsb3BtZW50IHNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgaW5jbHVkaW5nIGVjb21tZXJjZSB3ZWJzaXRlcy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8YSBocmVmPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlzLWxpbmtcIj5MZWFybiBtb3JlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc209XCI2XCIgY2xhc3NOYW1lPVwicHQtNSBwYi1zbS01XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvd2Vic2l0ZS1kZXZlbG9wbWVudC5zdmdcIiB3aWR0aD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT1cInB0LTUgcGItNSBkLXNtLW5vbmVcIj5cclxuICAgICAgICAgICAgPGgzPldlYiBEZXZlbG9wbWVudDwvaDM+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIFdlIHByb3ZpZGUgd2Vic2l0ZSBkZXZlbG9wbWVudCBhbmQgd2ViIGFwcCBkZXZlbG9wbWVudCBzZXJ2aWNlc1xyXG4gICAgICAgICAgICAgIGluY2x1ZGluZyBlY29tbWVyY2Ugd2Vic2l0ZXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIuL3NlcnZpY2VzXCJ9PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlzLWxpbmtcIj5MZWFybiBtb3JlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPENvbCBzbT1cIjZcIiBjbGFzc05hbWU9XCJwdC01IHBiLXNtLTVcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9oeWJyaWQtYXBwLWRldmVsb3BtZW50LnN2Z1wiIHdpZHRoPVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc209XCI1XCIgY2xhc3NOYW1lPVwicHQtNSBwYi01IHRleHQtc20tcmlnaHRcIj5cclxuICAgICAgICAgICAgPGgzPkh5YnJpZCBBcHAgRGV2ZWxvcG1lbnQ8L2gzPlxyXG4gICAgICAgICAgICA8cD5XZSBwcm92aWRlIGh5YnJpZCBhcHAgZGV2ZWxvcG1lbnQgc2VydmljZXMgdG8gYnVzaW5lc3Nlcy48L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi9zZXJ2aWNlc1wifT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpcy1saW5rXCI+TGVhcm4gbW9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxDb2xcclxuICAgICAgICAgICAgc209e3sgc3BhbjogNSwgb2Zmc2V0OiAxIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTUgcGItNSBkLW5vbmUgZC1zbS1ibG9ja1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMz5XZWIgRGVzaWduaW5nPC9oMz5cclxuICAgICAgICAgICAgPHA+V2UgcHJvdmlkZSB3ZWJzaXRlIGRlc2lnbmluZyBzZXJ2aWNlcyB0byBjbGllbnRzLjwvcD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIuL3NlcnZpY2VzXCJ9PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlzLWxpbmtcIj5MZWFybiBtb3JlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc209XCI2XCIgY2xhc3NOYW1lPVwicHQtNSBwYi1zbS01XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvd2Vic2l0ZS1kZXNpZ25pbmcuc3ZnXCIgd2lkdGg9XCIxMDAlXCIgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBzbT1cIjZcIiBjbGFzc05hbWU9XCJwdC01IHBiLTUgZC1zbS1ub25lXCI+XHJcbiAgICAgICAgICAgIDxoMz5XZWIgRGVzaWduaW5nPC9oMz5cclxuICAgICAgICAgICAgPHA+V2UgcHJvdmlkZSB3ZWJzaXRlIGRlc2lnbmluZyBzZXJ2aWNlcyB0byBjbGllbnRzLjwvcD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIuL3NlcnZpY2VzXCJ9PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlzLWxpbmtcIj5MZWFybiBtb3JlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgIHsvKiA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHNtPXsxMn0gY2xhc3NOYW1lPVwiIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIiB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjkwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICBDaGVjayBvdXQgc29mdHdhcmUgcHJvZHVjdHMgd2UgbWFkZSB1c2luZyBSZWFjdEpTLCBWdWUuanMsXHJcbiAgICAgICAgICAgICAgICBTeW1mb255LCBQSFAsIGFuZCBvdGhlciB0ZWNobm9sb2dpZXMuXHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz4gKi99XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPENvbnRhaW5lciBzbT1cImZsdWlkXCI+XHJcbiAgICAgICAgPFJvdyBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjYwcHhcIiwgcGFkZGluZ0JvdHRvbTogXCIycmVtXCIgfX0+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm0tMFwiPlJlY2VudCBQcm9qZWN0czwvaDM+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi9wb3J0Zm9saW9cIn0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXMtbGlua1wiPlZpZXcgTW9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgc209ezZ9IGNsYXNzTmFtZT1cInBiLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9ob21lLWJhbm5lcjIucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5taWRkbGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgPGgyPldya1Nwb3Q8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogXCIycmVtXCIsIHBhZGRpbmdUb3A6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEhvdGVsIE1hbmFnZW1lbnQgU29mdHdhcmUgfCBIb3RlbCBFbXBsb3llZSBNYW5hZ2VtZW50XHJcbiAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdQcm9qZWN0fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3BvcnRmb2xpby93cmtzcG90XCJ9PlxyXG4gICAgICAgICAgICAgICAgICA8aCBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIFZpZXcgUHJvamVjdHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjEuODgzIDEybC03LjUyNyA2LjIzNS42NDQuNzY1IDktNy41MjEtOS03LjQ3OS0uNjQ1Ljc2NCA3LjUyOSA2LjIzNmgtMjEuODg0djFoMjEuODgzelwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvaD5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc209ezZ9IGNsYXNzTmFtZT1cInBiLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9ob21lLWJhbm5lcjIucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5taWRkbGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgPGgyPmlncmVuRW5lcmdpPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiMnJlbVwiLCBwYWRkaW5nVG9wOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICBCYXR0ZXJ5IE1hbmFnZW1lbnQgU3lzdGVtIHwgSW50ZWxsaWdlbnQgYW5kIFBhdGVudGVkXHJcbiAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdQcm9qZWN0fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3BvcnRmb2xpby9pZ3JlbmVuZXJnaVwifT5cclxuICAgICAgICAgICAgICAgICAgPGggc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICBWaWV3IFByb2plY3R7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIxLjg4MyAxMmwtNy41MjcgNi4yMzUuNjQ0Ljc2NSA5LTcuNTIxLTktNy40NzktLjY0NS43NjQgNy41MjkgNi4yMzZoLTIxLjg4NHYxaDIxLjg4M3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2g+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICA8Um93IHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiNjBweFwiLCBwYWRkaW5nQm90dG9tOiBcIjQwcHhcIiB9fT5cclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGgzPlJlYWR5IHRvIENhdGNoIHVwIG9uIFlvdXIgQXBwbGljYXRpb24gRGV2ZWxvcG1lbnQ/PC9oMz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvY29udGFjdFwifT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBsaW5rQnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICBMZXRzIHN0YXJ0IGEgcHJvamVjdCB0b2dldGhlclxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICB7LyogPFJlY29nbml0aW9ucyAvPiAqL31cclxuICAgICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJwdC01XCI+XHJcbiAgICAgICAgey8qIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIG1kPXszfSBjbGFzc05hbWU9e1wiYm9yZGVyLXJpZ2h0IHRleHQtbGVmdCBcIn0+XHJcbiAgICAgICAgICAgIDxoMyBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiBcIjAuN3JlbVwiIH19PldheXMgdG8gd29yayB3aXRoIHVzPzwvaDM+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJpcy1saW5rIFwiICsgc3R5bGVzLndheXNMaW5rfT5MZWFybiBNb3JlPC9zcGFuPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e1widGV4dC1sZWZ0IFwiICsgc3R5bGVzLndheXNDb2x9PlxyXG4gICAgICAgICAgICAgIFdlIGF0IFRNUyBhY3QgYXMgYW4gaW50ZWdyYWwgcGFydCBvZiB5b3VyIG9yZ2FuaXphdGlvbiwgZm9jdXNpbmdcclxuICAgICAgICAgICAgICBvbiBwcm9kdWN0IGZ1bmN0aW9uYWxpdHksIGVuZC11c2VyIGFkb3B0aW9uLCBwcm9hY3RpdmUgYW5kXHJcbiAgICAgICAgICAgICAgY3JlYXRpdmUgdGhpbmtpbmcgaW4gb3JkZXIgdG8gc3VwcG9ydCB5b3VyIG92ZXJhbGwgYnVzaW5lc3MgZ29hbHMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgV2UgY2FuIGhlbHAgd2l0aCBwcm9kdWN0IGRldmVsb3BtZW50IG9ubHksIGJ1dCB3ZSBzaGluZSB3aGVuXHJcbiAgICAgICAgICAgICAgYXBwbHlpbmcgb3VyIGZ1bGwtYXBwLWxpZmVjeWNsZSBhcHByb2FjaC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+ICovfVxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhbmltYXRpb25MaW5lXCI+XHJcbiAgICAgICAgICAgICAgPGgzPk91ciBQcm9jZXNzPC9oMz5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiNzAgMTAwIDcwMCAzMDBcIlxyXG4gICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZyBpZD1cImJhY2tncm91bmRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjAwLjAwMDAwMCwgODAuMDAwMDAwKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjZDdlM2U0XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk9XCI1XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNSwxNDUuNjAzNEg0NTVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGF0aFwiXHJcbiAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIGJsdWUgZG90IC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD1cInB1bHNlXCIgcj1cIjZcIiBmaWxsPVwiI2Q3ZTNlNFwiIG9wYWNpdHk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMC42c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbj1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bXBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bGlua0hyZWY9XCIjcGF0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9tcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmx1ZS1kb3QtZGlzc2FwZWFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdG89XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjAuMXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImZyZWV6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbj1cIm9wLmVuZCswc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgICAgICAgPC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIGZpcnN0IGNpcmNsZSAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFByb2Nlc3NMYWJlbChcImlkZWF0aW9uXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2lyY2xlMV9ob3Zlcl9zdXJmYWNlXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI2ZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCIxNDVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHI9XCI4MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICA+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNpcmNsZTFfbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICBjeD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ1XCJcclxuICAgICAgICAgICAgICAgICAgICByPVwiMTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8YW5pbWF0ZSBpZD1cImZpcnN0LW1lZGl1bVwiIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIiBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIGZyb209XCIwXCIgdG89XCIxXCIgZHVyPVwiMC43c1wiIGZpbGw9XCJmcmVlemVcIiAgYmVnaW49XCJvcC5iZWdpbiswLjI4c1wiPjwvYW5pbWF0ZT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXJjbGUxXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJQcm9jZXNzQ2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzZDNjNGRlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE0NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8YW5pbWF0ZSBpZD1cImZpcnN0XCIgYXR0cmlidXRlVHlwZT1cIlhNTFwiIGF0dHJpYnV0ZU5hbWU9XCJyXCIgZnJvbT1cIjBcIiB0bz1cIjVcIiBkdXI9XCIwLjAxc1wiIGZpbGw9XCJmcmVlemVcIiBiZWdpbj1cIm9wLmJlZ2luKzBzXCI+PC9hbmltYXRlPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9jaXJjbGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8dGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaWRlYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlByb2Nlc3NUZXh0IGlzLXZpc2libGVAc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgeD1cIi01MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgeT1cIjI1MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPXtgJHtwcm9jZXNzTGFiZWwgPT0gXCJpZGVhdGlvblwiID8gXCIjNkM2M0ZGXCIgOiBcIiMwMDBcIn1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgSWRlYXRpb25cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGFuaW1hdGUgaWQ9XCJpZGVhdGlvbi1hbmltXCIgYXR0cmlidXRlVHlwZT1cIlhNTFwiIGF0dHJpYnV0ZU5hbWU9XCJ5XCIgZnJvbT1cIjM1MFwiIHRvPVwiMjUwXCIgZHVyPVwiMC4yNXNcIiBmaWxsPVwiZnJlZXplXCIgYmVnaW49XCJvcC5iZWdpbiswLjJzXCI+PC9hbmltYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhbmltYXRlIGlkPVwiaWRlYXRpb24tYW5pbS1vcGFjaXR5XCIgYXR0cmlidXRlVHlwZT1cIlhNTFwiIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCIgZnJvbT1cIjBcIiB0bz1cIjAuNlwiIGR1cj1cIjAuNnNcIiBmaWxsPVwiZnJlZXplXCIgYmVnaW49XCJvcC5iZWdpbiswLjJzXCI+PC9hbmltYXRlPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPCEtLSBzZWNvbmQgY2lyY2xlIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0UHJvY2Vzc0xhYmVsKFwicmVzZWFyY2hcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXJjbGUyX2hvdmVyX3N1cmZhY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ1XCJcclxuICAgICAgICAgICAgICAgICAgICByPVwiODBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXJjbGUyX21lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiUHJvY2Vzc0NpcmNsZU1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNFMzY3NjdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ1XCJcclxuICAgICAgICAgICAgICAgICAgICByPVwiMTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlY29uZC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVHlwZT1cIlhNTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMC43c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwib3AuYmVnaW4rMC4yOHNcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXJjbGUyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJQcm9jZXNzQ2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0UzNjc2N1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ1XCJcclxuICAgICAgICAgICAgICAgICAgICByPVwiNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2Vjb25kXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdG89XCI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjAuMDhzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJmcmVlemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYmVnaW49XCJvcC5iZWdpbiswLjE5c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgICAgICAgPC9jaXJjbGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8dGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicmVzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlByb2Nlc3NUZXh0IGlzLXZpc2libGVAc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgeD1cIjk1XCJcclxuICAgICAgICAgICAgICAgICAgICB5PVwiMjUwXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPXtgJHtwcm9jZXNzTGFiZWwgPT0gXCJyZXNlYXJjaFwiID8gXCIjRTM2NzY3XCIgOiBcIiMwMDBcIn1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZXNlYXJjaC1hbmltXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT1cIjM1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIjI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIwLjI4c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwib3AuYmVnaW4rMC4yc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZXNlYXJjaC1hbmltLW9wYWNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVHlwZT1cIlhNTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIjAuNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIwLjZzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJmcmVlemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYmVnaW49XCJvcC5iZWdpbiswLjJzXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9hbmltYXRlPlxyXG4gICAgICAgICAgICAgICAgICA8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIHRoaXJkIGNpcmNsZSAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFByb2Nlc3NMYWJlbChcInNwcmludF9waGFzZXNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXJjbGUzX2hvdmVyX3N1cmZhY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ1XCJcclxuICAgICAgICAgICAgICAgICAgICByPVwiODBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXJjbGUzX21lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiUHJvY2Vzc0NpcmNsZU1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNFOUJDMjlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ1XCJcclxuICAgICAgICAgICAgICAgICAgICByPVwiMTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInRoaXJkLW1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZyb209XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRvPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIwLjdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJmcmVlemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYmVnaW49XCJvcC5iZWdpbiswLjQzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgICAgICAgPC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNpcmNsZTNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlByb2Nlc3NDaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRTlCQzI5XCJcclxuICAgICAgICAgICAgICAgICAgICBjeD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCIxNDVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHI9XCI1XCJcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aGlyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZyb209XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRvPVwiNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIwLjA4c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwib3AuYmVnaW4rMC4yOXNcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPHRleHRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInNwcmludFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiUHJvY2Vzc1RleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHg9XCIyMjVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHk9XCIyNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0xhYmVsID09IFwic3ByaW50X3BoYXNlc1wiID8gXCIjRTlCQzI5XCIgOiBcIiMwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU3ByaW50IHBoYXNlc1xyXG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNwcmludC1hbmltXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT1cIjM1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIjI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIwLjMxc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwib3AuYmVnaW4rMC4yc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzcHJpbnQtYW5pbS1vcGFjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdG89XCIwLjZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMC42c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwib3AuYmVnaW4rMC4yc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPCEtLSBmb3VydGggY2lyY2xlIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0UHJvY2Vzc0xhYmVsKFwic3VwcG9ydFwiKX1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNpcmNsZTRfaG92ZXJfc3VyZmFjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNmZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBjeD1cIjQ1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCIxNDVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHI9XCI4MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICA+PC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNpcmNsZTRfbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJQcm9jZXNzQ2lyY2xlTWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzM3QjE4RVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICBjeD1cIjQ1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCIxNDVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHI9XCIxNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZm91cnRoLW1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZyb209XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRvPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIwLjdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJmcmVlemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYmVnaW49XCJvcC5iZWdpbiswLjU5c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgICAgICAgPC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNpcmNsZTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlByb2Nlc3NDaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMzdCMThFXCJcclxuICAgICAgICAgICAgICAgICAgICBjeD1cIjQ1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCIxNDVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHI9XCI1XCJcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmb3VydGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVHlwZT1cIlhNTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwiclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMC4wOHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImZyZWV6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbj1cIm9wLmJlZ2luKzAuMzhzXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9hbmltYXRlPlxyXG4gICAgICAgICAgICAgICAgICA8L2NpcmNsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdXBwb3J0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJQcm9jZXNzVGV4dCBpcy12aXNpYmxlQHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHg9XCI0MTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHk9XCIyNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9e2Ake3Byb2Nlc3NMYWJlbCA9PSBcInN1cHBvcnRcIiA/IFwiIzM3QjE4RVwiIDogXCIjMDAwXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFN1cHBvcnRcclxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdXBwb3J0LWFuaW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVHlwZT1cIlhNTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwieVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPVwiMzUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRvPVwiMjUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjAuMzRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJmcmVlemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYmVnaW49XCJvcC5iZWdpbiswLjJzXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9hbmltYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInN1cHBvcnQtYW5pbS1vcGFjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdG89XCIwLjZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMC42c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwib3AuYmVnaW4rMC4yc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogXCI1cmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8aDQ+e3Byb2Nlc3NDb250ZW50WzBdLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjQwcmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2Nlc3NDb250ZW50WzBdLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPFByZUZvb3RlciAvPlxyXG5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiQ1RBXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCR0xlZnRcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgQkdMZWZ0SW1hZ2UgaXMtdmlzaWJsZUBtICR7cHJlRm9vdGVySG92ZXJlZCA9PSBcImxlZnRcIiA/IFwiem9vbVwiIDogXCJcIn1cclxuICAgICAgICAgICAgJHtwcmVmb290ZXJMZWF2ZSA9PSBcImxlZnRcIiA/IFwiem9vbU91dFwiIDogXCJcIn0gYH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICAgICAgICAgICAgXCJ1cmwoJy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLWN0YS0xLmpwZycpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlclwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJHUmlnaHRcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgQkdSaWdodEltYWdlIGlzLXZpc2libGVAbSAke1xyXG4gICAgICAgICAgICAgIHByZUZvb3RlckhvdmVyZWQgPT0gXCJyaWdodFwiID8gXCJ6b29tXCIgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJHtwcmVmb290ZXJMZWF2ZSA9PSBcInJpZ2h0XCIgPyBcInpvb21PdXRcIiA6IFwiXCJ9IGB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDpcclxuICAgICAgICAgICAgICAgIFwidXJsKCcvYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy1jdGEtMS5qcGcnKSBuby1yZXBlYXQgcmlnaHQgYm90dG9tXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQkdHcmFkaWVudFwiPjwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpcy1ncmlkIGlzLWdyaWQtY29sbGFwc2UgaXMtY2hpbGQtd2lkdGgtMS0yQG1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bpcy1ncmlkLWl0ZW0gJHtwcmVGb290ZXJIb3ZlcmVkID09ICdsZWZ0Jz8naXMtaG92ZXJlZCc6Jyd9YH1cclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7c2V0UHJlRm9vdGVySG92ZXJlZChcImxlZnRcIilcclxuICAgICAgICAgICAgc2V0UHJlZm9vdGVyTGVhdmUoJ3JpZ2h0Jyl9fVxyXG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRQcmVmb290ZXJMZWF2ZShcImxlZnRcIilcclxuICAgICAgICAgICAgc2V0UHJlRm9vdGVySG92ZXJlZCgnJyl9fT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiLi9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiUGFydG5lclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkxvb2tpbmcgZm9yIGEgcmVsaWFibGUgYXBwIGRldmVsb3BtZW50IHBhcnRuZXI/PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiTGluayBpcy1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiM3JlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ29udGFjdCBVc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bpcy1ncmlkLWl0ZW0gJHtwcmVGb290ZXJIb3ZlcmVkID09ICdyaWdodCc/J2lzLWhvdmVyZWQnOicnfWB9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7c2V0UHJlRm9vdGVySG92ZXJlZChcInJpZ2h0XCIpXHJcbiAgICAgICAgICAgICAgc2V0UHJlZm9vdGVyTGVhdmUoJ2xlZnQnKX19XHJcbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7c2V0UHJlZm9vdGVyTGVhdmUoXCJyaWdodFwiKVxyXG4gICAgICAgICAgICAgIHNldFByZUZvb3RlckhvdmVyZWQoJycpfX0+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdG1zLW91dHNvdXJjZS5jb20vc2VydmljZXMvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIlRpdGxlIGlzLWgzXCI+VmlldyBvdXIgU2VydmljZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJMaW5rIGlzLWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIzcmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBWaWV3IFNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9