module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("HfNV");


/***/ }),

/***/ "7fZ1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_banner_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("VAaA");
/* harmony import */ var _styles_banner_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_banner_module_css__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const {
  banner,
  smallHeading
} = _styles_banner_module_css__WEBPACK_IMPORTED_MODULE_3__;
function Banner(props) {
  const {
    heading,
    subHeading,
    url
  } = props;
  return __jsx("div", {
    className: banner
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      paddingBottom: "2rem"
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx("h", {
    className: "small-heading"
  }, heading))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 9
  }, __jsx("h", {
    className: "large-sub-heading",
    style: {
      lineHeight: "3rem"
    }
  }, subHeading), url && __jsx("div", {
    className: "mt-2"
  }, __jsx("a", {
    href: url,
    className: "is-link",
    target: "_blank"
  }, url))))));
}

/***/ }),

/***/ "HfNV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7fZ1");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_BannerDescription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qAxh");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const projectDetail = props => {
  const tabsContent = [{
    tab: "service",
    title: "Afleo",
    subTitle: "Afleo - DGFT Consultants (MEIS/SEIS/EPCG/Advance Authorisation)",
    imgs: ["afleo-web.png", "afleo-mobile.png"],
    slug: "afleo",
    techStack: "HTML5, CSS3, JavaScript, WordPress",
    url: "https://afleo.com/",
    screen: "screen-afleo.png"
  }, {
    tab: "products",
    title: "El Sativo",
    subTitle: "El Sativo Tequila",
    imgs: ["elsativo-web.png", "elsativo-mobile.png"],
    slug: "elsativo",
    techStack: "HTML5, CSS3, JavaScript, Git, Bootstrap",
    url: "http://elsativo.com/",
    screen: "screen-elsativo.png"
  }, {
    tab: "products",
    title: "Myglamm",
    subTitle: "Buy International Beauty Products - Skin Care, Makeup Kits, Cosmetics & Sanitizers Online",
    imgs: ["myglamm-mobile.png"],
    slug: "myglamm",
    techStack: "Angular, Angular Universal, HTML5, CSS3, JavaScript, Git, NodeJs",
    url: "",
    screen: "screen-myglamm.png"
  }, {
    tab: "service",
    title: "Wrkspot",
    subTitle: "Hotel Management Software | Workspot | Hotel Employee Management",
    imgs: ["wrkspot-web.png", "wrkspot-mobile.png"],
    slug: "wrkspot",
    techStack: "React, NextJs, HTML5, CSS3, JavaScript, Firebase, Bootstrap, Git",
    url: "",
    screen: "screen-wrkspot.png"
  }, {
    tab: "product",
    title: "igrenEnergi",
    subTitle: "igrenEnergi - Battery Management System | Intelligent and Patented",
    imgs: ["igrenenergi-web.png", "igrenenergi-mobile.png"],
    slug: "igrenenergi",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap, WordPress, Elementor",
    url: "https://igrenenergi.com/",
    screen: "screen-igrenenergi.png"
  }, {
    tab: "product",
    title: "MR Global",
    subTitle: "M&R Global - Copperhead",
    imgs: ["mrprintglobal-web.png", "mrprintglobal-mobile.png"],
    slug: "mrprintglobal",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap, Git",
    url: "https://mrprintglobal.com/",
    screen: "screen-mrprintglobal.png"
  }, {
    tab: "product",
    title: "Group DCC",
    subTitle: "DCC Group of companies is the home to the connected ecosystem of printing. DCC Group is Asia’s largest provider of printing technologies for screen, textile and sublimation printing.",
    imgs: ["groupdcc-web.png", "groupdcc-mobile.png"],
    slug: "groupdcc",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap, Git",
    url: "https://groupdcc.com/",
    screen: "screen-groupdcc.png"
  }, // {
  //   tab: "product",
  //   title: "Wiz Shops",
  //   subTitle:
  //     "Welcome to WizShops.com, Launch your eCommerce website, and Sell Online in 20Min.",
  //   imgs: ["afleo-web.png", "afleo-mobile.png"],
  //   slug: "wizshops",
  //   themeColor: "blue",
  // },
  {
    tab: "service",
    title: "Batterypool",
    subTitle: "BatteryPool | SaaS Platform to manage EV fleets",
    imgs: ["batterypool-web.png"],
    slug: "batterypool",
    techStack: "Angular, HTML5, CSS3, JavaScript, Nebular, Bootstrap, Git",
    url: "",
    screen: "screen-batterypool.png"
  }, {
    tab: "service",
    title: "Destarinc",
    subTitle: "A global recruiting and staffing agency",
    imgs: ["destarinc-web.png", "destarinc-mobile.png"],
    slug: "destarinc",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap, Git",
    url: "https://hinals.gitlab.io/destarinc",
    screen: "screen-destarinc.png"
  }, {
    tab: "service",
    title: "Ashapura Group",
    subTitle: "Ashapuraa Group is a Syndicate Organization of 4 companies providing quality raw materials and services to small and large scale industries.",
    imgs: ["ashapuraagroup-web.png", "ashapuraagroup-mobile.png"],
    slug: "ashapuraagroup",
    techStack: "HTML5, CSS3, JavaScript, Git, Bootstrap, Firebase",
    url: "https://www.ashapuraagroup.com/",
    screen: "screen-ashapuraagroup.png"
  }, {
    tab: "service",
    title: "Arham Expochem",
    subTitle: "Arham Group is young and energetic company engaged in Sourcing and trading operations in India as well as overseas.",
    imgs: ["arhamexpochem-web.png", "arhamexpochem-mobile.png"],
    slug: "arhamexpochem",
    techStack: "HTML5, CSS3, JavaScript, Git, Bootstrap",
    url: "http://arhamexpochem.com/",
    screen: "screen-arhamexpochem.png"
  }];
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    slug
  } = router.query;

  let project = props.itemDetail || _objectSpread({}, tabsContent.find(el => el.slug == slug));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    heading: project.title,
    subHeading: project.subTitle,
    url: project.url
  }), __jsx(_components_BannerDescription__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    text: `Technologies used: ${project.techStack}`
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "mt-5 pt-sm-5"
  }, project.imgs && project.imgs.map(snap => {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      className: "text-center mb-5",
      key: snap
    }, __jsx("div", {
      style: {
        boxShadow: "1px 1px 6px 1px #c0bebe",
        maxHeight: "670px",
        overflow: "hidden"
      }
    }, __jsx("img", {
      src: `/assets/images/${snap}`,
      width: "100%"
    })));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (projectDetail);
