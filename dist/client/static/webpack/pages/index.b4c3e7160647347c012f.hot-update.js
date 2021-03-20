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
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["hero"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/assets/images/hero-banner.svg",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    className: "".concat(_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["techSolutions"], " "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "10",
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 76,
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
      lineNumber: 82,
      columnNumber: 15
    }
  }, "Includ is a team of passionate people highly motivated to provide expert level Web app solutions to businesses. We are focused on building high quality websites, fully responsive web interfaces, hybrid mobile applications and website design services. We use the latest technologies to deliver an optimised product with high performance. Our team has been working for clients in different sectors over the years. We also provide website maintenance and support services thereby maintaining a long lasting relationship with the client."))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, "Web Development"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "We provide website development and web app development services including ecommerce websites."), __jsx("a", {
    href: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, "Learn more"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    className: "pt-5 pb-sm-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/assets/images/website-development.svg",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    className: "pt-5 pb-5 d-sm-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, "Web Development"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "We provide website development and web app development services including ecommerce websites."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, "Learn more")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    className: "pt-5 pb-sm-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/assets/images/hybrid-app-development.svg",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "5",
    className: "pt-5 pb-5 text-sm-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, "Hybrid App Development"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, "We provide hybrid app development services to businesses."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, "Learn more")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
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
      lineNumber: 140,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, "Web Designing"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, "We provide website designing services to clients."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, "Learn more"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    className: "pt-5 pb-sm-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/assets/images/website-designing.svg",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    className: "pt-5 pb-5 d-sm-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, "Web Designing"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, "We provide website designing services to clients."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, "Learn more"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    sm: "fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
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
      lineNumber: 175,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "d-flex justify-content-between align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "m-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }, "Recent Projects"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./portfolio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }, "View More")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 6,
    className: "pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["container"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
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
      lineNumber: 186,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["middle"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["text"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
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
      lineNumber: 195,
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
      lineNumber: 270,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 11
    }
  }, __jsx("div", {
    id: "animationLine",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
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
      lineNumber: 292,
      columnNumber: 15
    }
  }, __jsx("g", {
    id: "background",
    transform: "translate(200.000000, 80.000000)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
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
      lineNumber: 299,
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
      lineNumber: 308,
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
      lineNumber: 309,
      columnNumber: 21
    }
  }, __jsx("mpath", {
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    xlinkHref: "#path",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
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
      lineNumber: 320,
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
      lineNumber: 332,
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
      lineNumber: 343,
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
      lineNumber: 355,
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
      lineNumber: 367,
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
      lineNumber: 379,
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
      lineNumber: 390,
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
      lineNumber: 401,
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
      lineNumber: 412,
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
      lineNumber: 421,
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
      lineNumber: 433,
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
      lineNumber: 441,
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
      lineNumber: 451,
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
      lineNumber: 463,
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
      lineNumber: 474,
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
      lineNumber: 485,
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
      lineNumber: 496,
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
      lineNumber: 505,
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
      lineNumber: 517,
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
      lineNumber: 527,
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
      lineNumber: 537,
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
      lineNumber: 549,
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
      lineNumber: 560,
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
      lineNumber: 571,
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
      lineNumber: 582,
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
      lineNumber: 591,
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
      lineNumber: 603,
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
      lineNumber: 611,
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
      lineNumber: 621,
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
      lineNumber: 635,
      columnNumber: 15
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 17
    }
  }, processContent[0].title), __jsx("div", {
    className: "text-center d-flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
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
      lineNumber: 638,
      columnNumber: 19
    }
  }, processContent[0].content))))))), __jsx(_PreFooter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLmpzIl0sIm5hbWVzIjpbInByb2Nlc3NBcnJheSIsImxhYmVsIiwidGl0bGUiLCJjb250ZW50IiwiSG9tZSIsIlJlYWN0IiwibWVtbyIsInVzZVN0YXRlIiwicHJvY2Vzc0xhYmVsIiwic2V0UHJvY2Vzc0xhYmVsIiwicHJlRm9vdGVySG92ZXJlZCIsInNldFByZUZvb3RlckhvdmVyZWQiLCJwcmVmb290ZXJMZWF2ZSIsInNldFByZWZvb3RlckxlYXZlIiwicHJvY2Vzc0NvbnRlbnQiLCJmaWx0ZXIiLCJlbCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpblRvcCIsInNwYW4iLCJvZmZzZXQiLCJkaXNwbGF5IiwibWF4V2lkdGgiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUcsQ0FDbkI7QUFDRUMsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsT0FBSyxFQUFFLFVBRlQ7QUFHRUMsU0FBTyxFQUNMO0FBSkosQ0FEbUIsRUFPbkI7QUFDRUYsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsT0FBSyxFQUFFLFVBRlQ7QUFHRUMsU0FBTyxFQUNMO0FBSkosQ0FQbUIsRUFhbkI7QUFDRUYsT0FBSyxFQUFFLGVBRFQ7QUFFRUMsT0FBSyxFQUFFLGVBRlQ7QUFHRUMsU0FBTyxFQUNMO0FBSkosQ0FibUIsRUFtQm5CO0FBQ0VGLE9BQUssRUFBRSxTQURUO0FBRUVDLE9BQUssRUFBRSxTQUZUO0FBR0VDLFNBQU8sRUFDTDtBQUpKLENBbkJtQixDQUFyQjtBQTJCQSxJQUFNQyxJQUFJLGdCQUFHQyw0Q0FBSyxDQUFDQyxJQUFOLFNBQVcsWUFBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLFVBQUQsQ0FEcEI7QUFB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RUFBRSxNQUZQO0FBR0xPLGVBQVMsRUFBRTtBQUhOLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HYixjQUFjLENBQUMsQ0FBRCxDQUFkLENBQWtCWCxPQVByQixDQURGLENBRkYsQ0F6VkYsQ0FERixDQURGLENBbEJGLENBak9GLEVBZ21CRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFobUJGLENBREY7QUFpckJELENBenJCWSxrQ0FBYjtNQUFNQyxJO0FBMnJCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjRjM2U3MTYwNjQ3MzQ3YzAxMmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBUeXBpbmdBbmltYXRpb24gZnJvbSBcIi4vVHlwaW5nQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2hvbWUubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFByZUZvb3RlciBmcm9tIFwiLi9QcmVGb290ZXJcIjtcclxuaW1wb3J0IFJlY29nbml0aW9ucyBmcm9tIFwiLi9SZWNvZ25pdGlvbnNcIjtcclxuXHJcbmNvbnN0IHByb2Nlc3NBcnJheSA9IFtcclxuICB7XHJcbiAgICBsYWJlbDogXCJpZGVhdGlvblwiLFxyXG4gICAgdGl0bGU6IFwiSWRlYXRpb25cIixcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgIFwiQW55IHdlYiBhcHBsaWNhdGlvbiBzdGFydHMgd2l0aCBhbiBpZGVhLCBhIHNvbHV0aW9uIHRvIGEgcHJvYmxlbSwgb3IgYW4gYXV0b21hdGlvbiB0b29sIGZvciBzb21lIGluZHVzdHJ5LiBXZSBjYW4gYXNzaXN0IGNvbXBhbmllcyBpbiB0aGlzIHN0ZXAsIGFzIG91ciBleHBlcmllbmNlIHdpdGggZGlmZmVyZW50IHByb2plY3RzIGFsbG93cyB1cyB0byBzZWUgd2hldGhlciBzb21ldGhpbmcgaXMgZmVhc2libGUsIGFuZCBob3cgdG8gaW1wbGVtZW50IGl0IGJldHRlci5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiBcInJlc2VhcmNoXCIsXHJcbiAgICB0aXRsZTogXCJSZXNlYXJjaFwiLFxyXG4gICAgY29udGVudDpcclxuICAgICAgXCJFYWNoIHByb2plY3QgbmVlZHMgYSBkZXRhaWxlZCBhbmFseXNpcyBiZWZvcmUgYmVpbmcgaGFuZGVkIG92ZXIgdG8gZGV2ZWxvcG1lbnQuIFdlIHdvcmsgdG9nZXRoZXIgd2l0aCB0aGUgcHJvamVjdCBzdGFrZWhvbGRlcnMgdG8gcHJlcGFyZSBhIGRldGFpbGVkIGNvbXBldGl0aW9uIGFuYWx5c2lzLCB0byBpZGVudGlmeSBzaG9ydC10ZXJtIGFuZCBsb25nLXRlcm0gYnVzaW5lc3MgZ29hbHMsIHRvIHByZXBhcmUgYSBsaXN0IG9mIGZlYXR1cmVzLCBhbmQgc3BsaXQgdGhlc2UgdG8gcGxhbm5lZCByZWxlYXNlczsgcmVzZWFyY2ggcGhhc2UgcmVzdWx0cyBpbiBhbiBpbml0aWFsIGxpc3Qgb2YgZGV2ZWxvcG1lbnQgbWlsZXN0b25lcywgYW5kIGEgcm9sbG91dCBwbGFuIHdpdGggcHJlbGltaW5hcnkgdGltZWxpbmUgZXN0aW1hdGlvbnMuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogXCJzcHJpbnRfcGhhc2VzXCIsXHJcbiAgICB0aXRsZTogXCJTcHJpbnQgUGhhc2VzXCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIkRldmVsb3BtZW50IGlzIGRpdmlkZWQgaW50byAyLTQtd2VlayBzcHJpbnRzLCBhbmQgYXQgdGhlIGVuZCBvZiBlYWNoIHNwcmludCwgYSBwb3RlbnRpYWxseSBzaGlwcGFibGUgcHJvZHVjdCBpcyBkZWxpdmVyZWQuIEVhY2ggc3ByaW50IGluY2x1ZGVzIGRlc2lnbiwgZGV2ZWxvcG1lbnQsIHRlc3RpbmcsIGFuZCByZWxlYXNlIG9mIGEgbnVtYmVyIG9mIGZlYXR1cmVzLCB0aGlzIHdheSB3ZSBpbmNyZW1lbnRhbGx5IGFkZCBwbGFubmVkIGZ1bmN0aW9uYWxpdGllcyB0byB0aGUgcHJvZHVjdC5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiBcInN1cHBvcnRcIixcclxuICAgIHRpdGxlOiBcIlN1cHBvcnRcIixcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgIFwiQSBncmVhdCB3ZWIgYXBwbGljYXRpb24gaXMgbm90IGp1c3QgYSBwaWVjZSBvZiBmdW5jdGlvbmluZyBjb2RlLiBJdCBpcyBhbHNvIHRlY2huaWNhbCBkb2N1bWVudGF0aW9uIGFuZCB1c2VyIHR1dG9yaWFscywgYW5kIGEgcmVsaWFibGUgc3VwcG9ydCB0ZWFtIGJlaGluZCBpdCwgd2hpY2ggaXMgYWJsZSB0byByZXNvbHZlIGFueSB0ZWNobmljYWwgb3IgdXNlciBleHBlcmllbmNlIGlzc3Vlcy4gV2UgcHJvdmlkZSB0ZWNobmljYWwgYW5kIGN1c3RvbWVyIHN1cHBvcnQgZm9yIG91ciBwcm9kdWN0cyBhbmQgaW5jbHVkZSB0aGlzIHNlcnZpY2UgZm9yIG91ciBjdXN0b21lcnMuXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IEhvbWUgPSBSZWFjdC5tZW1vKCgpID0+IHtcclxuICBjb25zdCBbcHJvY2Vzc0xhYmVsLCBzZXRQcm9jZXNzTGFiZWxdID0gdXNlU3RhdGUoXCJpZGVhdGlvblwiKTtcclxuICBjb25zdCBbcHJlRm9vdGVySG92ZXJlZCwgc2V0UHJlRm9vdGVySG92ZXJlZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJlZm9vdGVyTGVhdmUsIHNldFByZWZvb3RlckxlYXZlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBsZXQgcHJvY2Vzc0NvbnRlbnQgPSBwcm9jZXNzQXJyYXkuZmlsdGVyKChlbCkgPT4gZWwubGFiZWwgPT0gcHJvY2Vzc0xhYmVsKTtcclxuICBjb25zb2xlLmxvZyhwcmVGb290ZXJIb3ZlcmVkKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZX0+XHJcbiAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPXtzdHlsZXMuSGVyb0Jhbm5lcn0+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJwYi01IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPENvbCB4cz1cIjEyXCIgY2xhc3NOYW1lPVwicGItc20tNVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIGRhcmstYmxhY2tcIj5cclxuICAgICAgICAgICAgICBXZSBidWlsZCBncmVhdCB3ZWJzaXRlcyAmYW1wOyB3ZWIgYXBwcyB3aXRoXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkYXJrLWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8VHlwaW5nQW5pbWF0aW9uIC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtgaGVyby1zdWItaGVhZGluZyAke3N0eWxlcy5zdWJIZWFkaW5nfWB9PlxyXG4gICAgICAgICAgICBQcm92aWRpbmcgdG9wLW5vdGNoIGRpZ2l0YWwgc29sdXRpb25zIHdpdGggYSBmb2N1cyBvbiB5b3VyIG9ubGluZSBidXNpbmVzcyBwcm9maXRhYmlsaXR5LlxyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBjbGFzc05hbWU9XCJwYi01IGQtc20tbm9uZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvaGVyby1iYW5uZXIuc3ZnXCIgd2lkdGg9XCIxMDAlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93PjwvUm93PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWRhcmsgbWItNVwiXHJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCI1MHB4XCIsIHBhZGRpbmdCb3R0b206IFwiODBweFwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRlY2hTb2x1dGlvbnN9IGB9PlxyXG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxDb2wgc209XCIxMFwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGhcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsLWhlYWRpbmcgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIycmVtXCIsIHBhZGRpbmdCb3R0b206IFwiMnJlbVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQUJPVVQgVVNcclxuICAgICAgICAgICAgICA8L2g+XHJcbiAgICAgICAgICAgICAgPGggY2xhc3NOYW1lPVwibGFyZ2Utc3ViLWhlYWRpbmdcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgSW5jbHVkIGlzIGEgdGVhbSBvZiBwYXNzaW9uYXRlIHBlb3BsZSBoaWdobHkgbW90aXZhdGVkIHRvXHJcbiAgICAgICAgICAgICAgICBwcm92aWRlIGV4cGVydCBsZXZlbCBXZWIgYXBwIHNvbHV0aW9ucyB0byBidXNpbmVzc2VzLiBXZSBhcmVcclxuICAgICAgICAgICAgICAgIGZvY3VzZWQgb24gYnVpbGRpbmcgaGlnaCBxdWFsaXR5IHdlYnNpdGVzLCBmdWxseSByZXNwb25zaXZlIHdlYlxyXG4gICAgICAgICAgICAgICAgaW50ZXJmYWNlcywgaHlicmlkIG1vYmlsZSBhcHBsaWNhdGlvbnMgYW5kIHdlYnNpdGUgZGVzaWduXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlcy4gV2UgdXNlIHRoZSBsYXRlc3QgdGVjaG5vbG9naWVzIHRvIGRlbGl2ZXIgYW4gb3B0aW1pc2VkXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0IHdpdGggaGlnaCBwZXJmb3JtYW5jZS4gT3VyIHRlYW0gaGFzIGJlZW4gd29ya2luZyBmb3JcclxuICAgICAgICAgICAgICAgIGNsaWVudHMgaW4gZGlmZmVyZW50IHNlY3RvcnMgb3ZlciB0aGUgeWVhcnMuIFdlIGFsc28gcHJvdmlkZVxyXG4gICAgICAgICAgICAgICAgd2Vic2l0ZSBtYWludGVuYW5jZSBhbmQgc3VwcG9ydCBzZXJ2aWNlcyB0aGVyZWJ5IG1haW50YWluaW5nIGFcclxuICAgICAgICAgICAgICAgIGxvbmcgbGFzdGluZyByZWxhdGlvbnNoaXAgd2l0aCB0aGUgY2xpZW50LlxyXG4gICAgICAgICAgICAgIDwvaD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgIG1kPXt7IHNwYW46IDUsIG9mZnNldDogMSB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwdC01IHBiLXNtLTUgZC1ub25lIGQtc20tYmxvY2tcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDM+V2ViIERldmVsb3BtZW50PC9oMz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgV2UgcHJvdmlkZSB3ZWJzaXRlIGRldmVsb3BtZW50IGFuZCB3ZWIgYXBwIGRldmVsb3BtZW50IHNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgaW5jbHVkaW5nIGVjb21tZXJjZSB3ZWJzaXRlcy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8YSBocmVmPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlzLWxpbmtcIj5MZWFybiBtb3JlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc209XCI2XCIgY2xhc3NOYW1lPVwicHQtNSBwYi1zbS01XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvd2Vic2l0ZS1kZXZlbG9wbWVudC5zdmdcIiB3aWR0aD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT1cInB0LTUgcGItNSBkLXNtLW5vbmVcIj5cclxuICAgICAgICAgICAgPGgzPldlYiBEZXZlbG9wbWVudDwvaDM+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIFdlIHByb3ZpZGUgd2Vic2l0ZSBkZXZlbG9wbWVudCBhbmQgd2ViIGFwcCBkZXZlbG9wbWVudCBzZXJ2aWNlc1xyXG4gICAgICAgICAgICAgIGluY2x1ZGluZyBlY29tbWVyY2Ugd2Vic2l0ZXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIuL3NlcnZpY2VzXCJ9PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlzLWxpbmtcIj5MZWFybiBtb3JlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPENvbCBzbT1cIjZcIiBjbGFzc05hbWU9XCJwdC01IHBiLXNtLTVcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9oeWJyaWQtYXBwLWRldmVsb3BtZW50LnN2Z1wiIHdpZHRoPVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc209XCI1XCIgY2xhc3NOYW1lPVwicHQtNSBwYi01IHRleHQtc20tcmlnaHRcIj5cclxuICAgICAgICAgICAgPGgzPkh5YnJpZCBBcHAgRGV2ZWxvcG1lbnQ8L2gzPlxyXG4gICAgICAgICAgICA8cD5XZSBwcm92aWRlIGh5YnJpZCBhcHAgZGV2ZWxvcG1lbnQgc2VydmljZXMgdG8gYnVzaW5lc3Nlcy48L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi9zZXJ2aWNlc1wifT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpcy1saW5rXCI+TGVhcm4gbW9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxDb2xcclxuICAgICAgICAgICAgc209e3sgc3BhbjogNSwgb2Zmc2V0OiAxIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTUgcGItNSBkLW5vbmUgZC1zbS1ibG9ja1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMz5XZWIgRGVzaWduaW5nPC9oMz5cclxuICAgICAgICAgICAgPHA+V2UgcHJvdmlkZSB3ZWJzaXRlIGRlc2lnbmluZyBzZXJ2aWNlcyB0byBjbGllbnRzLjwvcD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIuL3NlcnZpY2VzXCJ9PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlzLWxpbmtcIj5MZWFybiBtb3JlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc209XCI2XCIgY2xhc3NOYW1lPVwicHQtNSBwYi1zbS01XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvd2Vic2l0ZS1kZXNpZ25pbmcuc3ZnXCIgd2lkdGg9XCIxMDAlXCIgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBzbT1cIjZcIiBjbGFzc05hbWU9XCJwdC01IHBiLTUgZC1zbS1ub25lXCI+XHJcbiAgICAgICAgICAgIDxoMz5XZWIgRGVzaWduaW5nPC9oMz5cclxuICAgICAgICAgICAgPHA+V2UgcHJvdmlkZSB3ZWJzaXRlIGRlc2lnbmluZyBzZXJ2aWNlcyB0byBjbGllbnRzLjwvcD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIuL3NlcnZpY2VzXCJ9PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlzLWxpbmtcIj5MZWFybiBtb3JlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgIHsvKiA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHNtPXsxMn0gY2xhc3NOYW1lPVwiIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIiB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjkwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICBDaGVjayBvdXQgc29mdHdhcmUgcHJvZHVjdHMgd2UgbWFkZSB1c2luZyBSZWFjdEpTLCBWdWUuanMsXHJcbiAgICAgICAgICAgICAgICBTeW1mb255LCBQSFAsIGFuZCBvdGhlciB0ZWNobm9sb2dpZXMuXHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz4gKi99XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPENvbnRhaW5lciBzbT1cImZsdWlkXCI+XHJcbiAgICAgICAgPFJvdyBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjYwcHhcIiwgcGFkZGluZ0JvdHRvbTogXCIycmVtXCIgfX0+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm0tMFwiPlJlY2VudCBQcm9qZWN0czwvaDM+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi9wb3J0Zm9saW9cIn0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXMtbGlua1wiPlZpZXcgTW9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgc209ezZ9IGNsYXNzTmFtZT1cInBiLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmltYWdlfWB9XHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9ob21lLWJhbm5lcjIucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5taWRkbGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgPGgyPldya1Nwb3Q8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogXCIycmVtXCIsIHBhZGRpbmdUb3A6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEhvdGVsIE1hbmFnZW1lbnQgU29mdHdhcmUgfCBIb3RlbCBFbXBsb3llZVxyXG4gICAgICAgICAgICAgICAgICAgIE1hbmFnZW1lbnRcclxuICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld1Byb2plY3R9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvcG9ydGZvbGlvL3dya3Nwb3RcIn0+XHJcbiAgICAgICAgICAgICAgICAgIDxoIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgVmlldyBQcm9qZWN0e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMS44ODMgMTJsLTcuNTI3IDYuMjM1LjY0NC43NjUgOS03LjUyMS05LTcuNDc5LS42NDUuNzY0IDcuNTI5IDYuMjM2aC0yMS44ODR2MWgyMS44ODN6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9oPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBzbT17Nn0gY2xhc3NOYW1lPVwicGItNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2hvbWUtYmFubmVyMi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1pZGRsZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICA8aDI+aWdyZW5FbmVyZ2k8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogXCIycmVtXCIsIHBhZGRpbmdUb3A6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEJhdHRlcnkgTWFuYWdlbWVudCBTeXN0ZW0gfCBJbnRlbGxpZ2VudCBhbmQgUGF0ZW50ZWRcclxuICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlld1Byb2plY3R9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvcG9ydGZvbGlvL2lncmVuZW5lcmdpXCJ9PlxyXG4gICAgICAgICAgICAgICAgICA8aCBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIFZpZXcgUHJvamVjdHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjEuODgzIDEybC03LjUyNyA2LjIzNS42NDQuNzY1IDktNy41MjEtOS03LjQ3OS0uNjQ1Ljc2NCA3LjUyOSA2LjIzNmgtMjEuODg0djFoMjEuODgzelwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvaD5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgIDxSb3cgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCI2MHB4XCIsIHBhZGRpbmdCb3R0b206IFwiNDBweFwiIH19PlxyXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aDM+UmVhZHkgdG8gQ2F0Y2ggdXAgb24gWW91ciBBcHBsaWNhdGlvbiBEZXZlbG9wbWVudD88L2gzPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9jb250YWN0XCJ9ID5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBsaW5rQnV0dG9uXCI+TGV0cyBzdGFydCBhIHByb2plY3QgdG9nZXRoZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgey8qIDxSZWNvZ25pdGlvbnMgLz4gKi99XHJcbiAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwicHQtNVwiPlxyXG4gICAgICAgIHsvKiA8Um93PlxyXG4gICAgICAgICAgPENvbCBtZD17M30gY2xhc3NOYW1lPXtcImJvcmRlci1yaWdodCB0ZXh0LWxlZnQgXCJ9PlxyXG4gICAgICAgICAgICA8aDMgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogXCIwLjdyZW1cIiB9fT5XYXlzIHRvIHdvcmsgd2l0aCB1cz88L2gzPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiaXMtbGluayBcIiArIHN0eWxlcy53YXlzTGlua30+TGVhcm4gTW9yZTwvc3Bhbj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcInRleHQtbGVmdCBcIiArIHN0eWxlcy53YXlzQ29sfT5cclxuICAgICAgICAgICAgICBXZSBhdCBUTVMgYWN0IGFzIGFuIGludGVncmFsIHBhcnQgb2YgeW91ciBvcmdhbml6YXRpb24sIGZvY3VzaW5nXHJcbiAgICAgICAgICAgICAgb24gcHJvZHVjdCBmdW5jdGlvbmFsaXR5LCBlbmQtdXNlciBhZG9wdGlvbiwgcHJvYWN0aXZlIGFuZFxyXG4gICAgICAgICAgICAgIGNyZWF0aXZlIHRoaW5raW5nIGluIG9yZGVyIHRvIHN1cHBvcnQgeW91ciBvdmVyYWxsIGJ1c2luZXNzIGdvYWxzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgIFdlIGNhbiBoZWxwIHdpdGggcHJvZHVjdCBkZXZlbG9wbWVudCBvbmx5LCBidXQgd2Ugc2hpbmUgd2hlblxyXG4gICAgICAgICAgICAgIGFwcGx5aW5nIG91ciBmdWxsLWFwcC1saWZlY3ljbGUgYXBwcm9hY2guXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PiAqL31cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYW5pbWF0aW9uTGluZVwiPlxyXG4gICAgICAgICAgICAgIDxoMz5PdXIgUHJvY2VzczwvaDM+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjcwIDEwMCA3MDAgMzAwXCJcclxuICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJiYWNrZ3JvdW5kXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIwMC4wMDAwMDAsIDgwLjAwMDAwMClcIj5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI2Q3ZTNlNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PVwiNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTUsMTQ1LjYwMzRINDU1XCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhdGhcIlxyXG4gICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPCEtLSBibHVlIGRvdCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJwdWxzZVwiIHI9XCI2XCIgZmlsbD1cIiNkN2UzZTRcIiBvcGFjaXR5PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlTW90aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIm9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjAuNnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYmVnaW49XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG1wYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeGxpbmtIcmVmPVwiI3BhdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvbXBhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImJsdWUtZG90LWRpc3NhcGVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZyb209XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRvPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIwLjFzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJmcmVlemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYmVnaW49XCJvcC5lbmQrMHNcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPCEtLSBmaXJzdCBjaXJjbGUgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRQcm9jZXNzTGFiZWwoXCJpZGVhdGlvblwiKX1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNpcmNsZTFfaG92ZXJfc3VyZmFjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNmZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBjeD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ1XCJcclxuICAgICAgICAgICAgICAgICAgICByPVwiODBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXJjbGUxX21lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE0NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjE0XCJcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGFuaW1hdGUgaWQ9XCJmaXJzdC1tZWRpdW1cIiBhdHRyaWJ1dGVUeXBlPVwiWE1MXCIgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiBmcm9tPVwiMFwiIHRvPVwiMVwiIGR1cj1cIjAuN3NcIiBmaWxsPVwiZnJlZXplXCIgIGJlZ2luPVwib3AuYmVnaW4rMC4yOHNcIj48L2FuaW1hdGU+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2lyY2xlMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiUHJvY2Vzc0NpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCIxNDVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHI9XCI1XCJcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGFuaW1hdGUgaWQ9XCJmaXJzdFwiIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIiBhdHRyaWJ1dGVOYW1lPVwiclwiIGZyb209XCIwXCIgdG89XCI1XCIgZHVyPVwiMC4wMXNcIiBmaWxsPVwiZnJlZXplXCIgYmVnaW49XCJvcC5iZWdpbiswc1wiPjwvYW5pbWF0ZT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPHRleHRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImlkZWF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJQcm9jZXNzVGV4dCBpcy12aXNpYmxlQHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHg9XCItNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHk9XCIyNTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD17YCR7cHJvY2Vzc0xhYmVsID09IFwiaWRlYXRpb25cIiA/IFwiIzZDNjNGRlwiIDogXCIjMDAwXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIElkZWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxhbmltYXRlIGlkPVwiaWRlYXRpb24tYW5pbVwiIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIiBhdHRyaWJ1dGVOYW1lPVwieVwiIGZyb209XCIzNTBcIiB0bz1cIjI1MFwiIGR1cj1cIjAuMjVzXCIgZmlsbD1cImZyZWV6ZVwiIGJlZ2luPVwib3AuYmVnaW4rMC4yc1wiPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBpZD1cImlkZWF0aW9uLWFuaW0tb3BhY2l0eVwiIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIiBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIGZyb209XCIwXCIgdG89XCIwLjZcIiBkdXI9XCIwLjZzXCIgZmlsbD1cImZyZWV6ZVwiIGJlZ2luPVwib3AuYmVnaW4rMC4yc1wiPjwvYW5pbWF0ZT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgey8qIDwhLS0gc2Vjb25kIGNpcmNsZSAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFByb2Nlc3NMYWJlbChcInJlc2VhcmNoXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2lyY2xlMl9ob3Zlcl9zdXJmYWNlXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI2ZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE0NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjgwXCJcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgID48L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2lyY2xlMl9tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlByb2Nlc3NDaXJjbGVNZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjRTM2NzY3XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE0NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjE0XCJcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzZWNvbmQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdG89XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjAuN3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImZyZWV6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbj1cIm9wLmJlZ2luKzAuMjhzXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9hbmltYXRlPlxyXG4gICAgICAgICAgICAgICAgICA8L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2lyY2xlMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiUHJvY2Vzc0NpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNFMzY3NjdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE0NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlY29uZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZyb209XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRvPVwiNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIwLjA4c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwib3AuYmVnaW4rMC4xOXNcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPHRleHRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInJlc2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJQcm9jZXNzVGV4dCBpcy12aXNpYmxlQHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHg9XCI5NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgeT1cIjI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD17YCR7cHJvY2Vzc0xhYmVsID09IFwicmVzZWFyY2hcIiA/IFwiI0UzNjc2N1wiIDogXCIjMDAwXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVzZWFyY2gtYW5pbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZyb209XCIzNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdG89XCIyNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMC4yOHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImZyZWV6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbj1cIm9wLmJlZ2luKzAuMnNcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVzZWFyY2gtYW5pbS1vcGFjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdG89XCIwLjZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMC42c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwib3AuYmVnaW4rMC4yc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPCEtLSB0aGlyZCBjaXJjbGUgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRQcm9jZXNzTGFiZWwoXCJzcHJpbnRfcGhhc2VzXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2lyY2xlM19ob3Zlcl9zdXJmYWNlXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI2ZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE0NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjgwXCJcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgID48L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2lyY2xlM19tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlByb2Nlc3NDaXJjbGVNZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjRTlCQzI5XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE0NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjE0XCJcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aGlyZC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVHlwZT1cIlhNTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMC43c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwib3AuYmVnaW4rMC40M3NcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXJjbGUzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJQcm9jZXNzQ2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0U5QkMyOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ1XCJcclxuICAgICAgICAgICAgICAgICAgICByPVwiNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGhpcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVHlwZT1cIlhNTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwiclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMC4wOHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImZyZWV6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbj1cIm9wLmJlZ2luKzAuMjlzXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9hbmltYXRlPlxyXG4gICAgICAgICAgICAgICAgICA8L2NpcmNsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzcHJpbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlByb2Nlc3NUZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB4PVwiMjI1XCJcclxuICAgICAgICAgICAgICAgICAgICB5PVwiMjUwXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPXtgJHtcclxuICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NMYWJlbCA9PSBcInNwcmludF9waGFzZXNcIiA/IFwiI0U5QkMyOVwiIDogXCIjMDAwXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNwcmludCBwaGFzZXNcclxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzcHJpbnQtYW5pbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZyb209XCIzNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdG89XCIyNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMC4zMXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImZyZWV6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbj1cIm9wLmJlZ2luKzAuMnNcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3ByaW50LWFuaW0tb3BhY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZyb209XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRvPVwiMC42XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjAuNnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImZyZWV6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbj1cIm9wLmJlZ2luKzAuMnNcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgey8qIDwhLS0gZm91cnRoIGNpcmNsZSAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFByb2Nlc3NMYWJlbChcInN1cHBvcnRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXJjbGU0X2hvdmVyX3N1cmZhY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCI0NTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ1XCJcclxuICAgICAgICAgICAgICAgICAgICByPVwiODBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXJjbGU0X21lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiUHJvY2Vzc0NpcmNsZU1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMzN0IxOEVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCI0NTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ1XCJcclxuICAgICAgICAgICAgICAgICAgICByPVwiMTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImZvdXJ0aC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVHlwZT1cIlhNTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMC43c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwib3AuYmVnaW4rMC41OXNcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXJjbGU0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJQcm9jZXNzQ2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzM3QjE4RVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCI0NTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ1XCJcclxuICAgICAgICAgICAgICAgICAgICByPVwiNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZm91cnRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdG89XCI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjAuMDhzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJmcmVlemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYmVnaW49XCJvcC5iZWdpbiswLjM4c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgICAgICAgPC9jaXJjbGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8dGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3VwcG9ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiUHJvY2Vzc1RleHQgaXMtdmlzaWJsZUBzXCJcclxuICAgICAgICAgICAgICAgICAgICB4PVwiNDEwXCJcclxuICAgICAgICAgICAgICAgICAgICB5PVwiMjUwXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPXtgJHtwcm9jZXNzTGFiZWwgPT0gXCJzdXBwb3J0XCIgPyBcIiMzN0IxOEVcIiA6IFwiIzAwMFwifWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTdXBwb3J0XHJcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3VwcG9ydC1hbmltXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT1cIjM1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIjI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIwLjM0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwib3AuYmVnaW4rMC4yc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdXBwb3J0LWFuaW0tb3BhY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZyb209XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRvPVwiMC42XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjAuNnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImZyZWV6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbj1cIm9wLmJlZ2luKzAuMnNcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiNXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGg0Pntwcm9jZXNzQ29udGVudFswXS50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI0MHJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9jZXNzQ29udGVudFswXS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxQcmVGb290ZXIgLz5cclxuXHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIkNUQVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQkdMZWZ0XCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YEJHTGVmdEltYWdlIGlzLXZpc2libGVAbSAke3ByZUZvb3RlckhvdmVyZWQgPT0gXCJsZWZ0XCIgPyBcInpvb21cIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICR7cHJlZm9vdGVyTGVhdmUgPT0gXCJsZWZ0XCIgPyBcInpvb21PdXRcIiA6IFwiXCJ9IGB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDpcclxuICAgICAgICAgICAgICAgIFwidXJsKCcvYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy1jdGEtMS5qcGcnKSBuby1yZXBlYXQgbGVmdCBjZW50ZXJcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCR1JpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YEJHUmlnaHRJbWFnZSBpcy12aXNpYmxlQG0gJHtcclxuICAgICAgICAgICAgICBwcmVGb290ZXJIb3ZlcmVkID09IFwicmlnaHRcIiA/IFwiem9vbVwiIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICR7cHJlZm9vdGVyTGVhdmUgPT0gXCJyaWdodFwiID8gXCJ6b29tT3V0XCIgOiBcIlwifSBgfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICAgICAgICAgICBcInVybCgnL2Fzc2V0cy9pbWFnZXMvc2VydmljZXMtY3RhLTEuanBnJykgbm8tcmVwZWF0IHJpZ2h0IGJvdHRvbVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJHR3JhZGllbnRcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXMtZ3JpZCBpcy1ncmlkLWNvbGxhcHNlIGlzLWNoaWxkLXdpZHRoLTEtMkBtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaXMtZ3JpZC1pdGVtICR7cHJlRm9vdGVySG92ZXJlZCA9PSAnbGVmdCc/J2lzLWhvdmVyZWQnOicnfWB9XHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge3NldFByZUZvb3RlckhvdmVyZWQoXCJsZWZ0XCIpXHJcbiAgICAgICAgICAgIHNldFByZWZvb3RlckxlYXZlKCdyaWdodCcpfX1cclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0UHJlZm9vdGVyTGVhdmUoXCJsZWZ0XCIpXHJcbiAgICAgICAgICAgIHNldFByZUZvb3RlckhvdmVyZWQoJycpfX0+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi4vXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlBhcnRuZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5Mb29raW5nIGZvciBhIHJlbGlhYmxlIGFwcCBkZXZlbG9wbWVudCBwYXJ0bmVyPzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkxpbmsgaXMtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjNyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXNcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaXMtZ3JpZC1pdGVtICR7cHJlRm9vdGVySG92ZXJlZCA9PSAncmlnaHQnPydpcy1ob3ZlcmVkJzonJ31gfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge3NldFByZUZvb3RlckhvdmVyZWQoXCJyaWdodFwiKVxyXG4gICAgICAgICAgICAgIHNldFByZWZvb3RlckxlYXZlKCdsZWZ0Jyl9fVxyXG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge3NldFByZWZvb3RlckxlYXZlKFwicmlnaHRcIilcclxuICAgICAgICAgICAgICBzZXRQcmVGb290ZXJIb3ZlcmVkKCcnKX19PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3Rtcy1vdXRzb3VyY2UuY29tL3NlcnZpY2VzL1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJBY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJUaXRsZSBpcy1oM1wiPlZpZXcgb3VyIFNlcnZpY2VzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiTGluayBpcy1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiM3JlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVmlldyBTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==