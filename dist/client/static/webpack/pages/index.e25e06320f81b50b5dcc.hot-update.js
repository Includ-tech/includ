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
  }, "Includ is a team of passionate people highly motivated to provide expert level Web app solutions to businesses. We are focused on building high quality websites, fully responsive web interfaces, hybrid mobile applications and providing website design services. We use latest technologies to deliver an optimised product with high performance.", " "), __jsx("h", {
    className: "large-sub-heading",
    style: {
      marginTop: "10px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, "We have worked with various clients in different sectors. We also provide website maintenance and support services thereby maintaining a long lasting relationship with the client."))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, "Web Development"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "We provide website development and web app development services including ecommerce websites."), __jsx("a", {
    href: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, "Learn more"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    className: "pt-5 pb-sm-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/assets/images/website-development.svg",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    className: "pt-5 pb-5 d-sm-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, "Web Development"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, "We provide website development and web app development services including ecommerce websites."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, "Learn more")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    className: "pt-5 pb-sm-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/assets/images/hybrid-app-development.svg",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "5",
    className: "pt-5 pb-5 text-sm-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, "Hybrid App Development"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, "We provide hybrid app development services to businesses."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, "Learn more")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
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
      lineNumber: 143,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, "Web Designing"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, "We provide website designing services to clients."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, "Learn more"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    className: "pt-5 pb-sm-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/assets/images/website-designing.svg",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "6",
    className: "pt-5 pb-5 d-sm-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, "Web Designing"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, "We provide website designing services to clients."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, "Learn more"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    sm: "fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
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
      lineNumber: 178,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "d-flex justify-content-between align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "m-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, "Recent Projects"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "./portfolio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "is-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 15
    }
  }, "View More")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 6,
    className: "pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["container"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
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
      lineNumber: 189,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["middle"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["text"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
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
      lineNumber: 198,
      columnNumber: 19
    }
  }, "Hotel Management Software | Hotel Employee Management"))), __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["viewProject"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio/wrkspot",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }
  }, __jsx("h", {
    style: {
      display: "inline"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
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
      lineNumber: 207,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 23
    }
  }))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 6,
    className: "pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["container"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
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
      lineNumber: 224,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["middle"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["text"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
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
      lineNumber: 233,
      columnNumber: 19
    }
  }, "Battery Management System | Intelligent and Patented"))), __jsx("div", {
    className: _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__["viewProject"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio/igrenenergi",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, __jsx("h", {
    style: {
      display: "inline"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
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
      lineNumber: 242,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 23
    }
  }))))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
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
      lineNumber: 261,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 13
    }
  }, "Ready to Catch up on Your Application Development?"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "d-inline-block linkButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 15
    }
  }, "Lets start a project together"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    className: "pt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 11
    }
  }, __jsx("div", {
    id: "animationLine",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
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
      lineNumber: 295,
      columnNumber: 15
    }
  }, __jsx("g", {
    id: "background",
    transform: "translate(200.000000, 80.000000)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
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
      lineNumber: 302,
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
      lineNumber: 311,
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
      lineNumber: 312,
      columnNumber: 21
    }
  }, __jsx("mpath", {
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    xlinkHref: "#path",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
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
      lineNumber: 323,
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
      lineNumber: 335,
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
      lineNumber: 346,
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
      lineNumber: 358,
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
      lineNumber: 370,
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
      lineNumber: 382,
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
      lineNumber: 393,
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
      lineNumber: 404,
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
      lineNumber: 415,
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
      lineNumber: 424,
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
      lineNumber: 436,
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
      lineNumber: 444,
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
      lineNumber: 454,
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
      lineNumber: 466,
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
      lineNumber: 477,
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
      lineNumber: 488,
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
      lineNumber: 499,
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
      lineNumber: 508,
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
      lineNumber: 520,
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
      lineNumber: 530,
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
      lineNumber: 540,
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
      lineNumber: 552,
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
      lineNumber: 563,
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
      lineNumber: 574,
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
      lineNumber: 585,
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
      lineNumber: 594,
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
      lineNumber: 606,
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
      lineNumber: 614,
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
      lineNumber: 624,
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
      lineNumber: 638,
      columnNumber: 15
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639,
      columnNumber: 17
    }
  }, processContent[0].title), __jsx("div", {
    className: "text-center d-flex justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
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
      lineNumber: 641,
      columnNumber: 19
    }
  }, processContent[0].content))))))), __jsx(_PreFooter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLmpzIl0sIm5hbWVzIjpbInByb2Nlc3NBcnJheSIsImxhYmVsIiwidGl0bGUiLCJjb250ZW50IiwiSG9tZSIsIlJlYWN0IiwibWVtbyIsInVzZVN0YXRlIiwicHJvY2Vzc0xhYmVsIiwic2V0UHJvY2Vzc0xhYmVsIiwicHJlRm9vdGVySG92ZXJlZCIsInNldFByZUZvb3RlckhvdmVyZWQiLCJwcmVmb290ZXJMZWF2ZSIsInNldFByZWZvb3RlckxlYXZlIiwicHJvY2Vzc0NvbnRlbnQiLCJmaWx0ZXIiLCJlbCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpblRvcCIsInNwYW4iLCJvZmZzZXQiLCJkaXNwbGF5IiwibWF4V2lkdGgiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUcsQ0FDbkI7QUFDRUMsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsT0FBSyxFQUFFLFVBRlQ7QUFHRUMsU0FBTyxFQUNMO0FBSkosQ0FEbUIsRUFPbkI7QUFDRUYsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsT0FBSyxFQUFFLFVBRlQ7QUFHRUMsU0FBTyxFQUNMO0FBSkosQ0FQbUIsRUFhbkI7QUFDRUYsT0FBSyxFQUFFLGVBRFQ7QUFFRUMsT0FBSyxFQUFFLGVBRlQ7QUFHRUMsU0FBTyxFQUNMO0FBSkosQ0FibUIsRUFtQm5CO0FBQ0VGLE9BQUssRUFBRSxTQURUO0FBRUVDLE9BQUssRUFBRSxTQUZUO0FBR0VDLFNBQU8sRUFDTDtBQUpKLENBbkJtQixDQUFyQjtBQTJCQSxJQUFNQyxJQUFJLGdCQUFHQyw0Q0FBSyxDQUFDQyxJQUFOLFNBQVcsWUFBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLFVBQUQsQ0FEcEI7QUFB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QURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQ0x3QixjQUFRLEVBQUUsT0FETDtBQUVMTixnQkFBVSxFQUFFLE1BRlA7QUFHTE8sZUFBUyxFQUFFO0FBSE4sS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0diLGNBQWMsQ0FBQyxDQUFELENBQWQsQ0FBa0JYLE9BUHJCLENBREYsQ0FGRixDQXpWRixDQURGLENBREYsQ0FsQkYsQ0FwT0YsRUFtbUJFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5tQkYsQ0FERjtBQW9yQkQsQ0E1ckJZLGtDQUFiO01BQU1DLEk7QUE4ckJTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMjVlMDYzMjBmODFiNTBiNWRjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFR5cGluZ0FuaW1hdGlvbiBmcm9tIFwiLi9UeXBpbmdBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaG9tZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgUHJlRm9vdGVyIGZyb20gXCIuL1ByZUZvb3RlclwiO1xyXG5pbXBvcnQgUmVjb2duaXRpb25zIGZyb20gXCIuL1JlY29nbml0aW9uc1wiO1xyXG5cclxuY29uc3QgcHJvY2Vzc0FycmF5ID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiBcImlkZWF0aW9uXCIsXHJcbiAgICB0aXRsZTogXCJJZGVhdGlvblwiLFxyXG4gICAgY29udGVudDpcclxuICAgICAgXCJBbnkgd2ViIGFwcGxpY2F0aW9uIHN0YXJ0cyB3aXRoIGFuIGlkZWEsIGEgc29sdXRpb24gdG8gYSBwcm9ibGVtLCBvciBhbiBhdXRvbWF0aW9uIHRvb2wgZm9yIHNvbWUgaW5kdXN0cnkuIFdlIGNhbiBhc3Npc3QgY29tcGFuaWVzIGluIHRoaXMgc3RlcCwgYXMgb3VyIGV4cGVyaWVuY2Ugd2l0aCBkaWZmZXJlbnQgcHJvamVjdHMgYWxsb3dzIHVzIHRvIHNlZSB3aGV0aGVyIHNvbWV0aGluZyBpcyBmZWFzaWJsZSwgYW5kIGhvdyB0byBpbXBsZW1lbnQgaXQgYmV0dGVyLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6IFwicmVzZWFyY2hcIixcclxuICAgIHRpdGxlOiBcIlJlc2VhcmNoXCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIkVhY2ggcHJvamVjdCBuZWVkcyBhIGRldGFpbGVkIGFuYWx5c2lzIGJlZm9yZSBiZWluZyBoYW5kZWQgb3ZlciB0byBkZXZlbG9wbWVudC4gV2Ugd29yayB0b2dldGhlciB3aXRoIHRoZSBwcm9qZWN0IHN0YWtlaG9sZGVycyB0byBwcmVwYXJlIGEgZGV0YWlsZWQgY29tcGV0aXRpb24gYW5hbHlzaXMsIHRvIGlkZW50aWZ5IHNob3J0LXRlcm0gYW5kIGxvbmctdGVybSBidXNpbmVzcyBnb2FscywgdG8gcHJlcGFyZSBhIGxpc3Qgb2YgZmVhdHVyZXMsIGFuZCBzcGxpdCB0aGVzZSB0byBwbGFubmVkIHJlbGVhc2VzOyByZXNlYXJjaCBwaGFzZSByZXN1bHRzIGluIGFuIGluaXRpYWwgbGlzdCBvZiBkZXZlbG9wbWVudCBtaWxlc3RvbmVzLCBhbmQgYSByb2xsb3V0IHBsYW4gd2l0aCBwcmVsaW1pbmFyeSB0aW1lbGluZSBlc3RpbWF0aW9ucy5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiBcInNwcmludF9waGFzZXNcIixcclxuICAgIHRpdGxlOiBcIlNwcmludCBQaGFzZXNcIixcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgIFwiRGV2ZWxvcG1lbnQgaXMgZGl2aWRlZCBpbnRvIDItNC13ZWVrIHNwcmludHMsIGFuZCBhdCB0aGUgZW5kIG9mIGVhY2ggc3ByaW50LCBhIHBvdGVudGlhbGx5IHNoaXBwYWJsZSBwcm9kdWN0IGlzIGRlbGl2ZXJlZC4gRWFjaCBzcHJpbnQgaW5jbHVkZXMgZGVzaWduLCBkZXZlbG9wbWVudCwgdGVzdGluZywgYW5kIHJlbGVhc2Ugb2YgYSBudW1iZXIgb2YgZmVhdHVyZXMsIHRoaXMgd2F5IHdlIGluY3JlbWVudGFsbHkgYWRkIHBsYW5uZWQgZnVuY3Rpb25hbGl0aWVzIHRvIHRoZSBwcm9kdWN0LlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6IFwic3VwcG9ydFwiLFxyXG4gICAgdGl0bGU6IFwiU3VwcG9ydFwiLFxyXG4gICAgY29udGVudDpcclxuICAgICAgXCJBIGdyZWF0IHdlYiBhcHBsaWNhdGlvbiBpcyBub3QganVzdCBhIHBpZWNlIG9mIGZ1bmN0aW9uaW5nIGNvZGUuIEl0IGlzIGFsc28gdGVjaG5pY2FsIGRvY3VtZW50YXRpb24gYW5kIHVzZXIgdHV0b3JpYWxzLCBhbmQgYSByZWxpYWJsZSBzdXBwb3J0IHRlYW0gYmVoaW5kIGl0LCB3aGljaCBpcyBhYmxlIHRvIHJlc29sdmUgYW55IHRlY2huaWNhbCBvciB1c2VyIGV4cGVyaWVuY2UgaXNzdWVzLiBXZSBwcm92aWRlIHRlY2huaWNhbCBhbmQgY3VzdG9tZXIgc3VwcG9ydCBmb3Igb3VyIHByb2R1Y3RzIGFuZCBpbmNsdWRlIHRoaXMgc2VydmljZSBmb3Igb3VyIGN1c3RvbWVycy5cIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgSG9tZSA9IFJlYWN0Lm1lbW8oKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9jZXNzTGFiZWwsIHNldFByb2Nlc3NMYWJlbF0gPSB1c2VTdGF0ZShcImlkZWF0aW9uXCIpO1xyXG4gIGNvbnN0IFtwcmVGb290ZXJIb3ZlcmVkLCBzZXRQcmVGb290ZXJIb3ZlcmVkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmVmb290ZXJMZWF2ZSwgc2V0UHJlZm9vdGVyTGVhdmVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGxldCBwcm9jZXNzQ29udGVudCA9IHByb2Nlc3NBcnJheS5maWx0ZXIoKGVsKSA9PiBlbC5sYWJlbCA9PSBwcm9jZXNzTGFiZWwpO1xyXG4gIGNvbnNvbGUubG9nKHByZUZvb3RlckhvdmVyZWQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lfT5cclxuICAgICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9e3N0eWxlcy5IZXJvQmFubmVyfT5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cInBiLTUgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBjbGFzc05hbWU9XCJwYi1zbS01XCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCIgZGFyay1ibGFja1wiPlxyXG4gICAgICAgICAgICAgIFdlIGJ1aWxkIGdyZWF0IHdlYnNpdGVzICZhbXA7IHdlYiBhcHBzIHdpdGhcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRhcmstYmxhY2tcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxUeXBpbmdBbmltYXRpb24gLz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2BoZXJvLXN1Yi1oZWFkaW5nICR7c3R5bGVzLnN1YkhlYWRpbmd9YH0+XHJcbiAgICAgICAgICAgICAgUHJvdmlkaW5nIHRvcC1ub3RjaCBkaWdpdGFsIHNvbHV0aW9ucyB3aXRoIGEgZm9jdXMgb24geW91ciBvbmxpbmVcclxuICAgICAgICAgICAgICBidXNpbmVzcyBwcm9maXRhYmlsaXR5LlxyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBjbGFzc05hbWU9XCJwYi01IGQtc20tbm9uZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvaGVyby1iYW5uZXIuc3ZnXCIgd2lkdGg9XCIxMDAlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93PjwvUm93PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWRhcmsgbWItNVwiXHJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCI1MHB4XCIsIHBhZGRpbmdCb3R0b206IFwiODBweFwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRlY2hTb2x1dGlvbnN9IGB9PlxyXG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxDb2wgc209XCIxMFwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGhcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsLWhlYWRpbmcgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIycmVtXCIsIHBhZGRpbmdCb3R0b206IFwiMnJlbVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQUJPVVQgVVNcclxuICAgICAgICAgICAgICA8L2g+XHJcbiAgICAgICAgICAgICAgPGggY2xhc3NOYW1lPVwibGFyZ2Utc3ViLWhlYWRpbmdcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgSW5jbHVkIGlzIGEgdGVhbSBvZiBwYXNzaW9uYXRlIHBlb3BsZSBoaWdobHkgbW90aXZhdGVkIHRvXHJcbiAgICAgICAgICAgICAgICBwcm92aWRlIGV4cGVydCBsZXZlbCBXZWIgYXBwIHNvbHV0aW9ucyB0byBidXNpbmVzc2VzLiBXZSBhcmVcclxuICAgICAgICAgICAgICAgIGZvY3VzZWQgb24gYnVpbGRpbmcgaGlnaCBxdWFsaXR5IHdlYnNpdGVzLCBmdWxseSByZXNwb25zaXZlIHdlYlxyXG4gICAgICAgICAgICAgICAgaW50ZXJmYWNlcywgaHlicmlkIG1vYmlsZSBhcHBsaWNhdGlvbnMgYW5kIHByb3ZpZGluZyB3ZWJzaXRlXHJcbiAgICAgICAgICAgICAgICBkZXNpZ24gc2VydmljZXMuIFdlIHVzZSBsYXRlc3QgdGVjaG5vbG9naWVzIHRvIGRlbGl2ZXIgYW5cclxuICAgICAgICAgICAgICAgIG9wdGltaXNlZCBwcm9kdWN0IHdpdGggaGlnaCBwZXJmb3JtYW5jZS57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9oPlxyXG4gICAgICAgICAgICAgIDxoIGNsYXNzTmFtZT1cImxhcmdlLXN1Yi1oZWFkaW5nXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIFdlIGhhdmUgd29ya2VkIHdpdGggdmFyaW91cyBjbGllbnRzIGluIGRpZmZlcmVudCBzZWN0b3JzLiBXZVxyXG4gICAgICAgICAgICAgICAgYWxzbyBwcm92aWRlIHdlYnNpdGUgbWFpbnRlbmFuY2UgYW5kIHN1cHBvcnQgc2VydmljZXMgdGhlcmVieVxyXG4gICAgICAgICAgICAgICAgbWFpbnRhaW5pbmcgYSBsb25nIGxhc3RpbmcgcmVsYXRpb25zaGlwIHdpdGggdGhlIGNsaWVudC5cclxuICAgICAgICAgICAgICA8L2g+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICBtZD17eyBzcGFuOiA1LCBvZmZzZXQ6IDEgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtNSBwYi1zbS01IGQtbm9uZSBkLXNtLWJsb2NrXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgzPldlYiBEZXZlbG9wbWVudDwvaDM+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIFdlIHByb3ZpZGUgd2Vic2l0ZSBkZXZlbG9wbWVudCBhbmQgd2ViIGFwcCBkZXZlbG9wbWVudCBzZXJ2aWNlc1xyXG4gICAgICAgICAgICAgIGluY2x1ZGluZyBlY29tbWVyY2Ugd2Vic2l0ZXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGEgaHJlZj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpcy1saW5rXCI+TGVhcm4gbW9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT1cInB0LTUgcGItc20tNVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3dlYnNpdGUtZGV2ZWxvcG1lbnQuc3ZnXCIgd2lkdGg9XCIxMDAlXCIgLz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBzbT1cIjZcIiBjbGFzc05hbWU9XCJwdC01IHBiLTUgZC1zbS1ub25lXCI+XHJcbiAgICAgICAgICAgIDxoMz5XZWIgRGV2ZWxvcG1lbnQ8L2gzPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBXZSBwcm92aWRlIHdlYnNpdGUgZGV2ZWxvcG1lbnQgYW5kIHdlYiBhcHAgZGV2ZWxvcG1lbnQgc2VydmljZXNcclxuICAgICAgICAgICAgICBpbmNsdWRpbmcgZWNvbW1lcmNlIHdlYnNpdGVzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi9zZXJ2aWNlc1wifT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpcy1saW5rXCI+TGVhcm4gbW9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxDb2wgc209XCI2XCIgY2xhc3NOYW1lPVwicHQtNSBwYi1zbS01XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvaHlicmlkLWFwcC1kZXZlbG9wbWVudC5zdmdcIiB3aWR0aD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHNtPVwiNVwiIGNsYXNzTmFtZT1cInB0LTUgcGItNSB0ZXh0LXNtLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxoMz5IeWJyaWQgQXBwIERldmVsb3BtZW50PC9oMz5cclxuICAgICAgICAgICAgPHA+V2UgcHJvdmlkZSBoeWJyaWQgYXBwIGRldmVsb3BtZW50IHNlcnZpY2VzIHRvIGJ1c2luZXNzZXMuPC9wPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi4vc2VydmljZXNcIn0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXMtbGlua1wiPkxlYXJuIG1vcmU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8Q29sXHJcbiAgICAgICAgICAgIHNtPXt7IHNwYW46IDUsIG9mZnNldDogMSB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwdC01IHBiLTUgZC1ub25lIGQtc20tYmxvY2tcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDM+V2ViIERlc2lnbmluZzwvaDM+XHJcbiAgICAgICAgICAgIDxwPldlIHByb3ZpZGUgd2Vic2l0ZSBkZXNpZ25pbmcgc2VydmljZXMgdG8gY2xpZW50cy48L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi9zZXJ2aWNlc1wifT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpcy1saW5rXCI+TGVhcm4gbW9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHNtPVwiNlwiIGNsYXNzTmFtZT1cInB0LTUgcGItc20tNVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3dlYnNpdGUtZGVzaWduaW5nLnN2Z1wiIHdpZHRoPVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc209XCI2XCIgY2xhc3NOYW1lPVwicHQtNSBwYi01IGQtc20tbm9uZVwiPlxyXG4gICAgICAgICAgICA8aDM+V2ViIERlc2lnbmluZzwvaDM+XHJcbiAgICAgICAgICAgIDxwPldlIHByb3ZpZGUgd2Vic2l0ZSBkZXNpZ25pbmcgc2VydmljZXMgdG8gY2xpZW50cy48L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiLi9zZXJ2aWNlc1wifT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpcy1saW5rXCI+TGVhcm4gbW9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICB7LyogPFJvdz5cclxuICAgICAgICAgICAgPENvbCBzbT17MTJ9IGNsYXNzTmFtZT1cIiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXJcIiBzdHlsZT17eyBtYXhXaWR0aDogXCI5MDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgQ2hlY2sgb3V0IHNvZnR3YXJlIHByb2R1Y3RzIHdlIG1hZGUgdXNpbmcgUmVhY3RKUywgVnVlLmpzLFxyXG4gICAgICAgICAgICAgICAgU3ltZm9ueSwgUEhQLCBhbmQgb3RoZXIgdGVjaG5vbG9naWVzLlxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+ICovfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxDb250YWluZXIgc209XCJmbHVpZFwiPlxyXG4gICAgICAgIDxSb3cgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCI2MHB4XCIsIHBhZGRpbmdCb3R0b206IFwiMnJlbVwiIH19PlxyXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtLTBcIj5SZWNlbnQgUHJvamVjdHM8L2gzPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi4vcG9ydGZvbGlvXCJ9PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlzLWxpbmtcIj5WaWV3IE1vcmU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIHNtPXs2fSBjbGFzc05hbWU9XCJwYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvaG9tZS1iYW5uZXIyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWlkZGxlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj5XcmtTcG90PC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiMnJlbVwiLCBwYWRkaW5nVG9wOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICBIb3RlbCBNYW5hZ2VtZW50IFNvZnR3YXJlIHwgSG90ZWwgRW1wbG95ZWUgTWFuYWdlbWVudFxyXG4gICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3UHJvamVjdH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9wb3J0Zm9saW8vd3Jrc3BvdFwifT5cclxuICAgICAgICAgICAgICAgICAgPGggc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICBWaWV3IFByb2plY3R7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIxLjg4MyAxMmwtNy41MjcgNi4yMzUuNjQ0Ljc2NSA5LTcuNTIxLTktNy40NzktLjY0NS43NjQgNy41MjkgNi4yMzZoLTIxLjg4NHYxaDIxLjg4M3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2g+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHNtPXs2fSBjbGFzc05hbWU9XCJwYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvaG9tZS1iYW5uZXIyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWlkZGxlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj5pZ3JlbkVuZXJnaTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiBcIjJyZW1cIiwgcGFkZGluZ1RvcDogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQmF0dGVyeSBNYW5hZ2VtZW50IFN5c3RlbSB8IEludGVsbGlnZW50IGFuZCBQYXRlbnRlZFxyXG4gICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3UHJvamVjdH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9wb3J0Zm9saW8vaWdyZW5lbmVyZ2lcIn0+XHJcbiAgICAgICAgICAgICAgICAgIDxoIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgVmlldyBQcm9qZWN0e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMS44ODMgMTJsLTcuNTI3IDYuMjM1LjY0NC43NjUgOS03LjUyMS05LTcuNDc5LS42NDUuNzY0IDcuNTI5IDYuMjM2aC0yMS44ODR2MWgyMS44ODN6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9oPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgPFJvdyBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjYwcHhcIiwgcGFkZGluZ0JvdHRvbTogXCI0MHB4XCIgfX0+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxoMz5SZWFkeSB0byBDYXRjaCB1cCBvbiBZb3VyIEFwcGxpY2F0aW9uIERldmVsb3BtZW50PzwvaDM+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2NvbnRhY3RcIn0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgbGlua0J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgTGV0cyBzdGFydCBhIHByb2plY3QgdG9nZXRoZXJcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgey8qIDxSZWNvZ25pdGlvbnMgLz4gKi99XHJcbiAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwicHQtNVwiPlxyXG4gICAgICAgIHsvKiA8Um93PlxyXG4gICAgICAgICAgPENvbCBtZD17M30gY2xhc3NOYW1lPXtcImJvcmRlci1yaWdodCB0ZXh0LWxlZnQgXCJ9PlxyXG4gICAgICAgICAgICA8aDMgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogXCIwLjdyZW1cIiB9fT5XYXlzIHRvIHdvcmsgd2l0aCB1cz88L2gzPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiaXMtbGluayBcIiArIHN0eWxlcy53YXlzTGlua30+TGVhcm4gTW9yZTwvc3Bhbj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcInRleHQtbGVmdCBcIiArIHN0eWxlcy53YXlzQ29sfT5cclxuICAgICAgICAgICAgICBXZSBhdCBUTVMgYWN0IGFzIGFuIGludGVncmFsIHBhcnQgb2YgeW91ciBvcmdhbml6YXRpb24sIGZvY3VzaW5nXHJcbiAgICAgICAgICAgICAgb24gcHJvZHVjdCBmdW5jdGlvbmFsaXR5LCBlbmQtdXNlciBhZG9wdGlvbiwgcHJvYWN0aXZlIGFuZFxyXG4gICAgICAgICAgICAgIGNyZWF0aXZlIHRoaW5raW5nIGluIG9yZGVyIHRvIHN1cHBvcnQgeW91ciBvdmVyYWxsIGJ1c2luZXNzIGdvYWxzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgIFdlIGNhbiBoZWxwIHdpdGggcHJvZHVjdCBkZXZlbG9wbWVudCBvbmx5LCBidXQgd2Ugc2hpbmUgd2hlblxyXG4gICAgICAgICAgICAgIGFwcGx5aW5nIG91ciBmdWxsLWFwcC1saWZlY3ljbGUgYXBwcm9hY2guXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PiAqL31cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYW5pbWF0aW9uTGluZVwiPlxyXG4gICAgICAgICAgICAgIDxoMz5PdXIgUHJvY2VzczwvaDM+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjcwIDEwMCA3MDAgMzAwXCJcclxuICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJiYWNrZ3JvdW5kXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIwMC4wMDAwMDAsIDgwLjAwMDAwMClcIj5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI2Q3ZTNlNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PVwiNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTUsMTQ1LjYwMzRINDU1XCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInBhdGhcIlxyXG4gICAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPCEtLSBibHVlIGRvdCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9XCJwdWxzZVwiIHI9XCI2XCIgZmlsbD1cIiNkN2UzZTRcIiBvcGFjaXR5PVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlTW90aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIm9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjAuNnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYmVnaW49XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG1wYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeGxpbmtIcmVmPVwiI3BhdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvbXBhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImJsdWUtZG90LWRpc3NhcGVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZyb209XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRvPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIwLjFzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJmcmVlemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYmVnaW49XCJvcC5lbmQrMHNcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPCEtLSBmaXJzdCBjaXJjbGUgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRQcm9jZXNzTGFiZWwoXCJpZGVhdGlvblwiKX1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNpcmNsZTFfaG92ZXJfc3VyZmFjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNmZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBjeD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ1XCJcclxuICAgICAgICAgICAgICAgICAgICByPVwiODBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXJjbGUxX21lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE0NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjE0XCJcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGFuaW1hdGUgaWQ9XCJmaXJzdC1tZWRpdW1cIiBhdHRyaWJ1dGVUeXBlPVwiWE1MXCIgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIiBmcm9tPVwiMFwiIHRvPVwiMVwiIGR1cj1cIjAuN3NcIiBmaWxsPVwiZnJlZXplXCIgIGJlZ2luPVwib3AuYmVnaW4rMC4yOHNcIj48L2FuaW1hdGU+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2lyY2xlMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiUHJvY2Vzc0NpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM2QzYzRkZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCIxNDVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHI9XCI1XCJcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGFuaW1hdGUgaWQ9XCJmaXJzdFwiIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIiBhdHRyaWJ1dGVOYW1lPVwiclwiIGZyb209XCIwXCIgdG89XCI1XCIgZHVyPVwiMC4wMXNcIiBmaWxsPVwiZnJlZXplXCIgYmVnaW49XCJvcC5iZWdpbiswc1wiPjwvYW5pbWF0ZT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPHRleHRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImlkZWF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJQcm9jZXNzVGV4dCBpcy12aXNpYmxlQHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHg9XCItNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHk9XCIyNTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD17YCR7cHJvY2Vzc0xhYmVsID09IFwiaWRlYXRpb25cIiA/IFwiIzZDNjNGRlwiIDogXCIjMDAwXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIElkZWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxhbmltYXRlIGlkPVwiaWRlYXRpb24tYW5pbVwiIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIiBhdHRyaWJ1dGVOYW1lPVwieVwiIGZyb209XCIzNTBcIiB0bz1cIjI1MFwiIGR1cj1cIjAuMjVzXCIgZmlsbD1cImZyZWV6ZVwiIGJlZ2luPVwib3AuYmVnaW4rMC4yc1wiPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZSBpZD1cImlkZWF0aW9uLWFuaW0tb3BhY2l0eVwiIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIiBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiIGZyb209XCIwXCIgdG89XCIwLjZcIiBkdXI9XCIwLjZzXCIgZmlsbD1cImZyZWV6ZVwiIGJlZ2luPVwib3AuYmVnaW4rMC4yc1wiPjwvYW5pbWF0ZT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgey8qIDwhLS0gc2Vjb25kIGNpcmNsZSAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFByb2Nlc3NMYWJlbChcInJlc2VhcmNoXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2lyY2xlMl9ob3Zlcl9zdXJmYWNlXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI2ZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE0NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjgwXCJcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgID48L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2lyY2xlMl9tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlByb2Nlc3NDaXJjbGVNZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjRTM2NzY3XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE0NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjE0XCJcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzZWNvbmQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdG89XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjAuN3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImZyZWV6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbj1cIm9wLmJlZ2luKzAuMjhzXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9hbmltYXRlPlxyXG4gICAgICAgICAgICAgICAgICA8L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2lyY2xlMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiUHJvY2Vzc0NpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNFMzY3NjdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE0NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlY29uZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZyb209XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRvPVwiNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIwLjA4c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwib3AuYmVnaW4rMC4xOXNcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPHRleHRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInJlc2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJQcm9jZXNzVGV4dCBpcy12aXNpYmxlQHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHg9XCI5NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgeT1cIjI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD17YCR7cHJvY2Vzc0xhYmVsID09IFwicmVzZWFyY2hcIiA/IFwiI0UzNjc2N1wiIDogXCIjMDAwXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVzZWFyY2gtYW5pbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZyb209XCIzNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdG89XCIyNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMC4yOHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImZyZWV6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbj1cIm9wLmJlZ2luKzAuMnNcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVzZWFyY2gtYW5pbS1vcGFjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdG89XCIwLjZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMC42c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwib3AuYmVnaW4rMC4yc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgICAgICAgPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPCEtLSB0aGlyZCBjaXJjbGUgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRQcm9jZXNzTGFiZWwoXCJzcHJpbnRfcGhhc2VzXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2lyY2xlM19ob3Zlcl9zdXJmYWNlXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI2ZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE0NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjgwXCJcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgID48L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2lyY2xlM19tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlByb2Nlc3NDaXJjbGVNZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjRTlCQzI5XCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICBjeT1cIjE0NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjE0XCJcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aGlyZC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVHlwZT1cIlhNTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMC43c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwib3AuYmVnaW4rMC40M3NcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXJjbGUzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJQcm9jZXNzQ2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0U5QkMyOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ1XCJcclxuICAgICAgICAgICAgICAgICAgICByPVwiNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGhpcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVHlwZT1cIlhNTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwiclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMC4wOHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImZyZWV6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbj1cIm9wLmJlZ2luKzAuMjlzXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9hbmltYXRlPlxyXG4gICAgICAgICAgICAgICAgICA8L2NpcmNsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzcHJpbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlByb2Nlc3NUZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB4PVwiMjI1XCJcclxuICAgICAgICAgICAgICAgICAgICB5PVwiMjUwXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPXtgJHtcclxuICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NMYWJlbCA9PSBcInNwcmludF9waGFzZXNcIiA/IFwiI0U5QkMyOVwiIDogXCIjMDAwXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFNwcmludCBwaGFzZXNcclxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzcHJpbnQtYW5pbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZyb209XCIzNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdG89XCIyNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMC4zMXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImZyZWV6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbj1cIm9wLmJlZ2luKzAuMnNcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3ByaW50LWFuaW0tb3BhY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZyb209XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRvPVwiMC42XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjAuNnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImZyZWV6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbj1cIm9wLmJlZ2luKzAuMnNcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgey8qIDwhLS0gZm91cnRoIGNpcmNsZSAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFByb2Nlc3NMYWJlbChcInN1cHBvcnRcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXJjbGU0X2hvdmVyX3N1cmZhY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCI0NTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ1XCJcclxuICAgICAgICAgICAgICAgICAgICByPVwiODBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXJjbGU0X21lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiUHJvY2Vzc0NpcmNsZU1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMzN0IxOEVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCI0NTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ1XCJcclxuICAgICAgICAgICAgICAgICAgICByPVwiMTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImZvdXJ0aC1tZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVHlwZT1cIlhNTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMC43c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwib3AuYmVnaW4rMC41OXNcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXJjbGU0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJQcm9jZXNzQ2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzM3QjE4RVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY3g9XCI0NTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTQ1XCJcclxuICAgICAgICAgICAgICAgICAgICByPVwiNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZm91cnRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdG89XCI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjAuMDhzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJmcmVlemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYmVnaW49XCJvcC5iZWdpbiswLjM4c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgICAgICAgPC9jaXJjbGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8dGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3VwcG9ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiUHJvY2Vzc1RleHQgaXMtdmlzaWJsZUBzXCJcclxuICAgICAgICAgICAgICAgICAgICB4PVwiNDEwXCJcclxuICAgICAgICAgICAgICAgICAgICB5PVwiMjUwXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPXtgJHtwcm9jZXNzTGFiZWwgPT0gXCJzdXBwb3J0XCIgPyBcIiMzN0IxOEVcIiA6IFwiIzAwMFwifWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTdXBwb3J0XHJcbiAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3VwcG9ydC1hbmltXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT1cIjM1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIjI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkdXI9XCIwLjM0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiZnJlZXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luPVwib3AuYmVnaW4rMC4yc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdXBwb3J0LWFuaW0tb3BhY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZyb209XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRvPVwiMC42XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjAuNnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImZyZWV6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBiZWdpbj1cIm9wLmJlZ2luKzAuMnNcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiNXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGg0Pntwcm9jZXNzQ29udGVudFswXS50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI0MHJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9jZXNzQ29udGVudFswXS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxQcmVGb290ZXIgLz5cclxuXHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIkNUQVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQkdMZWZ0XCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YEJHTGVmdEltYWdlIGlzLXZpc2libGVAbSAke3ByZUZvb3RlckhvdmVyZWQgPT0gXCJsZWZ0XCIgPyBcInpvb21cIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICR7cHJlZm9vdGVyTGVhdmUgPT0gXCJsZWZ0XCIgPyBcInpvb21PdXRcIiA6IFwiXCJ9IGB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDpcclxuICAgICAgICAgICAgICAgIFwidXJsKCcvYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy1jdGEtMS5qcGcnKSBuby1yZXBlYXQgbGVmdCBjZW50ZXJcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCR1JpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YEJHUmlnaHRJbWFnZSBpcy12aXNpYmxlQG0gJHtcclxuICAgICAgICAgICAgICBwcmVGb290ZXJIb3ZlcmVkID09IFwicmlnaHRcIiA/IFwiem9vbVwiIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICR7cHJlZm9vdGVyTGVhdmUgPT0gXCJyaWdodFwiID8gXCJ6b29tT3V0XCIgOiBcIlwifSBgfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICAgICAgICAgICBcInVybCgnL2Fzc2V0cy9pbWFnZXMvc2VydmljZXMtY3RhLTEuanBnJykgbm8tcmVwZWF0IHJpZ2h0IGJvdHRvbVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJHR3JhZGllbnRcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXMtZ3JpZCBpcy1ncmlkLWNvbGxhcHNlIGlzLWNoaWxkLXdpZHRoLTEtMkBtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaXMtZ3JpZC1pdGVtICR7cHJlRm9vdGVySG92ZXJlZCA9PSAnbGVmdCc/J2lzLWhvdmVyZWQnOicnfWB9XHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge3NldFByZUZvb3RlckhvdmVyZWQoXCJsZWZ0XCIpXHJcbiAgICAgICAgICAgIHNldFByZWZvb3RlckxlYXZlKCdyaWdodCcpfX1cclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0UHJlZm9vdGVyTGVhdmUoXCJsZWZ0XCIpXHJcbiAgICAgICAgICAgIHNldFByZUZvb3RlckhvdmVyZWQoJycpfX0+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi4vXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlBhcnRuZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5Mb29raW5nIGZvciBhIHJlbGlhYmxlIGFwcCBkZXZlbG9wbWVudCBwYXJ0bmVyPzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkxpbmsgaXMtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjNyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXNcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaXMtZ3JpZC1pdGVtICR7cHJlRm9vdGVySG92ZXJlZCA9PSAncmlnaHQnPydpcy1ob3ZlcmVkJzonJ31gfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge3NldFByZUZvb3RlckhvdmVyZWQoXCJyaWdodFwiKVxyXG4gICAgICAgICAgICAgIHNldFByZWZvb3RlckxlYXZlKCdsZWZ0Jyl9fVxyXG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge3NldFByZWZvb3RlckxlYXZlKFwicmlnaHRcIilcclxuICAgICAgICAgICAgICBzZXRQcmVGb290ZXJIb3ZlcmVkKCcnKX19PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3Rtcy1vdXRzb3VyY2UuY29tL3NlcnZpY2VzL1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJBY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJUaXRsZSBpcy1oM1wiPlZpZXcgb3VyIFNlcnZpY2VzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiTGluayBpcy1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiM3JlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVmlldyBTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==