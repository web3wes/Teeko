/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/show",{

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ContributeForm */ \"./components/ContributeForm.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-qr-code */ \"./node_modules/react-qr-code/lib/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/wes/Eth-React/Advance Multi-Page Front-Ends/Filler for folder name/Final/pages/campaigns/show.js\",\n    _this = undefined;\n\n\n\n // import Qrcode from \"../../components/qrcode\";\n\n\n\n // import React from \"react\";\n\n\n\n\n\nvar CampaignShow = function CampaignShow(props) {\n  // class CampaignShow extends Component {\n  // static async getInitialProps(props) {\n  //   const campaign = await Campaign(\n  //     props.query.address\n  //       ? props.query.address\n  //       : \"0x807A21f7D22E1Dba5b878661BD455F0d31D62858\"\n  //   )\n  //   const summary = await campaign.methods.getSummary().call()\n  //   this.imageRef = React.createRef()\n  //   return {\n  //     address: props.query.address,\n  //     minimumContribution: summary[0],\n  //     manager: summary[1],\n  //     eventLocation: summary[2],\n  //     bandName: summary[3],\n  //     payeeCount: summary[4],\n  //     payeeAddresses: summary[5],\n  //     payeePercentages: summary[6],\n  //     showTime: summary[7],\n  //   }\n  // }\n  console.log(props);\n\n  function renderCards() {\n    var address = props.address,\n        minimumContribution = props.minimumContribution,\n        manager = props.manager,\n        eventLocation = props.eventLocation,\n        bandName = props.bandName,\n        payeeCount = props.payeeCount,\n        payeeAddresses = props.payeeAddresses,\n        payeePercentages = props.payeePercentages,\n        showTime = props.showTime;\n    var items = [{\n      header: manager,\n      meta: \"Address of Manager\",\n      description: \"The manager created this campaign and can create requests to withdraw money\",\n      style: {\n        overflowWrap: \"break-word\"\n      }\n    }, {\n      header: eventLocation,\n      meta: \"Name of Show\",\n      description: \"This is the gig related to the this ticket\",\n      style: {\n        overflowWrap: \"break-word\"\n      }\n    }, {\n      header: minimumContribution,\n      meta: \"Minimum Contribution (wei)\",\n      description: \"You must contribute at least this much wei to become an approver\"\n    }, {\n      header: bandName,\n      meta: \"Number of Requests\",\n      description: \"A request tries to withdraw money from the contract. Requests must be approved by approvers\"\n    }, {\n      header: showTime,\n      meta: \"Number of Approvers\",\n      description: \"Number of people who have already donated to this campaign\"\n    }];\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Card.Group, {\n      items: items\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 12\n    }, this);\n  } // render() {\n  // var qrcode\n  //     qrcode = qrcode\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: \"Campaign Show\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n        \"class\": \"test\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Grid.Column, {\n          width: 12,\n          height: 2,\n          children: renderCards()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_5__.default, {\n        address: props.address\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"https://rinkeby.etherscan.io/address/\" + _this.props.address,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_code__WEBPACK_IMPORTED_MODULE_7__.default, {\n          className: \"qr top-right\",\n          size: \"300\",\n          value: \"https://rinkeby.etherscan.io/address/\" + _this.props.address\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 96,\n    columnNumber: 5\n  }, _this);\n}; // }\n\n\n_c = CampaignShow;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignShow);\n\nvar _c;\n\n$RefreshReg$(_c, \"CampaignShow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/NGY4NSJdLCJuYW1lcyI6WyJDYW1wYWlnblNob3ciLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwibWFuYWdlciIsImV2ZW50TG9jYXRpb24iLCJiYW5kTmFtZSIsInBheWVlQ291bnQiLCJwYXllZUFkZHJlc3NlcyIsInBheWVlUGVyY2VudGFnZXMiLCJzaG93VGltZSIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7O0FBRUEsV0FBU0csV0FBVCxHQUF1QjtBQUFBLFFBRW5CQyxPQUZtQixHQVdqQkosS0FYaUIsQ0FFbkJJLE9BRm1CO0FBQUEsUUFHbkJDLG1CQUhtQixHQVdqQkwsS0FYaUIsQ0FHbkJLLG1CQUhtQjtBQUFBLFFBSW5CQyxPQUptQixHQVdqQk4sS0FYaUIsQ0FJbkJNLE9BSm1CO0FBQUEsUUFLbkJDLGFBTG1CLEdBV2pCUCxLQVhpQixDQUtuQk8sYUFMbUI7QUFBQSxRQU1uQkMsUUFObUIsR0FXakJSLEtBWGlCLENBTW5CUSxRQU5tQjtBQUFBLFFBT25CQyxVQVBtQixHQVdqQlQsS0FYaUIsQ0FPbkJTLFVBUG1CO0FBQUEsUUFRbkJDLGNBUm1CLEdBV2pCVixLQVhpQixDQVFuQlUsY0FSbUI7QUFBQSxRQVNuQkMsZ0JBVG1CLEdBV2pCWCxLQVhpQixDQVNuQlcsZ0JBVG1CO0FBQUEsUUFVbkJDLFFBVm1CLEdBV2pCWixLQVhpQixDQVVuQlksUUFWbUI7QUFhckIsUUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRUMsWUFBTSxFQUFFUixPQURWO0FBRUVTLFVBQUksRUFBRSxvQkFGUjtBQUdFQyxpQkFBVyxFQUNULDZFQUpKO0FBS0VDLFdBQUssRUFBRTtBQUFFQyxvQkFBWSxFQUFFO0FBQWhCO0FBTFQsS0FEWSxFQVFaO0FBQ0VKLFlBQU0sRUFBRVAsYUFEVjtBQUVFUSxVQUFJLEVBQUUsY0FGUjtBQUdFQyxpQkFBVyxFQUFFLDRDQUhmO0FBSUVDLFdBQUssRUFBRTtBQUFFQyxvQkFBWSxFQUFFO0FBQWhCO0FBSlQsS0FSWSxFQWVaO0FBQ0VKLFlBQU0sRUFBRVQsbUJBRFY7QUFFRVUsVUFBSSxFQUFFLDRCQUZSO0FBR0VDLGlCQUFXLEVBQ1Q7QUFKSixLQWZZLEVBcUJaO0FBQ0VGLFlBQU0sRUFBRU4sUUFEVjtBQUVFTyxVQUFJLEVBQUUsb0JBRlI7QUFHRUMsaUJBQVcsRUFDVDtBQUpKLEtBckJZLEVBMkJaO0FBQ0VGLFlBQU0sRUFBRUYsUUFEVjtBQUVFRyxVQUFJLEVBQUUscUJBRlI7QUFHRUMsaUJBQVcsRUFDVDtBQUpKLEtBM0JZLENBQWQ7QUFtQ0Esd0JBQU8sOERBQUMseURBQUQ7QUFBWSxXQUFLLEVBQUVIO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNELEdBN0U2QixDQStFOUI7QUFDQTtBQUNBOzs7QUFDQSxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLDhCQUNFLDhEQUFDLG1EQUFEO0FBQU0saUJBQU0sTUFBWjtBQUFBLCtCQUNFLDhEQUFDLDBEQUFEO0FBQWEsZUFBSyxFQUFFLEVBQXBCO0FBQXdCLGdCQUFNLEVBQUUsQ0FBaEM7QUFBQSxvQkFDR1YsV0FBVztBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUErQkUsOERBQUMsK0RBQUQ7QUFBZ0IsZUFBTyxFQUFFSCxLQUFLLENBQUNJO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEvQkYsZUFpQ0U7QUFBRyxZQUFJLEVBQUUsMENBQTBDLEtBQUksQ0FBQ0osS0FBTCxDQUFXSSxPQUE5RDtBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQ0UsbUJBQVMsRUFBQyxjQURaO0FBRUUsY0FBSSxFQUFDLEtBRlA7QUFHRSxlQUFLLEVBQUUsMENBQTBDLEtBQUksQ0FBQ0osS0FBTCxDQUFXSTtBQUg5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThDRCxDQWhJRCxDLENBaUlBOzs7S0FqSU1MLFk7O0FBbUlOLCtEQUFlQSxZQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IENhcmQsIEdyaWQsIEdyaWRSb3csIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiXG4vLyBpbXBvcnQgUXJjb2RlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3FyY29kZVwiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi8uLi9ldGhlcmV1bS9jYW1wYWlnblwiXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiXG5pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm1cIlxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIlxuaW1wb3J0IFFSQ29kZSBmcm9tIFwicmVhY3QtcXItY29kZVwiXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uL3JvdXRlc1wiXG5cbmNvbnN0IENhbXBhaWduU2hvdyA9IChwcm9wcykgPT4ge1xuICAvLyBjbGFzcyBDYW1wYWlnblNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG4gIC8vICAgY29uc3QgY2FtcGFpZ24gPSBhd2FpdCBDYW1wYWlnbihcbiAgLy8gICAgIHByb3BzLnF1ZXJ5LmFkZHJlc3NcbiAgLy8gICAgICAgPyBwcm9wcy5xdWVyeS5hZGRyZXNzXG4gIC8vICAgICAgIDogXCIweDgwN0EyMWY3RDIyRTFEYmE1Yjg3ODY2MUJENDU1RjBkMzFENjI4NThcIlxuICAvLyAgIClcblxuICAvLyAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKClcblxuICAvLyAgIHRoaXMuaW1hZ2VSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuXG4gIC8vICAgcmV0dXJuIHtcbiAgLy8gICAgIGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXG4gIC8vICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxuICAvLyAgICAgbWFuYWdlcjogc3VtbWFyeVsxXSxcbiAgLy8gICAgIGV2ZW50TG9jYXRpb246IHN1bW1hcnlbMl0sXG4gIC8vICAgICBiYW5kTmFtZTogc3VtbWFyeVszXSxcbiAgLy8gICAgIHBheWVlQ291bnQ6IHN1bW1hcnlbNF0sXG4gIC8vICAgICBwYXllZUFkZHJlc3Nlczogc3VtbWFyeVs1XSxcbiAgLy8gICAgIHBheWVlUGVyY2VudGFnZXM6IHN1bW1hcnlbNl0sXG4gIC8vICAgICBzaG93VGltZTogc3VtbWFyeVs3XSxcbiAgLy8gICB9XG4gIC8vIH1cblxuICBjb25zb2xlLmxvZyhwcm9wcylcblxuICBmdW5jdGlvbiByZW5kZXJDYXJkcygpIHtcbiAgICBjb25zdCB7XG4gICAgICBhZGRyZXNzLFxuICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgIG1hbmFnZXIsXG4gICAgICBldmVudExvY2F0aW9uLFxuICAgICAgYmFuZE5hbWUsXG4gICAgICBwYXllZUNvdW50LFxuICAgICAgcGF5ZWVBZGRyZXNzZXMsXG4gICAgICBwYXllZVBlcmNlbnRhZ2VzLFxuICAgICAgc2hvd1RpbWUsXG4gICAgfSA9IHByb3BzXG5cbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBtYW5hZ2VyLFxuICAgICAgICBtZXRhOiBcIkFkZHJlc3Mgb2YgTWFuYWdlclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlRoZSBtYW5hZ2VyIGNyZWF0ZWQgdGhpcyBjYW1wYWlnbiBhbmQgY2FuIGNyZWF0ZSByZXF1ZXN0cyB0byB3aXRoZHJhdyBtb25leVwiLFxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IGV2ZW50TG9jYXRpb24sXG4gICAgICAgIG1ldGE6IFwiTmFtZSBvZiBTaG93XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGhlIGdpZyByZWxhdGVkIHRvIHRoZSB0aGlzIHRpY2tldFwiLFxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgICAgbWV0YTogXCJNaW5pbXVtIENvbnRyaWJ1dGlvbiAod2VpKVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIllvdSBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgdGhpcyBtdWNoIHdlaSB0byBiZWNvbWUgYW4gYXBwcm92ZXJcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogYmFuZE5hbWUsXG4gICAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIFJlcXVlc3RzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQSByZXF1ZXN0IHRyaWVzIHRvIHdpdGhkcmF3IG1vbmV5IGZyb20gdGhlIGNvbnRyYWN0LiBSZXF1ZXN0cyBtdXN0IGJlIGFwcHJvdmVkIGJ5IGFwcHJvdmVyc1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBzaG93VGltZSxcbiAgICAgICAgbWV0YTogXCJOdW1iZXIgb2YgQXBwcm92ZXJzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiTnVtYmVyIG9mIHBlb3BsZSB3aG8gaGF2ZSBhbHJlYWR5IGRvbmF0ZWQgdG8gdGhpcyBjYW1wYWlnblwiLFxuICAgICAgfSxcbiAgICBdXG5cbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPlxuICB9XG5cbiAgLy8gcmVuZGVyKCkge1xuICAvLyB2YXIgcXJjb2RlXG4gIC8vICAgICBxcmNvZGUgPSBxcmNvZGVcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgzPkNhbXBhaWduIFNob3c8L2gzPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEdyaWQgY2xhc3M9XCJ0ZXN0XCI+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMn0gaGVpZ2h0PXsyfT5cbiAgICAgICAgICAgIHtyZW5kZXJDYXJkcygpfVxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgey8qIDxHcmlkLkNvbHVtbiB3aWR0aD17MH0gaGVpZ2h0PXswfT4gKi99XG4gICAgICAgICAgey8qIDxHcmlkUm93PlxuICAgICAgICAgICAgICB7LyogPENvbnRyaWJ1dGVGb3JtIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc30gLz4gKi99XG4gICAgICAgICAgey8qIDwvR3JpZFJvdz4gKi99XG4gICAgICAgICAgey8qIDxHcmlkUm93PiAqL31cbiAgICAgICAgICB7LyogPGFcbiAgICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9yaW5rZWJ5LmV0aGVyc2Nhbi5pby9hZGRyZXNzL1wiICsgdGhpcy5wcm9wcy5hZGRyZXNzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFFSQ29kZVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicXJcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cIjE1MFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9yaW5rZWJ5LmV0aGVyc2Nhbi5pby9hZGRyZXNzL1wiICsgdGhpcy5wcm9wcy5hZGRyZXNzXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPiAqL31cbiAgICAgICAgICB7LyogPC9HcmlkUm93PiAqL31cbiAgICAgICAgICB7LyogPC9HcmlkLkNvbHVtbj4gKi99XG4gICAgICAgICAgey8qIDxHcmlkLkNvbHVtbiB3aWR0aD17M30+XG4gICAgICAgICAgPEdyaWRSb3cgdWkgc21hbGwgaW1hZ2UgcXIgPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvR3JpZFJvdz5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+ICovfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxDb250cmlidXRlRm9ybSBhZGRyZXNzPXtwcm9wcy5hZGRyZXNzfSAvPlxuXG4gICAgICAgIDxhIGhyZWY9e1wiaHR0cHM6Ly9yaW5rZWJ5LmV0aGVyc2Nhbi5pby9hZGRyZXNzL1wiICsgdGhpcy5wcm9wcy5hZGRyZXNzfT5cbiAgICAgICAgICA8UVJDb2RlXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJxciB0b3AtcmlnaHRcIlxuICAgICAgICAgICAgc2l6ZT1cIjMwMFwiXG4gICAgICAgICAgICB2YWx1ZT17XCJodHRwczovL3JpbmtlYnkuZXRoZXJzY2FuLmlvL2FkZHJlc3MvXCIgKyB0aGlzLnByb3BzLmFkZHJlc3N9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9ICgpID0+ICh7XG4gIHByb3BzOiB7XG4gICAgaGVsbG86IFwid29ybGRcIixcbiAgfSxcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/show.js\n");

/***/ })

});