function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/configurator/configurator.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/configurator/configurator.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfiguratorConfiguratorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container\" style=\"padding-top: 35px\">\n  <app-step [index]=\"index\" [selectedValue]=\"selectedValue\" (onloadNextClick)=\"onloadNextClick()\"></app-step>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n  <div class=\"container\">\n    <h2>KONFIGURATOR MATERACY - W TWOIM RYTMIE</h2>\n  </div>\n</header>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStartStartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container  h-100\">\n  <div class=\"row h-100 justify-content-center align-items-center text-center\">\n    <div class=\"col-sm-12\">\n      <h1>W Twoim rytmie</h1>\n      <h3>Skonﬁguruj materac idelanie dopasowy pod Ciebie.</h3>\n      <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/configurator']\">STAR</a>\n    </div>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/step/question/question.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/step/question/question.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStepQuestionQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p style=\"font-size: 38px;\">{{question}}</p>\n<mat-radio-group class=\"example-radio-group\" name=\"question\"\n                 (change)=\"radioChange($event)\" [selected]=\"selectedValue\">\n  <mat-radio-button *ngFor=\"let answersKeyValue of answersMap.get(question); index as i\" [value]=\"i\">\n    {{i}} {{answersKeyValue}}\n  </mat-radio-button>\n</mat-radio-group>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/step/step.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/step/step.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStepStepComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"index  < dataService.questionArray.length\">\r\n  <p>krok {{index + 1}} z {{dataService.questionArray.length}}</p>\r\n  <app-question [selectedValue]=\"selectedValue\" [question]=\"dataService.questionArray[index]\" [answersMap]=\"dataService.answersMap\" (selectedValuesMapEmitter)=\"onSelectedValuesMapChange($event)\"></app-question>\r\n\r\n  <button type=\"button\" class=\"btn btn-link float-right\" (click)=\"next(dataService.questionArray[index])\">{{(index + 1 < dataService.questionArray.length ? 'DALEJ >' : 'SPRAWDz materac dla was' ) | uppercase}}</button>\r\n  <!--<ul>-->\r\n  <!--  <li *ngFor=\"let mattress of dataService.mattresses[10]\">{{mattress}}</li>-->\r\n  <!--</ul>-->\r\n</div>\r\n\r\n<div *ngIf=\"index + 1 > dataService.questionArray.length\">\r\n  <app-summary [matchMattresses]=\"matchMattresses\" [showEmbed]=\"showEmbed\"></app-summary>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/summary/summary.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/summary/summary.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSummarySummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"showEmbed\" class=\"embed-responsive embed-responsive-16by9\">\r\n  <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/EodQxoPYFcQ\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n</div>\r\n<h2>MATERACE W WASZYM RYTMIE:</h2>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-4\" *ngFor=\"let selected of matchMattresses | keyvalue : valueDescOrder | slice:0:3\">\r\n    <div class=\"row\">\r\n      <h3>{{selected.key}} {{selected.value}}</h3> <button class=\"btn\" (click)=\"playVideo()\">play</button>\r\n    </div>\r\n    <img class=\"img-fluid\" src=\"https://hilding.pl/png/product/mambo.jpg\" />\r\n    <p>Nowoczesny materac wyposażony w 7-strefowy\r\n      system drobnych...</p>\r\n    <a href=\"https://hilding.pl/produkt/materace-kieszeniowe-_23/hilding-pasodoble_39.html\" class=\"text-uppercase\">Zobacz więcej</a>\r\n    <h3>1 399,99 PLN</h3>\r\n    <button class=\"btn text-uppercase\"><fa-icon [icon]=\"faSearch\"></fa-icon> znjadź salon</button>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div>\r\n    <button class=\"btn\" (click)=\"print()\">Wydrukuj</button>\r\n    <button class=\"btn\" (click)=\"restart()\" > Zacznij od nowa</button>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.sass":
  /*!************************************!*\
    !*** ./src/app/app.component.sass ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Konfigurator materacy';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.sass */
      "./src/app/app.component.sass")).default]
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _step_step_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./step/step.component */
    "./src/app/step/step.component.ts");
    /* harmony import */


    var _step_question_question_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./step/question/question.component */
    "./src/app/step/question/question.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _start_start_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./start/start.component */
    "./src/app/start/start.component.ts");
    /* harmony import */


    var _configurator_configurator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./configurator/configurator.component */
    "./src/app/configurator/configurator.component.ts");
    /* harmony import */


    var _summary_summary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./summary/summary.component */
    "./src/app/summary/summary.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");

    var appRoutes = [{
      path: 'start',
      component: _start_start_component__WEBPACK_IMPORTED_MODULE_12__["StartComponent"]
    }, {
      path: 'configurator',
      component: _configurator_configurator_component__WEBPACK_IMPORTED_MODULE_13__["ConfiguratorComponent"],
      data: {
        title: 'Krok'
      }
    }, {
      path: '',
      redirectTo: '/start',
      pathMatch: 'full'
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _step_step_component__WEBPACK_IMPORTED_MODULE_8__["StepComponent"], _step_question_question_component__WEBPACK_IMPORTED_MODULE_9__["QuestionComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_12__["StartComponent"], _configurator_configurator_component__WEBPACK_IMPORTED_MODULE_13__["ConfiguratorComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _summary_summary_component__WEBPACK_IMPORTED_MODULE_14__["SummaryComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, {
        enableTracing: true
      } // <-- debugging purposes only
      )],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/configurator/configurator.component.sass":
  /*!**********************************************************!*\
    !*** ./src/app/configurator/configurator.component.sass ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfiguratorConfiguratorComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYXRvci9jb25maWd1cmF0b3IuY29tcG9uZW50LnNhc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/configurator/configurator.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/configurator/configurator.component.ts ***!
    \********************************************************/

  /*! exports provided: ConfiguratorComponent */

  /***/
  function srcAppConfiguratorConfiguratorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguratorComponent", function () {
      return ConfiguratorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConfiguratorComponent =
    /*#__PURE__*/
    function () {
      function ConfiguratorComponent() {
        _classCallCheck(this, ConfiguratorComponent);

        this.index = 0;
      }

      _createClass(ConfiguratorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.index = 0;
        }
      }, {
        key: "onloadNextClick",
        value: function onloadNextClick() {
          this.index++;
          console.log(this.selectedValue);
          this.selectedValue = undefined;
          console.log("onloadNextClick: " + this.selectedValue);
        }
      }]);

      return ConfiguratorComponent;
    }();

    ConfiguratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-configurator',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./configurator.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/configurator/configurator.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./configurator.component.sass */
      "./src/app/configurator/configurator.component.sass")).default]
    })], ConfiguratorComponent);
    /***/
  },

  /***/
  "./src/app/data.service.ts":
  /*!*********************************!*\
    !*** ./src/app/data.service.ts ***!
    \*********************************/

  /*! exports provided: DataService */

  /***/
  function srcAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(http) {
        _classCallCheck(this, DataService);

        this.http = http;
        this.csvData = [];
        this.mattresses = new Array();
      }

      _createClass(DataService, [{
        key: "loadData",
        value: function loadData() {
          var _this = this;

          this.http.get('assets/konfigurator.csv', {
            responseType: 'text'
          }).subscribe(function (data) {
            var allTextLines = data.split(/\r\n|\n/);
            var headers = allTextLines[0].split(';');
            var answers = allTextLines[1].split(';');
            var lines = [];
            _this.questionSet = new Set(headers);

            _this.questionSet.delete('');

            _this.questionArray = Array.from(_this.questionSet);
            _this.csvData = _this.loadRawData(allTextLines, headers, lines);
            _this.answersMap = new Map();

            _this.questionSet.forEach(function (question) {
              var answersIndex = new Array();
              headers.forEach(function (header, index) {
                _this.mattresses[index] = new Array();

                if (question === header) {
                  answersIndex.push(index);
                }
              });
              var answersPerQuestion = new Array();
              answersIndex.forEach(function (value, index) {
                answersPerQuestion[index] = answers[value];
              });

              _this.answersMap.set(question, answersPerQuestion);

              console.log(_this.mattresses);

              _this.csvData.forEach(function (line, lineIndex) {
                line.forEach(function (column, columnIndex) {
                  _this.mattresses[columnIndex][lineIndex] = column;
                });
              });
            });

            return _this.answersMap;
          }, function (error) {
            console.log(error);
            return null;
          });
        }
      }, {
        key: "loadRawData",
        value: function loadRawData(allTextLines, headers, lines) {
          for (var i = 0; i < allTextLines.length; i++) {
            // split content based on comma
            var data = allTextLines[i].split(';');

            if (data.length == headers.length) {
              var tarr = [];

              for (var j = 0; j < headers.length; j++) {
                tarr.push(data[j]);
              }

              lines.push(tarr);
            }
          }

          return lines;
        }
      }, {
        key: "getQuestionArray",
        value: function getQuestionArray() {
          return this.questionArray;
        }
      }, {
        key: "getAnswersMap",
        value: function getAnswersMap() {
          return this.answersMap;
        }
      }]);

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/app/header/header.component.sass":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.sass ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "header {\n  background-color: #337abd;\n  color: white;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\nheader h2 {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcRGFtaWFuXFxXZWJzdG9ybVByb2plY3RzXFxIaWxkaW5nTWF0dHJlc3Nlcy9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWJkXHJcbiAgY29sb3I6IHdoaXRlXHJcbiAgcGFkZGluZy10b3A6IDMwcHhcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweFxyXG5cclxuICBoMlxyXG4gICAgZm9udC1zaXplOiAyNXB4XHJcbiIsImhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYmQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuaGVhZGVyIGgyIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.sass */
      "./src/app/header/header.component.sass")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/start/start.component.sass":
  /*!********************************************!*\
    !*** ./src/app/start/start.component.sass ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppStartStartComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5zYXNzIn0= */";
    /***/
  },

  /***/
  "./src/app/start/start.component.ts":
  /*!******************************************!*\
    !*** ./src/app/start/start.component.ts ***!
    \******************************************/

  /*! exports provided: StartComponent */

  /***/
  function srcAppStartStartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartComponent", function () {
      return StartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StartComponent =
    /*#__PURE__*/
    function () {
      function StartComponent() {
        _classCallCheck(this, StartComponent);
      }

      _createClass(StartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StartComponent;
    }();

    StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-start',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./start.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./start.component.sass */
      "./src/app/start/start.component.sass")).default]
    })], StartComponent);
    /***/
  },

  /***/
  "./src/app/step/question/question.component.sass":
  /*!*******************************************************!*\
    !*** ./src/app/step/question/question.component.sass ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStepQuestionQuestionComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-radio-group {\n  display: flex;\n  flex-direction: column;\n  /* display: inline-grid; */\n  /* display: grid; */\n  margin: 15px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RlcC9xdWVzdGlvbi9DOlxcVXNlcnNcXERhbWlhblxcV2Vic3Rvcm1Qcm9qZWN0c1xcSGlsZGluZ01hdHRyZXNzZXMvc3JjXFxhcHBcXHN0ZXBcXHF1ZXN0aW9uXFxxdWVzdGlvbi5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvc3RlcC9xdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zdGVwL3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtcmFkaW8tZ3JvdXBcclxuICBkaXNwbGF5OiBmbGV4XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ncmlkOyAqL1xyXG4gIC8qIGRpc3BsYXk6IGdyaWQ7ICovXHJcbiAgbWFyZ2luOiAxNXB4IDBcclxuIiwiLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvKiBkaXNwbGF5OiBpbmxpbmUtZ3JpZDsgKi9cbiAgLyogZGlzcGxheTogZ3JpZDsgKi9cbiAgbWFyZ2luOiAxNXB4IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/step/question/question.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/step/question/question.component.ts ***!
    \*****************************************************/

  /*! exports provided: QuestionComponent */

  /***/
  function srcAppStepQuestionQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionComponent", function () {
      return QuestionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../data.service */
    "./src/app/data.service.ts");

    var QuestionComponent =
    /*#__PURE__*/
    function () {
      function QuestionComponent(dataService) {
        _classCallCheck(this, QuestionComponent);

        this.selectedValuesMapEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedValuesMap = new Map();
      }

      _createClass(QuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "radioChange",
        value: function radioChange($event) {
          console.log($event);
          console.log(this.question);
          this.selectedValuesMap.set(this.question, $event.value);
          this.selectedValuesMapEmitter.emit(this.selectedValuesMap);
        }
      }]);

      return QuestionComponent;
    }();

    QuestionComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionComponent.prototype, "question", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionComponent.prototype, "answersMap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionComponent.prototype, "selectedValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], QuestionComponent.prototype, "selectedValuesMapEmitter", void 0);
    QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/step/question/question.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./question.component.sass */
      "./src/app/step/question/question.component.sass")).default]
    })], QuestionComponent);
    /***/
  },

  /***/
  "./src/app/step/step.component.sass":
  /*!******************************************!*\
    !*** ./src/app/step/step.component.sass ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppStepStepComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0ZXAvc3RlcC5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/step/step.component.ts":
  /*!****************************************!*\
    !*** ./src/app/step/step.component.ts ***!
    \****************************************/

  /*! exports provided: StepComponent */

  /***/
  function srcAppStepStepComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepComponent", function () {
      return StepComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");

    var StepComponent =
    /*#__PURE__*/
    function () {
      function StepComponent(dataService) {
        _classCallCheck(this, StepComponent);

        this.dataService = dataService;
        this.onloadNextClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.matchMattresses = new Map();
        this.showEmbed = false;
      }

      _createClass(StepComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.buttonText = 'DALEJ >';
          this.dataService.loadData();
        }
      }, {
        key: "next",
        value: function next(question) {
          this.onloadNextClick.emit();
        }
      }, {
        key: "onSelectedValuesMapChange",
        value: function onSelectedValuesMapChange($event) {
          var _this2 = this;

          this.selectedValuesMap = $event;
          var counterArray = Array(this.dataService.mattresses[0].length).fill(0);
          this.selectedValuesMap.forEach(function (value, key) {
            var answersMap = _this2.dataService.answersMap.get(key);

            console.log(answersMap[value]);

            _this2.dataService.mattresses.forEach(function (row, index1) {
              row.forEach(function (value1, index2) {
                if (index2 === 1 && value1 === answersMap[value]) {
                  console.log('hit - ' + index1);
                } else if (value1 === '#' && row[1] === answersMap[value]) {
                  counterArray[index2] += 1;
                }
              });
            });
          });
          counterArray.forEach(function (value, index1) {
            if (value > 0) {
              console.log(value + ' ' + index1 + ' ' + _this2.dataService.mattresses[0][index1]);

              _this2.matchMattresses.set(_this2.dataService.mattresses[0][index1], value);
            }
          });
        }
      }]);

      return StepComponent;
    }();

    StepComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StepComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StepComponent.prototype, "selectedValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], StepComponent.prototype, "onloadNextClick", void 0);
    StepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-step',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./step.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/step/step.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./step.component.sass */
      "./src/app/step/step.component.sass")).default]
    })], StepComponent);
    /***/
  },

  /***/
  "./src/app/summary/summary.component.sass":
  /*!************************************************!*\
    !*** ./src/app/summary/summary.component.sass ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSummarySummaryComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  background: #337abd;\n  border-radius: 0;\n  color: white;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VtbWFyeS9DOlxcVXNlcnNcXERhbWlhblxcV2Vic3Rvcm1Qcm9qZWN0c1xcSGlsZGluZ01hdHRyZXNzZXMvc3JjXFxhcHBcXHN1bW1hcnlcXHN1bW1hcnkuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uXHJcbiAgYmFja2dyb3VuZDogIzMzN2FiZFxyXG4gIGJvcmRlci1yYWRpdXM6IDBcclxuICBjb2xvcjogd2hpdGVcclxuICBwYWRkaW5nOiAwXHJcbiIsImJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMzMzdhYmQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/summary/summary.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/summary/summary.component.ts ***!
    \**********************************************/

  /*! exports provided: SummaryComponent */

  /***/
  function srcAppSummarySummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryComponent", function () {
      return SummaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var SummaryComponent =
    /*#__PURE__*/
    function () {
      function SummaryComponent(router) {
        _classCallCheck(this, SummaryComponent);

        this.router = router;
        this.matchMattresses = new Map();
        this.showEmbed = false;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSearch"];

        this.valueDescOrder = function (a, b) {
          return b.value - a.value;
        };
      }

      _createClass(SummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "playVideo",
        value: function playVideo() {
          this.showEmbed = true;
        }
      }, {
        key: "restart",
        value: function restart() {
          this.router.navigate(['/start']);
        }
      }, {
        key: "print",
        value: function print() {}
      }]);

      return SummaryComponent;
    }();

    SummaryComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SummaryComponent.prototype, "matchMattresses", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SummaryComponent.prototype, "showEmbed", void 0);
    SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/summary/summary.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./summary.component.sass */
      "./src/app/summary/summary.component.sass")).default]
    })], SummaryComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Damian\WebstormProjects\HildingMattresses\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map