async function getStaticProps({
  params
}) {
  let data = [{
    tab: "service",
    title: "Afleo",
    subTitle: "Afleo - DGFT Consultants (MEIS/SEIS/EPCG/Advance Authorisation)",
    imgs: ["afleo-web.png", "afleo-mobile.png"],
    slug: "afleo",
    techStack: "HTML5, CSS3, JavaScript, WordPress",
    url: "https://afleo.com/",
    screen: "screen-afleo.png"
  }, {
    tab: "products",
    title: "El Sativo",
    subTitle: "El Sativo Tequila",
    imgs: ["elsativo-web.png", "elsativo-mobile.png"],
    slug: "elsativo",
    techStack: "HTML5, CSS3, JavaScript, Git, Bootstrap",
    url: "http://elsativo.com/",
    screen: "screen-elsativo.png"
  }, {
    tab: "products",
    title: "Myglamm",
    subTitle: "Buy International Beauty Products - Skin Care, Makeup Kits, Cosmetics & Sanitizers Online",
    imgs: ["myglamm-mobile.png"],
    slug: "myglamm",
    techStack: "Angular, Angular Universal, HTML5, CSS3, JavaScript, Git, NodeJs",
    url: "",
    screen: "screen-myglamm.png"
  }, {
    tab: "service",
    title: "Wrkspot",
    subTitle: "Hotel Management Software | Workspot | Hotel Employee Management",
    imgs: ["wrkspot-web.png", "wrkspot-mobile.png"],
    slug: "wrkspot",
    techStack: "React, NextJs, HTML5, CSS3, JavaScript, Firebase, Bootstrap, Git",
    url: "",
    screen: "screen-wrkspot.png"
  }, {
    tab: "product",
    title: "igrenEnergi",
    subTitle: "igrenEnergi - Battery Management System | Intelligent and Patented",
    imgs: ["igrenenergi-web.png", "igrenenergi-mobile.png"],
    slug: "igrenenergi",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap, WordPress, Elementor",
    url: "https://igrenenergi.com/",
    screen: "screen-igrenenergi.png"
  }, {
    tab: "product",
    title: "MR Global",
    subTitle: "M&R Global - Copperhead",
    imgs: ["mrprintglobal-web.png", "mrprintglobal-mobile.png"],
    slug: "mrprintglobal",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap, Git",
    url: "https://mrprintglobal.com/",
    screen: "screen-mrprintglobal.png"
  }, {
    tab: "product",
    title: "Group DCC",
    subTitle: "DCC Group of companies is the home to the connected ecosystem of printing. DCC Group is Asia’s largest provider of printing technologies for screen, textile and sublimation printing.",
    imgs: ["groupdcc-web.png", "groupdcc-mobile.png"],
    slug: "groupdcc",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap, Git",
    url: "https://groupdcc.com/",
    screen: "screen-groupdcc.png"
  }, {
    tab: "service",
    title: "Batterypool",
    subTitle: "BatteryPool | SaaS Platform to manage EV fleets",
    imgs: ["batterypool-web.png"],
    slug: "batterypool",
    techStack: "Angular, HTML5, CSS3, JavaScript, Nebular, Bootstrap, Git",
    url: "",
    screen: "screen-batterypool.png"
  }, {
    tab: "service",
    title: "Destarinc",
    subTitle: "A global recruiting and staffing agency",
    imgs: ["destarinc-web.png", "destarinc-mobile.png"],
    slug: "destarinc",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap, Git",
    url: "https://hinals.gitlab.io/destarinc",
    screen: "screen-destarinc.png"
  }, {
    tab: "service",
    title: "Ashapura Group",
    subTitle: "Ashapuraa Group is a Syndicate Organization of 4 companies providing quality raw materials and services to small and large scale industries.",
    imgs: ["ashapuraagroup-web.png", "ashapuraagroup-mobile.png"],
    slug: "ashapuraagroup",
    techStack: "HTML5, CSS3, JavaScript, Git, Bootstrap, Firebase",
    url: "https://www.ashapuraagroup.com/",
    screen: "screen-ashapuraagroup.png"
  }, {
    tab: "service",
    title: "Arham Expochem",
    subTitle: "Arham Group is young and energetic company engaged in Sourcing and trading operations in India as well as overseas.",
    imgs: ["arhamexpochem-web.png", "arhamexpochem-mobile.png"],
    slug: "arhamexpochem",
    techStack: "HTML5, CSS3, JavaScript, Git, Bootstrap",
    url: "http://arhamexpochem.com/",
    screen: "screen-arhamexpochem.png"
  }];
  let itemDetail = data.find(x => x.slug === params.slug);
  return {
    props: itemDetail
  };
}
async function getStaticPaths() {
  let data = [{
    tab: "service",
    title: "Afleo",
    subTitle: "Afleo - DGFT Consultants (MEIS/SEIS/EPCG/Advance Authorisation)",
    imgs: ["afleo-web.png", "afleo-mobile.png"],
    slug: "afleo",
    techStack: "HTML5, CSS3, JavaScript, WordPress",
    url: "https://afleo.com/",
    screen: "screen-afleo.png"
  }, {
    tab: "products",
    title: "El Sativo",
    subTitle: "El Sativo Tequila",
    imgs: ["elsativo-web.png", "elsativo-mobile.png"],
    slug: "elsativo",
    techStack: "HTML5, CSS3, JavaScript, Git, Bootstrap",
    url: "http://elsativo.com/",
    screen: "screen-elsativo.png"
  }, {
    tab: "products",
    title: "Myglamm",
    subTitle: "Buy International Beauty Products - Skin Care, Makeup Kits, Cosmetics & Sanitizers Online",
    imgs: ["myglamm-mobile.png"],
    slug: "myglamm",
    techStack: "Angular, Angular Universal, HTML5, CSS3, JavaScript, Git, NodeJs",
    url: "",
    screen: "screen-myglamm.png"
  }, {
    tab: "service",
    title: "Wrkspot",
    subTitle: "Hotel Management Software | Workspot | Hotel Employee Management",
    imgs: ["wrkspot-web.png", "wrkspot-mobile.png"],
    slug: "wrkspot",
    techStack: "React, NextJs, HTML5, CSS3, JavaScript, Firebase, Bootstrap, Git",
    url: "",
    screen: "screen-wrkspot.png"
  }, {
    tab: "product",
    title: "igrenEnergi",
    subTitle: "igrenEnergi - Battery Management System | Intelligent and Patented",
    imgs: ["igrenenergi-web.png", "igrenenergi-mobile.png"],
    slug: "igrenenergi",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap, WordPress, Elementor",
    url: "https://igrenenergi.com/",
    screen: "screen-igrenenergi.png"
  }, {
    tab: "product",
    title: "MR Global",
    subTitle: "M&R Global - Copperhead",
    imgs: ["mrprintglobal-web.png", "mrprintglobal-mobile.png"],
    slug: "mrprintglobal",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap, Git",
    url: "https://mrprintglobal.com/",
    screen: "screen-mrprintglobal.png"
  }, {
    tab: "product",
    title: "Group DCC",
    subTitle: "DCC Group of companies is the home to the connected ecosystem of printing. DCC Group is Asia’s largest provider of printing technologies for screen, textile and sublimation printing.",
    imgs: ["groupdcc-web.png", "groupdcc-mobile.png"],
    slug: "groupdcc",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap, Git",
    url: "https://groupdcc.com/",
    screen: "screen-groupdcc.png"
  }, {
    tab: "service",
    title: "Batterypool",
    subTitle: "BatteryPool | SaaS Platform to manage EV fleets",
    imgs: ["batterypool-web.png"],
    slug: "batterypool",
    techStack: "Angular, HTML5, CSS3, JavaScript, Nebular, Bootstrap, Git",
    url: "",
    screen: "screen-batterypool.png"
  }, {
    tab: "service",
    title: "Destarinc",
    subTitle: "A global recruiting and staffing agency",
    imgs: ["destarinc-web.png", "destarinc-mobile.png"],
    slug: "destarinc",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap, Git",
    url: "https://hinals.gitlab.io/destarinc",
    screen: "screen-destarinc.png"
  }, {
    tab: "service",
    title: "Ashapura Group",
    subTitle: "Ashapuraa Group is a Syndicate Organization of 4 companies providing quality raw materials and services to small and large scale industries.",
    imgs: ["ashapuraagroup-web.png", "ashapuraagroup-mobile.png"],
    slug: "ashapuraagroup",
    techStack: "HTML5, CSS3, JavaScript, Git, Bootstrap, Firebase",
    url: "https://www.ashapuraagroup.com/",
    screen: "screen-ashapuraagroup.png"
  }, {
    tab: "service",
    title: "Arham Expochem",
    subTitle: "Arham Group is young and energetic company engaged in Sourcing and trading operations in India as well as overseas.",
    imgs: ["arhamexpochem-web.png", "arhamexpochem-mobile.png"],
    slug: "arhamexpochem",
    techStack: "HTML5, CSS3, JavaScript, Git, Bootstrap",
    url: "http://arhamexpochem.com/",
    screen: "screen-arhamexpochem.png"
  }]; // Get the paths we want to pre-render based on posts

  const paths = data.map(project => ({
    params: {
      slug: project.slug
    }
  })); // We'll pre-render only these paths at build time.

  return {
    paths,
    fallback: false
  };
}

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "KGwm":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"subBanner": "bannerDescription_subBanner__2hLy2"
};


/***/ }),

/***/ "VAaA":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"banner": "banner_banner__cYOt_"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "qAxh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_bannerDescription_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KGwm");
/* harmony import */ var _styles_bannerDescription_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_bannerDescription_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const bannerDescription = props => {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "bg-dark d-flex justify-content-center " + _styles_bannerDescription_module_scss__WEBPACK_IMPORTED_MODULE_1__["subBanner"]
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "10",
    className: "d-flex justify-content-center"
  }, __jsx("h", {
    className: "large-sub-heading"
  }, props.text))));
};

/* harmony default export */ __webpack_exports__["a"] = (bannerDescription);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });