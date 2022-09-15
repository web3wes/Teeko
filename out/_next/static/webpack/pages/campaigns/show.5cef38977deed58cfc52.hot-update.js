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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ContributeForm */ \"./components/ContributeForm.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-qr-code */ \"./node_modules/react-qr-code/lib/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/wes/Eth-React/Advance Multi-Page Front-Ends/Filler for folder name/Final/pages/campaigns/show.js\",\n    _this = undefined;\n\n\n\n // import Qrcode from \"../../components/qrcode\";\n\n\n\n // import React from \"react\";\n\n\n\n\n\nvar CampaignShow = function CampaignShow(props) {\n  // class CampaignShow extends Component {\n  // static async getInitialProps(props) {\n  //   const campaign = await Campaign(\n  //     props.query.address\n  //       ? props.query.address\n  //       : \"0x807A21f7D22E1Dba5b878661BD455F0d31D62858\"\n  //   )\n  //   const summary = await campaign.methods.getSummary().call()\n  //   this.imageRef = React.createRef()\n  //   return {\n  //     address: props.query.address,\n  //     minimumContribution: summary[0],\n  //     manager: summary[1],\n  //     eventLocation: summary[2],\n  //     bandName: summary[3],\n  //     payeeCount: summary[4],\n  //     payeeAddresses: summary[5],\n  //     payeePercentages: summary[6],\n  //     showTime: summary[7],\n  //   }\n  // }\n  console.log(props);\n\n  function renderCards() {\n    var address = props.address,\n        minimumContribution = props.minimumContribution,\n        manager = props.manager,\n        eventLocation = props.eventLocation,\n        bandName = props.bandName,\n        payeeCount = props.payeeCount,\n        payeeAddresses = props.payeeAddresses,\n        payeePercentages = props.payeePercentages,\n        showTime = props.showTime;\n    var items = [{\n      header: manager,\n      meta: \"Address of Manager\",\n      description: \"The manager created this campaign and can create requests to withdraw money\",\n      style: {\n        overflowWrap: \"break-word\"\n      }\n    }, {\n      header: eventLocation,\n      meta: \"Name of Show\",\n      description: \"This is the gig related to the this ticket\",\n      style: {\n        overflowWrap: \"break-word\"\n      }\n    }, {\n      header: minimumContribution,\n      meta: \"Minimum Contribution (wei)\",\n      description: \"You must contribute at least this much wei to become an approver\"\n    }, {\n      header: bandName,\n      meta: \"Number of Requests\",\n      description: \"A request tries to withdraw money from the contract. Requests must be approved by approvers\"\n    }, {\n      header: showTime,\n      meta: \"Number of Approvers\",\n      description: \"Number of people who have already donated to this campaign\"\n    }];\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Card.Group, {\n      items: items\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 12\n    }, this);\n  } // render() {\n  // var qrcode\n  //     qrcode = qrcode\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: \"Campaign Show\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n        \"class\": \"test\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Grid.Column, {\n          width: 12,\n          height: 2,\n          children: renderCards()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_5__.default, {\n        address: _this.props.address\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"https://rinkeby.etherscan.io/address/\" + _this.props.address,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_code__WEBPACK_IMPORTED_MODULE_7__.default, {\n          className: \"qr top-right\",\n          size: \"300\",\n          value: \"https://rinkeby.etherscan.io/address/\" + _this.props.address\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 96,\n    columnNumber: 5\n  }, _this);\n}; // }\n\n\n_c = CampaignShow;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignShow);\n\nvar _c;\n\n$RefreshReg$(_c, \"CampaignShow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/NGY4NSJdLCJuYW1lcyI6WyJDYW1wYWlnblNob3ciLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwibWFuYWdlciIsImV2ZW50TG9jYXRpb24iLCJiYW5kTmFtZSIsInBheWVlQ291bnQiLCJwYXllZUFkZHJlc3NlcyIsInBheWVlUGVyY2VudGFnZXMiLCJzaG93VGltZSIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7O0FBRUEsV0FBU0csV0FBVCxHQUF1QjtBQUFBLFFBRW5CQyxPQUZtQixHQVdqQkosS0FYaUIsQ0FFbkJJLE9BRm1CO0FBQUEsUUFHbkJDLG1CQUhtQixHQVdqQkwsS0FYaUIsQ0FHbkJLLG1CQUhtQjtBQUFBLFFBSW5CQyxPQUptQixHQVdqQk4sS0FYaUIsQ0FJbkJNLE9BSm1CO0FBQUEsUUFLbkJDLGFBTG1CLEdBV2pCUCxLQVhpQixDQUtuQk8sYUFMbUI7QUFBQSxRQU1uQkMsUUFObUIsR0FXakJSLEtBWGlCLENBTW5CUSxRQU5tQjtBQUFBLFFBT25CQyxVQVBtQixHQVdqQlQsS0FYaUIsQ0FPbkJTLFVBUG1CO0FBQUEsUUFRbkJDLGNBUm1CLEdBV2pCVixLQVhpQixDQVFuQlUsY0FSbUI7QUFBQSxRQVNuQkMsZ0JBVG1CLEdBV2pCWCxLQVhpQixDQVNuQlcsZ0JBVG1CO0FBQUEsUUFVbkJDLFFBVm1CLEdBV2pCWixLQVhpQixDQVVuQlksUUFWbUI7QUFhckIsUUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRUMsWUFBTSxFQUFFUixPQURWO0FBRUVTLFVBQUksRUFBRSxvQkFGUjtBQUdFQyxpQkFBVyxFQUNULDZFQUpKO0FBS0VDLFdBQUssRUFBRTtBQUFFQyxvQkFBWSxFQUFFO0FBQWhCO0FBTFQsS0FEWSxFQVFaO0FBQ0VKLFlBQU0sRUFBRVAsYUFEVjtBQUVFUSxVQUFJLEVBQUUsY0FGUjtBQUdFQyxpQkFBVyxFQUFFLDRDQUhmO0FBSUVDLFdBQUssRUFBRTtBQUFFQyxvQkFBWSxFQUFFO0FBQWhCO0FBSlQsS0FSWSxFQWVaO0FBQ0VKLFlBQU0sRUFBRVQsbUJBRFY7QUFFRVUsVUFBSSxFQUFFLDRCQUZSO0FBR0VDLGlCQUFXLEVBQ1Q7QUFKSixLQWZZLEVBcUJaO0FBQ0VGLFlBQU0sRUFBRU4sUUFEVjtBQUVFTyxVQUFJLEVBQUUsb0JBRlI7QUFHRUMsaUJBQVcsRUFDVDtBQUpKLEtBckJZLEVBMkJaO0FBQ0VGLFlBQU0sRUFBRUYsUUFEVjtBQUVFRyxVQUFJLEVBQUUscUJBRlI7QUFHRUMsaUJBQVcsRUFDVDtBQUpKLEtBM0JZLENBQWQ7QUFtQ0Esd0JBQU8sOERBQUMseURBQUQ7QUFBWSxXQUFLLEVBQUVIO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNELEdBN0U2QixDQStFOUI7QUFDQTtBQUNBOzs7QUFDQSxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLDhCQUNFLDhEQUFDLG1EQUFEO0FBQU0saUJBQU0sTUFBWjtBQUFBLCtCQUNFLDhEQUFDLDBEQUFEO0FBQWEsZUFBSyxFQUFFLEVBQXBCO0FBQXdCLGdCQUFNLEVBQUUsQ0FBaEM7QUFBQSxvQkFDR1YsV0FBVztBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUErQkUsOERBQUMsK0RBQUQ7QUFBZ0IsZUFBTyxFQUFFLEtBQUksQ0FBQ0gsS0FBTCxDQUFXSTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0JGLGVBaUNFO0FBQUcsWUFBSSxFQUFFLDBDQUEwQyxLQUFJLENBQUNKLEtBQUwsQ0FBV0ksT0FBOUQ7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUNFLG1CQUFTLEVBQUMsY0FEWjtBQUVFLGNBQUksRUFBQyxLQUZQO0FBR0UsZUFBSyxFQUFFLDBDQUEwQyxLQUFJLENBQUNKLEtBQUwsQ0FBV0k7QUFIOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4Q0QsQ0FoSUQsQyxDQWlJQTs7O0tBaklNTCxZOztBQW1JTiwrREFBZUEsWUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NhbXBhaWducy9zaG93LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBDYXJkLCBHcmlkLCBHcmlkUm93LCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuLy8gaW1wb3J0IFFyY29kZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9xcmNvZGVcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIlxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIlxuaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtXCJcbi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCJcbmltcG9ydCBRUkNvZGUgZnJvbSBcInJlYWN0LXFyLWNvZGVcIlxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIlxuXG5jb25zdCBDYW1wYWlnblNob3cgPSAocHJvcHMpID0+IHtcbiAgLy8gY2xhc3MgQ2FtcGFpZ25TaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLy8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAvLyAgIGNvbnN0IGNhbXBhaWduID0gYXdhaXQgQ2FtcGFpZ24oXG4gIC8vICAgICBwcm9wcy5xdWVyeS5hZGRyZXNzXG4gIC8vICAgICAgID8gcHJvcHMucXVlcnkuYWRkcmVzc1xuICAvLyAgICAgICA6IFwiMHg4MDdBMjFmN0QyMkUxRGJhNWI4Nzg2NjFCRDQ1NUYwZDMxRDYyODU4XCJcbiAgLy8gICApXG5cbiAgLy8gICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpXG5cbiAgLy8gICB0aGlzLmltYWdlUmVmID0gUmVhY3QuY3JlYXRlUmVmKClcblxuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICBhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzLFxuICAvLyAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVswXSxcbiAgLy8gICAgIG1hbmFnZXI6IHN1bW1hcnlbMV0sXG4gIC8vICAgICBldmVudExvY2F0aW9uOiBzdW1tYXJ5WzJdLFxuICAvLyAgICAgYmFuZE5hbWU6IHN1bW1hcnlbM10sXG4gIC8vICAgICBwYXllZUNvdW50OiBzdW1tYXJ5WzRdLFxuICAvLyAgICAgcGF5ZWVBZGRyZXNzZXM6IHN1bW1hcnlbNV0sXG4gIC8vICAgICBwYXllZVBlcmNlbnRhZ2VzOiBzdW1tYXJ5WzZdLFxuICAvLyAgICAgc2hvd1RpbWU6IHN1bW1hcnlbN10sXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgY29uc29sZS5sb2cocHJvcHMpXG5cbiAgZnVuY3Rpb24gcmVuZGVyQ2FyZHMoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWRkcmVzcyxcbiAgICAgIG1pbmltdW1Db250cmlidXRpb24sXG4gICAgICBtYW5hZ2VyLFxuICAgICAgZXZlbnRMb2NhdGlvbixcbiAgICAgIGJhbmROYW1lLFxuICAgICAgcGF5ZWVDb3VudCxcbiAgICAgIHBheWVlQWRkcmVzc2VzLFxuICAgICAgcGF5ZWVQZXJjZW50YWdlcyxcbiAgICAgIHNob3dUaW1lLFxuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogbWFuYWdlcixcbiAgICAgICAgbWV0YTogXCJBZGRyZXNzIG9mIE1hbmFnZXJcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdHMgdG8gd2l0aGRyYXcgbW9uZXlcIixcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBldmVudExvY2F0aW9uLFxuICAgICAgICBtZXRhOiBcIk5hbWUgb2YgU2hvd1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRoZSBnaWcgcmVsYXRlZCB0byB0aGUgdGhpcyB0aWNrZXRcIixcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICBoZWFkZXI6IG1pbmltdW1Db250cmlidXRpb24sXG4gICAgICAgIG1ldGE6IFwiTWluaW11bSBDb250cmlidXRpb24gKHdlaSlcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJZb3UgbXVzdCBjb250cmlidXRlIGF0IGxlYXN0IHRoaXMgbXVjaCB3ZWkgdG8gYmVjb21lIGFuIGFwcHJvdmVyXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IGJhbmROYW1lLFxuICAgICAgICBtZXRhOiBcIk51bWJlciBvZiBSZXF1ZXN0c1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkEgcmVxdWVzdCB0cmllcyB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdC4gUmVxdWVzdHMgbXVzdCBiZSBhcHByb3ZlZCBieSBhcHByb3ZlcnNcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogc2hvd1RpbWUsXG4gICAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIEFwcHJvdmVyc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIk51bWJlciBvZiBwZW9wbGUgd2hvIGhhdmUgYWxyZWFkeSBkb25hdGVkIHRvIHRoaXMgY2FtcGFpZ25cIixcbiAgICAgIH0sXG4gICAgXVxuXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cbiAgfVxuXG4gIC8vIHJlbmRlcigpIHtcbiAgLy8gdmFyIHFyY29kZVxuICAvLyAgICAgcXJjb2RlID0gcXJjb2RlXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMz5DYW1wYWlnbiBTaG93PC9oMz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxHcmlkIGNsYXNzPVwidGVzdFwiPlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTJ9IGhlaWdodD17Mn0+XG4gICAgICAgICAgICB7cmVuZGVyQ2FyZHMoKX1cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIHsvKiA8R3JpZC5Db2x1bW4gd2lkdGg9ezB9IGhlaWdodD17MH0+ICovfVxuICAgICAgICAgIHsvKiA8R3JpZFJvdz5cbiAgICAgICAgICAgICAgey8qIDxDb250cmlidXRlRm9ybSBhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9IC8+ICovfVxuICAgICAgICAgIHsvKiA8L0dyaWRSb3c+ICovfVxuICAgICAgICAgIHsvKiA8R3JpZFJvdz4gKi99XG4gICAgICAgICAgey8qIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICBcImh0dHBzOi8vcmlua2VieS5ldGhlcnNjYW4uaW8vYWRkcmVzcy9cIiArIHRoaXMucHJvcHMuYWRkcmVzc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxRUkNvZGVcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInFyXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCIxNTBcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vcmlua2VieS5ldGhlcnNjYW4uaW8vYWRkcmVzcy9cIiArIHRoaXMucHJvcHMuYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT4gKi99XG4gICAgICAgICAgey8qIDwvR3JpZFJvdz4gKi99XG4gICAgICAgICAgey8qIDwvR3JpZC5Db2x1bW4+ICovfVxuICAgICAgICAgIHsvKiA8R3JpZC5Db2x1bW4gd2lkdGg9ezN9PlxuICAgICAgICAgIDxHcmlkUm93IHVpIHNtYWxsIGltYWdlIHFyID5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0dyaWRSb3c+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPiAqL31cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8Q29udHJpYnV0ZUZvcm0gYWRkcmVzcz17dGhpcy5wcm9wcy5hZGRyZXNzfSAvPlxuXG4gICAgICAgIDxhIGhyZWY9e1wiaHR0cHM6Ly9yaW5rZWJ5LmV0aGVyc2Nhbi5pby9hZGRyZXNzL1wiICsgdGhpcy5wcm9wcy5hZGRyZXNzfT5cbiAgICAgICAgICA8UVJDb2RlXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJxciB0b3AtcmlnaHRcIlxuICAgICAgICAgICAgc2l6ZT1cIjMwMFwiXG4gICAgICAgICAgICB2YWx1ZT17XCJodHRwczovL3JpbmtlYnkuZXRoZXJzY2FuLmlvL2FkZHJlc3MvXCIgKyB0aGlzLnByb3BzLmFkZHJlc3N9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9ICgpID0+ICh7XG4gIHByb3BzOiB7XG4gICAgaGVsbG86IFwid29ybGRcIixcbiAgfSxcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/show.js\n");

/***/ })

});