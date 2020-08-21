(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Jeff\'s website';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home/home.component */
      "./src/app/home/home.component.ts");
      /* harmony import */


      var _global_components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./global_components/menu-bar/menu-bar.component */
      "./src/app/global_components/menu-bar/menu-bar.component.ts");
      /* harmony import */


      var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./page-not-found/page-not-found.component */
      "./src/app/page-not-found/page-not-found.component.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _recipe_book_recipe_book_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./recipe-book/recipe-book.component */
      "./src/app/recipe-book/recipe-book.component.ts");
      /* harmony import */


      var _view_recipe_view_recipe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./view-recipe/view-recipe.component */
      "./src/app/view-recipe/view-recipe.component.ts");
      /* harmony import */


      var _recipe_table_recipe_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./recipe-table/recipe-table.component */
      "./src/app/recipe-table/recipe-table.component.ts"); // Routing modules
      // Components
      // Nebular modules
      // Custom modules


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
          path: 'home',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
        }, {
          path: 'recipe',
          component: _recipe_book_recipe_book_component__WEBPACK_IMPORTED_MODULE_10__["RecipeBookComponent"]
        }, {
          path: 'recipe_table',
          component: _recipe_table_recipe_table_component__WEBPACK_IMPORTED_MODULE_12__["RecipeTableComponent"]
        }, {
          path: 'recipe/:id',
          component: _view_recipe_view_recipe_component__WEBPACK_IMPORTED_MODULE_11__["ViewRecipeComponent"]
        }, {
          path: 'page-not-found',
          component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]
        }, {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        }, {
          path: '**',
          redirectTo: '/page-not-found',
          pathMatch: 'full'
        }]), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbThemeModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbListModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbBadgeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbTabsetModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _global_components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_7__["MenuBarComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"], _recipe_book_recipe_book_component__WEBPACK_IMPORTED_MODULE_10__["RecipeBookComponent"], _view_recipe_view_recipe_component__WEBPACK_IMPORTED_MODULE_11__["ViewRecipeComponent"], _recipe_table_recipe_table_component__WEBPACK_IMPORTED_MODULE_12__["RecipeTableComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbListModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbBadgeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbTabsetModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _global_components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_7__["MenuBarComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"], _recipe_book_recipe_book_component__WEBPACK_IMPORTED_MODULE_10__["RecipeBookComponent"], _view_recipe_view_recipe_component__WEBPACK_IMPORTED_MODULE_11__["ViewRecipeComponent"], _recipe_table_recipe_table_component__WEBPACK_IMPORTED_MODULE_12__["RecipeTableComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
              path: 'home',
              component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            }, {
              path: 'recipe',
              component: _recipe_book_recipe_book_component__WEBPACK_IMPORTED_MODULE_10__["RecipeBookComponent"]
            }, {
              path: 'recipe_table',
              component: _recipe_table_recipe_table_component__WEBPACK_IMPORTED_MODULE_12__["RecipeTableComponent"]
            }, {
              path: 'recipe/:id',
              component: _view_recipe_view_recipe_component__WEBPACK_IMPORTED_MODULE_11__["ViewRecipeComponent"]
            }, {
              path: 'page-not-found',
              component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]
            }, {
              path: '',
              redirectTo: '/home',
              pathMatch: 'full'
            }, {
              path: '**',
              redirectTo: '/page-not-found',
              pathMatch: 'full'
            }]), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbThemeModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbListModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbCheckboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbBadgeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbTabsetModule"]],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/global_components/menu-bar/menu-bar.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/global_components/menu-bar/menu-bar.component.ts ***!
      \******************************************************************/

    /*! exports provided: MenuBarComponent */

    /***/
    function srcAppGlobal_componentsMenuBarMenuBarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuBarComponent", function () {
        return MenuBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MenuBarComponent = /*#__PURE__*/function () {
        function MenuBarComponent() {
          _classCallCheck(this, MenuBarComponent);
        }

        _createClass(MenuBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MenuBarComponent;
      }();

      MenuBarComponent.ɵfac = function MenuBarComponent_Factory(t) {
        return new (t || MenuBarComponent)();
      };

      MenuBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MenuBarComponent,
        selectors: [["app-menu-bar"]],
        decls: 2,
        vars: 0,
        template: function MenuBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu-bar works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbF9jb21wb25lbnRzL21lbnUtYmFyL21lbnUtYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-menu-bar',
            templateUrl: './menu-bar.component.html',
            styleUrls: ['./menu-bar.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/home/home.component.ts":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var _c0 = function _c0() {
        return ["/recipe"];
      };

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.aboutSection = false;
            this.projectSection = false;
            this.resumeSection = false;
          }
        }, {
          key: "openDiv",
          value: function openDiv(a) {
            if (a === "about") {
              this.aboutSection = true;
              this.projectSection = false;
              this.resumeSection = false;
            } else if (a === "project") {
              this.aboutSection = false;
              this.projectSection = true;
              this.resumeSection = false;
            } else if (a === "resume") {
              this.aboutSection = false;
              this.projectSection = false;
              this.resumeSection = true;
            } else {
              throw "Invalid button click";
            }
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 18,
        vars: 2,
        consts: [[1, "intro-text"], [1, "center-container"], ["src", "../../assets/media/profile.jpg", 1, "profile"], ["href", "https://www.linkedin.com/in/jeffrey-carr/", "target", "_blank"], ["src", "../../assets/media/linkedin_profile.png", "alt", "linkedin logo", 1, "company-logo"], ["href", "https://github.com/jcarr98", "target", "_blank"], ["src", "../../assets/media/github_profile.png", 1, "company-logo"], ["nbButton", "", "size", "small", "status", "info", 1, "recipeButton", 3, "routerLink"], ["fullWidth", ""], ["tabTitle", "About Me"], ["tabTitle", "Projects"], ["tabTitle", "Resume"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello, my name is Jeffrey Carr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " To Recipe Book ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-tabset", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-tab", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " This is the about me section ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-tab", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " This is the projects section ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-tab", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " This is the resume section ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTabsetComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTabComponent"]],
        styles: ["button[_ngcontent-%COMP%] {\n    margin: 0.5em;\n}\n\nnb-layout[_ngcontent-%COMP%] {\n    max-height: 3em;\n}\n\n.intro-text[_ngcontent-%COMP%] {\n    margin-top: 0.5em;\n    text-align: center;\n    font-family: 'Comfortaa', cursive;\n}\n\n.center-container[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 2em;\n    text-align: center;\n}\n\n.profile[_ngcontent-%COMP%] {\n    max-height: 345px;\n    max-width: 260px;\n    border-radius: 50%;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0.5em;\n    display: block;\n}\n\n.company-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 50%;\n    margin: 0.3em;\n}\n\n.colContainer[_ngcontent-%COMP%] {\n    max-height: 1em;\n}\n\n.buttonContainer[_ngcontent-%COMP%] {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICAgIG1hcmdpbjogMC41ZW07XG59XG5cbm5iLWxheW91dCB7XG4gICAgbWF4LWhlaWdodDogM2VtO1xufVxuXG4uaW50cm8tdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcbn1cblxuLmNlbnRlci1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvZmlsZSB7XG4gICAgbWF4LWhlaWdodDogMzQ1cHg7XG4gICAgbWF4LXdpZHRoOiAyNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29tcGFueS1sb2dvIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMC4zZW07XG59XG5cbi5jb2xDb250YWluZXIge1xuICAgIG1heC1oZWlnaHQ6IDFlbTtcbn1cblxuLmJ1dHRvbkNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/page-not-found/page-not-found.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/page-not-found/page-not-found.component.ts ***!
      \************************************************************/

    /*! exports provided: PageNotFoundComponent */

    /***/
    function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
        return PageNotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var PageNotFoundComponent = /*#__PURE__*/function () {
        function PageNotFoundComponent() {
          _classCallCheck(this, PageNotFoundComponent);
        }

        _createClass(PageNotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageNotFoundComponent;
      }();

      PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
        return new (t || PageNotFoundComponent)();
      };

      PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageNotFoundComponent,
        selectors: [["app-page-not-found"]],
        decls: 4,
        vars: 0,
        consts: [["routerLink", "/home"]],
        template: function PageNotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "That is not a valid route...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back to home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-page-not-found',
            templateUrl: './page-not-found.component.html',
            styleUrls: ['./page-not-found.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/recipe-book/recipe-book.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/recipe-book/recipe-book.component.ts ***!
      \******************************************************/

    /*! exports provided: RecipeBookComponent */

    /***/
    function srcAppRecipeBookRecipeBookComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipeBookComponent", function () {
        return RecipeBookComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _assets_recipes_recipes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../assets/recipes/recipes.json */
      "./src/assets/recipes/recipes.json");

      var _assets_recipes_recipes_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../assets/recipes/recipes.json */
      "./src/assets/recipes/recipes.json", 1);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function RecipeBookComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChange", function RecipeBookComponent_div_22_Template_nb_checkbox_checkedChange_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var i_r4 = ctx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.applyCategory(i_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3);
        }
      }

      function RecipeBookComponent_ng_container_24_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r7.cook.hours, " hour");
        }
      }

      function RecipeBookComponent_ng_container_24_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function RecipeBookComponent_ng_container_24_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function RecipeBookComponent_ng_container_24_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r7.cook.minutes, " minutes");
        }
      }

      var _c0 = function _c0(a1) {
        return ["/recipe", a1];
      };

      function RecipeBookComponent_ng_container_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Cook time: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RecipeBookComponent_ng_container_24_ng_container_6_Template, 2, 1, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RecipeBookComponent_ng_container_24_ng_container_7_Template, 2, 0, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RecipeBookComponent_ng_container_24_ng_container_8_Template, 2, 0, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RecipeBookComponent_ng_container_24_ng_container_9_Template, 2, 1, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Open");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.cook.hours > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.cook.hours > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.cook.hours > 0 && item_r7.cook.minutes > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.cook.minutes > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, item_r7.id));
        }
      }

      function RecipeBookComponent_h5_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nothing to show :(");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return ["/home"];
      };

      var _c2 = function _c2() {
        return ["/recipe_table"];
      };

      var RecipeBookComponent = /*#__PURE__*/function () {
        function RecipeBookComponent() {
          _classCallCheck(this, RecipeBookComponent);

          this.allRecipes = _assets_recipes_recipes_json__WEBPACK_IMPORTED_MODULE_1__;
        }

        _createClass(RecipeBookComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.searchValue = "";
            this.initFilter();
          } // Init all filters

        }, {
          key: "initFilter",
          value: function initFilter() {
            // Init all categories
            this.selectedCategories = [];
            this.categories = [];

            for (var i = 0; i < this.allRecipes.length; i++) {
              var thisItem = this.allRecipes[i].category;

              if (!this.categories.includes(thisItem)) {
                // Filter out blank lines
                if (thisItem.trim().length > 0) {
                  this.categories.push(thisItem);
                  this.selectedCategories.push(true);
                }
              }
            }

            this.categories.sort(); // Init all filters

            this.filter();
          }
        }, {
          key: "filter",
          value: function filter() {
            this.filteredOptions = [];
            this.filterCategory();
            this.filterSearch();

            if (this.filteredOptions.length === 0) {
              this.badSearch = true;
            } else {
              this.badSearch = false;
            }

            this.filteredOptions.sort();
          } // Search methods

        }, {
          key: "filterSearch",
          value: function filterSearch() {
            if (this.searchValue.trim().length > 0) {
              var tempArray = [];

              for (var i = 0; i < this.filteredOptions.length; i++) {
                if (this.filteredOptions[i].name.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase())) {
                  tempArray.push(this.filteredOptions[i]);
                }
              }

              this.filteredOptions = tempArray;
            }
          }
        }, {
          key: "clearSearch",
          value: function clearSearch() {
            this.searchValue = "";
            this.filter();
          } // Category methods

        }, {
          key: "applyCategory",
          value: function applyCategory(index) {
            this.selectedCategories[index] = !this.selectedCategories[index];
            this.filter();
          }
        }, {
          key: "filterCategory",
          value: function filterCategory() {
            var categoriesToFilter = []; // Iterate over selected categories, if any = true, add those to filter

            for (var i = 0; i < this.selectedCategories.length; i++) {
              if (!this.selectedCategories[i]) {
                categoriesToFilter.push(this.categories[i]);
              }
            } // If item is included in filter, show it on the page


            if (categoriesToFilter.length > 0) {
              for (var j = 0; j < this.allRecipes.length; j++) {
                if (categoriesToFilter.includes(this.allRecipes[j].category)) {
                  this.filteredOptions.push(this.allRecipes[j]);
                }
              }
            } else {
              var _iterator = _createForOfIteratorHelper(this.allRecipes),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _i = _step.value;
                  this.filteredOptions.push(_i);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
        }]);

        return RecipeBookComponent;
      }();

      RecipeBookComponent.ɵfac = function RecipeBookComponent_Factory(t) {
        return new (t || RecipeBookComponent)();
      };

      RecipeBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RecipeBookComponent,
        selectors: [["app-recipe-book"]],
        decls: 26,
        vars: 8,
        consts: [["fixed", ""], ["nbButton", "", "size", "tiny", "status", "info", 1, "titleButton"], ["nbButton", "", "size", "tiny", "status", "secondary", 1, "titleButton", 3, "routerLink"], [1, "searchContainer"], ["nbInput", "", "type", "text", "placeholder", "Search...", 3, "ngModel", "ngModelChange"], ["nbButton", "", "status", "primary", "size", "tiny", 3, "click"], ["nbButton", "", "size", "tiny", 3, "click"], [4, "ngFor", "ngForOf"], [1, "colored-column-basic"], [4, "ngIf"], [3, "checkedChange"], ["nbButton", "", "outline", "", "status", "primary", 3, "routerLink"]],
        template: function RecipeBookComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Jean's Recipe Book");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back to Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View as table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecipeBookComponent_Template_input_ngModelChange_12_listener() {
              return ctx.filter();
            })("ngModelChange", function RecipeBookComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.searchValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeBookComponent_Template_button_click_14_listener() {
              return ctx.filter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeBookComponent_Template_button_click_16_listener() {
              return ctx.clearSearch();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RecipeBookComponent_div_22_Template, 3, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nb-layout-column", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RecipeBookComponent_ng_container_24_Template, 13, 8, "ng-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RecipeBookComponent_h5_25_Template, 2, 0, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.badSearch);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutColumnComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCheckboxComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardFooterComponent"]],
        styles: ["html[_ngcontent-%COMP%] {\n    font-family: 'Open Sans', sans-serif;\n}\n\nh1[_ngcontent-%COMP%] {\n    font-family: Comfortaa;\n}\n\n.titleButton[_ngcontent-%COMP%] {\n    margin-left: 3em;\n}\n\n.searchContainer[_ngcontent-%COMP%] {\n    margin-top: 1em;\n    margin-left: 1em;\n    margin-bottom: 1em;\n}\n\n.searchContainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin-bottom: 0.5em;\n}\n\n.searchContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-right: 0.5em;\n}\n\n.filter[_ngcontent-%COMP%] {\n    margin-left: 1em;\n    margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlLWJvb2svcmVjaXBlLWJvb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVDO0lBQ0csb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS1ib29rL3JlY2lwZS1ib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xufVxuXG4udGl0bGVCdXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAzZW07XG59XG5cbi5zZWFyY2hDb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuIC5zZWFyY2hDb250YWluZXIgaW5wdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG4uc2VhcmNoQ29udGFpbmVyIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cblxuLmZpbHRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeBookComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-recipe-book',
            templateUrl: './recipe-book.component.html',
            styleUrls: ['./recipe-book.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/recipe-table/recipe-table.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/recipe-table/recipe-table.component.ts ***!
      \********************************************************/

    /*! exports provided: RecipeTableComponent */

    /***/
    function srcAppRecipeTableRecipeTableComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipeTableComponent", function () {
        return RecipeTableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _assets_recipes_recipes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../assets/recipes/recipes.json */
      "./src/assets/recipes/recipes.json");

      var _assets_recipes_recipes_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../assets/recipes/recipes.json */
      "./src/assets/recipes/recipes.json", 1);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var _c0 = function _c0() {
        return ["/recipe"];
      };

      var RecipeTableComponent = /*#__PURE__*/function () {
        function RecipeTableComponent() {
          _classCallCheck(this, RecipeTableComponent);

          // Get all recipes
          this.allRecipes = _assets_recipes_recipes_json__WEBPACK_IMPORTED_MODULE_1__;
        }

        _createClass(RecipeTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RecipeTableComponent;
      }();

      RecipeTableComponent.ɵfac = function RecipeTableComponent_Factory(t) {
        return new (t || RecipeTableComponent)();
      };

      RecipeTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RecipeTableComponent,
        selectors: [["app-recipe-table"]],
        decls: 10,
        vars: 2,
        consts: [["fixed", "true"], ["nbButton", "", "size", "tiny", "status", "info", 1, "titleButton"], ["nbButton", "", "size", "tiny", "status", "secondary", 1, "titleButton", 3, "routerLink"], [1, "colored-column-basic"]],
        template: function RecipeTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Jean's Recipe Book");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " View as cards ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-layout-column", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutColumnComponent"]],
        styles: ["html[_ngcontent-%COMP%] {\n    font-family: 'Open Sans', sans-serif;\n}\n\nh1[_ngcontent-%COMP%] {\n    font-family: Comfortaa;\n}\n\ntable[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n    border: 1px solid black;\n}\n\n.titleButton[_ngcontent-%COMP%] {\n    margin-left: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlLXRhYmxlL3JlY2lwZS10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlLXRhYmxlL3JlY2lwZS10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuXG5oMSB7XG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbn1cblxudGFibGUsdGQsdGgge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4udGl0bGVCdXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAzZW07XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-recipe-table',
            templateUrl: './recipe-table.component.html',
            styleUrls: ['./recipe-table.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/view-recipe/view-recipe.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/view-recipe/view-recipe.component.ts ***!
      \******************************************************/

    /*! exports provided: ViewRecipeComponent */

    /***/
    function srcAppViewRecipeViewRecipeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewRecipeComponent", function () {
        return ViewRecipeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _assets_recipes_recipes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../assets/recipes/recipes.json */
      "./src/assets/recipes/recipes.json");

      var _assets_recipes_recipes_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../assets/recipes/recipes.json */
      "./src/assets/recipes/recipes.json", 1);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ViewRecipeComponent_tr_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ingredient_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ingredient_r3.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ingredient_r3.name);
        }
      }

      function ViewRecipeComponent_ng_container_16_tr_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subs_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subs_r5.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subs_r5.name);
        }
      }

      function ViewRecipeComponent_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewRecipeComponent_ng_container_16_tr_4_Template, 5, 2, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedRecipe.subName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.selectedRecipe.sub);
        }
      }

      function ViewRecipeComponent_ng_container_19_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var direction_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](direction_r6);
        }
      }

      function ViewRecipeComponent_ng_container_19_s_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var direction_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](direction_r6);
        }
      }

      function ViewRecipeComponent_ng_container_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-checkbox", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChange", function ViewRecipeComponent_ng_container_19_Template_nb_checkbox_checkedChange_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var i_r7 = ctx.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.change(i_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewRecipeComponent_ng_container_19_div_2_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewRecipeComponent_ng_container_19_s_3_Template, 2, 1, "s", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r7 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.done[i_r7]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.done[i_r7]);
        }
      }

      var _c0 = function _c0() {
        return ["/recipe"];
      };

      var ViewRecipeComponent = /*#__PURE__*/function () {
        function ViewRecipeComponent(route, router) {
          _classCallCheck(this, ViewRecipeComponent);

          this.route = route;
          this.router = router;
          this.allRecipes = _assets_recipes_recipes_json__WEBPACK_IMPORTED_MODULE_1__;
        }

        _createClass(ViewRecipeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var givenID = parseInt(this.route.snapshot.paramMap.get('id'));
            this.done = [];
            this.selectedRecipe = this.getSelectedRecipe(givenID);
            this.parsedDirections = this.parseDirections();

            for (var i = 0; i < this.parsedDirections.length; i++) {
              this.done.push(false);
            }
          }
        }, {
          key: "getSelectedRecipe",
          value: function getSelectedRecipe(idx) {
            for (var i = 0; i < this.allRecipes.length; i++) {
              if (this.allRecipes[i].id === idx) {
                return this.allRecipes[i];
              }
            }
          }
        }, {
          key: "parseDirections",
          value: function parseDirections() {
            return this.selectedRecipe.directions.split(".");
          }
        }, {
          key: "change",
          value: function change(index) {
            this.done[index] = !this.done[index];
          }
        }]);

        return ViewRecipeComponent;
      }();

      ViewRecipeComponent.ɵfac = function ViewRecipeComponent_Factory(t) {
        return new (t || ViewRecipeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      ViewRecipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewRecipeComponent,
        selectors: [["app-view-recipe"]],
        decls: 20,
        vars: 6,
        consts: [["fixed", ""], ["nbButton", "", "size", "tiny", "status", "info", 1, "titleButton", 3, "routerLink"], [1, "itemContainer"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "amount"], ["colspan", "2"], [3, "checkedChange"]],
        template: function ViewRecipeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Back to List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-layout-column", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ingredients");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ViewRecipeComponent_tr_15_Template, 5, 2, "tr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ViewRecipeComponent_ng_container_16_Template, 5, 2, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Directions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ViewRecipeComponent_ng_container_19_Template, 5, 2, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedRecipe.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedRecipe.ingredients);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedRecipe.subIngredients);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parsedDirections);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutColumnComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCheckboxComponent"]],
        styles: ["table[_ngcontent-%COMP%] {\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    border-bottom: 1px dashed black;\n}\n\ntd[_ngcontent-%COMP%] {\n    width: 50%;\n}\n\nul[_ngcontent-%COMP%] {\n    list-style: none;\n}\n\n.itemContainer[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.amount[_ngcontent-%COMP%] {\n    width: 10%;\n    border-right: 1px solid black;\n}\n\n.titleButton[_ngcontent-%COMP%] {\n    margin-left: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1yZWNpcGUvdmlldy1yZWNpcGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctcmVjaXBlL3ZpZXctcmVjaXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbnRoLHRkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGJsYWNrO1xufVxuXG50ZCB7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5pdGVtQ29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hbW91bnQge1xuICAgIHdpZHRoOiAxMCU7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG59XG5cbi50aXRsZUJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDNlbTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewRecipeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-view-recipe',
            templateUrl: './view-recipe.component.html',
            styleUrls: ['./view-recipe.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/assets/recipes/recipes.json":
    /*!*****************************************!*\
      !*** ./src/assets/recipes/recipes.json ***!
      \*****************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, default */

    /***/
    function srcAssetsRecipesRecipesJson(module) {
      module.exports = JSON.parse("[{\"id\":0,\"category\":\"Beef\",\"name\":\"American Chop Suey\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":35},\"ingredients\":[{\"name\":\"Chopped green pepper\",\"amount\":\"1\"},{\"name\":\"Chopped Onion\",\"amount\":\"1\"},{\"name\":\"Can of tomato soup\",\"amount\":\"1\"},{\"name\":\"Hamburg\",\"amount\":\"1 pound\"},{\"name\":\"Cooked spaghetti\",\"amount\":\"\"}],\"directions\":\"Cook pepper and onion, add hamburg. Cook hamburg until no longer pink, drain. Add soup and 1/3 can of water. Add spaghetti, mix well and serve\"},{\"id\":1,\"category\":\"Beef\",\"name\":\"Bacon-Cheeseburger Potato Pie\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":15},\"ingredients\":[{\"name\":\"Lean ground beef\",\"amount\":\"1 1/2 pound\"},{\"name\":\"Bread crumbs\",\"amount\":\"1/2 cup\"},{\"name\":\"Finely chopped onion\",\"amount\":\"1/4 cup\"},{\"name\":\"Ketchup\",\"amount\":\"1/4 cup\"},{\"name\":\"Prepared mustard\",\"amount\":\"2 tsp\"},{\"name\":\"Bacon\",\"amount\":\"3 slices\"},{\"name\":\"Water\",\"amount\":\"1 1/4 cup\"},{\"name\":\"Margarine\",\"amount\":\"3 tablespoons\"},{\"name\":\"Garlic salt\",\"amount\":\"1/4 tsp\"},{\"name\":\"Milk\",\"amount\":\"3/4 cup\"},{\"name\":\"Mashed potato flakes\",\"amount\":\"2 cups\"},{\"name\":\"Shredded cheddar cheese\",\"amount\":\"4 oz (1 cup)\"}],\"directions\":\"In medium bowl combine beef, bread crumbs, onion, ketchup, and mustard. Press mixture in bottom and sides of 9 inch pie plate. Bake at 375 for 15 minutes. Cook bacon. In saucepan, combine water, margarine, and garlic salt. Bring to a boil. Remove from heat and add milk. With fork, stir in potato flakes \\n\\n Remove beef crust from oven and pour off drippings. Spoon potato mixture evenly into crust. Return to oven and bake 15 minutes. Remove pie from oven and top with remaining cheese and crumbled up bacon. Return to oven for 5 additional minutes. Let stand 10 minutes before serving\"},{\"id\":2,\"category\":\"Chicken\",\"name\":\"Baked Chicken With Rice\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":20},\"ingredients\":[{\"name\":\"Onion soup mix\",\"amount\":\"1 package\"},{\"name\":\"Uncle Bens rice\",\"amount\":\"1 cup (raw)\"},{\"name\":\"Chicken\",\"amount\":\"Whole cut up pieces\"},{\"name\":\"Cream of chicken soup\",\"amount\":\"1 can\"},{\"name\":\"Water\",\"amount\":\"2 cans\"}],\"directions\":\"Sprinkle onion soup across the bottom of a shallow roasing pan. Add rice, then chicken. Mix cream of chicken soup and water together, pour over chicken. Add a little pepper. Cook 1 1/2 hours at 325 degrees\"},{\"id\":3,\"category\":\"Soup\",\"name\":\"Barley - Vegetable Soup\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":55},\"ingredients\":[{\"name\":\"Uncooked barley\",\"amount\":\"1 cup\"},{\"name\":\"Dried bay leaf\",\"amount\":\"1\"},{\"name\":\"Baby cut carrots, cut crosswise in half\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Celery, sliced\",\"amount\":\"2 medium stalks or 1 cup\"},{\"name\":\"Onion, chopped\",\"amount\":\"1 medium or 1/2 cup\"},{\"name\":\"Green pepper, chopped\",\"amount\":\"1 small or 1/2 cup\"},{\"name\":\"Garlic, finely chopped\",\"amount\":\"2 cloves\"},{\"name\":\"Sweet potato, peeled and cubed\",\"amount\":\"1 large\"},{\"name\":\"Frozen corn\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Frozen green beans\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Vegetable broth\",\"amount\":\"2 14oz cans\"},{\"name\":\"Water\",\"amount\":\"6 cups\"},{\"name\":\"Diced tomatoes with herbs, undrained\",\"amount\":\"1 14.5oz can\"}],\"directions\":\"Layer all ingredients (except broth, water, and tomatoes) in order listed in slow cooker. Pour broth and water over ingredients, do not stir. Cover and cook on low 6-8 hours or until barley is tender. 10 minutes before serving, stir in tomatoes. Cover and cook 10 minutes. Remove Bay leaf\"},{\"id\":4,\"category\":\"Beef\",\"name\":\"Beef Taco Bake\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":35},\"ingredients\":[{\"name\":\"Ground beef\",\"amount\":\"1 lb\"},{\"name\":\"Condensed tomato soup\",\"amount\":\"1 10 3/4oz can\"},{\"name\":\"Salsa\",\"amount\":\"1 cup\"},{\"name\":\"Milk\",\"amount\":\"1/2 cup\"},{\"name\":\"Flour tortillas cut into 1\\\" pieces\",\"amount\":\"6 6\\\" to 8\\\"\"},{\"name\":\"Shredded cheddar cheese\",\"amount\":\"1 cup\"}],\"directions\":\"In skillet cook beef until brown, stirring to separate meat. Pour off fat. Add soup, salsa, milk, tortillas and half of the cheese. Spoon into 2 quart shallow baking dish, cover. Bake at 400 for 30 minutes or until hot. Sprinkle with remaining cheese\"},{\"id\":5,\"category\":\"Pork\",\"name\":\"Bow-Ties with Ham\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":15},\"ingredients\":[{\"name\":\"Uncooked bow-tie pasta\",\"amount\":\"3 cups\"},{\"name\":\"Alfredo pasta sauce\",\"amount\":\"1 16oz jar\"},{\"name\":\"Medium asparagus spears, cut into 1-inch pieces\",\"amount\":\"10 (or 1 cup)\"},{\"name\":\"Sun-dried tomatoes in oil and herbs, drained, chopped\",\"amount\":\"1/2 cup\"},{\"name\":\"Diced (1/4 to 1/2 inch) cooked ham\",\"amount\":\"1 cup\"}],\"directions\":\"Heat oven to 350 degrees. Spray 2-quart casserole with cooking spray. Cook and drain pasta as directed on package. In a 3-quart saucepan, heat alfredo sauce over medium heat, stirring frequently, until hot. Gently stir in cooked pasta, asparagus, tomatoes, and ham. Stir in 1/2 cup of the cheese. Pour into casserole. Cover, bake 35-45 minutes or until bubbly. Top with remaining cheese\"},{\"id\":6,\"category\":\"Crockpot\",\"name\":\"Brown Sugar and Balsamic Glazed Pork Loin\",\"subIngredients\":true,\"cook\":{\"hours\":8,\"minutes\":15},\"ingredients\":[{\"name\":\"2 lb boneless pork loin\",\"amount\":\"1\"},{\"name\":\"Pepper\",\"amount\":\"1/4 tsp\"},{\"name\":\"Garlic, crushed\",\"amount\":\"1 glove\"},{\"name\":\"Water\",\"amount\":\"1/2 cup\"}],\"subName\":\"Glaze\",\"sub\":[{\"name\":\"Brown sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Cornstarch\",\"amount\":\"1 tablespoon\"},{\"name\":\"Balsamic vinegar\",\"amount\":\"1/4 cup\"},{\"name\":\"Water\",\"amount\":\"1/2 cup\"},{\"name\":\"Soy sauce\",\"amount\":\"2 tablespoons\"}],\"directions\":\"Combine pepper and garlic. Rub over roast. Place in slow cooker with 1/2 cup water. Cook on low for 6-8 hours. About 1 hour before roast is done, combine ingredients for glaze in a small saucepan. Heat and stir until mixture thickens. Brush roast with glaze 2 or 3 times during the last hour of cooking. Serve with remaining glaze on size\"},{\"id\":7,\"category\":\"Chicken\",\"name\":\"Buffalo Chicken Lasagna\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":20},\"ingredients\":[{\"name\":\"Bulk ground chicken\",\"amount\":\"1 lb\"},{\"name\":\"Unsalted butter\",\"amount\":\"3 tablespoons\"},{\"name\":\"All-purpose flour\",\"amount\":\"3 tablespoons\"},{\"name\":\"Chicken broth\",\"amount\":\"2 cups\"},{\"name\":\"Sour cream\",\"amount\":\"1 cup\"},{\"name\":\"Red hot buffalo wing sauce\",\"amount\":\"1/2 cup\"},{\"name\":\"Refrigerated seamless dough sheet\",\"amount\":\"1 can\"},{\"name\":\"Shredded cheddar cheese\",\"amount\":\"2 cups\"}],\"directions\":\"Heat oven to 400 degrees. In 10-inch skillet, cook chicken until no longer pink. Transfer chicken to large bowl. In same skillet, melt butter over medium heat. Stir in flour until well blended. Gradually add chicken broth, beating with whisk after each addition. Make sure mixture is smooth and lump-free before adding more broth. Keep doing this until all of the broth has been added. Remove skillet from heat. Stir in sour cream with whisk until well combined. Stir in wing sauce. Add cooked chicken; mix well. Set aside. Unroll dough onto work surface dusted lightly with flour. Cut dough in half; set 1 half aside. Using rolling pin, roll dough until about 1/4 inch thick. Spoon small amount of chicken mixture into ungreased 11x7in (or 12x8in) glass baking dish. Cut strips of dough to roughly fit on top of chicken mixture; arrange over mixture. Sprinkle some of the cheese over top; add more chicken mixture. Repeat layering 2 more times, using remaining half of dough and all of the chicken mixture (make sure to end with chicken on the surface). Top with remaining cheese. Bake 45 minutes or until cheese is golden brown and bubbly. Cool 10 minutes before serving\"},{\"id\":8,\"category\":\"Chicken\",\"name\":\"Buffalo Chicken Pot Pie\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":55},\"ingredients\":[{\"name\":\"Butter\",\"amount\":\"1 tablespoon\"},{\"name\":\"White onion, diced\",\"amount\":\"1/2\"},{\"name\":\"Celery, diced\",\"amount\":\"6 stalks\"},{\"name\":\"Carrots, diced\",\"amount\":\"3\"},{\"name\":\"Rotisserie chicken\",\"amount\":\"1 2lb\"},{\"name\":\"Buffalo wing sauce\",\"amount\":\"3/4 cup\"},{\"name\":\"Crumbled blue cheese\",\"amount\":\"1 cup\"},{\"name\":\"Pillsbury refrigerated pie crusts (softened as directed on box)\",\"amount\":\"1 box\"}],\"directions\":\"Heat oven to 400 degrees. In 3-quart saucepan, melt butter over medium heat. Add onion; cook 3 to 5 minutes or until softened. Add celery and carrots; cook 5 to 7 minutes. Remove and discard skin from chicken. Remove chicken from bones; cut chicken into small pieces and discard bones. In a large bowl, toss vegetable mixture, chicken, buffalo wing sauce, and cheese until well mixed. Make pie crusts as directed on box for Two-Crust Pie using 10-inch glass deep-dish pie plate. Pour chicken mixture into crust-lined plate. Top with second crust and flute; cut slits in several pieces. Bake 25 to 35 minutes or until edge is golden brown\"},{\"id\":9,\"category\":\"Crockpot\",\"name\":\"Cafe Rio Chicken\",\"subIngredients\":false,\"cook\":{\"hours\":5,\"minutes\":10},\"ingredients\":[{\"name\":\"Skinless split chicken breasts (bone in)\",\"amount\":\"2 lbs\"},{\"name\":\"Salt and pepper\",\"amount\":\"\"},{\"name\":\"Zesty italian dressing\",\"amount\":\"8oz\"},{\"name\":\"Minced garlic\",\"amount\":\"1/2 tablespoon\"},{\"name\":\"Ranch dressing mix\",\"amount\":\"1 packet\"},{\"name\":\"Chili powder\",\"amount\":\"1/2 tablespoon\"},{\"name\":\"Ground cumin\",\"amount\":\"1/2 tablespoon\"},{\"name\":\"Kosher salt\",\"amount\":\"1/2 teaspoon\"}],\"directions\":\"Season the chicken on both sides with the salt and pepper and place in the slow cooker. Mix the italian dressing, garlic, ranch dressing mix, chili powder, cumin, and kosher salt together and pour over the chicken. Cook on low for about 5 hours or until chicken is done. Shred with fork and serve in salads, burritos, tacos, or anything else you like\"},{\"id\":10,\"category\":\"Beef\",\"name\":\"Cheeseburger Mac\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":30},\"ingredients\":[{\"name\":\"Ground beef\",\"amount\":\"1 pound\"},{\"name\":\"Water\",\"amount\":\"2 3/4 cup\"},{\"name\":\"Ketchup\",\"amount\":\"1/3 cup\"},{\"name\":\"Onion powder\",\"amount\":\"1-2 tsp\"},{\"name\":\"Elbow macaroni, uncooked\",\"amount\":\"2 cups\"},{\"name\":\"Velveeta cheese, cut up\",\"amount\":\"3/4 lbs\"}],\"directions\":\"Brown meat in a large skillet, drain. Stir in water, ketchup, and onion powder. Bring to boil. Stir in macaroni. Reduce heat to med-low; cover. Simmer 8 to 10 minutes or until macaroni is tender. Add velveeta, sitr until melted\"},{\"id\":11,\"category\":\"Chicken\",\"name\":\"Cheesy Chicken Enchiladas\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":55},\"ingredients\":[{\"name\":\"Chopped cooked chicken breast\",\"amount\":\"2 1/2 cups\"},{\"name\":\"Shredded Mexian blend cheese\",\"amount\":\"2 cups\"},{\"name\":\"Plain low-fat yogurt\",\"amount\":\"1 2/3 cups\"},{\"name\":\"Butter, melted\",\"amount\":\"1/3 cup\"},{\"name\":\"Chopped onion\",\"amount\":\"1/4 cup\"},{\"name\":\"Minced garlic\",\"amount\":\"1 teaspoon\"},{\"name\":\"Condensed cream of chicken soup, undiluted\",\"amount\":\"1 10 3/4oz can\"},{\"name\":\"Chopped green chiles, drained\",\"amount\":\"1 4.5oz can\"},{\"name\":\"Flour tortillas\",\"amount\":\"8 8in\"},{\"name\":\"Canola oil\",\"amount\":\"1 tablespoon\"},{\"name\":\"Cooking spray\",\"amount\":\"\"},{\"name\":\"Finely shredded sharp cheddar cheese\",\"amount\":\"1/2 cup (2oz)\"},{\"name\":\"Chopped green onions\",\"amount\":\"1/4 cup\"}],\"directions\":\"Preheat oven to 350 degrees. Combine first 9 ingredients in a large bowl. Remove 1 cup chicken mixture; set mixture aside. Heat a large skillet over medium-high heat. Working with 1 tortilla at a time, brush oil over both sides of tortilla. Add tortilla to pan; cook 5 seconds on each side or until toasted and soft. remove from pan; arrange 1/2 cup chicken mixture down center of tortilla. Roll jelly-roll style; place filled tortilla, seam side down, in a 13x9-inch backing dish coated with cooking spray. Repeat procedure with remaining 7 tortillas. Spread reserved 1 cup chicken mixture evenly over enchiladas. Cover and bake at 350 degrees for 20 minutes. Uncover; sprinkle evenly with cheddar cheese and green onion; bake an additional 5 minutes or until cheese melts\"},{\"id\":12,\"category\":\"Chicken\",\"name\":\"Cheesy Chicken Tortilla Lasagna\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":25},\"ingredients\":[{\"name\":\"Taco sauce\",\"amount\":\"1 10oz can\"},{\"name\":\"Seasoned cooked chicken breast strips, thawed, diced\",\"amount\":\"2 packages\"},{\"name\":\"Sour cream\",\"amount\":\"1 8oz container\"},{\"name\":\"Sliced green onions\",\"amount\":\"1/2 cup\"},{\"name\":\"Taco seasoning\",\"amount\":\"1 tablespoon\"},{\"name\":\"Corn tortillas, halved\",\"amount\":\"8\"},{\"name\":\"Shredded monterey jack cheese\",\"amount\":\"2 cups (8oz)\"},{\"name\":\"Tortilla chips\",\"amount\":\"1 cup\"},{\"name\":\"Chopped tomatoes\",\"amount\":\"1 cup\"}],\"directions\":\"Spray 13x9 glass baking dish. Reserve 1/4 cup taco sauce. In large bowl, mix remaining taco sauce, chicken, sour cream, 1/4 cup onions and taco seasoning mix. Spoon 1/4 cup taco sauce on bottom of pan. Arrange tortilla pieces (8) over sauce, overlapping as necessary. Spoon 1/2 chicken mixture over tortilla; sprinkle with 2/3 cup of cheese. Repeat layers. Cover with foil. Bake 375 degrees for 30-35 minutes. Uncover; layer tortilla chips, tomatoes, remaining onion, and cheese on top. Bake uncovered 5 minutes. Let sit 10 minutes before serving\"},{\"id\":13,\"category\":\"Soup\",\"name\":\"Cheesy Potato Soup\",\"subIngredients\":false,\"cook\":{\"hours\":6,\"minutes\":55},\"ingredients\":[{\"name\":\"Bacon\",\"amount\":\"4 slices\"},{\"name\":\"Chopped onion\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Diced peeled russet potatoes\",\"amount\":\"5 medium\"},{\"name\":\"Celery, chopped\",\"amount\":\"1 medium stalk\"},{\"name\":\"Chicken broth\",\"amount\":\"1 32oz carton\"},{\"name\":\"Salt\",\"amount\":\"1/2 tsp\"},{\"name\":\"Pepper\",\"amount\":\"1/4 tsp\"},{\"name\":\"Flour\",\"amount\":\"1/2 cup\"},{\"name\":\"Half and half\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Shredded American and Cheddar cheese blend\",\"amount\":\"1 8oz bag\"}],\"directions\":\"In 12-inch skillet, cook bacon over medium heat, turning occasionally, until browned and crispy. Remove from skillet, reserving fat in skillet. Drain bacon on paper towel, then refrigerate. In same skillet, cook onion in bacon fat over medium heat 4 to 5 minutes, stirring frequently, until tender. Spray 3 1/4 to 4 quart slow cooker with cooking spray. In cooker, mix onion, potatoes, celery, broth, salt, and pepper. Cover; cook on low heat setting 6 to 7 hours. In small bowl, beat flour and half-and-half with wire whisk until well blended; stir into soup. Increase heat setting to high. Cover; cook about 30 minutes longer or until thickened. Stir in cheese until well melted. Crumble bacon; sprinkle over soup\"},{\"id\":14,\"category\":\"Chicken\",\"name\":\"Cheesy Stuffed Pepper Casserole\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":40},\"ingredients\":[{\"name\":\"Cooked rice\",\"amount\":\"2 cups\"},{\"name\":\"Ground beef\",\"amount\":\"1 lb\"},{\"name\":\"Olive oil\",\"amount\":\"1 tablespoon\"},{\"name\":\"Large green peppers, diced\",\"amount\":\"2\"},{\"name\":\"Frozen diced onion\",\"amount\":\"1/2 cup\"},{\"name\":\"Diced tomatoes, drained\",\"amount\":\"29oz can\"},{\"name\":\"Tomato sauce\",\"amount\":\"3 14oz cans\"},{\"name\":\"Corn, drained\",\"amount\":\"2 14oz cans\"},{\"name\":\"Garlic powder\",\"amount\":\"1/2 tsp\"},{\"name\":\"Kosher salt\",\"amount\":\"1/2 tsp\"},{\"name\":\"Fresh ground black pepper\",\"amount\":\"1/2 tsp\"},{\"name\":\"Shredded cheddar cheese\",\"amount\":\"2 cups\"}],\"directions\":\"Brown ground beef in a large stock pot, drain, remove from pan and set aside. Heat oil in stock pot on medium high heat and add green peppers and onion. Saute 5-10 minutes or until softened, stirring occasionally. to stock pot, add tomatoes, sauce, corn, garlic powder, salt, and pepper. Bring to a boil, then reduce heat and simmer 5 minutes. Stir in rice. Pour into a 9x13-inch baking dish. top with shredded cheese. Bake at 350 for 12-15 minutes or until cheese is melted\"},{\"id\":15,\"category\":\"Chicken\",\"name\":\"Chicken Alfredo Pizza\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":25},\"ingredients\":[{\"name\":\"Pillsbury refrigerated thin pizza crust\",\"amount\":\"1 can\"},{\"name\":\"Alfredo sauce\",\"amount\":\"1/2 cup (from 15oz jar)\"},{\"name\":\"Diced cooked chicken\",\"amount\":\"2 cups\"},{\"name\":\"Diced red bell pepper\",\"amount\":\"1/2 cup\"},{\"name\":\"Shredded Italian cheese blend or mozzarella cheese\",\"amount\":\"1 cup (4oz)\"}],\"directions\":\"Heat oven to 400 degrees. Grease 15x10-inch or larger nonstick cookie sheet with shortening. Unroll dough onto cookie sheet. Starting at center, press out dough into 15x10-inch rectangle. Bake 7 minutes then remove from oven. Spread sauce over warm crust. Top with chicken, bell pepper, and cheese. Bake 6 to 10 minutes or until cheese is melted and crust is golden brown\"},{\"id\":16,\"category\":\"Chicken\",\"name\":\"Chicken and Noodle Skillet\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":30},\"ingredients\":[{\"name\":\"Vegetable oil\",\"amount\":\"1 tablespoon\"},{\"name\":\"Boneless skinless chicken breast, cut into bite size pieces\",\"amount\":\"1 lb\"},{\"name\":\"Baby cut carrots, cut lengthwise in half\",\"amount\":\"1 cup\"},{\"name\":\"Frozen broccoli cuts\",\"amount\":\"1 cup\"},{\"name\":\"Uncooked egg noodles\",\"amount\":\"1 cup (2oz)\"},{\"name\":\"Chicken broth\",\"amount\":\"1 3/4 cup\"},{\"name\":\"Cream of chicken soup\",\"amount\":\"1 (10 3/4oz) can\"}],\"directions\":\"In skillet, heat over med-high heat. Cook chicken and onion in oil 6 to 8 minutes, stirring frequently until brown and onion is tender. Stir in remaining ingredients. Heat to boiling, reduce heat. Cover and simmer 10 minutes. Uncover and simmer 5 to 8 minutes longer, stirring occasionally until noodles are tender\"},{\"id\":17,\"category\":\"Chicken\",\"name\":\"Chicken Broccoli Alfredo\",\"subIngredients\":false,\"cook\":{\"hours\":5,\"minutes\":0},\"ingredients\":[{\"name\":\"Chicken breasts\",\"amount\":\"1 1/2 pounds\"},{\"name\":\"Frozen broccoli florets\",\"amount\":\"16oz\"},{\"name\":\"Alfredo sauce\",\"amount\":\"2 (16oz) jars\"},{\"name\":\"Large green pepper, chopped\",\"amount\":\"1\"},{\"name\":\"Sliced mushrooms, drained\",\"amount\":\"1 (4oz) can\"}],\"directions\":\"Place all ingredients in a resealable gallon-sized freezer bag and mix together. When ready to eat, remove from freezer and thaw in fridge for 24 hours. Cook on low for 4-6 hours\"},{\"id\":18,\"category\":\"Chicken\",\"name\":\"Chicken, Broccoli and Penne Pasta\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":40},\"ingredients\":[{\"name\":\"Penne\",\"amount\":\"12oz\"},{\"name\":\"Olive oil\",\"amount\":\"2oz\"},{\"name\":\"Chicken tenderloins\",\"amount\":\"8oz\"},{\"name\":\"Chopped garlic\",\"amount\":\"1 tsp\"},{\"name\":\"Broccoli florets\",\"amount\":\"1 pound\"},{\"name\":\"Chicken broth\",\"amount\":\"8oz\"},{\"name\":\"Margarine\",\"amount\":\"2-4oz\"},{\"name\":\"Parmesan\",\"amount\":\"1/2 cup\"},{\"name\":\"Crushed red pepper\",\"amount\":\"1 pinch\"}],\"directions\":\"Cook penne until al dente; set aside. Saute chicken in olive oil until lightly browned on one side. turn over and add garlic, crushed red pepper, and broccoli. Cook 1 minute. add broth and margarine. Continue cooking until broccoli is done. Add pasta\"},{\"id\":19,\"category\":\"Crockpot\",\"name\":\"Chicken Cacciatore\",\"subIngredients\":true,\"cook\":{\"hours\":30,\"minutes\":10},\"ingredients\":[{\"name\":\"Chicken breasts\",\"amount\":\"1 lb\"},{\"name\":\"Chunky vegetable-style spaghetti sauce\",\"amount\":\"1 (26oz) jar\"},{\"name\":\"Zucchini, chopped\",\"amount\":\"1\"},{\"name\":\"Green pepper, chopped\",\"amount\":\"1\"},{\"name\":\"Sweet onion, chopped\",\"amount\":\"1\"}],\"subName\":\"Garnish\",\"sub\":[{\"name\":\"Chopped black olives\",\"amount\":\"\"},{\"name\":\"Shredded parm cheese\",\"amount\":\"\"}],\"directions\":\"Place all ingredients in a resealable gallon-sized freezer bag and mix together. When ready to eat, remove from freezer and thaw in fridge for 24 hours. Cook on low for 6-8 hours. Serve with cooked spaghetti noodles and garnish with olives and cheese\"},{\"id\":20,\"category\":\"Crockpot\",\"name\":\"Chicken Chili\",\"subIngredients\":false,\"cook\":{\"hours\":8,\"minutes\":10},\"ingredients\":[{\"name\":\"Boneless skinless chicken breasts\",\"amount\":\"3\"},{\"name\":\"Chili season\",\"amount\":\"1 package\"},{\"name\":\"Rotel\",\"amount\":\"1 can\"},{\"name\":\"Tomato sauce\",\"amount\":\"2 cans\"},{\"name\":\"Corn, drained\",\"amount\":\"1 can\"},{\"name\":\"Chili beans\",\"amount\":\"1 can\"}],\"directions\":\"In a crockpot, mix chili season, rotel and tomato sauce. Add chicken. Cook 8 hours on low. Shred chicken with a fork; if it has cooked long enough it will just fall apart. Add remaining ingredients. Cook 30 minutes to warm. Serve with shredded cheese, sour cream, Frito's or cornbread\"},{\"id\":21,\"category\":\"Chicken\",\"name\":\"Chicken Fettuccine Casserole\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":50},\"ingredients\":[{\"name\":\"Refrigerated fettuccine\",\"amount\":\"1 (9oz) package\"},{\"name\":\"Butter or margarine\",\"amount\":\"3 tablespoons\"},{\"name\":\"All-purpose flour\",\"amount\":\"3 tablespoons\"},{\"name\":\"Chicken broth\",\"amount\":\"1 3/4 cups (from 32oz carton)\"},{\"name\":\"Half-and-half\",\"amount\":\"1/2 cup\"},{\"name\":\"Cubed cooked chicken\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Oil-packed sun-dried tomatoes, drained and cut into thin strips\",\"amount\":\"1/2 cup\"},{\"name\":\"Bacon, crisply cooked and crumbled\",\"amount\":\"2 slices\"},{\"name\":\"Shredded parmesan cheese\",\"amount\":\"3 tablespoons\"}],\"directions\":\"Heat oven to 350 degrees. Spray square baking dish, 8x8x2-inches, with cooking spray. Cook and drain fettuccine as directed on package. While fettuccine is cooking, melt butter in 2-quart saucepan over medium heat. Stir in flour. Gradually stir in broth. Heat to boiling, stirring constantly; remove from heat. Stir in half-and-half. Stir in chicken, tomatoes, and bacon. Add fettuccine to chicken mixture; toss gently to mix well. Spoon into baking dish. Sprinkle with cheese. Bake uncovered about 30 minutes or until hot in center\"},{\"id\":22,\"category\":\"Chicken\",\"name\":\"Chicken Parmesan\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":0},\"ingredients\":[{\"name\":\"Eggs\",\"amount\":\"1 or 2\"},{\"name\":\"Bread crumbs\",\"amount\":\"\"},{\"name\":\"Parmesan cheese\",\"amount\":\"\"},{\"name\":\"Chicken cutlets\",\"amount\":\"\"},{\"name\":\"Mozarella cheese\",\"amount\":\"\"},{\"name\":\"Spaghetti sauce\",\"amount\":\"\"}],\"directions\":\"Beat 1 or 2 eggs with a little milk in a bowl. Mix bread crumbs and parmesan cheese in a separate bowl. Take chicken cutlets and dip in egg, then bread crumbs. Heat a small amount of vegetable oil in a pan, place breaded cutlets in pan and brown on both sides. Layer spaghetti sauce, chicken, mozzarella and spaghetti sauce in a casserole dish\"},{\"id\":23,\"category\":\"Chicken\",\"name\":\"Chicken Quesadillas\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":55},\"ingredients\":[{\"name\":\"Extra-virgin olive oil\",\"amount\":\"1 tablespoon\"},{\"name\":\"Bell peppers, thinly sliced\",\"amount\":\"2\"},{\"name\":\"Onion, thinly sliced\",\"amount\":\"1/2\"},{\"name\":\"Kosher salt\",\"amount\":\"\"},{\"name\":\"Freshly ground black pepper\",\"amount\":\"\"},{\"name\":\"Boneless skinless chicken breasts, sliced into strips\",\"amount\":\"1 lb\"},{\"name\":\"Chili powder\",\"amount\":\"1/2 tsp\"},{\"name\":\"Ground cumin\",\"amount\":\"1/2 tsp\"},{\"name\":\"Dried oregano\",\"amount\":\"1/2 tsp\"},{\"name\":\"Medium flour tortillas\",\"amount\":\"4\"},{\"name\":\"Shredded Monterey Jack\",\"amount\":\"2 cups\"},{\"name\":\"Shredded cheddar\",\"amount\":\"2 cups\"},{\"name\":\"Avocado, sliced\",\"amount\":\"1\"},{\"name\":\"Vegetable oil\",\"amount\":\"1 tablespoon\"},{\"name\":\"Green onions, thinly sliced\",\"amount\":\"2\"},{\"name\":\"Sour cream (for serving)\",\"amount\":\"\"}],\"directions\":\"In a large skillet over medium-high heat, heat olive oil. Add peppers and onion and season with salt and pepper. Cook until soft, 5 minutes; Transfer to a plate. Heat remaining tablespoon vegetable oil over medium-high heat. Season chicken with spices, salt, and pepper and cook, stirring occasionally until golden and cooked through (8 minutes); transfer to a plate. Add 1 flour tortilla to skillet and top half of the tortilla with a heavy sprinkling of both cheeses, cooked chicken mixture, pepper-onion mixture, a few slices of avocado, and green onions. Fold the other half of the tortilla over and cook, flipping once, until golden, 3 minutes per side. Repeat to make 4 quesadillas. Slice into wedges and serve with sour cream\"},{\"id\":24,\"category\":\"Crockpot\",\"name\":\"Chicken Stew\",\"subIngredients\":false,\"cook\":{\"hours\":9,\"minutes\":0},\"ingredients\":[{\"name\":\"Medium potatoes, cut into 1 1/2 inch cubes\",\"amount\":\"3\"},{\"name\":\"Baby cut carrots\",\"amount\":\"2 cups\"},{\"name\":\"Boneless, skinless chicken thighs (about 2 1/2 pds)\",\"amount\":\"12\"},{\"name\":\"Instant chopped onion\",\"amount\":\"1 tsp\"},{\"name\":\"Garlic powder\",\"amount\":\"1/4 tsp\"},{\"name\":\"Chicken gravy\",\"amount\":\"1 (15oz) jar\"},{\"name\":\"Water\",\"amount\":\"1/2 cup\"}],\"directions\":\"Toss potatoes and carrots in crockpot. Arrange chicken on top. Sprinkle onion and garlic powder over chicken. Pour gravy and water over all. Cook 8-10 hours on low\"},{\"id\":25,\"category\":\"Soup\",\"name\":\"Chicken Taco Soup\",\"subIngredients\":false,\"cook\":{\"hours\":4,\"minutes\":0},\"ingredients\":[{\"name\":\"Large chicken breasts\",\"amount\":\"2\"},{\"name\":\"Taco seasoning\",\"amount\":\"1 packet\"},{\"name\":\"Mexicorn, drained\",\"amount\":\"1 can\"},{\"name\":\"Black beans, drained and rinsed\",\"amount\":\"1 can\"},{\"name\":\"Picante sauce\",\"amount\":\"16oz\"},{\"name\":\"Chicken stock\",\"amount\":\"32oz\"},{\"name\":\"Tomato paste\",\"amount\":\"6oz\"},{\"name\":\"Cream cheese\",\"amount\":\"4oz\"},{\"name\":\"Sour cream\",\"amount\":\"1/2 cup\"}],\"directions\":\"Place chicken on the bottom of greased slow cooker and sprinkle with taco seasoning. Dump corn, black beans, picante sauce, chicken stock and tomato paste ont top and stir to combine. Cook on high for 3 hours. Shred chicken with fork and add cream cheese and sour cream. Give the cream cheese and few minutes to melt and stir to incorporate all ingredients. Serve with some shredded cheese on top\"},{\"id\":26,\"category\":\"Chicken\",\"name\":\"Chicken Tetrazzini\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":30},\"ingredients\":[{\"name\":\"Unsalted butter\",\"amount\":\"1 tablespoon\"},{\"name\":\"Cooking spray\",\"amount\":\"\"},{\"name\":\"Finely chopped onion\",\"amount\":\"1 cup\"},{\"name\":\"Finely chopped celery\",\"amount\":\"2/3 cup\"},{\"name\":\"Freshly ground black pepper\",\"amount\":\"3/4 tablespoon\"},{\"name\":\"Salt\",\"amount\":\"1/4 tsp\"},{\"name\":\"Presliced mushrooms\",\"amount\":\"3 (8oz) packages\"},{\"name\":\"Dry sherry\",\"amount\":\"1/2 cup\"},{\"name\":\"Flour\",\"amount\":\"3oz (about 2/3 cup)\"},{\"name\":\"Chicken broth\",\"amount\":\"3 (14.5oz) cans\"},{\"name\":\"Grated Parmesan cheese, divided\",\"amount\":\"2 1/4 cups (9oz)\"},{\"name\":\"Cream cheese\",\"amount\":\"1/2 cup (4oz)\"},{\"name\":\"Hot cooked vermicelli\",\"amount\":\"7 cups (about 1 pd uncooked)\"},{\"name\":\"Chopped cooked chicken breast\",\"amount\":\"4 cups (about 1 1/2 pounds)\"},{\"name\":\"White bread\",\"amount\":\"1 slice\"}],\"directions\":\"Preheat oven to 350 degrees. Melt butter in a large stockpot over medium-high heat. Add onion, celery, black pepper, salt, and mushrooms; saute 4 minutes or until mushrooms are tender. Add sherry; cook 1 minute. Weigh or lightly spoon flour into dry measuring cups; level with a knife. Gradually add flour to pan; cook 3 minutes, stirring constatnly (mixture will be thick) with a whisk. Gradually add broth, stirring constantly. Bring to a boil. reduce heat; simmer 5 minutes, stirring frequently. Remove from heat. Add 1 3/4 cups parmesan cheese and cream cheese, stirring with a whisk until cream cheese melts. Add pasta and chicken; stir until blended. Divide pasta mixture between 2 (8-inch square) glass or ceramic baking dishes coated with cooking spray. Place bread in food processor; pulse 10 times or until coarse crumbs form. Combine breadcrums and 1/2 cup parmesan cheese; sprinkle evenly over pasta. Bake at 350 degrees for 30 minutes or until lightly browned and bubbly. Remove casserole from oven; let stand 15 minutes. To freeze unbaked casserole: prepare through Step 5. Cool completely in refrigerator. Cover with plastic wrap, pressing to remove as much air as possible. Wrap with heavy-duty foil. Store in freeze for up to 2 months. To prepare frozen unbaked casserole: thaw casserole completely in refrigerator (about 24 hours). Preheat oven to 350 degrees. Remove foil; reserve foil. remove plastic wrap; discard wrap. Cover casserole with reserved foil; bake at 350 degrees for 30 minutes. Uncover and bake an additional 1 hour or until golden and bubbly. Let stand 15 minutes\"},{\"id\":27,\"category\":\"Soup\",\"name\":\"Chicken Tortilla Soup\",\"subIngredients\":false,\"cook\":{\"hours\":4,\"minutes\":10},\"ingredients\":[{\"name\":\"Boneless chicken breasts\",\"amount\":\"1 pound\"},{\"name\":\"Diced tomatoes\",\"amount\":\"1 can\"},{\"name\":\"Chunky salsa\",\"amount\":\"1/2 cup\"},{\"name\":\"Homemade enchilada sauce\",\"amount\":\"1 cup\"},{\"name\":\"Medium onion, chopped\",\"amount\":\"1\"},{\"name\":\"Black beans, drained (optional)\",\"amount\":\"1 can\"},{\"name\":\"Garlic, chopped\",\"amount\":\"2 cloves\"},{\"name\":\"Chicken broth\",\"amount\":\"4 cups (32oz)\"},{\"name\":\"Cumin\",\"amount\":\"1 tsp\"},{\"name\":\"Chili powder\",\"amount\":\"1 tsp\"},{\"name\":\"Lemon juice\",\"amount\":\"1 tablespoon\"},{\"name\":\"Bay leaf\",\"amount\":\"1\"}],\"directions\":\"Set crockpot to high heat. Add raw chopped chicken into crockpot as well as the chopped onion and broth, stir (you can add whole breasts and shred once fully cooked). Add remaining ingredients and set crockpot to low heat. Let cook for about 3-4 hours depending on your crockpot. top soup with sour cream, cilantro, and avocado slices. Serve with tortilla chips and enjoy\"},{\"id\":29,\"category\":\"Soup\",\"name\":\"Chicken Tortellini Soup\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":45},\"ingredients\":[{\"name\":\"Frozen cut broccoli\",\"amount\":\"1 (9oz) box\"},{\"name\":\"Water\",\"amount\":\"6 1/2 cups\"},{\"name\":\"Condensed chicken broth\",\"amount\":\"3 (10.5oz) cans\"},{\"name\":\"Cubed cooked chicken\",\"amount\":\"2 cups\"},{\"name\":\"Chopped onion\",\"amount\":\"1 cup\"},{\"name\":\"Sliced carrots\",\"amount\":\"1 cup\"},{\"name\":\"Dried basil leaves\",\"amount\":\"1/2 tsp\"},{\"name\":\"Dried oregano leaves\",\"amount\":\"1/2 tsp\"},{\"name\":\"Garlic, minced\",\"amount\":\"2 cloves\"},{\"name\":\"Dry cheese tortellini\",\"amount\":\"7oz\"},{\"name\":\"Grated parmesan cheese\",\"amount\":\"1/4 cup\"}],\"directions\":\"Remove broccoli from freezer, thaw. In 5-quart saucepan, mix all remaining ingredients except tortellini and cheese. Heat to boiling. Stir in tortellini, reduce heat, simmer uncovered 30 minutes, stirring occasionally. Stir in thawed broccoli, simmer 5-10 minutes longer or until broccoli is crisp tender.\"},{\"id\":28,\"category\":\"Crockpot\",\"name\":\"Chicken with Carrots and Potatoes\",\"subIngredients\":false,\"cook\":{\"hours\":3,\"minutes\":50},\"ingredients\":[{\"name\":\"Vertically sliced onion\",\"amount\":\"1 3/4 cup\"},{\"name\":\"Cooking spray\",\"amount\":\"\"},{\"name\":\"Baby carrots\",\"amount\":\"2 cups\"},{\"name\":\"Small round red potatoes, cut into 1/4-inch slices\",\"amount\":\"6 (about 1 lb)\"},{\"name\":\"Fat-free, lower-sodium chicken broth\",\"amount\":\"1/2 cup\"},{\"name\":\"Dry white wine\",\"amount\":\"1/2 cup\"},{\"name\":\"Chopped fresh thyme\",\"amount\":\"1 tablespoon\"},{\"name\":\"Minced garlic\",\"amount\":\"1 tsp\"},{\"name\":\"Salt, divided\",\"amount\":\"3/4 tsp\"},{\"name\":\"Freshly ground black pepper, divided\",\"amount\":\"1/2 tsp\"},{\"name\":\"Paprika\",\"amount\":\"1 tsp\"},{\"name\":\"Bone-in chicken thighs, skinned\",\"amount\":\"6 (6oz)\"},{\"name\":\"Olive oil\",\"amount\":\"1 tsp\"},{\"name\":\"Chopped fresh thyme (optional)\",\"amount\":\"\"}],\"directions\":\"Place onion in a 6-quart electric slow cooker coated with cooking spray; top with carrots and potatoes. Combine broth, next 3 ingredients, 1/2 teaspoon salt, and 1/4 teaspoon pepper. Pour over vegetables. Combine paprika, remaining 1/4 teaspoon salt, and remaining 1/4 teaspoon pepper; rub over chicken. Heat a large nonstick skillet over medium-high heat. Add oil to pan; swirl to coat. Add chicken. Cook 3 minutes on each side or until browned. Arrange chicken on top of vegetables. Cover and cook on low for 3 1/2 hours or until chicken is done and vegetables are tender. Garnish with additiona thyme if desired\"},{\"id\":29,\"category\":\"Chicken\",\"name\":\"Classic Chicken Pot Pie\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":5},\"ingredients\":[{\"name\":\"Pillsbury refrigerated pie crusts, softened as directed on box\",\"amount\":\"1 box\"},{\"name\":\"Butter or margarine\",\"amount\":\"1/3 cup\"},{\"name\":\"Chopped onion\",\"amount\":\"1/3 cup\"},{\"name\":\"Flour\",\"amount\":\"1/3 cup\"},{\"name\":\"Salt\",\"amount\":\"1/2 tsp\"},{\"name\":\"Pepper\",\"amount\":\"1/4 tsp\"},{\"name\":\"Progresso chicken broth\",\"amount\":\"1 3/4 cups (from 32oz box)\"},{\"name\":\"Milk\",\"amount\":\"1/2 cup\"},{\"name\":\"Shredded cooked chicken or turkey\",\"amount\":\"2 1/2 cups\"},{\"name\":\"Frozen mixed vegetables, thawed\",\"amount\":\"2 cups\"}],\"directions\":\"Heat oven to 425 degrees. Make pie crusts as directed on box for Two-Crust Pie using 9-inch glass pie pan. In 2-quart saucepan, melt butter over medium heat. Add onion; cook 2 minutes, stirring frequently, until tender. Stir in flour, salt, and pepper until well blended. Gradually stir in broth and milk, cooking and stirring until bubbly and thickened. Stir in chicken and mixed vegetables. Remove from heat. Spoon chicken mixture into crust-lined pan. Top with second crust; seal edge and flute. Cut slits in several places in top crust. Bake 30 to 40 minutes or until crust is golden brown. During last 15 to 20 minutes of baking, cover crust edge with strips of foil to prevent excessive browning. Let stand 5 minutes before serving\"},{\"id\":30,\"category\":\"Crockpot\",\"name\":\"Cowboy Chicken\",\"subIngredients\":false,\"cook\":{\"hours\":7,\"minutes\":0},\"ingredients\":[{\"name\":\"Chicken breast\",\"amount\":\"4-6\"},{\"name\":\"Brown sugar\",\"amount\":\"1 tablespoon\"},{\"name\":\"Dijon mustard\",\"amount\":\"1 tablespoon\"},{\"name\":\"Salsa\",\"amount\":\"2 cups\"},{\"name\":\"Sour cream\",\"amount\":\"\"},{\"name\":\"Corn or beans, drained\",\"amount\":\"1 can\"}],\"directions\":\"Cook on high for 4 hours, or low for 6-8. Last 30 minutes or so add sour cream and a can of corns or beans. Shred chicken before serving. Serve over brown rice and top with sour cream, cheese, extra salsa, etc\"},{\"id\":31,\"category\":\"Pork\",\"name\":\"Creamy Ham and Tortellini\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":30},\"ingredients\":[{\"name\":\"Refrigerated cheese filled tortellini\",\"amount\":\"1 (9oz) package\"},{\"name\":\"Olive oil\",\"amount\":\"1 tablespoon\"},{\"name\":\"Medium onion, chopped\",\"amount\":\"1 (1/2 cup)\"},{\"name\":\"Cubed (1/2 inch) cooked ham\",\"amount\":\"2 cups\"},{\"name\":\"Frozen chopped broccoli\",\"amount\":\"2 cups\"},{\"name\":\"Whipping cream\",\"amount\":\"1 cup\"},{\"name\":\"Shredded parmesan cheese\",\"amount\":\"1/4 cup\"}],\"directions\":\"Cook and drain tortellini as directed on package. Meanwhile, in 12 inch skillet, heat olive oil over medium heat. Add onion, cook 4-5 minutes, stirring frequently until lightly browned. Stir in ham and broccoli; cook 5 minutes, stirring occasionally. Stir in cream and cheese; heat to just boiling over high heat. Stir in tortellini; reduce heat to medium simmer uncovered 4-5 minutes until heated\"},{\"id\":32,\"category\":\"Chicken\",\"name\":\"Crisp Crusted Baked Chicken\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":15},\"ingredients\":[{\"name\":\"Cut up chicken\",\"amount\":\"3 to 3 1/2 pounds\"},{\"name\":\"Egg\",\"amount\":\"1\"},{\"name\":\"Milk\",\"amount\":\"2 tablespoons\"},{\"name\":\"Instant potato flakes\",\"amount\":\"1 cup\"},{\"name\":\"Garlic salt\",\"amount\":\"1 tsp\"},{\"name\":\"Grated parmesan cheese\",\"amount\":\"1/4 cup\"},{\"name\":\"Margarine\",\"amount\":\"1/4 cup\"}],\"directions\":\"Wash chicken pieces, pat dry. Beat egg and milk together in a bowl. In another bowl, mix potato flakes, garlic salt, and parmesan cheese. Roll chicken first in egg mix then in potato flake mix. Melt butter in shallow baking pan. Roll coated chicken pieces in the butter and place them skin side up in pan. Bake at 400 degrees for 45-50 minutes\"},{\"id\":33,\"category\":\"Chicken\",\"name\":\"Crispy Chip Chicken\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":20},\"ingredients\":[{\"name\":\"BBQ flavor corn chips\",\"amount\":\"4 1/2 cups\"},{\"name\":\"Egg\",\"amount\":\"1\"},{\"name\":\"Milk\",\"amount\":\"1 tablespoon\"},{\"name\":\"Margarine\",\"amount\":\"2 tablespoons\"},{\"name\":\"Chicken (assorted, bone-in)\",\"amount\":\"3 1/2 pounds\"}],\"directions\":\"Place chips in ziploc bag and crush to make 2 cups coarse crumbs. In bowl, mix egg and milk. Dip chicken in egg adn then roll in crumbs. Press crumbs against chicken so they will stick. Place chicken in 9x13-inch pan, sprinkle with remaining crumbs. Melt margarine and pour over chicken. Bake 1 hour at 375 degrees\"},{\"id\":34,\"category\":\"Crockpot\",\"name\":\"Crockpot Balsamic Chicken\",\"subIngredients\":false,\"cook\":{\"hours\":4,\"minutes\":10},\"ingredients\":[{\"name\":\"Garlic powder\",\"amount\":\"1 tsp\"},{\"name\":\"Dried basil\",\"amount\":\"1 tsp\"},{\"name\":\"Salt\",\"amount\":\"1/2 tsp\"},{\"name\":\"Pepper\",\"amount\":\"1/2 tsp\"},{\"name\":\"Dried minced onion\",\"amount\":\"2 tsp\"},{\"name\":\"Garlic, minced\",\"amount\":\"4 cloves\"},{\"name\":\"Extra virgin olive oil\",\"amount\":\"1 tablespoon\"},{\"name\":\"Balsamic vinegar\",\"amount\":\"1/2 cup\"},{\"name\":\"Boneless, skinless chicken thighs or breasts\",\"amount\":\"8 (24oz)\"},{\"name\":\"Fresh chopped parlsey\",\"amount\":\"A sprinkle\"}],\"directions\":\"Combine the first give dry spices in a small bowl and spread over chicken on both sides. Set aside. Pour olive oil and garlic on the bottom of the crockpot. Place chicken on top. Pour balsamic vinegar over the chicken. Cover and cook on high for 4 hours. Sprinkle with fresh parsley on top to serve\"},{\"id\":35,\"category\":\"Crockpot\",\"name\":\"Crockpot Black Beans and Rice\",\"subIngredients\":false,\"cook\":{\"hours\":3,\"minutes\":30},\"ingredients\":[{\"name\":\"Black beans, drained and rinsed\",\"amount\":\"2 (14oz) cans\"},{\"name\":\"Rice (uncooked)\",\"amount\":\"3/4 cup\"},{\"name\":\"Water\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Salsa\",\"amount\":\"3/4 cup\"},{\"name\":\"Cumin\",\"amount\":\"2 tsp\"},{\"name\":\"Chili powder\",\"amount\":\"1 tsp\"},{\"name\":\"Garlic powder\",\"amount\":\"1 tsp\"},{\"name\":\"Salt\",\"amount\":\"1/2 tsp\"},{\"name\":\"Black pepper\",\"amount\":\"1/4 tsp\"},{\"name\":\"Sour cream, extra salsa (optional)\",\"amount\":\"\"}],\"directions\":\"Spray the inside of a 4 quart slow cooker with non stick spray. Stir together black beans, rice, water, salsa, cumin, chili powder, garlic powder, salt, and pepper. Cover and cook on low for 3 hours. Remove lid and stir well. Add additional salt and pepper to taste. Serve with optional toppings\"},{\"id\":36,\"category\":\"Crockpot\",\"name\":\"Crockpot Cheesy Chicken Spaghetti\",\"subIngredients\":false,\"cook\":{\"hours\":3,\"minutes\":0},\"ingredients\":[{\"name\":\"Spaghetti, cooked\",\"amount\":\"16oz (dry)\"},{\"name\":\"Velveeta light cheese\",\"amount\":\"1 lb\"},{\"name\":\"Rotisserie chicken\",\"amount\":\"1\"},{\"name\":\"Cream of chicken soup\",\"amount\":\"2 (10 3/4oz) cans\"},{\"name\":\"Diced tomato with green chili\",\"amount\":\"10oz can\"},{\"name\":\"Water\",\"amount\":\"1/2 cup\"},{\"name\":\"Small onion, diced\",\"amount\":\"1\"},{\"name\":\"Medium pepper, diced\",\"amount\":\"1\"}],\"directions\":\"Saute onion and pepper until tender. Spray slow cooker with non-stick cooking spray. Combine all ingredients. Cook on low for 2-3 hours\"},{\"id\":37,\"category\":\"Crockpot\",\"name\":\"Crockpot Chicken Chili\",\"subIngredients\":false,\"cook\":{\"hours\":7,\"minutes\":0},\"ingredients\":[{\"name\":\"Boneless skinless chicken breasts\",\"amount\":\"2-3\"},{\"name\":\"Chunky salsa\",\"amount\":\"16oz jar\"},{\"name\":\"Diced tomatoes with chilies, undrained\",\"amount\":\"15oz can\"},{\"name\":\"Corn, drained\",\"amount\":\"15oz can\"},{\"name\":\"Black beans, drained and rinsed\",\"amount\":\"15oz can\"},{\"name\":\"Kidney beans, drained and rinsed\",\"amount\":\"15oz can\"},{\"name\":\"Chili powder\",\"amount\":\"2 tsp\"},{\"name\":\"Garlic powder\",\"amount\":\"1 tsp\"},{\"name\":\"Cumin\",\"amount\":\"1 tsp\"},{\"name\":\"Kosher salt\",\"amount\":\"\"},{\"name\":\"Black pepper\",\"amount\":\"\"}],\"directions\":\"Place chicken in the bottom of a crockpot. Add remaining ingredients on top, stir to combine. Cover and cook on high 4 hours or low 6-8 hours, or until chicken is done. Shred chicken and stir to combine before serving\"},{\"id\":38,\"category\":\"Crockpot\",\"name\":\"Crockpot Macaroni and Cheese\",\"subIngredients\":false,\"cook\":{\"hours\":5,\"minutes\":0},\"ingredients\":[{\"name\":\"Uncooked elbow macaroni\",\"amount\":\"1/2 pound\"},{\"name\":\"Shredded cheddar cheese, divided\",\"amount\":\"3 cups\"},{\"name\":\"Whole milk\",\"amount\":\"3 cups\"},{\"name\":\"Eggs\",\"amount\":\"2\"},{\"name\":\"Garlic salt\",\"amount\":\"1/2 - 1 tsp\"},{\"name\":\"Ground black pepper\",\"amount\":\"1/2 tsp\"},{\"name\":\"Mustard powder\",\"amount\":\"1/2 tsp\"}],\"directions\":\"Mix all ingredients except 1/2 cup of cheese in slow cooker. Cover and cook on low for 5 hours. sprinkle remaining cheese on top and enjoy\"},{\"id\":39,\"category\":\"Crockpot\",\"name\":\"Crockpot Mexican Chicken Chili\",\"subIngredients\":false,\"cook\":{\"hours\":8,\"minutes\":0},\"ingredients\":[{\"name\":\"Shredded rotisserie chicken or shredded chicken breasts\",\"amount\":\"1 (chicken) or 3 cups (breasts)\"},{\"name\":\"Black beans\",\"amount\":\"2 cups\"},{\"name\":\"Pinto beans\",\"amount\":\"2 cups\"},{\"name\":\"Frozen corn\",\"amount\":\"1 cup\"},{\"name\":\"Chopped zucchini\",\"amount\":\"3-4\"},{\"name\":\"Chicken broth\",\"amount\":\"5 cups\"},{\"name\":\"Chunky salsa\",\"amount\":\"2 cups\"},{\"name\":\"Tomato sauce\",\"amount\":\"1 (8oz) can\"}],\"directions\":\"Combine ingredients in crockpot and cook for 7-8 hours on low\"},{\"id\":40,\"category\":\"Crockpot\",\"name\":\"Crockpot Mexican Pork Roast\",\"subIngredients\":false,\"cook\":{\"hours\":7,\"minutes\":0},\"ingredients\":[{\"name\":\"Pork roast\",\"amount\":\"1 (2lb)\"},{\"name\":\"Small onion, peeled, ends removed, sliced\",\"amount\":\"1\"},{\"name\":\"Garlic, minced or grated\",\"amount\":\"2 cloves\"},{\"name\":\"Water\",\"amount\":\"1 cup\"},{\"name\":\"Cumin\",\"amount\":\"1 tablespoon\"},{\"name\":\"Chili powder\",\"amount\":\"1 tablespoon\"},{\"name\":\"Black pepper\",\"amount\":\"1/4 tsp\"},{\"name\":\"Sea salt\",\"amount\":\"1 tsp\"},{\"name\":\"Dry pinto or black beans, soaked overnight\",\"amount\":\"1 cup\"}],\"directions\":\"Add everything to the crockpot and cook 3-4 hours on high or 6-8 hours on low. Before serving, use two forks to pull the meat apart\"},{\"id\":41,\"category\":\"Soup\",\"name\":\"Crockpot Mexican Soup\",\"subIngredients\":false,\"cook\":{\"hours\":6,\"minutes\":0},\"ingredients\":[{\"name\":\"Ground beef, sausage, or pork (browned) OR shredded chicken, cooked\",\"amount\":\"1 lb (beef) or 2 cups (chicken)\"},{\"name\":\"Large half moon onion, sliced\",\"amount\":\"1\"},{\"name\":\"Garlic, minced\",\"amount\":\"3 cloves\"},{\"name\":\"Large zucchini (optional), large diced\",\"amount\":\"1\"},{\"name\":\"Celery stalks (optional), chopped\",\"amount\":\"3\"},{\"name\":\"Asparagus (optional), chopped\",\"amount\":\"1 bunch\"},{\"name\":\"Sweet potatoes, peeled and diced\",\"amount\":\"2\"},{\"name\":\"Diced tomatoes (in juice)\",\"amount\":\"1 can\"},{\"name\":\"Chicken stock\",\"amount\":\"1 quart\"},{\"name\":\"Tomato paste + water\",\"amount\":\"1 (6oz) can (paste) + 4 cups (water)\"},{\"name\":\"Maple syrup\",\"amount\":\"2 tablespoons\"},{\"name\":\"Cumin\",\"amount\":\"1 tablespoon\"},{\"name\":\"Chili powder\",\"amount\":\"1/2 tablespoon\"},{\"name\":\"Basil\",\"amount\":\"1/2 tablespoon\"},{\"name\":\"Oregano\",\"amount\":\"1/2 Tablespoon\"},{\"name\":\"Salt\",\"amount\":\"1 tablespoon\"},{\"name\":\"Pepper\",\"amount\":\"1/2 tablespoon\"}],\"directions\":\"Layer all ingredients up to (and including) chicken stock. Combine remaining ingredients in mixing bowl. Stir gently and seal 'er up. Cook on low for 4-6 hours\"},{\"id\":42,\"category\":\"Crockpot\",\"name\":\"Crockpot Sesame Chicken\",\"subIngredients\":false,\"cook\":{\"hours\":3,\"minutes\":5},\"ingredients\":[{\"name\":\"Boneless skinless chicken breasts\",\"amount\":\"1 1/2 pound\"},{\"name\":\"Honey\",\"amount\":\"1/2 cup\"},{\"name\":\"Soy sauce\",\"amount\":\"1/4 cup\"},{\"name\":\"Dried onion\",\"amount\":\"2 tablespoons\"},{\"name\":\"Ketchup\",\"amount\":\"2 tablespoons\"},{\"name\":\"Oil\",\"amount\":\"1 tablespoon\"},{\"name\":\"Garlic powder\",\"amount\":\"1/2 tsp\"},{\"name\":\"Cornstarch\",\"amount\":\"2 tsp\"},{\"name\":\"Sesame seeds\",\"amount\":\"\"}],\"directions\":\"Put chicken into crockpot. Combine honey, soy sauce, onion, ketchup, oil, and garlic. Pour over chicken. Cook on low for 3-4 hours or on high 1 1/2 - 2 1/2 hours, or just until chicken is cooked through. Remove chicken from crockpot, leave sauce. Dissolve cornstarch in 3 tablespoons of water and pour into crockpot. Stir to combine with sauce. Replace lid and cook sauce on high for ten more minutes or until slightly thickened. Cut chicken into bite size pieces and return to crockpot - can leave chicken in and simmer on low or serve. Sprinkle with sesame seeds and serve over rice\"},{\"id\":43,\"category\":\"Crockpot\",\"name\":\"Crockpot Texas Calico Chili\",\"subIngredients\":false,\"cook\":{\"hours\":9,\"minutes\":0},\"ingredients\":[{\"name\":\"Stew beef\",\"amount\":\"1 1/2 pounds\"},{\"name\":\"Onion, chopped\",\"amount\":\"1/2 cup\"},{\"name\":\"Tomato paste mixed with water to make 1 cup\",\"amount\":\"6oz can\"},{\"name\":\"Chopped green chilies\",\"amount\":\"1 (4.5oz) can\"},{\"name\":\"Cooked black beans\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Cooked white beans (navy or great northern\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Onion powder\",\"amount\":\"1/2 tsp\"},{\"name\":\"Garlic powder\",\"amount\":\"2 tsp\"},{\"name\":\"Chili powder\",\"amount\":\"2 tsp\"},{\"name\":\"Cumin\",\"amount\":\"2 tsp\"}],\"directions\":\"Combine all ingredients in a 4-5 quart crock pot; stir well. Cover and cook on low for 8-10 hours. Serve with cornbread\"},{\"id\":44,\"category\":\"Crockpot\",\"name\":\"Crockpot Ugly Chicken Dinner\",\"subIngredients\":false,\"cook\":{\"hours\":8,\"minutes\":0},\"ingredients\":[{\"name\":\"Medium sweet potatoes, peeled and thickly sliced (~1/2 inch)\",\"amount\":\"3\"},{\"name\":\"Medium onion, sliced\",\"amount\":\"1\"},{\"name\":\"Chicken, diced into chunks\",\"amount\":\"1 pound\"},{\"name\":\"Baby carrots\",\"amount\":\"1 cup\"},{\"name\":\"Green pepper, seeded and sliced\",\"amount\":\"1\"},{\"name\":\"Garlic powder\",\"amount\":\"1/2 tsp\"},{\"name\":\"Salt and pepper\",\"amount\":\"\"},{\"name\":\"Butter\",\"amount\":\"2 tablespoons\"}],\"directions\":\"Grease crockpot. Lay potatoes in bottom. Place chicken on top. Cover with onions, carrots, and pepper. Sprinkle each layer with salt and pepper. Slice butter into pieces and lay on top of everything. Sprinkle with garlic powder. Cover and cook on low for 6-8 hours or until potatoes are tender\"},{\"id\":172,\"category\":\"Crockpot\",\"name\":\"Crockpot Whole Baked Chicken\",\"subIngredients\":false,\"cook\":{\"hours\":7,\"minutes\":20},\"ingredients\":[{\"name\":\"Whole chicken\",\"amount\":\"1 (2-4 pounds)\"},{\"name\":\"Sea salt\",\"amount\":\"2 tsp\"},{\"name\":\"Pepper\",\"amount\":\"1/2 tsp\"},{\"name\":\"Paprika\",\"amount\":\"1 tsp\"},{\"name\":\"Onion powder\",\"amount\":\"1 tsp\"},{\"name\":\"Garlic powder\",\"amount\":\"1/2 tsp\"}],\"directions\":\"Wad up two pieces of foil or parchment paper, and make them flat on top. Place in 5 quart or larger crockpot and pour 1/2 inch of water in the bottom. Rinse and dry the whole chicken. In a small bowl, combine the spices. Rub into the chicken. Place chicken on top of foil balls. Cook on high for 2 hours. After 2 hours, switch to low and cook for 5 hours. Test for 160 degrees on a thermometer\"},{\"id\":45,\"category\":\"Other\",\"name\":\"Deconstructed Burrito Pizza\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":30},\"ingredients\":[{\"name\":\"Refrigerated thin pizza crust\",\"amount\":\"1 can\"},{\"name\":\"Olive oil\",\"amount\":\"1 tablespoon\"},{\"name\":\"Garlic, minced\",\"amount\":\"2 cloves\"},{\"name\":\"Onion, diced\",\"amount\":\"1/2 cup\"},{\"name\":\"Black beans, drained and rinsed\",\"amount\":\"15oz can\"},{\"name\":\"Cooked rice\",\"amount\":\"2 cups\"},{\"name\":\"Cumin\",\"amount\":\"1 tsp\"},{\"name\":\"Ground black pepper\",\"amount\":\"1 tsp\"},{\"name\":\"Salsa\",\"amount\":\"1 cup\"},{\"name\":\"Frozen corn, thawed\",\"amount\":\"1 cup\"},{\"name\":\"Shredded monterey jack cheese\",\"amount\":\"8oz\"}],\"directions\":\"Unroll pizza crust on a foil lined cookie sheet and prebake at 400 degrees for about 7 minutes. Meanwhile, heat olive oil in skillet and add garlic and onions. Saute a few minutes until onions are soft. Add black beans, rice, cumin, and pepper and cook on low for about 5 minutes, just to heat through. Spread salsa on prebaked crust and add the bean mixture and 1 cup cheese. Top with corn and remaining cheese. Bake for an additional 8-11 minutes until the crust is browned and the cheese is melted. Slice and serve!\"},{\"id\":46,\"category\":\"Soup\",\"name\":\"Easy Bean and Kielbasa Soup\",\"subIngredients\":false,\"cook\":{\"hours\":10,\"minutes\":0},\"ingredients\":[{\"name\":\"15 or 16 dried bean soup mix, rinsed\",\"amount\":\"1/2 (20oz) package\"},{\"name\":\"Kielbasa, cut lengthwise in half, then cut crosswise into slices\",\"amount\":\"1 (16oz) package\"},{\"name\":\"Chicken broth\",\"amount\":\"2 (32oz) cartons\"},{\"name\":\"Carrots, chopped\",\"amount\":\"2 cups\"},{\"name\":\"Celery stalks, chopped\",\"amount\":\"1.5 cups\"},{\"name\":\"Onion, chopped\",\"amount\":\"1 cup\"},{\"name\":\"Tomato paste\",\"amount\":\"2 tablespoons\"},{\"name\":\"Diced tomatoes, undrained\",\"amount\":\"1 (14.5oz) can\"}],\"directions\":\"In slow cooker, mix all ingredients except tomatoes. Cover and cook on low 8 to 10 hours. Stir in tomatoes, increase het to high. Cover and cook 15 minutes or until hot\"},{\"id\":47,\"category\":\"Chicken\",\"name\":\"Easy Bistro Chicken\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":32},\"ingredients\":[{\"name\":\"Olive oil, divided\",\"amount\":\"2 tablespoons\"},{\"name\":\"Chicken breast halves, skinned\",\"amount\":\"4 (6oz)\"},{\"name\":\"Chicken thighs, skinned\",\"amount\":\"4 (1 lb)\"},{\"name\":\"Chicken drumsticks, skinned\",\"amount\":\"4 (~1 lb)\"},{\"name\":\"Chopped onion\",\"amount\":\"2 cups\"},{\"name\":\"Garlic, minced\",\"amount\":\"4 cloves\"},{\"name\":\"Celery, chopped\",\"amount\":\"1 cup\"},{\"name\":\"Fresh basil, chopped\",\"amount\":\"1/2 cup\"},{\"name\":\"Fresh flat-leaf parsley, chopped\",\"amount\":\"1/2 cup\"},{\"name\":\"Red wine vinegar\",\"amount\":\"1/2 cup\"},{\"name\":\"Sliced green olives\",\"amount\":\"1/4 cup\"},{\"name\":\"Capers\",\"amount\":\"1/4 cup\"},{\"name\":\"Sugar\",\"amount\":\"1 tablespoon\"},{\"name\":\"Ground red pepper\",\"amount\":\"A dash\"},{\"name\":\"Bay leaves\",\"amount\":\"2\"},{\"name\":\"Italian-style tomatoes, undrained and chopped\",\"amount\":\"1 (28oz) can\"},{\"name\":\"Hot cooked macaroni or cavatappi\",\"amount\":\"8 cups\"},{\"name\":\"Parsley sprigs (optional)\",\"amount\":\"\"}],\"directions\":\"Heat 1 1/2 teaspoons oil in a large nonstick skillet over medium-high heat. Add chicken breast halves to pan; saute 2 minutes on each side or until lightly browned. Remove from pan. Add 1 1/2 teaspoons oil and remaining chicken pieces; saute 2 minutes on each side or until lightly browned. Remove chicken from pan. Heat 1 tablespoon oil in pan. Add onion and garlic; saute 5 minutes. Add celery; saute 5 minutes. Add basil and next 8 ingredients (basil through tomatoes). Return chicken to pan; bring to a boil. cover, reduce heat, and simmer 20 minutes. Uncover and simmer 25 minutes or until chicken is tender. Discard bay leaves. Serve with pasta, garnish with parsley, if desired\"},{\"id\":48,\"category\":\"Chicken\",\"name\":\"Easy Chicken and Garden Veggies\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":35},\"ingredients\":[{\"name\":\"Bacon, cut into 1/2 inch pieces\",\"amount\":\"4 slices\"},{\"name\":\"Boneless skinless chicken breasts\",\"amount\":\"4 (1 1/4 pounds)\"},{\"name\":\"Garlic salt\",\"amount\":\"1/2 tsp\"},{\"name\":\"Ground pepper\",\"amount\":\"1/2 tsp\"},{\"name\":\"Fresh green beans, trimeed (leave whole)\",\"amount\":\"8oz\"},{\"name\":\"Medium yellow bell pepper, but into 1/2 inch pieces\",\"amount\":\"1\"},{\"name\":\"Medium plum tomatoes, cut into slices\",\"amount\":\"2\"},{\"name\":\"Balsamic vinegarette or Italian dressing\",\"amount\":\"1/2 cup\"}],\"directions\":\"In 12 inch nonstick skillet, cook bacon over medium heat 3-4 minutes, stirring occasionally, until crisp. Sprinkle both sides of chicken with garlic salt and pepper. Add chicken to bacon in skillet. Cook 3-5 mins or until browned on both sides. Discard excess bacon drippings. Add 1/4 cup water and beans to skilled. Cook and cover over medium-low heat for 8 minutes. Stir in bell pepper. Cover and cook 3-5 minutes, turning and stirring occasionally. Stir in tomatoes and dressing. Cook uncovered for 2 minutes\"},{\"id\":49,\"category\":\"Beef\",\"name\":\"Easy Chow Mein Casserole\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":20},\"ingredients\":[{\"name\":\"Lean ground beef\",\"amount\":\"1/2 lb\"},{\"name\":\"Garlic pepper blend\",\"amount\":\"1/2 tsp\"},{\"name\":\"Uncooked long-grain rice\",\"amount\":\"1 cup\"},{\"name\":\"Beef broth\",\"amount\":\"1 3/4 cups\"},{\"name\":\"Teriyaki sauce\",\"amount\":\"1/4 cup\"},{\"name\":\"Stir-fry veggies, rinsed, drained (or use frozen)\",\"amount\":\"1 (28oz) can\"},{\"name\":\"Chow mein noodles\",\"amount\":\"1/2 cup\"},{\"name\":\"Cashew pieces\",\"amount\":\"1/4 cup\"}],\"directions\":\"Heat oven to 375 degrees. In 10-inch non stick skillet, crumble beef, sprinkle with garlic pepper. Cook over medium-high heat 5-7 minutes, stirring occasionally until brown, drain. In ungreased 11x7-inch glass baking dish, mix beef, rice, broth, teriyaki sauce, and 1/4 cup water. Stir in vegetables. Cover dish with foil. Bake 50-55 minutes or until rice is tender. Uncover and stir; sprinkle with chow mein noodles and cashews. Bake uncovered 10-15 minutes longer or until noodles are golden\"},{\"id\":50,\"category\":\"Crockpot\",\"name\":\"Easy Crockpot Ribs\",\"subIngredients\":false,\"cook\":{\"hours\":8,\"minutes\":35},\"ingredients\":[{\"name\":\"Ribs, any style\",\"amount\":\"\"},{\"name\":\"Garlic powder\",\"amount\":\"2 tsp\"},{\"name\":\"Onion powder\",\"amount\":\"2 tsp\"},{\"name\":\"Chili powder\",\"amount\":\"2 tsp\"},{\"name\":\"Salt\",\"amount\":\"1 1/2 tsp\"},{\"name\":\"Sucanat (or brown sugar)\",\"amount\":\"6 tablespoons\"},{\"name\":\"Ketchup\",\"amount\":\"5 tablespoons\"},{\"name\":\"Worcestershire sauce\",\"amount\":\"1/2 tsp\"},{\"name\":\"Dry mustard\",\"amount\":\"1/2 tsp\"},{\"name\":\"Paprika\",\"amount\":\"1/2 tsp\"},{\"name\":\"Pepper\",\"amount\":\"1/4 tsp\"},{\"name\":\"Cornstarch\",\"amount\":\"4 tablespoons\"}],\"directions\":\"Combine garlic powder, onion powder, chili powder, and 1 teaspoon of salt. Rub into meat. Lay ribs in the bottom of a 5-6 quart greased crockpot. Layer if necessary. Combine sucanat, ketchup, 1/4 cup water, Worcestershire, mustard, paprika, salt, and pepper; whisk to combine. Pour over meat. Cover and cook on low for 8 hours until meat has a temperature of 170 degrees. Remove meat from crock and keep warm. Skim grease from sauce if desired. Combine cornstarch and 4 tablespoons of water; stir into juices. cover and cook on high for 30 minutes or until thickened. Serve sauce over meat\"},{\"id\":51,\"category\":\"Crockpot\",\"name\":\"Easy Roastbeef\",\"subIngredients\":false,\"cook\":{\"hours\":8,\"minutes\":0},\"ingredients\":[{\"name\":\"Roast\",\"amount\":\"1\"},{\"name\":\"Coca Cola\",\"amount\":\"1 can\"},{\"name\":\"Lipton's onion soup mix\",\"amount\":\"1 package\"}],\"directions\":\"Put roast in crockpot, then onion soup mix, and then pour the coke over it. Cook on low around 8 hours. Add carrots and potatoes 3-4 hours before dinner\"},{\"id\":52,\"category\":\"Crockpot\",\"name\":\"Family Favorite Chili\",\"subIngredients\":false,\"cook\":{\"hours\":7,\"minutes\":20},\"ingredients\":[{\"name\":\"Ground beef\",\"amount\":\"2 pounds\"},{\"name\":\"Onion, chopped\",\"amount\":\"1 cup\"},{\"name\":\"Garlic, finely chopped\",\"amount\":\"2 cloves\"},{\"name\":\"Diced tomatoes, undrained\",\"amount\":\"1 (28oz) can\"},{\"name\":\"Tomato sauce\",\"amount\":\"1 (15oz) can\"},{\"name\":\"Chili powder\",\"amount\":\"2 tablespoons\"},{\"name\":\"Ground cumin\",\"amount\":\"1 1/2 tsp\"},{\"name\":\"Kidney beans, rinsed and drained\",\"amount\":\"1 (15/16oz) can\"}],\"directions\":\"Cook beef until brown, drain. Mix beef and remaining ingredients except beans in slow cooker. Cover and cook on low setting 6-8 hours. Stir in beans. Cover and cook 15-20 minutes longer\"},{\"id\":53,\"category\":\"Chicken\",\"name\":\"Flaky Chicken Wraps\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":45},\"ingredients\":[{\"name\":\"Oil\",\"amount\":\"2 tablespoons\"},{\"name\":\"Ranch dressing salad mix\",\"amount\":\"1 envelope\"},{\"name\":\"Grands Flaky biscuits\",\"amount\":\"1 can\"},{\"name\":\"Refrigerated fully cooked grilled chicken breast strips\",\"amount\":\"1 package\"},{\"name\":\"Butter or margarine, melted\",\"amount\":\"2 tablespoons\"}],\"directions\":\"Heat oven to 350 degrees. Lightly grease cookie sheet. In small bowl, combine oil and tablespoon of salad dressing mix, mix until well blended. Separate dough into 8 biscuits. Press or roll to form 6 inc oval. Spread teaspoon of salad dressing mixture on each biscuit. Arrange about 3 chicken breast strips crosswise on center of each biscuit. Bring long ends of biscuit ovals up over chicken, overlapping and pinching to seal. Brush each biscuit with melted butter. Sprinkle tops evenly with 2 teaspoons of dry salad dressing mix. Bake at 350 degrees for 18-22 minutes or until golden brown\"},{\"id\":54,\"category\":\"Chicken\",\"name\":\"Crispy Honeyed Soy Chicken Wings\",\"subIngredients\":false,\"cook\":{\"hours\":2,\"minutes\":10},\"ingredients\":[{\"name\":\"Black pepper\",\"amount\":\"1/2 tablespoon\"},{\"name\":\"Ground ginger\",\"amount\":\"1 tablespoon\"},{\"name\":\"Worcestershire sauce\",\"amount\":\"1 tablespoon\"},{\"name\":\"Honey\",\"amount\":\"3 tablespoons\"},{\"name\":\"Soy sauce\",\"amount\":\"5 tablespoons\"},{\"name\":\"Spring onions, sliced\",\"amount\":\"\"}],\"directions\":\"Cut the wings from the drumsticks and tips using poultry shears. Wash the wings and drumsticks well and pat dry with a paper towel. Combine the Worcestershire and soy sauce in a large bowl with teh honey and whisk until the honey is dissolved. Add the black pepper and ginger and stir. Add the dried chicken to the marinade along with the sliced spring onions. Cover and marinate in the fridge for 3 hours or at room temperature (away from direct sunlight) for 1 hour. Preheat the oven to 450 degrees. After an hour or three has passed, strain the chicken, reserving the marinade liquid. Boil the chicken for about 5 minutes; arrange on a wire rack and allow to drip dry; pat dry if needed. Put the chicken skin side down on a baking tray and bake 30 minutes. Flip the chicken over and bake for 10 minutes further. While the chicken bakes, boil the left over marinade to make a glaze; be sure that you bring the sauce to a rolling boil as this is necessary to kill any bacteria left from the raw chicken. Continue to boil and reduce the liquid until it coats the back of a spoon (like when making custard). Toss the wings in the glaze and serve immediately with plenty of napkins and ice cold beer (beer optional, sort of)\"},{\"id\":55,\"category\":\"Beef\",\"name\":\"Biscuit Taco Cups\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":45},\"ingredients\":[{\"name\":\"Lean (at least 80%) ground beef\",\"amount\":\"1 1/2 lb\"},{\"name\":\"Spicy chili beans, undrained\",\"amount\":\"1 (15oz) can\"},{\"name\":\"Taco seasoning mix\",\"amount\":\"1 (1.25oz) package\"},{\"name\":\"Refrigerated buttermilk biscuits\",\"amount\":\"1 (16.3oz) can\"},{\"name\":\"Shredded cheddar cheese\",\"amount\":\"1 cup\"},{\"name\":\"Lettuce, shredded (optional)\",\"amount\":\"1/2 cup\"},{\"name\":\"Tomato, chopped (optional)\",\"amount\":\"1/2 cup\"},{\"name\":\"Sour cream (optional)\",\"amount\":\"1/2 cup\"},{\"name\":\"Salsa (optional)\",\"amount\":\"1/2 cup\"}],\"directions\":\"Heat oven to 375 degrees. Brown ground beef in a large skillet over medium high heat until thoroughly cooked; stirring frequently; drain. Add chili beans, taco seasoning mix, and 1/2 cup water; mix well. Reduce heat to medium; simmer 10 minutes or until ground beef mixture is slightly thickened, stirring occasionally. Meanwhile, spray outside bottom and sides of 8 (6oz) custard cups lightly with nonstick cooking spray. Separate dough into 8 biscuits. Roll or pat each biscuit to form 4 1/2-inch round. Place rounds over outside of sprayed cups; press to fit over bottom and part way down sides of cups. Place cups, upside down in ungreased 15x10x1-inch baking pan. Bake at 375 degrees for 14-16 minutes, or until deep golden brown. Remove pan from oven. Carefully remove biscuit cups from custard cups. Place biscuit cups, right side up, in same baking pan. Spoon beef mixture evenly into each cup. Top with cheese, lettuce, tomato, sour cream, and salsa\"},{\"id\":56,\"category\":\"Crockpot\",\"name\":\"Greek Chicken\",\"subIngredients\":false,\"cook\":{\"hours\":7,\"minutes\":0},\"ingredients\":[{\"name\":\"Red potatoes\",\"amount\":\"2-3 lbs\"},{\"name\":\"Chicken pieces (quarters are best, any will do)\",\"amount\":\"2-3 lbs\"},{\"name\":\"Onion, chopped\",\"amount\":\"1/2\"},{\"name\":\"Dried oregano\",\"amount\":\"1 tablespoon\"},{\"name\":\"Olive oil\",\"amount\":\"1-2 tablespoons\"},{\"name\":\"Salt (optional)\",\"amount\":\"\"},{\"name\":\"Pepper (optional)\",\"amount\":\"\"}],\"directions\":\"Peel the potatoes if desired; chop them into quarters and place in teh bottom of the crockpot. Place the chicken pieces on top of the potatoes. Sprinkle the chicken with onion, garlic, and seasonings. Drizzle all with olive oil. Cook on high for 4 hours or low for 6-8 hours\"},{\"id\":57,\"category\":\"Grill\",\"name\":\"Grilled Chicken and Pesto Farfalle\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":5},\"ingredients\":[{\"name\":\"Skinless, bonless chicken breast halves\",\"amount\":\"1 3/4 lbs\"},{\"name\":\"Salt, divided\",\"amount\":\"1 tsp\"},{\"name\":\"Cooking spray\",\"amount\":\"\"},{\"name\":\"Uncooked farfalle (bow tie pasta)\",\"amount\":\"20oz\"},{\"name\":\"Butter\",\"amount\":\"1 tablespoon\"},{\"name\":\"Garlic, minced\",\"amount\":\"3 cloves\"},{\"name\":\"Low-fat milk, divided\",\"amount\":\"1 1/2 cups\"},{\"name\":\"All-purpose flour\",\"amount\":\"2 tablespoons\"},{\"name\":\"Commercial pesto\",\"amount\":\"1 (3.5oz) jar (about 1/3 cup)\"},{\"name\":\"Half-and-half\",\"amount\":\"3/4 cup\"},{\"name\":\"Shredded fresh parmesan cheese, divided\",\"amount\":\"2 cups (8oz)\"},{\"name\":\"Halved grape tomatoes\",\"amount\":\"4 cups (~2 pints)\"},{\"name\":\"Fresh basil, chopped\",\"amount\":\"1/2 cup\"}],\"directions\":\"Prepare grill to medium-high heat. Sprinkle chicken evenly with 1/4 tsp salt and 1/4 tsp pepper. Place chicken on grill rack coated with cooking spray; grill 10 minutes or until done, turning after 6 minutes. Remove from grill; let stand for 5 minutes. Cut chicken into 1/2-inch pieces; keep warm. Cook pasta according to package directinos, omitting salt and fat. Drain in colander over a bowl, reserving 1/4 cup cooking liquid; place pasta in a large bowl. Heat butter in a medium saucepan over medium heat. Add garlic to pan; cook 1 minutes stirring occasionally. Combine 1/2 cup milk and flour in a small bowl, stirring with a whisk. Add milk mixture to pan, stirring constantly with a whisk. Stir in pesto. Gradually add remaining 1 cup milk and half-and-half, stirring constantly with a whisk. Cook 8 minutes or until sauce thickens, stirring frequently. Add 1/4 cup reserved cooking liquid, remaining 3/4 tsp salt, remaining 1/2 tsp pepper, and 1 cup cheese; stir until cheese melts. Add chicken and sauce to pasta, tossing well to coat. Add tomatoes and basil; toss gently. Sprinkle with remaining 1 cup cheese. Serve immediately\"},{\"id\":58,\"category\":\"Other\",\"name\":\"Haddock Casserole\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":40},\"ingredients\":[{\"name\":\"Haddock boned and skinned, cut into 1 1/2-inch chunks\",\"amount\":\"2 lbs\"},{\"name\":\"Cream of shrimp soup\",\"amount\":\"1 can\"},{\"name\":\"Milk\",\"amount\":\"1/2 cup\"},{\"name\":\"Ritz crackers, crushed\",\"amount\":\"20\"},{\"name\":\"Margarine, melted\",\"amount\":\"1 stick\"}],\"directions\":\"Place haddock in casserole. Mix soup and milk together in small bowl; pour over fish. Sprinkle crackers on top of soup. Pour melted margarine on top. Bake at 375 degrees for 25 minutes\"},{\"id\":59,\"category\":\"Pork\",\"name\":\"Ham, Broccoli, and Rice Skillet\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":32},\"ingredients\":[{\"name\":\"Margarine\",\"amount\":\"2 tsp\"},{\"name\":\"Onion, chopped\",\"amount\":\"1/2 cup\"},{\"name\":\"Long grain and wild rice\",\"amount\":\"1 package\"},{\"name\":\"Frozen broccoli\",\"amount\":\"2 cups\"},{\"name\":\"Cooked ham\",\"amount\":\"1 1/2 cups\"}],\"directions\":\"In skillet melt margarine over medium heat. Add onion and rice from mix; cook and stir 1-2 minutes or until onion begins to cook. Stir in 1 2/3 cups of water and contents of seasoning packet from mix; heat to boiling, reduce heat to medium-low. Cover and cook 10-15 minutes, stirring occasionally until broccoli is crisp tender and rice is tender\"},{\"id\":60,\"category\":\"Grill\",\"name\":\"Ham Kabobs\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":20},\"ingredients\":[{\"name\":\"Unsweetened pineapple chunks\",\"amount\":\"1 (20oz) can\"},{\"name\":\"Margarine\",\"amount\":\"6 tablespoons\"},{\"name\":\"Brown sugar\",\"amount\":\"1/3 cup\"},{\"name\":\"Ground cinnamon\",\"amount\":\"1/2 tsp\"},{\"name\":\"Medium green pepper, cut into chunks\",\"amount\":\"1\"},{\"name\":\"Medium carrots, sliced\",\"amount\":\"2\"},{\"name\":\"Fully cooked ham, cubed\",\"amount\":\"1 1/2 cups\"}],\"directions\":\"In saucepan combine juice, butter, brown sugar, and cinnamon; cook and stir until sugar is dissolved; set aside. Cook carrots until tender. Skewer meat and veggies. Brush with brown sugar mixture. Broil 4-6 minutes each side or grill\"},{\"id\":61,\"category\":\"Chicken\",\"name\":\"Healthified Chicken Pot Pie\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":5},\"ingredients\":[{\"name\":\"Frozen mixed vegetables\",\"amount\":\"1 (12oz) bag\"},{\"name\":\"All-purpose flour\",\"amount\":\"3 tablespoons\"},{\"name\":\"Salt\",\"amount\":\"1/2 tsp\"},{\"name\":\"Poultry seasoning\",\"amount\":\"1/4 tsp\"},{\"name\":\"Pepper\",\"amount\":\"1/4 tsp\"},{\"name\":\"Skim milk\",\"amount\":\"1 1/4 cups\"},{\"name\":\"Onion, finely chopped\",\"amount\":\"1/2 cup\"},{\"name\":\"Condensed 98% fat-free cream of chicken soup\",\"amount\":\"1 (10 3/4oz) can\"},{\"name\":\"Fat-free sour cream\",\"amount\":\"1/4 cup\"},{\"name\":\"Boneless skinless chicken breasts, cooked, cut into bite-size pieces\",\"amount\":\"4 (1 1/4lbs) (about 4 cups)\"},{\"name\":\"Refrigerated pie crusts, softened as directed on box\",\"amount\":\"1 box\"}],\"directions\":\"Cook and drain vegetables as directed on bag. Heat oven to 375 degrees. In 2-quart saucepan, mix flour, salt, poultry seasoning, pepper, and milk with wire whisk until blended. Stir in onion. Cook over medium heat 4-6 minutes, stirring constantly, until thickened. Stir in soup and sour cream. Add chicken and cooked vegetables; mix well. Cook, stirring frequently until thoroughly heated. Pour into ungreased 2-quart round casserole. Unroll pie crust; place over hot filling. Seal edge and flute as desired. Cut slits in several places in crust. Bake 35-40 minutes or until crust is golden browna nd mixture is bubbly. Let stand 10 minutes before serving\"},{\"id\":62,\"category\":\"Soup\",\"name\":\"Homemade Chicken Noodle Soup\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":15},\"ingredients\":[{\"name\":\"Chicken fillets\",\"amount\":\"1 lb\"},{\"name\":\"Chicken thighs\",\"amount\":\"1 lb\"},{\"name\":\"Vegetable oil\",\"amount\":\"\"},{\"name\":\"Butter\",\"amount\":\"2 tablespoons\"},{\"name\":\"Onion, chopped\",\"amount\":\"1 cup\"},{\"name\":\"Celery, diced\",\"amount\":\"1/2 cup\"},{\"name\":\"Chicken broth\",\"amount\":\"4 cups\"},{\"name\":\"Carrot, sliced\",\"amount\":\"1 cup\"},{\"name\":\"Egg noodles or rice\",\"amount\":\"2 cups\"}],\"directions\":\"Cook chicken, rub a little vegetable oil over the surface of each piece of chicken. Arrange the chicken on a baking sheet and bake for 25 minutes. Melt butter in a large saucepan over medium heat. Saute the onion and celery for 4-5 minutes, but don't brown them. Dice the chicken and add to the pot. Add chicken broth, 2 cups of water, carrots, and pepper to taste. Bring soup to a boil, reduce heat, and allow to simmer for 30 minutes or until the carrots are soft. Add noodles or rice and simmer for an additional 15-20 minutes\"},{\"id\":63,\"category\":\"Crockpot\",\"name\":\"Honey Glazed Chicken Thighs\",\"subIngredients\":false,\"cook\":{\"hours\":6,\"minutes\":30},\"ingredients\":[{\"name\":\"Kosher salt\",\"amount\":\"1 tsp\"},{\"name\":\"Black pepper\",\"amount\":\"1 tsp\"},{\"name\":\"Red pepper flakes\",\"amount\":\"1 tsp\"},{\"name\":\"Chili powder\",\"amount\":\"1 tsp\"},{\"name\":\"Paprika\",\"amount\":\"2 tsp\"},{\"name\":\"Garlic powder + 1/2 cups honey\",\"amount\":\"2 tsp\"},{\"name\":\"Apple cider vinegar\",\"amount\":\"2 tablespoons\"},{\"name\":\"Chicken thighs, boneless/skinless\",\"amount\":\"3 lbs\"}],\"directions\":\"NORMAL DIRECTIONS. Mix salt, pepper, red pepper flakes, chili powder, paprika, and garlic powder together and set aside. Mix honey and cider vinegar and set aside. Un-tuck chicken thighs so they are flat. Cover both sides in seasoning and place chicken in slow cooker. Pour honey mixture over chicken. Cook on low for 6-8 hours or on high for 3-4 hours. If you are able to baste the chicken by spooning some of the liquid over the chicken periodically during the cooking time, please do. Take chicken out of slow cooker and let rest for a few minutes. Spoon excess glaze over chicken before serving. FREEZING DIRECTIONS. Mix salt, pepper, red pepper flakes, chili powder, paprika, and garlic powder together and set aside. Mix honey and cider vinegar and set aside. Untuck chicken thighs so they are flat. Cover both sides in seasoning and divide among indicated number of freezer bags. Pour honey mixture over chicken thighs. Remove as much air as possible, label, and freeze. SERVING DAY DIRECTIONS. Place chicken and glaze into slow cooker. Cook on low for 6-8 hours or on high for 3-4 hours. If you are able to baste the chicken by spooning some of the liquid over the chicken periodically during the cooking time, please do. Take chicken out of slow cooker and let rest for a few minutes. Spoon excess glaze over chicken before serving\"},{\"id\":64,\"category\":\"Chicken\",\"name\":\"Honey Mustard Chicken\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":50},\"ingredients\":[{\"name\":\"Butter\",\"amount\":\"1/4 cup\"},{\"name\":\"Honey\",\"amount\":\"1/2 cup\"},{\"name\":\"Dijon mustard\",\"amount\":\"1/2 cup\"},{\"name\":\"Curry powder\",\"amount\":\"1 tsp\"},{\"name\":\"Boneless chicken breasts\",\"amount\":\"3-4\"}],\"directions\":\"Melt butter. Add honey, mustard, and curry; pour over chicken. Bake 350 degrees for 45-50 minutes\"},{\"id\":65,\"category\":\"Crockpot\",\"name\":\"Jambalaya\",\"subIngredients\":false,\"cook\":{\"hours\":8,\"minutes\":0},\"ingredients\":[{\"name\":\"Onion, chopped\",\"amount\":\"1 cup\"},{\"name\":\"Green pepper, chopped\",\"amount\":\"1 cup\"},{\"name\":\"Celery, chopped\",\"amount\":\"1 cup\"},{\"name\":\"Garlic, finely chopped\",\"amount\":\"3 cloves\"},{\"name\":\"Tomatoes, diced, undrained\",\"amount\":\"1 (28oz) can\"},{\"name\":\"Fully cooked smoked sausage, chopped\",\"amount\":\"2 cup\"},{\"name\":\"Parsley flakes\",\"amount\":\"1 tablespoon\"},{\"name\":\"Dried thyme leaves\",\"amount\":\"1/2 tsp\"},{\"name\":\"Pepper\",\"amount\":\"1/4 tsp\"},{\"name\":\"Red pepper sauce\",\"amount\":\"1/4 tsp\"},{\"name\":\"Uncooked peeled and deveined medium shrimp\",\"amount\":\"3/4 lbs\"},{\"name\":\"Hot cooked rice\",\"amount\":\"4 cups\"}],\"directions\":\"Mix all ingredients except shrimp and rice. Cover and cook on low 7-8 hours. Stir in shrimp. Cover and cook for 1 hour. Serve with rice\"},{\"id\":66,\"category\":\"Other\",\"name\":\"Lasagna\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":45},\"ingredients\":[{\"name\":\"Lasagna noodles\",\"amount\":\"1 package\"},{\"name\":\"Spaghetti sauce\",\"amount\":\"1 quart\"},{\"name\":\"Eggs\",\"amount\":\"2\"},{\"name\":\"Ricotta\",\"amount\":\"2 cups\"},{\"name\":\"Mozzarella cheese\",\"amount\":\"8oz\"},{\"name\":\"Parsley\",\"amount\":\"\"},{\"name\":\"Pepper\",\"amount\":\"\"},{\"name\":\"Grated parmesan\",\"amount\":\"\"}],\"directions\":\"Mix beaten eggs, ricotta, parsley and pepper. Cook lasagna noodles. Greats 13x9x2-inch pan. Layer noodles, cheese mixture, spaghetti sauce, and mozzarella. Sprinkle top with grated parmesan. Cook at 375 degrees for 30 minutes. Cool for 10 minutes\"},{\"id\":67,\"category\":\"Chicken\",\"name\":\"Loaded Chicken and Potatoes\",\"subIngredients\":true,\"cook\":{\"hours\":1,\"minutes\":30},\"ingredients\":[{\"name\":\"Boneless chicken breasts, cubed (1\\\")\",\"amount\":\"1 lb\"},{\"name\":\"Medium skin on red potatoes, cut into 1/2\\\" cubes\",\"amount\":\"6-8\"},{\"name\":\"Olive oil\",\"amount\":\"1/3 cup\"},{\"name\":\"Salt\",\"amount\":\"1 1/2 tsp\"},{\"name\":\"Black pepper\",\"amount\":\"1 tsp\"},{\"name\":\"Paprika\",\"amount\":\"1 tablespoon\"},{\"name\":\"Garlic powder\",\"amount\":\"2 tablespoons\"},{\"name\":\"Hot sauce\",\"amount\":\"2 tablespoons (more if you like it HOT)\"}],\"subName\":\"Topping\",\"sub\":[{\"name\":\"Fiesta blend cheese\",\"amount\":\"2 cups\"},{\"name\":\"Crumbled bacon\",\"amount\":\"1 cup\"},{\"name\":\"Green onion, diced\",\"amount\":\"1 cup\"}],\"directions\":\"Preheat oven to 400 degrees. Spray 9x13-inch baking dish with cooking spray. In a large bowl, mix together the olive oil, salt, pepper, paprika, garlic powder, and hot sauce. Add the cubed potatoes and chicken and stir to coat. Carefully scoop the potatoes and chicken into the prepared baking dish. Bake the potatoes and chicken for 55-60 minutes, stirring every 20 minutes, until cooked through, crispy, and browned on teh outside. While the potatoes are cooking, fry your bacon. Once the potatoes and chicken are fully cooked, remove from the oven. Top the cooked potatoes with the cheese, bacon, and green onion. Return the casserole to the oven and bake for 5 minutes or until cheese is melted. Serve with extra hot sauce and/or ranch dressing or sour cream\"},{\"id\":68,\"category\":\"Other\",\"name\":\"Macaroni and Cheese\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":0},\"ingredients\":[{\"name\":\"Elbow macaroni\",\"amount\":\"16oz package\"},{\"name\":\"Butter\",\"amount\":\"1 stick\"},{\"name\":\"Flour\",\"amount\":\"6 tablespoons\"},{\"name\":\"Milk\",\"amount\":\"4 cups\"},{\"name\":\"Shredded cheddar\",\"amount\":\"4 cups\"},{\"name\":\"Velveeta (optional)\",\"amount\":\"1/4 cup\"},{\"name\":\"Egg, beaten\",\"amount\":\"1\"},{\"name\":\"Ritz crackers, crushed\",\"amount\":\"1 sleeve\"},{\"name\":\"Melted butter\",\"amount\":\"3 tablespoons\"}],\"directions\":\"Cook macaroni. In a large pan, melt the stick of butter, then add flour, milk, cheeses, and egg. Stir over medium to low heat until everything is melted into a nice cheese sauce. Add the macaroni and pour into baking pan. Mix crushed ritz crackers and 3 tablespoons of melted butter. Sprinkle on top of macaroni. Bake at 350 degrees for 30-45 minutes\"},{\"id\":69,\"category\":\"Pork\",\"name\":\"Mustard Crusted Pork Roast\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":45},\"ingredients\":[{\"name\":\"Boneless pork loin roast\",\"amount\":\"2 pounds\"},{\"name\":\"Spicy mustard\",\"amount\":\"2 tablespoons\"},{\"name\":\"Garlic croutons, crushed\",\"amount\":\"1 cup\"}],\"subName\":\"\",\"sub\":[],\"directions\":\"Season roast with salt and pepper. Place in shallow pan and roast for 30 minutes and sprinkle with crouton crumbs. Return to oven and continue to roast for 10-15 minutes longer until meat thermometers registers 155\"},{\"id\":70,\"category\":\"Chicken\",\"name\":\"One Dish Chicken Bake\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":40},\"ingredients\":[{\"name\":\"Stove top stuffing for chicken\",\"amount\":\"1 (6oz) package\"},{\"name\":\"Boneless, skinless chicken breasts\",\"amount\":\"4 (1 1/4lbs)\"},{\"name\":\"Cream of chicken soup\",\"amount\":\"1 can\"},{\"name\":\"Milk\",\"amount\":\"1/3 cup\"}],\"subName\":\"\",\"sub\":[],\"directions\":\"Prepare stuffing according to package. Place chicken in 12x8-inch baking dish. Mix soup and milk, pour over chicken. Top with stuffing. Bake at 375 degrees for 35 minutes\"},{\"id\":71,\"category\":\"Pork\",\"name\":\"Panama Pork Stew\",\"subIngredients\":false,\"cook\":{\"hours\":9,\"minutes\":10},\"ingredients\":[{\"name\":\"Small sweet potatoes peeled, 2-inch cubes\",\"amount\":\"2\"},{\"name\":\"Frozen corn\",\"amount\":\"1 (9oz) package\"},{\"name\":\"Frozen cut green beans\",\"amount\":\"1 (9oz) package\"},{\"name\":\"Medium onion, chopped\",\"amount\":\"1\"},{\"name\":\"Lean pork (stew meat, chops, or tenderloin) in 1-inch cubes\",\"amount\":\"1 1/2 lbs\"},{\"name\":\"Diced tomatoes\",\"amount\":\"1 (14.5oz) can\"},{\"name\":\"Chili powder\",\"amount\":\"1-2 tablespoons\"},{\"name\":\"Garlic powder\",\"amount\":\"1 tablespoon\"},{\"name\":\"Coriander (optional)\",\"amount\":\"1/2 tsp\"},{\"name\":\"Cinnamon (optional)\",\"amount\":\"1/4 tsp\"}],\"directions\":\"Place potatoes, corn, green beans, and onion in bottom, top with pork. Mix tomatoes, 1 cup water, and spices together, pour over pork. Cook on low 7-9 hours. Serve alone with crusty bread or over rice\"},{\"id\":72,\"category\":\"Other\",\"name\":\"Parmesan Bake Fish Packets\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":30},\"ingredients\":[{\"name\":\"12x18 aluminum foil\",\"amount\":\"8 sheets\"},{\"name\":\"Fish\",\"amount\":\"4 (4-6oz)\"},{\"name\":\"Mayonnaise\",\"amount\":\"1/4 cup\"},{\"name\":\"Grated parmesan cheese\",\"amount\":\"1/4 cup\"},{\"name\":\"Cayenne pepper\",\"amount\":\"\"},{\"name\":\"Medium zucchini, sliced\",\"amount\":\"2\"},{\"name\":\"Medium red bell pepper, cut into strips\",\"amount\":\"1/2\"}],\"directions\":\"Preheat oven to 450 degrees or grill to medium-high. Spray foil with non-stick cooking spray. Center one fish fillet on each double layer of aluminum foil. Spread with mayo. Sprinkle with parmesan cheese and cayenne pepper. Top with veggies. Bring up sides of foil and double foil. Double fold ends to form packet, leaving room for heat circulation inside. Repeat to make 4 packets. Bake 18-22 minutes on cookie sheet in oven or grill 10-12 minutes in covered grill\"},{\"id\":73,\"category\":\"Crockpot\",\"name\":\"Pasta Fagioli in the Crockpot\",\"subIngredients\":false,\"cook\":{\"hours\":7,\"minutes\":0},\"ingredients\":[{\"name\":\"Ground beef\",\"amount\":\"2 lbs\"},{\"name\":\"Onion, chopped\",\"amount\":\"1\"},{\"name\":\"Carrots, chopped\",\"amount\":\"3\"},{\"name\":\"Celery, chopped\",\"amount\":\"3 stalks\"},{\"name\":\"Diced tomatoes, undrained\",\"amount\":\"2 (28oz) cans\"},{\"name\":\"Red kidney beans, drained\",\"amount\":\"1 (16oz) can\"},{\"name\":\"White kidney beans, drained\",\"amount\":\"1 (16oz) can\"},{\"name\":\"Beef stock\",\"amount\":\"3 (10oz) cans\"},{\"name\":\"Oregano\",\"amount\":\"3 tsp\"},{\"name\":\"Pepper\",\"amount\":\"2 tsp\"},{\"name\":\"Parsley\",\"amount\":\"5 tsp\"},{\"name\":\"Tabasco sauce (optional)\",\"amount\":\"1 tsp\"},{\"name\":\"Spaghetti sauce\",\"amount\":\"1 (20oz) jar\"},{\"name\":\"Pasta\",\"amount\":\"8oz\"}],\"directions\":\"Brown beef in a skillet. Drain fat from beef and add to crockpot with everything except pasta. Cook on low 7-8 hours or high 4-5 hours. Add pasta the last 30 minutes. Serve with a nice crisp green salad and some garlic bread\"},{\"id\":74,\"category\":\"Other\",\"name\":\"Pepperoni Pizza Bake\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":35},\"ingredients\":[{\"name\":\"Refrigerated biscuits\",\"amount\":\"1 (16.3oz) can\"},{\"name\":\"Pizza sauce\",\"amount\":\"1 (8oz) can\"},{\"name\":\"Shredded mozzarella\",\"amount\":\"2 (8oz) cups\"},{\"name\":\"Pepperoni\",\"amount\":\"16 slices\"}],\"directions\":\"Cut each biscuit into 8 pieces, toss with pizza sauce and 1 cup of cheese. Spread in sprayed 8-inch glass dish. Top with pepperoni and remaining 1 cup cheese. Bake at 375 degeres for 22-28 minutes\"},{\"id\":75,\"category\":\"Other\",\"name\":\"Pizza Crescent Bake\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":45},\"ingredients\":[{\"name\":\"Refrigerated crescent rolls\",\"amount\":\"2 (8oz) tubes\"},{\"name\":\"Beef\",\"amount\":\"1 1/2 pounds\"},{\"name\":\"Pizza sauce\",\"amount\":\"1 (15oz) can\"},{\"name\":\"Shredded cheddar\",\"amount\":\"1 cup\"},{\"name\":\"Shredded mozzarella\",\"amount\":\"1 cup\"}],\"directions\":\"Unroll one tube of dough and place it in a lightly greased 13x9x2 baking dish. Press to seal perforations. Cook beef; drain. Sprinkle over dough. Top with pizza sauce, sprinkle with cheese. Unroll second tube and place over cheese; seal perforations. Bake uncovered 350 degrees for 30 minutes\"},{\"id\":76,\"category\":\"Other\",\"name\":\"Pizza Cupcakes\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":30},\"ingredients\":[{\"name\":\"Crescent rolls\",\"amount\":\"1 (8oz) can\"},{\"name\":\"Pizza sauce\",\"amount\":\"1/2 cup\"},{\"name\":\"Mini pepperoni slices\",\"amount\":\"1/4 cup\"},{\"name\":\"Italian sausage\",\"amount\":\"1/4 lb\"},{\"name\":\"Mozzarella\",\"amount\":\"1/2 cup\"}],\"directions\":\"Heat oven to 375 degrees. Spray regular size muffin cups with cooking spray. Unroll dough, separate into 8 triangles. Press into muffin cups. In a small bowl, mix sauce, pepperoni, sauage, and 1/4 cup of cheese. Spoon about 2 tsp mixture into each dough lined cup. Sprinkle each with about 1 tsp additional cheese. Bake 16-18 minutes\"},{\"id\":77,\"category\":\"Pork\",\"name\":\"Pork Chops with Broccoli and Rice\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":25},\"ingredients\":[{\"name\":\"Herb roasted chicken flavor long grain and wild rice mix\",\"amount\":\"1 (6oz) box\"},{\"name\":\"Fresh broccoli florets\",\"amount\":\"4 cups (about 1/2 lb)\"},{\"name\":\"Vegetable oil\",\"amount\":\"1 tbsp\"},{\"name\":\"Boneless pork chops\",\"amount\":\"4 (about 1 1/3 lbs\"}],\"directions\":\"In 12-inch skillet, mix rice, seasoning package from rice mix and 2 cups water. Heat to boiling over medium heat. Cover, cook 7 minutes. Add broccoli, cook 3 minutes longer. Spoon rice and broccoli onto plates. Wipe out skillet. In same skillet, heat oil over med-high heat. Sprinkle with salt and pepper, place in skillet. Cook 4-6 minutes or until browned. Turn pork; cook 4-5 minutes longer until pork is no longer pink\"},{\"id\":78,\"category\":\"Crockpot\",\"name\":\"Pulled Caesar Chicken Sandwiches\",\"subIngredients\":false,\"cook\":{\"hours\":7,\"minutes\":0},\"ingredients\":[{\"name\":\"Boneless, skinless chicken breasts\",\"amount\":\"4-6\"},{\"name\":\"Salt\",\"amount\":\"\"},{\"name\":\"Pepper\",\"amount\":\"\"},{\"name\":\"Caesar dressing\",\"amount\":\"1 bottle\"}],\"directions\":\"Place chicken breasts in the crockpot with a little water, salt, and pepper. Cook 6-8 hours. 30 minutes before eating, shred chicken with 2 forks, pour in a bottle of Caesar dressing and let cook for 30 minutes. Serve warm with lettuce on your favorite bun\"},{\"id\":79,\"category\":\"Other\",\"name\":\"Quesadilla Pie\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":50},\"ingredients\":[{\"name\":\"Chopped green chiles\",\"amount\":\"1 (4.5oz) can\"},{\"name\":\"Black beans, drained, rinsed\",\"amount\":\"1 (15oz) can\"},{\"name\":\"Taco sauce\",\"amount\":\"1 (10oz) can\"},{\"name\":\"Shredded jack cheese\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Shredded cheddar cheese\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Tortillas\",\"amount\":\"4 8-inch\"},{\"name\":\"Chopped green onions (optional)\",\"amount\":\"1/3 cup\"},{\"name\":\"Medium tomato, chopped (optional)\",\"amount\":\"1\"}],\"directions\":\"Heat oven to 400. Spray 9-inch pit plate with cooking spray. In medium bowl, mix chiles, beans, onions, tomato, 1/2 cup of taco sauce, jack cheese, and cheddar cheese; set aside. Spoon 1/4 cup taco sauce into pie plate. Top with 1 tortilla and 1/3 of the bean mixture. Repeat twice to make 3 layers. Top with remaining tortilla. Cover loosely with foil. Bake 30 minutes. Uncover, sprinkle with remaining cheddar cheese. Bake 5-7 minutes longer or until cheese is melted\"},{\"id\":80,\"category\":\"Soup\",\"name\":\"Quick Chicken Corn Chowder\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":10},\"ingredients\":[{\"name\":\"Butter\",\"amount\":\"2 tbsp\"},{\"name\":\"Onion, chopped\",\"amount\":\"1/4 cup\"},{\"name\":\"Celery, chopped\",\"amount\":\"1/4 cup\"},{\"name\":\"Flour\",\"amount\":\"2 tbsp\"},{\"name\":\"2% milk\",\"amount\":\"3 cups\"},{\"name\":\"Cooked chicken\",\"amount\":\"2 cups\"},{\"name\":\"Cream corn\",\"amount\":\"1 (14 3/4oz) can\"},{\"name\":\"Frozen corn\",\"amount\":\"1 1/2 cups\"}],\"directions\":\"Melt margarine in large dutch oven. Add onion, and celery - cook 3 minutes or until tender. Add flour. Cook 1 minute, stirring constantly. Stir in milk and remaining ingredients. Do not let soup boil because it will separate\"},{\"id\":81,\"category\":\"Crockpot\",\"name\":\"Ranch Chicken Enchilada Casserole\",\"subIngredients\":false,\"cook\":{\"hours\":4,\"minutes\":40},\"ingredients\":[{\"name\":\"Boneless, skinless chicken breasts\",\"amount\":\"4\"},{\"name\":\"Taco seasoning\",\"amount\":\"1 packet\"},{\"name\":\"Ranch dressing mix\",\"amount\":\"1 packet\"},{\"name\":\"Flour tortillas\",\"amount\":\"4 (burrito size)\"},{\"name\":\"Ranch dressing\",\"amount\":\"1 cup\"},{\"name\":\"Shredded cheddar cheese\",\"amount\":\"2 cups\"},{\"name\":\"Cilantro or parsley to garnish (optional)\",\"amount\":\"\"}],\"directions\":\"Place chicken in slow cooker and sprinkle seasoning mixes over top. Cover and cook on high for 4 hours or low for 8 hours. Shred chicken with two forks and stir to evenly distribute juices and seasonings. In the bottom of a 9x13-inch baking pan, cover the bottom with two tortillas. Spread half of shredded chicken on tortillas, then 1/2 cup ranch dressing drizzled, and top with 1 cup shredded cheese. Repeat layers once more. Bake at 350 degrees for 20 minutes or until cheese is melted and lasagna is heated through. Serve with additional ranch dressing if desired\"},{\"id\":82,\"category\":\"Other\",\"name\":\"Ranch Pesto Rigatoni Bake\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":30},\"ingredients\":[{\"name\":\"Rigatoni\",\"amount\":\"1 box\"},{\"name\":\"Ranch dressing\",\"amount\":\"1/2 cup\"},{\"name\":\"Prepared pesto\",\"amount\":\"1/4 cup\"},{\"name\":\"Diced tomatoes, drained and slightly rinsed\",\"amount\":\"1 (28oz) can\"},{\"name\":\"Shredded mozzarella cheese, divided\",\"amount\":\"2 cups\"},{\"name\":\"Parsley\",\"amount\":\"\"}],\"directions\":\"Cook and drain rigatoni, return to pot. Stir in ranch dressing, pesto, diced tomatoes, and one cup shredded mozzarella. Transfer pasta to a 2 quart baking dish. Top with remaining mozzarella and parsley. Cover with foil and bake at 350 degrees for 15 minutes. remove foil and bake an additional 5 minutes until cheese is completely melted\"},{\"id\":83,\"category\":\"Crockpot\",\"name\":\"Salsa and Black Bean Chicken\",\"subIngredients\":false,\"cook\":{\"hours\":12,\"minutes\":0},\"ingredients\":[{\"name\":\"Boneless, skinless chicken\",\"amount\":\"\"},{\"name\":\"Salsa\",\"amount\":\"1 jar\"},{\"name\":\"Black beans\",\"amount\":\"1 can\"},{\"name\":\"Rice\",\"amount\":\"\"}],\"directions\":\"Place boneless skinless chicken breasts in crockpot. Pour salsa over the top and add black beans. Let it slow cook all day and then serve over rice. Add extra can of beans and medium salsa for more flavor\"},{\"id\":84,\"category\":\"Soup\",\"name\":\"Santa Fe Soup\",\"subIngredients\":false,\"cook\":{\"hours\":2,\"minutes\":10},\"ingredients\":[{\"name\":\"Ground turkey\",\"amount\":\"2 lbs\"},{\"name\":\"Green pepper, chopped\",\"amount\":\"1\"},{\"name\":\"Onion, chopped\",\"amount\":\"1\"},{\"name\":\"Ranch dressing mix, dry\",\"amount\":\"1 package\"},{\"name\":\"Taco seasoning\",\"amount\":\"2 packages\"},{\"name\":\"Rotelle tomatoes with chiles, undrained\",\"amount\":\"1 (11oz) can\"},{\"name\":\"Kidney beans, undrained\",\"amount\":\"1 (16oz) can\"},{\"name\":\"Black beans, undrained\",\"amount\":\"1 (16oz) can\"},{\"name\":\"Ready-cut tomatoes, undrained\",\"amount\":\"1 (16oz) cans\"},{\"name\":\"Corn, undrained\",\"amount\":\"2 (16oz) cans\"},{\"name\":\"Shredded cheese, mexican blend\",\"amount\":\"2 cups\"}],\"directions\":\"Saute turkey and onions, drain any fat. Add remaining ingredients and simmer for 2 hours. Serve with tortilla chips, cheese, and sour cream\"},{\"id\":85,\"category\":\"Crockpot\",\"name\":\"Sausage and Blackeyed Peas\",\"subIngredients\":false,\"cook\":{\"hours\":7,\"minutes\":30},\"ingredients\":[{\"name\":\"Polish or kielbasa sausage, sliced 1/2-inch thick pieces\",\"amount\":\"1 package\"},{\"name\":\"Rotel tomatoes\",\"amount\":\"2 cans\"},{\"name\":\"Green chilies\",\"amount\":\"\"},{\"name\":\"Black eyed peas\",\"amount\":\"2 cans\"}],\"directions\":\"Place in crockpot. add tomatoes and chilies. Cook on low 6-8 hours. 30 minutes before serving, add black eyed peas and let simmer. Serve over rice or cornbread\"},{\"id\":86,\"category\":\"Soup\",\"name\":\"Sausage Bean Soup\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":12},\"ingredients\":[{\"name\":\"Sausage, cut up into small pieces\",\"amount\":\"2 packages\"},{\"name\":\"Corn\",\"amount\":\"1 can\"},{\"name\":\"Pinto beans\",\"amount\":\"1 can\"},{\"name\":\"Red/kidney beans\",\"amount\":\"1 can\"},{\"name\":\"Black beans\",\"amount\":\"1 can\"},{\"name\":\"Northerned white beans\",\"amount\":\"1 can\"},{\"name\":\"Diced potatoes\",\"amount\":\"1 can\"},{\"name\":\"Rotel\",\"amount\":\"1 can\"},{\"name\":\"Beef broth\",\"amount\":\"1 can\"},{\"name\":\"Beef stew seasoning\",\"amount\":\"1 package\"}],\"directions\":\"Mix it all together in the crock pot with an extra can of water. Let sit on low all day\"},{\"id\":87,\"category\":\"Beef\",\"name\":\"Shepards Pie\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":0},\"ingredients\":[{\"name\":\"Corn\",\"amount\":\"1 can\"},{\"name\":\"Cream corn\",\"amount\":\"1 can\"},{\"name\":\"Hamburg\",\"amount\":\"1 lb\"},{\"name\":\"Potatoes\",\"amount\":\"3\"}],\"directions\":\"Peel and cut up potatoes for making mashed potatoes. Cook hamburg until no longer pink. Combine corn, cream corn, and hamburg together. Place in casserole dish and top with mashed potatoes. Cook 350 degrees for 45 minutes\"},{\"id\":88,\"category\":\"Crockpot\",\"name\":\"Shredded Beef for Burritos\",\"subIngredients\":false,\"cook\":{\"hours\":6,\"minutes\":15},\"ingredients\":[{\"name\":\"Roast\",\"amount\":\"2-3 lb\"},{\"name\":\"Garlic powder\",\"amount\":\"\"},{\"name\":\"Salt\",\"amount\":\"\"},{\"name\":\"Pepper\",\"amount\":\"\"},{\"name\":\"Green enchilada sauce\",\"amount\":\"1 can\"},{\"name\":\"Rotel tomatoes\",\"amount\":\"1 can\"},{\"name\":\"Serrano peppers, chopped\",\"amount\":\"2\"},{\"name\":\"Preferred burrito ingredients\",\"amount\":\"\"}],\"directions\":\"Brown on each side a roast that has been seasoned with garlic powder, salt, and pepper in frying pan with oil. Put roast in crockpot and add green enchilada sauce, rotel tomatoes, and Serrano peppers. Cook on high for about 6 hours. The meat can be shredded with a fork. Serve with flour tortillas, sour cream, guacamole, lettuce, tomatoes, onions, cheese, cilantro, lime, hot sauce - anything you like on your burritos\"},{\"id\":89,\"category\":\"Other\",\"name\":\"Skillet Tuna Cakes\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":30},\"ingredients\":[{\"name\":\"Chunk light tuna in water, drained, flaked\",\"amount\":\"2 (5oz) cans\"},{\"name\":\"Stuffing mix for chicken\",\"amount\":\"1 (6oz) package\"},{\"name\":\"Shredded mild cheddar cheese\",\"amount\":\"1 cup\"},{\"name\":\"Carrot, shreded\",\"amount\":\"1\"},{\"name\":\"Mayo\",\"amount\":\"1/3 cup\"},{\"name\":\"Sweet pickle relish\",\"amount\":\"2 tbsp\"}],\"directions\":\"Combine ingredients, refrigerate 10 minutes. Heat large nonstick skillet sprayed with cooking spray on medium heat. Use ice cream scoop to add 1/3 cup portions of tuna mixture, in batches, to skillet. Flatten into patties with back of spatula. Cook 6 minutes or until golden brown on both sides, carefully turning patties after 3 minutes\"},{\"id\":90,\"category\":\"Crockpot\",\"name\":\"Slow Cooker Balsamic Chicken with Olives\",\"subIngredients\":false,\"cook\":{\"hours\":4,\"minutes\":10},\"ingredients\":[{\"name\":\"Boneless, skinless chicken breasts\",\"amount\":\"2 lbs\"},{\"name\":\"Diced tomatoes\",\"amount\":\"1 (14.5oz) can\"},{\"name\":\"Tomato sauce\",\"amount\":\"1 (14.5oz) can\"},{\"name\":\"Onion, thinly sliced\",\"amount\":\"1\"},{\"name\":\"Garlic cloves\",\"amount\":\"4-6\"},{\"name\":\"Balsamic vinegar\",\"amount\":\"1/2 cup\"},{\"name\":\"Olive oil\",\"amount\":\"2 tbsp\"},{\"name\":\"Pitted kalamata olives\",\"amount\":\"12\"},{\"name\":\"Italian herb mix (thyme, basil, rosemary, oregano)\",\"amount\":\"1 palmful\"},{\"name\":\"Ground black pepper and salt\",\"amount\":\"\"}],\"directions\":\"Pour the olive oil into the bottom of the slow cooker. Place the chicken breasts into the slow cooker. Season with salt and pepper. Top each breast with sliced onion, garlic cloves, and Italian herbs. Pour in vinegar, tomatoes, and tomato sauce. Cook on high about 4 hours. Remove chicken breasts, slice on the bias, and place back in the tomato/vinegar sauce. Add olives and let them warm through for about 10 minutes. Serve over whole wheat spaghetti, polenta or your carb of choice. Sprinkle with grated parmesan or a little crumbled light feta\"},{\"id\":91,\"category\":\"Crockpot\",\"name\":\"Slow Cooker Buffalo Chicken Sandwiches\",\"subIngredients\":false,\"cook\":{\"hours\":7,\"minutes\":20},\"ingredients\":[{\"name\":\"Skinless, boneless chicken breast halves\",\"amount\":\"4\"},{\"name\":\"Buffalo wing sauce, divided\",\"amount\":\"1 (17.5oz) bottle\"},{\"name\":\"Dry ranch salad dressing mix\",\"amount\":\"1/2 (1oz) package\"},{\"name\":\"Butter\",\"amount\":\"2 tbsp\"},{\"name\":\"Hoagie rolls, split lengthwise\",\"amount\":\"6\"},{\"name\":\"Slaw cabbage\",\"amount\":\"\"},{\"name\":\"Chunky bleu cheese dressing\",\"amount\":\"1 bottle\"}],\"directions\":\"Place the chicken breasts into a slow cooker and pour in 3/4 of the wing sauce and the ranch dressing mix. Cover, and cook on low for 6-7 hours. Once the chicken has cooked, add the butter, and shred the meat finely with two forks. Place the meat onto the hoagie rolls, and splash with the remaining buffalo wing sauce to serve. Serve with slaw cabbage combined with blue cheese dressing\"},{\"id\":92,\"category\":\"Crockpot\",\"name\":\"Slow Cooker Chili Chicken Chowder\",\"subIngredients\":false,\"cook\":{\"hours\":5,\"minutes\":5},\"ingredients\":[{\"name\":\"Uncooked chicken tenders, cut into bite sized pieces\",\"amount\":\"1 1/4 lbs\"},{\"name\":\"Frozen hash brown potatoes, thawed\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Progresso chicken broth\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Frozen chopped onions, thawed\",\"amount\":\"1/2 cup\"},{\"name\":\"Finely chopped garlic\",\"amount\":\"2 tsp\"},{\"name\":\"Ground cumin\",\"amount\":\"1 tsp\"},{\"name\":\"Cream style corn\",\"amount\":\"1 can\"},{\"name\":\"Chopped green chiles\",\"amount\":\"1 (7oz) can\"},{\"name\":\"Half and half\",\"amount\":\"1/2 cup\"}],\"directions\":\"In slow cooker, stir together all ingredients except half and half until combined. Cover and cook on high 4-5 hours. Stir in half and half. Spoon into bowls\"},{\"id\":93,\"category\":\"Crockpot\",\"name\":\"Slow Cooker Easy Pepper Steak\",\"subIngredients\":false,\"cook\":{\"hours\":9,\"minutes\":15},\"ingredients\":[{\"name\":\"Beef, round steak, lean\",\"amount\":\"1 lb\"},{\"name\":\"Green bell pepper, strips\",\"amount\":\"3/4 cup\"},{\"name\":\"Red bell pepper, strips\",\"amount\":\"1/2 cup\"},{\"name\":\"Yellow bell pepper, strips\",\"amount\":\"1/2 cup\"},{\"name\":\"Onion, sliced\",\"amount\":\"1/2 cup\"},{\"name\":\"Garlic\",\"amount\":\"1 clove\"},{\"name\":\"Soy sauce\",\"amount\":\"6 tbsp\"},{\"name\":\"Black pepper\",\"amount\":\"1 tbsp\"}],\"directions\":\"Cut round steak, peppers, and onions into strips. Sear steak in pan over medium high heat (optional). Press clove of garlic into crock, add all ingredients. Cover, cook on low for 8-10 hours. Serve, add rice if wanted\"},{\"id\":94,\"category\":\"Crockpot\",\"name\":\"Slow Cooker Honey-Dijon Ham\",\"subIngredients\":false,\"cook\":{\"hours\":6,\"minutes\":15},\"ingredients\":[{\"name\":\"Bone-in cooked ham\",\"amount\":\"1 (5 lb)\"},{\"name\":\"Apple juice\",\"amount\":\"1/3 cup\"},{\"name\":\"Packed brown sugar\",\"amount\":\"1/4 cup\"},{\"name\":\"Honey\",\"amount\":\"1 tbsp\"},{\"name\":\"Dijon mustard\",\"amount\":\"1 tbsp\"}],\"directions\":\"In a 4-6 quart slow cooker, place ham. Add apple juice. In a small bowl, mix brown sugar, honey, and mustard. Spread mixture over ham. Cover; cook on low for 6-8 hours. Remove ham from slow cooker, cut into slices, place on serving platter\"},{\"id\":95,\"category\":\"Soup\",\"name\":\"Slow Cooker Italian Chicken - Pasta Soup\",\"subIngredients\":false,\"cook\":{\"hours\":9,\"minutes\":35},\"ingredients\":[{\"name\":\"Boneless, skinless chicken thighs, cut into 1 inch pieces\",\"amount\":\"1 1/4 lb\"},{\"name\":\"Carrots, diced\",\"amount\":\"1 cup\"},{\"name\":\"Onion, finely chopped\",\"amount\":\"1/2 cup\"},{\"name\":\"Garlic, finely chopped\",\"amount\":\"2 cloves\"},{\"name\":\"Chicken broth\",\"amount\":\"1 (32oz) carton\"},{\"name\":\"Italian style diced tomatoes, undrained\",\"amount\":\"1 (14.5oz) can\"},{\"name\":\"Uncooked shell pasta\",\"amount\":\"1/2 cup\"}],\"directions\":\"Mix all ingredients except pasta in slow cooker. Cover and cook on low setting 8-10 hours. About 30 minutes before serving, stir in pasta. Increase heat setting to high. Cover and cook 20-30 minutes or until pasta is tender\"},{\"id\":96,\"category\":\"Crockpot\",\"name\":\"Slow Cooker Italian Sausages and Peppers with Rotini\",\"subIngredients\":false,\"cook\":{\"hours\":6,\"minutes\":15},\"ingredients\":[{\"name\":\"Turkey Italian sausages, cut into 1 inch pieces\",\"amount\":\"1 (19.5oz) package\"},{\"name\":\"Sweet onion, finely chopped\",\"amount\":\"1 cup\"},{\"name\":\"Garlic, finely chopped\",\"amount\":\"4 cloves\"},{\"name\":\"Medium yellow bell peppers, cut into 1/2 inch pieces\",\"amount\":\"2\"},{\"name\":\"Medium red bell peppers, cut into 1/2 inch pieces\",\"amount\":\"2\"},{\"name\":\"Spaghetti tomato sauce\",\"amount\":\"1 (26oz) jar\"},{\"name\":\"Uncooked rotini pasta\",\"amount\":\"4 1/2 cups\"},{\"name\":\"Shredded parmesan cheese\",\"amount\":\"6 tbsp\"}],\"directions\":\"Spray 3-4 quart slow cooker with cooking spray. In cooker, mix all ingredients except pasta and cheese. Cover; cook on low heat setting 6-8 hours. Cook and drain pasta as directed on package. Serve sausage mixture over pasta; sprinkle with parmesan cheese\"},{\"id\":97,\"category\":\"Crockpot\",\"name\":\"Slow Cooker Lasagna\",\"subIngredients\":false,\"cook\":{\"hours\":4,\"minutes\":50},\"ingredients\":[{\"name\":\"Lean ground beef\",\"amount\":\"1 lb\"},{\"name\":\"Tomato pasta sauce\",\"amount\":\"1 (26-28oz) jar\"},{\"name\":\"Tomato sauce\",\"amount\":\"1 (8oz) jar\"},{\"name\":\"No-boil lasagna noodles\",\"amount\":\"1/2 (9oz) package\"},{\"name\":\"Alfredo pasta sauce\",\"amount\":\"1 (1 lb) jar\"},{\"name\":\"Shredded mozzarella cheese\",\"amount\":\"3 cups\"},{\"name\":\"Grated parmesan cheese\",\"amount\":\"1/4 cup\"}],\"directions\":\"Brown ground beef in large skillet over medium-high heat until thoroughly cooked, stirring frequently; drain. Spray 4-5 quart slow cooker with nonstick cooking spray. Spread 3/4 cup of the tomato pasta sauce in bottom of sprayed slow cooker. Stir remaining tomato pasta sauce and tomato sauce into ground beef. Layer 3 lasagna noodles over sauce in slow cooker, breaking noodles as necessary. Top with 1/3 of the Alfredo pasta sauce, spreading evenly. Sprinkle with 1 cup of the mozzarella cheese. Top with 1/3 of the ground beef mixture, spreading evenly. Repeat layering twice, using 2 lasagna noodles in last layer. Sprinkle parmesan cheese over top. Cover; cook on low setting for 3 1/2 to 4 1/2 hours. If desired, cut into wedges and serve\"},{\"id\":98,\"category\":\"Crockpot\",\"name\":\"Slow Cooker Mexican Pork Burrito Bowls\",\"subIngredients\":false,\"cook\":{\"hours\":6,\"minutes\":30},\"ingredients\":[{\"name\":\"Large sweet onion, sliced\",\"amount\":\"1\"},{\"name\":\"Taco seasoning mix\",\"amount\":\"2 tbsp\"},{\"name\":\"Boneless pork shoulder\",\"amount\":\"1\"},{\"name\":\"Red enchilada sauce\",\"amount\":\"1 (10oz) can\"},{\"name\":\"Chopped green chiles, drained\",\"amount\":\"1 (4.5oz) can\"},{\"name\":\"Salt\",\"amount\":\"1/2 tbsp\"},{\"name\":\"Hot cooked white or brown rice\",\"amount\":\"6 cups\"},{\"name\":\"Shredded lettuce\",\"amount\":\"2 cups\"},{\"name\":\"Salsa (optional)\",\"amount\":\"\"},{\"name\":\"Shredded Mexican cheese blend (optinal)\",\"amount\":\"\"},{\"name\":\"Chopped fresh cilantro (optional)\",\"amount\":\"\"}],\"directions\":\"Spray 5-quart slow cooker with cooking spray. Place onion in cooker. Sprinkle taco seasoning mix over pork shoulder, pressing to coat. Place pork in cooker. Top with enchilada sauce. Cover; cook on high heat setting 5-6 hours or until tender. Remove pork from slow cooker; shred meat with fork, discarding fat. Place shredded pork in large bowl. Strain sauce. Add chiles, salt, and 1 cup of the strained sauce. Stir well. Spoon about 3/4 cup rice into each of 8 individual served bowls. Top each with about 1/2 cup pork mixture and 1/4 cup lettuce. Garnish with salsa, cheese, and/or cilantro\"},{\"id\":99,\"category\":\"Crockpot\",\"name\":\"Slow Cooker Minestrone Stew\",\"subIngredients\":false,\"cook\":{\"hours\":6,\"minutes\":35},\"ingredients\":[{\"name\":\"Sweet Italian turkey sausage links, casings removed\",\"amount\":\"1 (19.5oz) package\"},{\"name\":\"Diced tomatoes, undrained\",\"amount\":\"1 (28oz) can\"},{\"name\":\"Garden vegetable soup\",\"amount\":\"2 (18oz) cans\"},{\"name\":\"Garbanzo beans, drained, rinsed\",\"amount\":\"1 (15oz) can\"},{\"name\":\"Tomato paste\",\"amount\":\"1 (6oz) can\"},{\"name\":\"Italian seasoning\",\"amount\":\"1 tsp\"},{\"name\":\"Uncooked elbow macaroni\",\"amount\":\"1 cup\"},{\"name\":\"Shredded parmesan cheese\",\"amount\":\"1/2 cup\"}],\"directions\":\"In 12-inch skillet, cook sausage over medium heat 8-10 minutes, stirring occasionally, until no longer pink; drain. Spray 3-4 quart slow cooker with cooking spray. In slow cooker, mix sausage and all remaining ingredients except macaroni and cheese. Cover; cook on low heat setting 6 hours. Stir macaroni into slow cooker. Increase heat setting to high. Cover; cook about 20 minutes longer or until macaroni is tender. Sprinkle with cheese\"},{\"id\":100,\"category\":\"Crockpot\",\"name\":\"Slow Cooker Parmesan Honey Pork Roast\",\"subIngredients\":true,\"cook\":{\"hours\":7,\"minutes\":0},\"ingredients\":[{\"name\":\"Pork roast, boneless\",\"amount\":\"2-3 lbs\"},{\"name\":\"Parmesan cheese, grated\",\"amount\":\"2/3 cup\"},{\"name\":\"Honey\",\"amount\":\"1/2 cup\"},{\"name\":\"Soy sauce\",\"amount\":\"3 tbsp\"},{\"name\":\"Basil, dried\",\"amount\":\"2 tbsp\"},{\"name\":\"Garlic, minced\",\"amount\":\"2 tbsp\"},{\"name\":\"Olive oil\",\"amount\":\"2 tbsp\"},{\"name\":\"Salt\",\"amount\":\"1/2 tsp\"}],\"subName\":\"Gravy\",\"sub\":[{\"name\":\"Cornstarch\",\"amount\":\"2 tbsp\"},{\"name\":\"Water, cold\",\"amount\":\"1/4 cup\"}],\"directions\":\"Spray slow cooker with non-stick cooking spray. Place roast in slow cooker. In a bowl, combine cheese, honey, soy sauce, basil, garlic, oil, and salt; pour over pork. Cover. Cook on low for 6-7 hours or until a meat thermometer reads 160 degrees. Remove pork to a serving platter; keep warm. Skim fat from cooking juices; transfer to a small saucepan. Bring liquid to a boil. Combine cornstarch and water until smooth. Gradually stir into pan. Bring to a boil; cook and stir for 2 minutes or until thickened\"},{\"id\":101,\"category\":\"Crockpot\",\"name\":\"Slow Cooker Pasta with Pork Ragu\",\"subIngredients\":false,\"cook\":{\"hours\":7,\"minutes\":20},\"ingredients\":[{\"name\":\"Large carrot, chopped\",\"amount\":\"1\"},{\"name\":\"Medium onion, chopped\",\"amount\":\"1\"},{\"name\":\"Garlic, chopped\",\"amount\":\"1 clove\"},{\"name\":\"Tomato paste\",\"amount\":\"2 tbsp\"},{\"name\":\"Thyme, dried\",\"amount\":\"2 tsp\"},{\"name\":\"Oregano, dried\",\"amount\":\"1 tsp\"},{\"name\":\"Salt\",\"amount\":\"3/4 tsp\"},{\"name\":\"Black pepper\",\"amount\":\"1/4 tsp\"},{\"name\":\"Diced tomatoes, canned\",\"amount\":\"1 (14.5oz) can\"},{\"name\":\"Boneless pork, trimmed and cut in half\",\"amount\":\"1 1/2 lb\"},{\"name\":\"Fettuccini\",\"amount\":\"3/4 lb\"},{\"name\":\"Parmesan, grated (for serving)\",\"amount\":\"\"}],\"directions\":\"In a 4-6 quart slow cooker, combine the carrot, onion, garlic, tomtato paste, thyme, oregano, salt, and pepper. Add the tomatoes (and the juices); add the pork and turn to coat. Cover; cook on low for 7-8 hours or on high for 5-6 hours, or until the pork is very tender. Twenty minutes before serving, cook the fettuccine according to the directions on the package, drain and return to the pot. Meanwhile, using 2 forks, shred the pork and mix it into the cooking liquid. Tos the pasta with the Ragu and sprinkle with parmesan\"},{\"id\":102,\"category\":\"Crockpot\",\"name\":\"Slow Cooked Taco Casserole\",\"subIngredients\":false,\"cook\":{\"hours\":3,\"minutes\":15},\"ingredients\":[{\"name\":\"Ground beef sirloin\",\"amount\":\"1 1/2 lb\"},{\"name\":\"Small onion, chopped\",\"amount\":\"1\"},{\"name\":\"Garlic, minced\",\"amount\":\"1 clove\"},{\"name\":\"Taco seasoning mix\",\"amount\":\"1 (1oz) package\"},{\"name\":\"Salt\",\"amount\":\"1 tsp\"},{\"name\":\"Pepper\",\"amount\":\"1/2 tsp\"},{\"name\":\"Corn tortillas\",\"amount\":\"9 (5 1/2-inch)\"},{\"name\":\"Chicken broth\",\"amount\":\"1/2 cup\"},{\"name\":\"Tomato sauce\",\"amount\":\"1/2 cup\"},{\"name\":\"Taco sauce\",\"amount\":\"1 (10oz) can\"},{\"name\":\"Finely shredded cheddar cheese\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Pinto, black, or kidney beans, drained, rinsed\",\"amount\":\"2 (15oz) cans\"},{\"name\":\"Whole kernal corn, red and green peppers, drained\",\"amount\":\"1 (11oz) can\"},{\"name\":\"Chopped green chiles\",\"amount\":\"1 (4.5oz) can\"},{\"name\":\"Chopped ripe olives\",\"amount\":\"1 (2 1/4oz) can\"},{\"name\":\"Sour cream\",\"amount\":\"\"}],\"directions\":\"Brush inside of 3 1/2 or 4-quart slow cooker with oil or spray with nonstick cooking spray. In large skillet, brown beef sirloin with onion and garlic over medium-high heat for 8-10 minutes or until thoroughly cooked, stirring frequently. Drain, stir in taco seasoning mix, salt, and pepper. Place 3 tortillas in bottom of oiled slow cooker. Top with beef mixture, broth, tomato sauce, and enchilada sauce. Sprinkle with 1/2 cup of the cheese. Layer 3 more tortillas. Top with beans, corn, green chiles, half of the olives and 1/2 cup cheese. Top with remaining 3 tortillas. Sprinkle with remaining 1/2 cup cheese and olives. Cook on high setting for 2 1/2 to 3 hours or on low setting for 6-7 hours. Uncover slow cooker for last 30 minutes of cooking time. Top individual servings with sour cream\"},{\"id\":103,\"category\":\"Crockpot\",\"name\":\"Smothered Pork Chops\",\"subIngredients\":false,\"cook\":{\"hours\":3,\"minutes\":30},\"ingredients\":[{\"name\":\"Flour\",\"amount\":\"3/4 cup\"},{\"name\":\"Ground mustard\",\"amount\":\"1/2 tsp\"},{\"name\":\"Garlic pepper blend\",\"amount\":\"1/2 tsp\"},{\"name\":\"Seasoned salt\",\"amount\":\"1/2 tsp\"},{\"name\":\"Boneless pork chopes (1/2 inch thick, 4oz each)\",\"amount\":\"4\"},{\"name\":\"Canola oil\",\"amount\":\"2 tbsp\"},{\"name\":\"Chicken broth\",\"amount\":\"1 (14.5oz) can\"}],\"directions\":\"In a large resealable bag, combine 1/2 cup flour, mustard, pepper blend, and seasoned salt. Add chops one at a time and shake to coat. In a large skillet, brown meat in oil on each side. Transfer to slow cooker. Place remaining flour in a small bowl; whisk in broth until smooth. Pour over chops. Cover and cook on low for 3 to 3 1/2 hours or until meat is tender. Remove pork to a serving plate and keep warm. Whisk pan juices until smooth, serve with pork\"},{\"id\":104,\"category\":\"Grill\",\"name\":\"Southwestern Kabobs\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":30},\"ingredients\":[{\"name\":\"Boneless pork chops, cut into 1 inch cubes\",\"amount\":\"4\"},{\"name\":\"Taco or fajita seasoning\",\"amount\":\"4 tbsp\"},{\"name\":\"Green bell pepper, cut into 1 inch pieces\",\"amount\":\"1/2\"}],\"directions\":\"In plastic bag, toss together pork cubes with seasoning until evenly coated. Place on skewers and grill until brown\"},{\"id\":105,\"category\":\"Other\",\"name\":\"Spaghetti Chop Chop\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":30},\"ingredients\":[{\"name\":\"Hamburg\",\"amount\":\"1/2 lb\"},{\"name\":\"Cooked spaghetti\",\"amount\":\"1 cup\"},{\"name\":\"Chinese vegetables\",\"amount\":\"1 can\"},{\"name\":\"Cream of chicken soup\",\"amount\":\"1 can\"},{\"name\":\"Onion\",\"amount\":\"1\"},{\"name\":\"Grated cheese\",\"amount\":\"1/2 cup\"}],\"directions\":\"Mix all ingredients together with 1/2 cup water and place in casserole dish. Bake at 375 for 30 minutes\"},{\"id\":106,\"category\":\"Other\",\"name\":\"Spaghetti Pizza\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":20},\"ingredients\":[{\"name\":\"Ground meat\",\"amount\":\"1 lb\"},{\"name\":\"Uncooked spaghetti noodles\",\"amount\":\"1 (16oz) box\"},{\"name\":\"Salt\",\"amount\":\"1/2 tsp\"},{\"name\":\"Oregano\",\"amount\":\"1/2 tsp\"},{\"name\":\"Garlic powder\",\"amount\":\"1/2 tsp\"},{\"name\":\"Milk\",\"amount\":\"1/2 cup\"},{\"name\":\"Egg\",\"amount\":\"1\"},{\"name\":\"Sliced pepperoni\",\"amount\":\"2oz\"},{\"name\":\"Pasta sauce\",\"amount\":\"1 (26oz) jar\"},{\"name\":\"Diced Italian style tomatoes\",\"amount\":\"1 (16oz) can\"},{\"name\":\"Grated parmesan cheese\",\"amount\":\"1/4 cup\"},{\"name\":\"Shredded Italian cheese blend\",\"amount\":\"1 (8oz) package\"},{\"name\":\"Any additional pizza toppings\",\"amount\":\"\"}],\"directions\":\"Boil water and salt for spaghetti noodles, once it starts boiling, add noodles. Brown meat in a separate frying pan. Once noodles are cooked, drain and put in a casserole dish. In a separate bowl, combine milk and egg and whisk. Poor over pasta and add jar of sauce, can of comatoes, garlic powder, and oregano. Mix all together well. On top of pasta mixture, layer the ground meat, then add a layer of pepperoni's. Sprinkle parmesan cheese and Italian cheese. And layer more pepperoni. Bake in teh over at 350 for 30 minutes\"},{\"id\":107,\"category\":\"Crockpot\",\"name\":\"Spicy Chicken Stew\",\"subIngredients\":false,\"cook\":{\"hours\":4,\"minutes\":10},\"ingredients\":[{\"name\":\"Baking potatoes, peeled and cut into chunks (3 1/3 cups)\",\"amount\":\"2\"},{\"name\":\"Frozen whole-kernal corn\",\"amount\":\"1 (10oz) package\"},{\"name\":\"Celery stalks, chopped\",\"amount\":\"2\"},{\"name\":\"Carrots, peeled and cut into chunks (1 cup)\",\"amount\":\"2\"},{\"name\":\"Onion, cut into 1/2-inch slices\",\"amount\":\"1\"},{\"name\":\"Garlic, minced\",\"amount\":\"2 cloves\"},{\"name\":\"Salsa\",\"amount\":\"1 cup\"},{\"name\":\"Ground cumin\",\"amount\":\"1 1/2 tsp\"},{\"name\":\"Chili powder\",\"amount\":\"1 tsp\"},{\"name\":\"Freshly ground black pepper\",\"amount\":\"1/2 tsp\"},{\"name\":\"Skinless, boneless chicken breast\",\"amount\":\"1 lb\"},{\"name\":\"Skinless, boneless chicken thighs\",\"amount\":\"4 (about 10.5oz)\"},{\"name\":\"Chicken broth\",\"amount\":\"2 1/2 cups\"},{\"name\":\"6-inch corn tortillas, cut into strips\",\"amount\":\"4\"},{\"name\":\"Chopped fresh parsley (optional)\",\"amount\":\"\"}],\"directions\":\"Place first 6 ingredients in an electric slow cooker. Stir in salsa and next 3 ingredients (through pepper). Place chicken on top of vegetables, and add broth. Cover and cook on high for 4 hours. Remove chicken from slow cooker; shred with 2 forks. Return chicken to slow cooker. Stir tortilla strips into stew. Garnish with parsley, if desired\"},{\"id\":108,\"category\":\"Crockpot\",\"name\":\"Steak Fajitas\",\"subIngredients\":false,\"cook\":{\"hours\":4,\"minutes\":0},\"ingredients\":[{\"name\":\"Uncooked flank or skirt steak (thinly sliced)\",\"amount\":\"~2 lbs\"},{\"name\":\"Large bell peppers (thinly sliced)\",\"amount\":\"1\"},{\"name\":\"Large onion (thinly sliced)\",\"amount\":\"1/2\"},{\"name\":\"Drained Rotel\",\"amount\":\"1 can\"},{\"name\":\"Dry taco seasoning\",\"amount\":\"1 package\"},{\"name\":\"Flour\",\"amount\":\"1/4 cup\"},{\"name\":\"Cornstarch\",\"amount\":\"1 tsp\"}],\"directions\":\"Combine all ingredients in crockpot. Cook all day on low, or on high for about 3 1/2 hours. Serve inside tortillas with all your favorite Mexican fixings\"},{\"id\":109,\"category\":\"Other\",\"name\":\"Stromboli\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":45},\"ingredients\":[{\"name\":\"Refrigerated pizza dough\",\"amount\":\"1 (10oz) package\"},{\"name\":\"Deli mustard\",\"amount\":\"1/3 cup\"},{\"name\":\"Deli meats and cheese\",\"amount\":\"3/4 lbs\"},{\"name\":\"Egg, beaten\",\"amount\":\"1\"}],\"directions\":\"Unroll pizza dough on lightly floured board. Roll into 13x10 inch rectangle. Spread mustard evenly over dough. Layer deli meats on dough, overlapping slices, leaving one inch border around edges. Fold 1/3 of dough toward center from long edge of rectangle. Fold second side toward center encolsed filling. Pinch long edge to seal. Pinch ends together and tuck under dough. Place on greased baking dish. Cut shallow crosswise slits on top of dough spacing 3 inches apart. Brush stromboli lightly with beaten egg. Bake 15-18 minutes at 425 degrees\"},{\"id\":110,\"category\":\"Beef\",\"name\":\"Stuffed Peppers\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":0},\"ingredients\":[{\"name\":\"Large green peppers\",\"amount\":\"4\"},{\"name\":\"Ground beef\",\"amount\":\"1 lb\"},{\"name\":\"Margarine\",\"amount\":\"6 tbsp\"},{\"name\":\"Onion, chopped\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Thyme\",\"amount\":\"1 tsp\"},{\"name\":\"Parsley\",\"amount\":\"2 tbsp\"},{\"name\":\"Bay leaf\",\"amount\":\"1/2\"},{\"name\":\"Bread crumbs\",\"amount\":\"1/4 cups\"},{\"name\":\"Tarragon\",\"amount\":\"1 tbsp\"},{\"name\":\"Cooked rice\",\"amount\":\"1 cup\"},{\"name\":\"Eggs\",\"amount\":\"2\"},{\"name\":\"Parmesan cheese\",\"amount\":\"2 cups\"},{\"name\":\"Plum tomatoes\",\"amount\":\"2 cups\"},{\"name\":\"Chicken broth\",\"amount\":\"1/2 cup\"}],\"directions\":\"Split peppers in half. Cook hamburg until brown. Add onions, garlic, thyme, bayleaf, parsley, and tarragon. Add rice and eggs. Stuff peppers and sprinkle with cheese and bread crumbs. Pour tomatoes over peppers. Add chicken broth. Bake at 350 for 45 minutes\"},{\"id\":111,\"category\":\"Crockpot\",\"name\":\"Sweet Balsamic Glazed Pork Loin\",\"subIngredients\":true,\"cook\":{\"hours\":8,\"minutes\":0},\"ingredients\":[{\"name\":\"Boneless pork loin roast, trimmed of large fat pockets\",\"amount\":\"2 lbs\"},{\"name\":\"Ground sage\",\"amount\":\"1 tsp\"},{\"name\":\"Salt\",\"amount\":\"1/2 tsp\"},{\"name\":\"Pepper\",\"amount\":\"1/2 tsp\"},{\"name\":\"Garlic, finely minced or crushed\",\"amount\":\"1 clove\"}],\"subName\":\"Glaze\",\"sub\":[{\"name\":\"Brown sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Cornstarch\",\"amount\":\"1 tbsp\"},{\"name\":\"Balsamic vinegar\",\"amount\":\"1/4 cup\"},{\"name\":\"Soy sauce\",\"amount\":\"2 tbsp\"}],\"directions\":\"In a small bowl, combine the sage, salt, pepper, and garlic. Rub the spices all over the roast. Place the pork roast in the slow cooker and pour in a 1/2 cup water. Cover and cook on low for 6-8 hours. Near the end of the cooking time for the roast, combine the ingredients for the glaze in a small saucepan with 1/2 cup of water and bring the mixture to a boil, then reduce and let the mixture simmer, stirring occasionally, until it thickens. Remove the pork from the slow cooker, shred and place on a platter or plate. Drizzle the glaze over the pork and serve\"},{\"id\":112,\"category\":\"Crockpot\",\"name\":\"Sweet Hawaiin Crockpot Chicken\",\"subIngredients\":false,\"cook\":{\"hours\":8,\"minutes\":0},\"ingredients\":[{\"name\":\"Chicken tenderloin chunks\",\"amount\":\"2 lb\"},{\"name\":\"Pineapple juice\",\"amount\":\"1 cup\"},{\"name\":\"Brown sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Soy sauce\",\"amount\":\"1/3 cup\"}],\"directions\":\"Combine all ingredients in crockpot. Cook on low for 6-8 hours\"},{\"id\":113,\"category\":\"Chicken\",\"name\":\"Sweet Honey Chicken Wings\",\"subIngredients\":false,\"cook\":{\"hours\":25,\"minutes\":0},\"ingredients\":[{\"name\":\"Chicken wings\",\"amount\":\"2 lbs\"},{\"name\":\"Soy sauce\",\"amount\":\"1/2 cup\"},{\"name\":\"Sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Honey\",\"amount\":\"1/2 cup\"}],\"directions\":\"Mix ingredients together. Pour marinate over chicken and refrigerate for at least 24 hours. Turn chicken occasionally to coat all pieces. Bake 1 hour for 350 degrees\"},{\"id\":114,\"category\":\"Beef\",\"name\":\"Taco Mac Casserole\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":45},\"ingredients\":[{\"name\":\"Ground beef\",\"amount\":\"1 lb\"},{\"name\":\"Taco seasoning\",\"amount\":\"1 packet\"},{\"name\":\"Macaroni and cheese\",\"amount\":\"1 box\"},{\"name\":\"Butter/margarine\",\"amount\":\"4 tbsp\"},{\"name\":\"Milk\",\"amount\":\"1/3 cup\"},{\"name\":\"Sour cream\",\"amount\":\"1/3 cup\"},{\"name\":\"Shredded cheddar cheese\",\"amount\":\"1 cup\"},{\"name\":\"Salsa\",\"amount\":\"1 cup\"}],\"directions\":\"Brown ground beef in skillet, drain grease. Add taco seasoning and 2/3 cup water and simmer until most liquid is absorbed. Meanwhile, prepare macaroni and cheese according to box directions using the butter and milk. Stir in sour cream to the macaroni and cheese. Spread half of the macaroni and cheese on the bottom of a 2 quart baking dish. Top with meat and sprinkle 1/2 cup shredded cheese. Add second half of macaroni and cheese. Cover and bake at 400 degrees for 15 minutes. Remove foil and spread salsa over top. Sprinkle remaining 1/2 cup shredded cheese over salsa. Bake an additional 5 minutes or until cheese is melted\"},{\"id\":115,\"category\":\"Soup\",\"name\":\"Taco Soup\",\"subIngredients\":false,\"cook\":{\"hours\":5,\"minutes\":0},\"ingredients\":[{\"name\":\"Onion, chopped\",\"amount\":\"1\"},{\"name\":\"Chili beans\",\"amount\":\"1 (16oz) can\"},{\"name\":\"Black beans\",\"amount\":\"1 (15oz) can\"},{\"name\":\"Corn, drained\",\"amount\":\"1 (15oz) can\"},{\"name\":\"Tomato sauce\",\"amount\":\"8oz\"},{\"name\":\"Chicken broth\",\"amount\":\"1 (12oz) can\"},{\"name\":\"Rotel\",\"amount\":\"2 cans\"},{\"name\":\"Taco seasoning\",\"amount\":\"1 package\"},{\"name\":\"Boneless chicken breasts, frozen\",\"amount\":\"3\"}],\"directions\":\"Dump all ingredients, except chicken, into crockpot. Lay chicken on top and push under broth. Cover, cook on low for 5 hours\"},{\"id\":116,\"category\":\"Crockpot\",\"name\":\"Teriyaki Chicken Thighs\",\"subIngredients\":false,\"cook\":{\"hours\":4,\"minutes\":15},\"ingredients\":[{\"name\":\"Boneless skinless chicken thighs\",\"amount\":\"12\"},{\"name\":\"Sugar\",\"amount\":\"3/4 cup\"},{\"name\":\"Soy sauce\",\"amount\":\"3/4 cup\"},{\"name\":\"Cider vinegar\",\"amount\":\"6 tbsp\"},{\"name\":\"Ground ginger\",\"amount\":\"3/4 tsp\"},{\"name\":\"Garlic, minced\",\"amount\":\"3/4 tsp\"},{\"name\":\"Pepper\",\"amount\":\"1/4 tsp\"},{\"name\":\"Cornstarch\",\"amount\":\"4 1/2 tsp\"},{\"name\":\"Hot cooked rice (optional)\",\"amount\":\"\"}],\"directions\":\"Place chicken in a 4 quart slow cooker. Combine the sugar, soy sauce, vinegar, ginger, garlic and pepper; pour over chicken. Cover and cook on low for 4-5 hours or until chicken is tender. Remove chicken to a serving platter; keep warm. Skim fat from cooking juices; transfer to a small saucepan. Bring liquid to a boil. Combine cornstarch and 4 1/2 tsp of water until smooth. Gradually stir into the pan. Bring to a boil; cook and stir for 2 minutes or until thickened. Serve with chicken and rice if desired\"},{\"id\":117,\"category\":\"Beef\",\"name\":\"Tex-Mex Meatball Pie\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":45},\"ingredients\":[{\"name\":\"Refrigerated pie crust\",\"amount\":\"1 (15oz) can\"},{\"name\":\"Frozen cooked meatballs, thawed\",\"amount\":\"18\"},{\"name\":\"Frozen corn\",\"amount\":\"1 cup\"},{\"name\":\"Salsa\",\"amount\":\"3/4 cup\"},{\"name\":\"Shredded cheddar\",\"amount\":\"3/4 cup\"},{\"name\":\"Lettuce\",\"amount\":\"1 cup\"},{\"name\":\"Sour cream\",\"amount\":\"1/4 cup\"}],\"subName\":\"\",\"sub\":[],\"directions\":\"Unroll pie crust on ungreased cookie sheet. Place meatballs on center of crust. In small bowl, mix corn and 1/2 cup of salsa. Spoon corn mixture over meatballs. Fold edge of crust over filling. Bake 35-40 minutes or until crust is deep golden brown. Sprinkle with cheese. Bake 3-5 minutes longer. Top with lettuce and sour cream. Drizzle with remaining salsa\"},{\"id\":118,\"category\":\"Other\",\"name\":\"Three Cheese Spaghetti Bake\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":35},\"ingredients\":[{\"name\":\"Spaghetti\",\"amount\":\"1 (16oz) package\"},{\"name\":\"Shredded mozzarella cheese\",\"amount\":\"2 cups\"},{\"name\":\"Grated parmesan cheese\",\"amount\":\"3/4 cup\"},{\"name\":\"Romano cheese\",\"amount\":\"1/2 cup\"},{\"name\":\"Eggs, beaten\",\"amount\":\"3\"},{\"name\":\"Olive oil\",\"amount\":\"1 tbsp\"},{\"name\":\"Garlic powder\",\"amount\":\"2 tsp\"},{\"name\":\"Spaghetti sauce\",\"amount\":\"1 (28oz) jar\"}],\"directions\":\"Cook spaghetti, drain. Add 1 cup mozzarella cheese, parmesan, romano, eggs, oil, and garlic powder. Press into a greased 13x9x2 baking dish. Top with spaghetti sauce. Cover and bake at 350 for 20 minutes. Uncover and sprinkle with remaining mozzarella. Bake 10 minutes longer\"},{\"id\":119,\"category\":\"Beef\",\"name\":\"Time to Spare Ribs\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":45},\"ingredients\":[{\"name\":\"Flour\",\"amount\":\"1/4 cup\"},{\"name\":\"Large cooking bag\",\"amount\":\"1\"},{\"name\":\"Barbeque sauce\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Onion, chopped\",\"amount\":\"1/2 cup\"},{\"name\":\"Green pepper, chopped\",\"amount\":\"1/2 cup\"},{\"name\":\"Spareribs\",\"amount\":\"3 1/2 lbs\"}],\"directions\":\"Shake flour in cooking bag. Add barbeque sauce, onion, and green pepper. Squeeze bag to blend ingredients. Cut ribs into serving size pieces, place in bag. Turn bag to coat ribs with sauce. Arrange ribs in even layer, close bag with nylon tie; make 6 1/2 inch slits in top. Place in 13x9 inch pan. Sauce may cause inside of bag to darken, this does not indicate burning. Cook 1 1/2 hours at 325\"},{\"id\":120,\"category\":\"Crockpot\",\"name\":\"Turkey Sausage and Red Bean Stew\",\"subIngredients\":false,\"cook\":{\"hours\":6,\"minutes\":0},\"ingredients\":[{\"name\":\"Turkey sausage (browned)\",\"amount\":\"1 lb\"},{\"name\":\"Cooked red beans OR small red beans\",\"amount\":\"2 cups OR 1 (15oz) can\"},{\"name\":\"Brown rice (uncooked)\",\"amount\":\"1/2 cup\"},{\"name\":\"Corn (frozen or canned)\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Tomato juice\",\"amount\":\"2 cups\"},{\"name\":\"Chopped sweet green pepper\",\"amount\":\"1/2 cup\"},{\"name\":\"Salt and pepper\",\"amount\":\"\"}],\"directions\":\"Combine all ingredients in slow cooker with 1 cup water. Cook on low setting for 6 hours\"},{\"id\":121,\"category\":\"Soup\",\"name\":\"Vegetable Beef Barley Soup\",\"subIngredients\":false,\"cook\":{\"hours\":9,\"minutes\":0},\"ingredients\":[{\"name\":\"Stew meat\",\"amount\":\"1 1/2 lbs\"},{\"name\":\"Chopped bell pepper\",\"amount\":\"1/2 cup\"},{\"name\":\"Green beans\",\"amount\":\"3/4 cup\"},{\"name\":\"Onion, chopped\",\"amount\":\"3/4 cup\"},{\"name\":\"Uncooked barley\",\"amount\":\"2/3 cup\"},{\"name\":\"Corn\",\"amount\":\"2/3 cup\"},{\"name\":\"Dried thyme leaves\",\"amount\":\"1/2 tsp\"},{\"name\":\"Ready to serve beef broth\",\"amount\":\"2 (14.5oz) cans\"},{\"name\":\"Diced tomato with garlic, undrained\",\"amount\":\"2 (14.5oz) cans\"},{\"name\":\"Tomato sauce\",\"amount\":\"1 (8oz) can\"}],\"directions\":\"Mix all ingredients with 1 1/2 cups of water. Cover and cook on low for 8-9 hours\"},{\"id\":122,\"category\":\"Crockpot\",\"name\":\"Vegetable Beef Stew\",\"subIngredients\":false,\"cook\":{\"hours\":10,\"minutes\":0},\"ingredients\":[{\"name\":\"Baby-cut carrots\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Medium potatoes, peeled and cut into 1-inch pieces\",\"amount\":\"2\"},{\"name\":\"Medium stalk celery, cut into 1-inch pieces\",\"amount\":\"1\"},{\"name\":\"Beef stew seasoning\",\"amount\":\"1 envelope\"},{\"name\":\"Beef stew meat\",\"amount\":\"1 lb\"},{\"name\":\"Frozen corn\",\"amount\":\"1 cup\"},{\"name\":\"Frozen green beans\",\"amount\":\"1 cup\"}],\"directions\":\"Layer carrots, potatoes, and celery in slow cooker. Place stew seasoning in plastic bag. Add beef; toss to coat. Add beef to cooker; sprinkle with any remaining seasoning. Pour in 1 cup of water. Layer corn and green beans on top. Cover and cook on low 8-10 hours or until beef is tender\"},{\"id\":123,\"category\":\"Soup\",\"name\":\"Vegetable Minestrone\",\"subIngredients\":false,\"cook\":{\"hours\":9,\"minutes\":15},\"ingredients\":[{\"name\":\"Medium yellow summer squash\",\"amount\":\"1\"},{\"name\":\"Medium carrots, cut into 1/4 inch slices (1 cup)\",\"amount\":\"2\"},{\"name\":\"Medium bell pepper, chopped (1 cup)\",\"amount\":\"1\"},{\"name\":\"Snap pea pods\",\"amount\":\"1 cup\"},{\"name\":\"Onion, chopped\",\"amount\":\"1/2 cup\"},{\"name\":\"Marinara sauce\",\"amount\":\"1 (25.5oz) jar\"},{\"name\":\"Kidney beans, rinsed and drained\",\"amount\":\"1 (15-16oz) can\"},{\"name\":\"Uncooked rotini pasta\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Sugar\",\"amount\":\"1 tsp\"},{\"name\":\"Salt\",\"amount\":\"1 tsp\"},{\"name\":\"Pepper\",\"amount\":\"1/4 tsp\"},{\"name\":\"Shredded parmesan cheese (optional)\",\"amount\":\"\"}],\"directions\":\"Mix squash, carrots, bell pepper, pea pods, onion, marinara sauce, beans, and 4 cups of water in 3 1/2 to 6 quart slow cooker. Cover and cook on low for 7-9 hours. Stir in pasta, sugar, salt, and pepper. Cover and cook on high heat setting 15-20 minutes or until pasta is tender. Sprinkle with cheese\"},{\"id\":124,\"category\":\"Crockpot\",\"name\":\"White Chicken Chili\",\"subIngredients\":false,\"cook\":{\"hours\":4,\"minutes\":0},\"ingredients\":[{\"name\":\"Olive oil\",\"amount\":\"3 tbsp\"},{\"name\":\"Medium onion, finely chopped\",\"amount\":\"1\"},{\"name\":\"Chopped green chiles, drained\",\"amount\":\"1 (4oz) can\"},{\"name\":\"All-purpose flour\",\"amount\":\"3 tbsp\"},{\"name\":\"Ground cumin\",\"amount\":\"2 tsp\"},{\"name\":\"Northern beans\",\"amount\":\"2 (16oz) cans\"},{\"name\":\"Chicken broth\",\"amount\":\"1 (14.5oz) can\"},{\"name\":\"Finely chopped cooked chicken breast\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Shredded Monterey Jack cheese (optional)\",\"amount\":\"\"},{\"name\":\"Sour cream (optional)\",\"amount\":\"\"},{\"name\":\"Salsa (optional)\",\"amount\":\"\"}],\"directions\":\"In large skillet, cook onion in oil for 4 minutes or until transparent. Add chiles, flour, and cumin; cook and stir for 2 minutes. Spray crockpot with cooking spray and put mixture into crockpot with cooking spray and put mixture into crockpot. Add beans, chicken broth, and chicken. Cook on low for 3-4 hours. Garnish with cheese, sour cream, and salsa if desired. Serve with tortilla chips or warm corn tortillas\"},{\"id\":126,\"category\":\"Appetizer\",\"name\":\"Taco Dip (Hot)\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":30},\"ingredients\":[{\"name\":\"Lipton onion soup mix\",\"amount\":\"1 envelope\"},{\"name\":\"Sour cream\",\"amount\":\"16oz\"},{\"name\":\"Cream cheese, softened\",\"amount\":\"8oz\"},{\"name\":\"Ground beef, cooked and drained\",\"amount\":\"1/4 lb\"},{\"name\":\"Cheddar or monterey jack cheese\",\"amount\":\"3/4 cup\"},{\"name\":\"Shredded lettuce\",\"amount\":\"\"},{\"name\":\"Chopped tomato\",\"amount\":\"\"},{\"name\":\"Tortilla chips\",\"amount\":\"\"}],\"directions\":\"In shallow 1 quart casserole dish, combine onion soup mix, sour cream, cream cheese, ground beef, and 1/2 cup shredded cheese. Sprinkle with remaining shredded cheese on top. Bake uncovered 30 minutes or until heated through. Top with lettuce and tomato. Serve with tortilla chips\"},{\"id\":127,\"category\":\"Appetizer\",\"name\":\"Taco Dip (Cold)\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":15},\"ingredients\":[{\"name\":\"Cream cheese\",\"amount\":\"8oz\"},{\"name\":\"Sour cream\",\"amount\":\"8oz\"},{\"name\":\"Milk salsa\",\"amount\":\"8oz\"},{\"name\":\"Medium salsa\",\"amount\":\"8oz\"},{\"name\":\"Tomato\",\"amount\":\"\"},{\"name\":\"Green pepper\",\"amount\":\"\"},{\"name\":\"Onion\",\"amount\":\"\"},{\"name\":\"Shredded cheddar\",\"amount\":\"8oz\"}],\"directions\":\"Mix together cream cheese and sour cream, set aside. Mix together salsa, set aside. Dice tomato, green pepper and onion, mix together. Spread cheese mix on bottom of casserole. Pour salsa on top, then the vegetables, sprinkle with cheese. Serve with tortilla chips\"},{\"id\":128,\"category\":\"Baked Goods\",\"name\":\"Apple Cake\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":30},\"ingredients\":[{\"name\":\"Flour\",\"amount\":\"3 cups\"},{\"name\":\"Sugar\",\"amount\":\"2 cups\"},{\"name\":\"Butter\",\"amount\":\"6 tbsp\"},{\"name\":\"Milk\",\"amount\":\"1 1/3 cup\"},{\"name\":\"Baking powder\",\"amount\":\"4 tsp\"},{\"name\":\"Vanilla\",\"amount\":\"2 tsp\"},{\"name\":\"Eggs\",\"amount\":\"2 eggs\"},{\"name\":\"Apples, peeled and sliced\",\"amount\":\"8\"}],\"directions\":\"Mix all ingredients, spread in 13x9 pan. Place apple slices into batter in lines. Sprinkle top with brown sugar\"},{\"id\":129,\"category\":\"Baked Goods\",\"name\":\"Apple Crisp\",\"subIngredients\":true,\"cook\":{\"hours\":1,\"minutes\":20},\"ingredients\":[{\"name\":\"Sliced apples\",\"amount\":\"4 cups\"}],\"subName\":\"Topping\",\"sub\":[{\"name\":\"Flour\",\"amount\":\"3/4 cup\"},{\"name\":\"Margarine\",\"amount\":\"1/3 cup\"},{\"name\":\"Sugar\",\"amount\":\"1 cup\"}],\"directions\":\"Place apples in dish, add 1/4 cup of water. Sprinkle with cinnamon. Mix together topping and place on top of apples. Bake at 350 for 40 minutes or when bubbly\"},{\"id\":130,\"category\":\"Baked Goods\",\"name\":\"Apple Pie\",\"subIngredients\":true,\"cook\":{\"hours\":1,\"minutes\":40},\"ingredients\":[{\"name\":\"Shortening\",\"amount\":\"1 cup\"},{\"name\":\"Flour\",\"amount\":\"2 cups\"}],\"subName\":\"Filling\",\"sub\":[{\"name\":\"Apples, peeled and cut\",\"amount\":\"8-9\"},{\"name\":\"Sugar\",\"amount\":\"1 cup\"},{\"name\":\"Cinnamon\",\"amount\":\"\"}],\"directions\":\"Cut together with 2 knives, roll out; if sticky, add flour. User water between crusts to hold together and add filling. Cut top. Pat pie with milk and sprinkle with sugar. Bake at 400 for 20 minutes then 375 for 1 hour and 10-15 minutes\"},{\"id\":131,\"category\":\"Baked Goods\",\"name\":\"Apple Streusel Cookie Tart\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":0},\"ingredients\":[{\"name\":\"Refrigerated sugar cookies\",\"amount\":\"1 (16.5oz) roll\"},{\"name\":\"Apples, peeled, cored, and very thinly sliced\",\"amount\":\"4\"},{\"name\":\"Granulated sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Apple pie spice\",\"amount\":\"1 1/2 tsp\"},{\"name\":\"All-purpose flour\",\"amount\":\"4 tbsp\"},{\"name\":\"Old-fashioned oats\",\"amount\":\"1/2 cup\"},{\"name\":\"Packed brown sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Butter, cut into pieces\",\"amount\":\"1/4 cup\"},{\"name\":\"Slivered almonds (optional)\",\"amount\":\"1/3 cup\"},{\"name\":\"Sweetened whipped cream (optional)\",\"amount\":\"\"}],\"directions\":\"Heat oven to 375 degrees. Spray 9-inch round springform pan with cooking spray. Press cookie dough in bottom and 2-inches up side of pan. In large bowl, mix apples, granulated sugar, apple pie spice, and 2 tablespoons of the flour. Toss to coat. Arrange mixture in crust. In small bowl, mix oats, brown sugar, and remaining 2 tablespoons flour. With pastry blender or fork, cut in butter until crumbly. Sprinkle over apples. Top with almonds. Bake 40-45 minutes or until crust is deep golden brown and filling is bubbly. Cool 20 minutes; remove side of pan. Cool 1 hour. Serve with whipped cream\"},{\"id\":132,\"category\":\"Baked Goods\",\"name\":\"Baklava\",\"subIngredients\":true,\"cook\":{\"hours\":0,\"minutes\":40},\"ingredients\":[{\"name\":\"Fillo\",\"amount\":\"\"},{\"name\":\"Sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Honey\",\"amount\":\"1/2 cup\"},{\"name\":\"Lemon juice\",\"amount\":\"1 tbsp\"},{\"name\":\"Cinnamon\",\"amount\":\"A dash\"}],\"subName\":\"Nut Mix\",\"sub\":[{\"name\":\"Finely chopped nuts\",\"amount\":\"2 cups\"},{\"name\":\"Sugar\",\"amount\":\"1/4 cup\"},{\"name\":\"Cinnamon\",\"amount\":\"1/2 tsp\"},{\"name\":\"Nutmeg\",\"amount\":\"A dash\"}],\"directions\":\"Mix the 1/2 cup sugar with 1/2 cup water until it spins a thread. Then add honey, lemon juice, and cinnamon; refrigerate. Place 9 layers of fillo on bottom of baking sheet, then some nut mix. Place 5 layers of fillo and then some nut mix 3 times. Brush each layer of fillo with butter. Finish final layer with fillo. Cut into diamonds then cook at 350 for 35 minutes\"},{\"id\":133,\"category\":\"Baked Goods\",\"name\":\"Blueberry Pie\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":20},\"ingredients\":[{\"name\":\"Sugar\",\"amount\":\"1 cup\"},{\"name\":\"Blueberries\",\"amount\":\"4 cups\"},{\"name\":\"Cinnamon\",\"amount\":\"\"},{\"name\":\"Cornstarch\",\"amount\":\"2 tbsp\"},{\"name\":\"Graham cracker pie crust\",\"amount\":\"\"}],\"directions\":\"Bring first 5 ingredients to a rolling boil. Add 3 cups of blueberries (and 1 cup of water if fresh not frozen blueberries). Place in pie crust. Refrigerate\"},{\"id\":134,\"category\":\"Baked Goods\",\"name\":\"Chocolate Truffles\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":20},\"ingredients\":[{\"name\":\"Chocolate chips\",\"amount\":\"1 package\"},{\"name\":\"Oreo cookies\",\"amount\":\"1 package\"},{\"name\":\"Cream cheese, softened\",\"amount\":\"1 bar\"}],\"directions\":\"Crush oreos. Mix with cream cheese. Roll into balls, then roll in melted chocolate chips\"},{\"id\":135,\"category\":\"Baked Goods\",\"name\":\"Christmas Rainbow Cake\",\"subIngredients\":false,\"cook\":{\"hours\":4,\"minutes\":15},\"ingredients\":[{\"name\":\"White cake mix\",\"amount\":\"1 package\"},{\"name\":\"Jellow Raspberry Flavor\",\"amount\":\"1 (3oz) package\"},{\"name\":\"Jello Lime Flavor\",\"amount\":\"1 (3oz) package\"},{\"name\":\"Cool whip\",\"amount\":\"1 (9oz) package\"}],\"directions\":\"Make cake in two 9-inch pans. Cool for 15 minutes. Poke cake with fork at 1/2-inch intervals (leave in pan). Dissolve each package of jello separately in 1 cup of boiling water. Pour raspberry over one layer and lime over the other. Chill 4 hours. Remove cake from pans, frost with cool whip\"},{\"id\":136,\"category\":\"Baked Goods\",\"name\":\"Mom's Cranberry Apple Pie\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":5},\"ingredients\":[{\"name\":\"Prepared pie crusts\",\"amount\":\"2\"},{\"name\":\"Peeled and sliced apples\",\"amount\":\"4 cups\"},{\"name\":\"Cranberries\",\"amount\":\"2 cups\"},{\"name\":\"White sugar\",\"amount\":\"3/4 cup\"},{\"name\":\"Cornstarch\",\"amount\":\"1 tbsp\"},{\"name\":\"Ground cinnamon\",\"amount\":\"1 tsp\"},{\"name\":\"Butter, cut into small pieces\",\"amount\":\"2 tbsp\"}],\"directions\":\"Preheat oven to 400 degrees. Fit a pie crust into a 9-inch pie dish and arrange sliced apples into crust. Spread cranberries over apples. Whisk sugar, cornstarch, and cinnamon in a small bowl and sprinkle mixture over cranberries. Dispute butter pieces over pie filling. Place remaining crust over filling, crimp both crusts together, and cut several slits into top crust to vent steam. Bake until pie is browned and fruit filling is bubbling; 45 minutes to 1 hour\"},{\"id\":137,\"category\":\"Baked Goods\",\"name\":\"French Silk Chocolate Pie\",\"subIngredients\":true,\"cook\":{\"hours\":2,\"minutes\":50},\"ingredients\":[{\"name\":\"Refrigerated pie crusts, softened as directed on box\",\"amount\":\"1 box\"},{\"name\":\"Unsweetened chocolate, cut into pieces\",\"amount\":\"3oz\"},{\"name\":\"Butter, softened (do not use margarine)\",\"amount\":\"1 cup\"},{\"name\":\"Sugar\",\"amount\":\"1 cup\"},{\"name\":\"Vanilla\",\"amount\":\"1/2 tsp\"},{\"name\":\"Eggs\",\"amount\":\"4\"}],\"subName\":\"Topping\",\"sub\":[{\"name\":\"Sweetened whipped cream\",\"amount\":\"1/2 cup\"},{\"name\":\"Chocolate curls (optional)\",\"amount\":\"\"}],\"directions\":\"Heat oven to 450 degrees. Make pie crust as directed on box, using 9-inch glass pie plate. Bake 9-11 minutes or until light golden brown. Cool completely, about 30 minutes. In 1-quart saucepan, melt chocolate over low heat; cool. In small bowl with electric mixer, beat butter on medium speed until fluffy. Gradually beat in sugar until light and fluffy. Beat in cooled chocolate and vanilla until well blended. Add eggs 1 at a time, beating on high speed 2 minutes after each addition; beat until mixture is smooth and fluffy. Pour into cooled baked shell. refrigerate at least 2 hours before serving. Garnish with whipped cream and chocolate curls. Cover and refrigerate any remaining pie\"},{\"id\":138,\"category\":\"Baked Goods\",\"name\":\"Frosted Apple Squares\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":50},\"ingredients\":[{\"name\":\"Flour\",\"amount\":\"2 1/2 cups\"},{\"name\":\"Sugar\",\"amount\":\"2 tbsp\"},{\"name\":\"Shortening\",\"amount\":\"1 cup\"},{\"name\":\"Egg\",\"amount\":\"1\"},{\"name\":\"Milk\",\"amount\":\"2/3 cup\"},{\"name\":\"Egg white, slightly beaten\",\"amount\":\"1\"},{\"name\":\"Cornflake crumbs\",\"amount\":\"2/3 cup\"},{\"name\":\"Sliced apples\",\"amount\":\"5 cups\"},{\"name\":\"Sugar\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Cinnamon\",\"amount\":\"1 1/2 tsp\"}],\"directions\":\"Mix all ingredients up to (and including) egg whites into bowl and shape into ball. Divide in half. Roll onto floured cloth 10x12 rectangle. Place on cookie sheet lined with foil. Sprinkle cornflakes, spread with apples, sugar, and cinnamon. Roll 2nd dough 10x12, place over filling and pinch edges firmly. Brush top with egg white (sprinkle with sugar and glaze after baking). Bake at 400 for 40 minutes. Cool slightly and cut into squares while warm\"},{\"id\":139,\"category\":\"Baked Goods\",\"name\":\"Frozen Peanut Butter Treats\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":45},\"ingredients\":[{\"name\":\"Creamy peanut butter\",\"amount\":\"1 (18oz) jar\"},{\"name\":\"Confectioners' sugar\",\"amount\":\"2 1/2 cups\"},{\"name\":\"Vanilla extract\",\"amount\":\"1 tsp\"},{\"name\":\"Semi-sweet chocolate, chopped\",\"amount\":\"8oz\"}],\"directions\":\"Using an electric mixer or whisk, beat the peanut butter and confectioners' sugar together until smooth and stiff. Beat in a vanilla extract. Shape the peanut butter mixture into 20 (1-inch) balls and place on a waxed paper-lined sheet tray. Place the tray in the freezer for 1 hour. Add chopped chocolate to a small bowl set over gently simmering water. Stir to melt. Remove chocolate from heat. With 2 forks, carefully dip the chilled peanut butter balls 1/2 way into the chocolate, let excess drip off, and lay onto the waxed paper-lined sheet tray. With a fork, swirl some decorative chocolate across the top of each bite. Place in a refrigerator for the chocolate to set and the peanut butter to solidify, about 30 minutes. If wanted, add crushed rice krispies\"},{\"id\":140,\"category\":\"Baked Goods\",\"name\":\"Fruit & Yogurt Layered Salad\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":30},\"ingredients\":[{\"name\":\"Low-fat strawberry yogurt\",\"amount\":\"16oz\"},{\"name\":\"Light cream cheese\",\"amount\":\"6oz\"},{\"name\":\"Sugar\",\"amount\":\"2 tbsp\"},{\"name\":\"Lemon juice\",\"amount\":\"4 tsp\"},{\"name\":\"Almond extract\",\"amount\":\"1/2 tsp\"},{\"name\":\"Light whipped topping\",\"amount\":\"6 cups\"},{\"name\":\"Mandarin oranges\",\"amount\":\"1 (15oz) can\"},{\"name\":\"Peaches\",\"amount\":\"1 (29oz) can\"},{\"name\":\"Pears\",\"amount\":\"1 (29oz) can\"},{\"name\":\"Seedless grapes\",\"amount\":\"\"},{\"name\":\"Large container strawberries\",\"amount\":\"\"},{\"name\":\"Blueberries\",\"amount\":\"\"}],\"directions\":\"In a large bowl, combine yogurt, cream cheese, sugar, lemon juice, and almond extract; beat until smooth. Add whipped topping; beat until thick and smooth. Layer yogurt then peaches and grapes. Yogurt then pears and strawberries. Yogurt then oranges and blueberries\"},{\"id\":141,\"category\":\"Baked Goods\",\"name\":\"Lemon Lush\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":0},\"ingredients\":[{\"name\":\"Flour\",\"amount\":\"1 cup\"},{\"name\":\"Butter\",\"amount\":\"1/2 cup\"},{\"name\":\"Chopped pecans\",\"amount\":\"1/2 cup\"},{\"name\":\"Cream cheese\",\"amount\":\"8oz\"},{\"name\":\"Powdered sugar\",\"amount\":\"1 cup\"},{\"name\":\"Whipped topping, divided\",\"amount\":\"1 (8oz) container\"},{\"name\":\"Lemond pudding mix\",\"amount\":\"1 (3oz) box\"},{\"name\":\"Sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Egg yolks\",\"amount\":\"2\"}],\"directions\":\"Mix flour, butter, and chopped pecans together like biscuit dough and press into 8x8 inch baking pan. Bake at 400 degrees for 20 minutes or until brown. Mix together cream cheese, powdered sugar and 1 cup whipped topping and spread over first layer while still warm. Stir lemon pudding mix, sugar, 1/4 cup water, and egg yolks together in a medium saucepan. Stir in 2 cups water. Stirring constantly, with wire whisk, cook on medium heat until mixture comes to a full boil (NOTE: if you are using instant pudding or a different flavor, use the ingredients & directions for preparation on the package). Cool 5 minutes, stirring twice. Cool about 30 minutes more and spread over two previous layers. Cool completely and top with remaining whipped topping. Chill\"},{\"id\":142,\"category\":\"Baked Goods\",\"name\":\"No Bake Chocolate Lasagna\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":40},\"ingredients\":[{\"name\":\"Oreo cookies\",\"amount\":\"36\"},{\"name\":\"Butter, melted\",\"amount\":\"6 tbsp\"},{\"name\":\"Cream cheese, softened\",\"amount\":\"1 (8oz) package\"},{\"name\":\"Granulated sugar\",\"amount\":\"1/4 cup\"},{\"name\":\"Cool whip, divided\",\"amount\":\"1 (12oz) container\"},{\"name\":\"Chocolate instant pudding\",\"amount\":\"2 (4oz) packages\"},{\"name\":\"Milk, cold\",\"amount\":\"3 3/8 cups\"},{\"name\":\"Mini chocolate chips\",\"amount\":\"1 1/2 cups\"}],\"directions\":\"Begin by crushing 36 oreo cookies; I used my food processor for this, but you could also place them in a large ziplock bag and crush them with a rolling pin; When the oroes have turned into fine crumbs, you are done. Transfer the oreo crumbs to a large bowl. Stir in 6 tablespoons melted butter and use a fork to incorporate the butter into the cookie crumbs. When the butter is distributed, transfer the mixture to a 9x13 inch baking dish. Press the crumbs into the bottom of the pan. Place the pan in the refrigerator while you work on the additional layers. Mix the cream cheese with a mixer until light and fluffy. Add in 2 tablespoons of milk and sugar, and mix well. Stir in 1 and 1/4 cups of cool whip. Spread this mixture over the crust. In a bowl, combine chocolate instand pudding with 3 and 1/4 cups cold milk. Whisk for several minutes until the pudding starts to thicken. Use a spatula to spread the mixture over the previous cream cheese layer. Allow the dessert to rest for about 5 minutes so that the pudding can firm up further. Spread the remaining cool whip over the top. Sprinkle mini chocolate chips, walnuts, almonds, whatever you choose evenly over teh top. Place in the freezer for 1 hour, or the refrigerator for 4 hours before serving\"},{\"id\":143,\"category\":\"Baked Goods\",\"name\":\"Peanut Butter Hot Fudge Cake\",\"subIngredients\":true,\"cook\":{\"hours\":2,\"minutes\":20},\"ingredients\":[{\"name\":\"Peanut butter\",\"amount\":\"1/2 cup\"},{\"name\":\"Milk\",\"amount\":\"1/2 cup\"},{\"name\":\"Melted butter\",\"amount\":\"2 tbsp\"},{\"name\":\"Vanilla\",\"amount\":\"1 tsp\"},{\"name\":\"All-purpose flour\",\"amount\":\"1 cup\"},{\"name\":\"Granulated sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Baking powder\",\"amount\":\"1 tsp\"},{\"name\":\"Salt\",\"amount\":\"1/2 tsp\"}],\"subName\":\"Chocolate Fudge Sauce\",\"sub\":[{\"name\":\"Sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"All-purpose baking cocoa\",\"amount\":\"1/4 cup\"}],\"directions\":\"In a small bowl or measuring cup, blend together peanut butter, milk, melted butter, and vanilla. I find placing teh whole thing in the microwave for 20 seconds or so makes the blending much easier. In a large bowl, place flour, sugar, baking powder, and salt. Whisk together well, then pour the peanut butter mixture over the top of the dry ingredients. Mix together to form a thick cake batter. Depending on your peanut butter, your batter may be thick like a quick bread, or thinner like a regular cake batter. If the batter is very thick, add another 2-3 tablespoons of milk to make it more pourable. Place the batter into a well greased 4-6 quart slow cooker. Now for the chocolate fudge sauce: combine all ingredients with 1 cup of boiling water and whisk together into a thin chocolate liquid. Pour this over the top of the peanut butter batter in the crock; DO NOT STIR TOGETHER. Cover the cooker and \\\"bake\\\" on high for 2-3 hours\"},{\"id\":144,\"category\":\"Baked Goods\",\"name\":\"Peanut Butter Pie\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":20},\"ingredients\":[{\"name\":\"Prepared chocolate cookie pie crust\",\"amount\":\"1\"},{\"name\":\"Creamy peanut butter\",\"amount\":\"1 cup\"},{\"name\":\"Sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Cream cheese (at room temperature)\",\"amount\":\"8oz\"},{\"name\":\"Non-dairy whipped topping, divided\",\"amount\":\"12oz\"},{\"name\":\"Hot fudge topping (optional)\",\"amount\":\"1 (11.75oz) jar\"}],\"directions\":\"Combine in medium bowl, peanut butter, cream cheese, and sugar. Gently fold in 3 cups whipped topping. Spoon mixture into pie shell. Place hot fudge topping in microwave for 1 minute; stir. Spread hot fudge over pie to cover peanut butter layer; refrigerate until serving time. Just before serving, spread whipped topping over hot fudge layer\"},{\"id\":145,\"category\":\"Baked Goods\",\"name\":\"Whoopie Pie\",\"subIngredients\":true,\"cook\":{\"hours\":0,\"minutes\":15},\"ingredients\":[{\"name\":\"Shortening\",\"amount\":\"1/2 cup\"},{\"name\":\"Sugar\",\"amount\":\"1 egg\"},{\"name\":\"Egg\",\"amount\":\"1\"},{\"name\":\"Milk\",\"amount\":\"1 cup\"},{\"name\":\"Vanilla\",\"amount\":\"1 tsp\"},{\"name\":\"Flour\",\"amount\":\"2 cups\"},{\"name\":\"Cocoa powder\",\"amount\":\"1/2 cup\"},{\"name\":\"Baking powder\",\"amount\":\"1/2 tsp\"},{\"name\":\"Baking soda\",\"amount\":\"1 1/2 tsp\"}],\"subName\":\"Filling\",\"sub\":[{\"name\":\"Shortening\",\"amount\":\"1/2 cup\"},{\"name\":\"Confectionary sugar\",\"amount\":\"2 cups\"},{\"name\":\"Fluff\",\"amount\":\"1 cup\"},{\"name\":\"Vanilla\",\"amount\":\"1/2 tsp\"},{\"name\":\"Milk\",\"amount\":\"A few drops\"}],\"directions\":\"Mix all ingredients together. Drop one tsp full of mix on greased cookie sheet. Bake at 425 degrees for 7 minutes\"},{\"id\":146,\"category\":\"Breakfast\",\"name\":\"Apple Cinnamon Loaf\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":5},\"ingredients\":[{\"name\":\"Brown sugar (not packed)\",\"amount\":\"1/3 cup\"},{\"name\":\"Ground cinnamon\",\"amount\":\"1 tsp\"},{\"name\":\"White sugar\",\"amount\":\"2/3 cup\"},{\"name\":\"Butter, softened\",\"amount\":\"1/2 cup\"},{\"name\":\"Eggs\",\"amount\":\"2\"},{\"name\":\"Vanilla extract\",\"amount\":\"1 1/2 tsp\"},{\"name\":\"All-purpose flour\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Baking powder\",\"amount\":\"1 3/4 tsp\"},{\"name\":\"Milk\",\"amount\":\"1/2 cup\"},{\"name\":\"Apple, peeled and chopped\",\"amount\":\"1\"}],\"directions\":\"Preheat oven to 350 degrees. Grease and flour a 9x5 inch loaf pan. Mix brown sugar and cinnamon together in a bowl and set aside. Beat white sugar and butter together in a bowl using an electric mixer until smooth and creamy. Beat in eggs, 1 at a time, until incorporated; add vanilla extract. Combine flour and baking powder together in another bowl; stir into creamed butter mixture. Mix milk into batter until smooth. Pour half the batter into the prepared loaf pan. Next add half the apples and half the brown sugar cinnamon mixture. Lightly pat apple mixture into batter. Pour hte remaining batter over apple layer; top with remaining apples and add more brown sugar/cinnamon mixture. Lightly pat apples into batter; swirl brown sugar mixture through apples using a finger or spoon. Bake in the preheated oven until a toothpick inserted in the center of the loaf comes out clean, 30-40 minutes\"},{\"id\":147,\"category\":\"Breakfast\",\"name\":\"Banana Bread Crunch Cake\",\"subIngredients\":true,\"cook\":{\"hours\":1,\"minutes\":15},\"ingredients\":[{\"name\":\"All-purpose flour\",\"amount\":\"1 cup\"},{\"name\":\"Granulated sugar\",\"amount\":\"1 cup\"},{\"name\":\"Baking powder\",\"amount\":\"1 tsp\"},{\"name\":\"Ground cinnamon\",\"amount\":\"1/2 tsp\"},{\"name\":\"Salt\",\"amount\":\"1/4 tsp\"},{\"name\":\"Butter, melted\",\"amount\":\"1/2 cup\"},{\"name\":\"Milk\",\"amount\":\"1/2 cup\"},{\"name\":\"Egg\",\"amount\":\"1\"},{\"name\":\"Vanilla\",\"amount\":\"1 tsp\"},{\"name\":\"Medium bananas\",\"amount\":\"2\"}],\"subName\":\"Cobbler Crunch Topping\",\"sub\":[{\"name\":\"All-purpose flour\",\"amount\":\"1/2 cup\"},{\"name\":\"Packed brown sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Quick-cooking or old-fashioned oats\",\"amount\":\"1 cup\"},{\"name\":\"Salt\",\"amount\":\"1/8 tsp\"},{\"name\":\"Butter, melted\",\"amount\":\"1/2 cup\"},{\"name\":\"Cinnamon Toast Crunch cereal\",\"amount\":\"1 cup\"},{\"name\":\"Chopped pecans\",\"amount\":\"1/2 cup\"}],\"directions\":\"Heat oven to 375 degrees. Spray 9-inch square pan with cooking spray. In large bowl, mix 1 cup flour, the granulated sugar, baking powder, cinnamon, and 1/4 teaspoon salt. Add 1/2 cup melted butter, the milk, egg, and vanilla; mix well. Mash 1 banana (about 1/2 cup), and add to batter; mix well. Pour into pan. Cut remaining banana into 1/4-inch slices; place in single layer over batter. In medium bowl, mix 1/2 cup flour, the brown sugar, oats, and 1/8 teaspoon salt. Stir in 1/2 cup melted butter. Add cereal and pexans; mix well. Sprinkle topping over banana slices. Bake 30 minutes. Remove from oven, loosely cover with foil. Bake 10-15 minutes longer or until toothpick inserted in center comes out clean. Place on cooling rack; cool 15 minutes before serving. Serve with vanilla ice cream if desired\"},{\"id\":148,\"category\":\"Breakfast\",\"name\":\"Blueberry Muffins\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":40},\"ingredients\":[{\"name\":\"Margarine\",\"amount\":\"1/2 cup\"},{\"name\":\"Sugar\",\"amount\":\"1 1/4 cup\"},{\"name\":\"Milk\",\"amount\":\"1/2 cup\"},{\"name\":\"Flour\",\"amount\":\"2 cups\"},{\"name\":\"Eggs\",\"amount\":\"2\"},{\"name\":\"Baking powder\",\"amount\":\"2 tsp\"},{\"name\":\"Frozen blueberries\",\"amount\":\"2 1/2 cups\"}],\"directions\":\"Cream butter and sugar until fluffy. Add eggs one at a time. Mix well and add dry ingredients with milk. Mash and stir 1/2 cup of blueberries. Add to mix with remaining berries by hand. Grease muffin tins or use paper cups and bake. Sprinkle sugar on top of muffins before baking. Bake at 375 degrees for 25-30 minutes\"},{\"id\":149,\"category\":\"Breakfast\",\"name\":\"Cinnamon Rolls\",\"subIngredients\":true,\"cook\":{\"hours\":3,\"minutes\":30},\"ingredients\":[{\"name\":\"All-purpose flour\",\"amount\":\"5 1/4 cups\"},{\"name\":\"Active dry yeast\",\"amount\":\"2 1/4 tsp\"},{\"name\":\"Milk\",\"amount\":\"1 cup\"},{\"name\":\"Butter\",\"amount\":\"2/3 cup\"},{\"name\":\"Granulated sugar\",\"amount\":\"1/3 cup\"},{\"name\":\"Salt\",\"amount\":\"1/2 tsp\"},{\"name\":\"Eggs\",\"amount\":\"3\"},{\"name\":\"Packed brown sugar\",\"amount\":\"3/4 cup\"},{\"name\":\"Ground cinnamon\",\"amount\":\"1 tbsp\"},{\"name\":\"Golden raisins (optional)\",\"amount\":\"1/2 cup\"},{\"name\":\"Chopped pecans (optional)\",\"amount\":\"1/2 cup\"},{\"name\":\"Half and half or light cream\",\"amount\":\"1 tbsp\"}],\"subName\":\"Vanilla Glaze\",\"sub\":[{\"name\":\"Sifted powdered sugar\",\"amount\":\"1 1/4 cups\"},{\"name\":\"Light-colored corn syrup\",\"amount\":\"1 tsp\"},{\"name\":\"Vanilla\",\"amount\":\"1/2 tsp\"},{\"name\":\"Light cream\",\"amount\":\"1-2 tbsp\"}],\"directions\":\"In a large mixing bowl, combine 2 1/4 cups flour and the yeast. In a saucepan, heat and stir milk, butter, sugar, and salt until just warm. Add to flour mixture, along with the eggs. Beat on low speed for 30 seconds, scraping the bowl. Beat on high 3 minutes. Stir in at least two more cups of flour, adding more until the dough is stiff. Turn the dough out onto a lightly floured surface. Knead in enough of the remaining flour to make a moderately soft dough that is smooth and elastic (3-5 minutes total). Shape dough into a ball. Place in a greased bowl, turn once; cover. Let rise in a warm place until doubled in size, about 1 hour. Punch dough down. Turn out onto lightly floured surface. Divide in half; cover. Let sit for 10 minutes. Meanwhile, lightly grease two 9-by-1 1/2 inch round baking pans. For filling, stir together brown sugar, 1/4 cup flour and cinnamon. Cut in 1/3 cup butter until the mixture resembles coarse crumbs. Roll each half of dough into a 12x8-inch rectangle. Sprinkle filling over dough rectangles. Scatter with raisins and pecans, if using. Roll up each rectangle starting from a long side. Seal seams. Slice each roll into 12 pieces. Place cut sides down in prepared pans. Cover dough loosely with plastic wrap, leaving room for the rolls to rise. Chill for 2-24 hours; uncover. Let stand at room temperature 30 minutes; This will produce the best flavor. However, if you want to bake the rolls right away (an really, who wants to wait 24 hours for delicious cinnamon rolls?) don't chill the dough. Instead, cover loosely, let dough rise in a warm place until nearly double, about 30 minutes. When ready to bake, brush dough with half-and-half. Bake at 375 degrees, 20-25 minutes or until light brown. While the rolls are baking, prepare the glaze. In a small bowl, stir together the powdered sugar, corn syrup, and vanilla. Add enough half-and-half to reach drizzling consistency. When the rolls are done, remove from oven and set on a wire rack for 1 minute. Drizzle with vanilla glaze. Serve warm (with good, strong coffee)\"},{\"id\":150,\"category\":\"Breakfast\",\"name\":\"Cinnamon Sugar Pull Apart Loaf\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":45},\"ingredients\":[{\"name\":\"Sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Cinnamon\",\"amount\":\"2 1/2 tsp\"},{\"name\":\"Margarine or butter, melted\",\"amount\":\"1/3 cup\"},{\"name\":\"Refrigerated buttermilk biscuits\",\"amount\":\"1 (12oz) can\"}],\"directions\":\"Heat oven to 400 degrees. Generously grease 8x4-inch loaf pan. In small shallow bowl, combine sugar and cinnamon; mix well. Separate dough into 10 biscuits; cut each into quarters. Dip each quarter into melted margarine; roll in sugar-cinnamon mixture. Arrange in greased loaf pan. Bake at 400 degrees for 19-27 minutes. Cool 2 minutes. Loosen edges; remove from pan. Place on serving plate, serve warm\"},{\"id\":151,\"category\":\"Breakfast\",\"name\":\"French Toast Casserole\",\"subIngredients\":false,\"cook\":{\"hours\":9,\"minutes\":20},\"ingredients\":[{\"name\":\"French bread cut into 1-inch cubes\",\"amount\":\"1 loaf (10 cups)\"},{\"name\":\"Eggs\",\"amount\":\"8\"},{\"name\":\"Milk\",\"amount\":\"3 cups\"},{\"name\":\"Sugar\",\"amount\":\"4 tsp\"},{\"name\":\"Vanilla\",\"amount\":\"1 tsp\"},{\"name\":\"Margarine, cubed\",\"amount\":\"2 tbsp\"},{\"name\":\"Sugar\",\"amount\":\"4 1/3 tbsp\"},{\"name\":\"Cinnamon\",\"amount\":\"2 tsp\"}],\"directions\":\"Place bread cubes in greased 13x9x2 baking dish. In mixing bowl, beat eggs, milk, sugar, and vanilla. Pour over bread. Cover and refrigerate 8 hours or overnight. Remove from refrigerator 30 minutes before baking. Dot with butter. Combine sugar and cinnamon, sprinkle over top. Cover and bake at 350 degrees for 45-50 minutes or until knife inserted comes out clean. Let stand for 5 minutes\"},{\"id\":152,\"category\":\"Breakfast\",\"name\":\"Lemon Bread\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":10},\"ingredients\":[{\"name\":\"Butter\",\"amount\":\"1/2 cup\"},{\"name\":\"Eggs\",\"amount\":\"2\"},{\"name\":\"Flour\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Sugar\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Milk\",\"amount\":\"1/2 cup\"},{\"name\":\"Baking powder\",\"amount\":\"1 tsp\"},{\"name\":\"Lemon, grate rind\",\"amount\":\"1\"}],\"directions\":\"Add 1/2 cup sugar to squeezed lemon juice. Cream together butter and sugar. Add eggs; Beat. Add lemon rind and remaining ingredients except lemon juice. Pour juice and sugar over hot bread. Bake at 350 degrees for 1 hour\"},{\"id\":153,\"category\":\"Breakfast\",\"name\":\"Monkey Bread Minis\",\"subIngredients\":true,\"cook\":{\"hours\":0,\"minutes\":30},\"ingredients\":[{\"name\":\"Margarine, melted\",\"amount\":\"1/2 cup\"},{\"name\":\"Brown sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Granulated sugar\",\"amount\":\"1/4 cup\"},{\"name\":\"Cinnamon\",\"amount\":\"2 tsp\"},{\"name\":\"Refrigerated biscuits\",\"amount\":\"2 (7.5oz) cans\"}],\"subName\":\"Dipping Sauce\",\"sub\":[{\"name\":\"Confectionary sugar\",\"amount\":\"\"}],\"directions\":\"Grease or spray 12 regular size muffin cups. Mix butter and brown sugar; spoon 1 tablespoon mixture into each muffin cup. Mix granulated sugar and cinnamon in 1 gallon bag. Separate dough into 20 biscuits; cut in 6 pieces. Shake pieces in bag to coat. Place 10 pieces in each muffin cup. Bake at 350 for 12-15 minutes or until golden brown. Cool 1 minute, turn upside down. Serve warm. For dipping sauce, mix sugar with water and stir to desired consistency\"},{\"id\":154,\"category\":\"Breakfast\",\"name\":\"Oatmeal\",\"subIngredients\":false,\"cook\":{\"hours\":9,\"minutes\":0},\"ingredients\":[{\"name\":\"Apples, sliced\",\"amount\":\"2\"},{\"name\":\"Brown sugar\",\"amount\":\"1/4 cup\"},{\"name\":\"Cinnamon\",\"amount\":\"1 tsp\"},{\"name\":\"Salt\",\"amount\":\"A pinch\"},{\"name\":\"Oatmeal\",\"amount\":\"2 cups\"},{\"name\":\"Milk\",\"amount\":\"2 cups\"}],\"directions\":\"Place apples, brown sugar, cinnamon, and salt in the bottom of the crockpot. Pour in oatmeal, milk, and 2 cups of water; Do NOT stir. Cook overnight for 8-9 hours on low\"},{\"id\":155,\"category\":\"Breakfast\",\"name\":\"Overnight Breakfast Bake\",\"subIngredients\":false,\"cook\":{\"hours\":9,\"minutes\":10},\"ingredients\":[{\"name\":\"Refrigerated cinnamon rolls with cream cheese icing\",\"amount\":\"2 (12.4oz) cans\"},{\"name\":\"Cream cheese\",\"amount\":\"1 (8oz) package\"},{\"name\":\"Eggs\",\"amount\":\"6\"},{\"name\":\"Sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Ground cinnamon\",\"amount\":\"2 tbsp\"},{\"name\":\"Half and half\",\"amount\":\"2 1/4 cups\"},{\"name\":\"Vanilla\",\"amount\":\"1 tsp\"}],\"directions\":\"Heat oven to 375 degrees. Grease 13x9-inch glass baking dish with shortening, or spray with cooking spray. Separate dough from both cans into 16 rolls; return icing to refrigerator. Arrange rolls as evenly as possible in baking dish. Bake 13-17 minutes or until golden brown on top. Remove from oven to cooling rack; cool completely (about 30 minutes). When rolls are cool, cut each into 9 pieces, cutting lengthwise into 3 pieces then cutting each piece into thirds. Remove half of pieces from baking dish. Distribute remaining half of pieces evenly in bottom of baking dish. Cut block of cream cheese into 8 rows by 5 rows to make 40 small squares. Evenly distribute cream cheese squares over roll pieces in baking dish. Layer second half of roll pieces evenly over cream cheese; set aside. In large bowl, beat eggs, sugar, cinnamon, half and half, and vanilla with whisk until well combined. Pour egg mixture evenly over top of casserole. With back of spoon, press mixture down so rolls pieces absorb as much of egg mixture as possible. Cover dish with foil; refrigerate overnight, 6-8 hours. Heat oven to 350 degrees. Uncover baking dish; bake 35-45 minutes or until browned and set. Place small scoops of icing over warm casserole; let stand until melted. With knife or metal spatula, carefully spread icing over top of casserole. Serve warm\"},{\"id\":156,\"category\":\"Breakfast\",\"name\":\"Overnight Cinnamon Roll French Toast Bake\",\"subIngredients\":false,\"cook\":{\"hours\":8,\"minutes\":50},\"ingredients\":[{\"name\":\"Refrigerated cinnamon rolls with icing\",\"amount\":\"1 (12.4oz) can\"},{\"name\":\"Eggs\",\"amount\":\"4\"},{\"name\":\"Half and half\",\"amount\":\"3/4 cups\"},{\"name\":\"Light or dark corn syrup\",\"amount\":\"1/4 cup\"},{\"name\":\"Vanilla\",\"amount\":\"2 tsp\"},{\"name\":\"Butter\",\"amount\":\"4 tbsp\"}],\"directions\":\"Bake and ice cinnamon rolls as directed on can. Meanwhile, spray 8-inch square (2 quart) glass baking dish with cooking spray. In medium bowl, beat eggs, half and half, corn syrup, and vanilla. With serrated knife, cut each baked cinnamon roll from top to bottom into 3 pieces, each with some icing. Arrange roll pieces in baking dish at a slight angle to fill dish and centers of rolls are exposed slightly. Pour egg mixture over rolls. Cover dish tightly with plastic wrap. Refrigerate at elast 8 hours or overnight. To serve, heat oven to 400 degrees. Uncover baking dish; bake 20-25 minutes or until bubbly and golden brown. If toast puffs up too high during baking, pierce with sharp knife so toast falls. Cool 2-4 minutes before serving. Top each serving with small pat of butter\"},{\"id\":157,\"category\":\"Breakfast\",\"name\":\"Sour Cream Coffee Cake\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":20},\"ingredients\":[{\"name\":\"Yellow cake mix\",\"amount\":\"1 package\"},{\"name\":\"Instant vanilla pudding\",\"amount\":\"1 package\"},{\"name\":\"Eggs\",\"amount\":\"4\"},{\"name\":\"Oil\",\"amount\":\"1/2 cup\"},{\"name\":\"Sour cream\",\"amount\":\"8oz\"},{\"name\":\"cinnamon and sugar mixed together\",\"amount\":\"\"},{\"name\":\"Nuts (optional)\",\"amount\":\"\"}],\"directions\":\"Mix all ingredients. Pour 1/2 of the batter in a tube pan, sprinkle with cinnamon and sugar. Pour in rest of batter, sprinkle with cinnamon and sugar. Put nuts on top\"},{\"id\":158,\"category\":\"Desserts\",\"name\":\"Chocolate Chex Mix\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":48},\"ingredients\":[{\"name\":\"Crispy corn cereal squares\",\"amount\":\"2 cups\"},{\"name\":\"Small pretzels\",\"amount\":\"2 cups\"},{\"name\":\"Dry roasted peanuts\",\"amount\":\"1 cup\"},{\"name\":\"Caramels, unwrapped and coarsely chopped\",\"amount\":\"20\"},{\"name\":\"Milk chocolate morsels\",\"amount\":\"1 (11.5oz) package\"}],\"directions\":\"Coat 13x9 baking pan with cooking spray. Combine cereal, pretzels, peanuts, and caramels in large bowl. Microwave morsels on medium high for 1 minute, stir and continue to microwave in 20 second intervals until melted. Pour over cereal mixture and stir to coat. Spread mixture onto baking pan and cool for 45 minutes or longer to dry. Break into bize size pieces\"},{\"id\":159,\"category\":\"Desserts\",\"name\":\"Creamy Double Decker Fudge\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":30},\"ingredients\":[{\"name\":\"Peanut butter chips\",\"amount\":\"1 cup\"},{\"name\":\"Sweetened condensed milk\",\"amount\":\"14oz\"},{\"name\":\"Vanilla\",\"amount\":\"1 tsp\"},{\"name\":\"Semi-sweet chocolate chips\",\"amount\":\"1 cup\"}],\"directions\":\"Line 8\\\" square pan with foil. In small bowl, combine peanut butter chips and 2/3 cup condensed milk. Microwave 1 - 1 1/2 minutes, stirring after 1 minute, until chips are melted and mixture is smooth when stirred. Stir in 1/2 tsp vanilla, spread evenly into prepared pan. Microwave remaining condensed milk and chocolate chips; repeat above procedure. Stir in 1/2 tsp vanilla, spread evenly on peanut butter layer. Cover and chill until firm. Cut into 1 inch squares. Cover and store in refrigerator\"},{\"id\":160,\"category\":\"Desserts\",\"name\":\"Foolproof Chocolate Fudge\",\"subIngredients\":false,\"cook\":{\"hours\":2,\"minutes\":30},\"ingredients\":[{\"name\":\"Semi-sweet morsels\",\"amount\":\"3 (6oz) packages\"},{\"name\":\"Sweetened condensed milk\",\"amount\":\"1 (14oz) can\"},{\"name\":\"Vanilla\",\"amount\":\"1 1/2 tsp\"}],\"directions\":\"Over low heat, melt chocolate with condensed milk. Stir in remaining ingredients. Spread evenly into waxed paper lined 8\\\" pan. Chill 2-3 hours. Cut into squares\"},{\"id\":161,\"category\":\"Desserts\",\"name\":\"Peanut Butter Candy Square\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":25},\"ingredients\":[{\"name\":\"Chocolate chips\",\"amount\":\"1 package\"},{\"name\":\"Peanut butter\",\"amount\":\"1 cup\"},{\"name\":\"Graham crackers, crushed\",\"amount\":\"1 cup\"},{\"name\":\"Butter\",\"amount\":\"1 cup\"},{\"name\":\"Confectionary sugar\",\"amount\":\"1 box\"}],\"directions\":\"Mix all ingredients together except the chocolate chips. Spread in pan and cover with melted chocolate chips. Refrigerate 25 minutes\"},{\"id\":162,\"category\":\"Desserts\",\"name\":\"White Chocolate Party Mix\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":10},\"ingredients\":[{\"name\":\"Mini pretzels\",\"amount\":\"1 (10oz) package\"},{\"name\":\"Cheerios\",\"amount\":\"5 cups\"},{\"name\":\"Corn Chex\",\"amount\":\"5 cups\"},{\"name\":\"Salted peanuts\",\"amount\":\"2 cups\"},{\"name\":\"M&M's\",\"amount\":\"1 lb bag\"},{\"name\":\"White chips\",\"amount\":\"2 (12oz) packages\"},{\"name\":\"Vegetable oil\",\"amount\":\"3 tbsp\"}],\"directions\":\"In a large bowl, combine first five ingredients. In a microwave safe bowl heat chips and oil on medium-high for 2 minutes, stirring once. Microwave on high for a few more seconds. Stir until smooth. Pour over cereal mixture and mix well. Spread onto three waxed paper-lined baking sheets. Let cool. Break apart and store in airtight container\"},{\"id\":163,\"category\":\"Desserts\",\"name\":\"Buckeye Brownie Desserts\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":42},\"ingredients\":[{\"name\":\"Brownie mix\",\"amount\":\"1 (18-19oz) box\"},{\"name\":\"Butter, melted\",\"amount\":\"1/4 cup\"},{\"name\":\"Cream cheese, room temperature\",\"amount\":\"1/2 cup\"},{\"name\":\"Egg\",\"amount\":\"1\"},{\"name\":\"Peanut butter\",\"amount\":\"3/4 cup\"},{\"name\":\"Powdered sugar\",\"amount\":\"3/4 cup\"},{\"name\":\"Chocolate frosting\",\"amount\":\"3/4 cup\"}],\"directions\":\"Preheat oven to 350 degrees. Line baking sheet with parchment paper. In a medium bowl, combine brownie mix, butter, cream cheese, and egg. Stir until dough comes together, it will be very thick and sticky (I used my hands). Form rounded tablespoons sized portions of dough into balls, placing on baking sheet about 2 inches apart, making an indentation with your thumb in the center of each. In another bowl, stir together peanut butter and powdered sugar. Form peanut butter into teaspoon sized balls and press into the indentations in the brownie cookies. Press peanut butter down slightly because the peanut butter won't spread and you don't want the cookies to be too tall. Bake for 10-12 minutes until edges are set. Transfer to wire rack to cool. When cooled, top each cookie with about a tablespoon of chocolate frosting\"},{\"id\":164,\"category\":\"Desserts\",\"name\":\"Candy Cane Desserts\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":15},\"ingredients\":[{\"name\":\"Shortening\",\"amount\":\"1/2 cup\"},{\"name\":\"Margarine\",\"amount\":\"1/2 cup\"},{\"name\":\"Egg\",\"amount\":\"1\"},{\"name\":\"Vanilla\",\"amount\":\"2 tsp\"},{\"name\":\"Flour\",\"amount\":\"2 1/2 cups\"},{\"name\":\"Red food coloring\",\"amount\":\"1 tsp\"}],\"directions\":\"Mix all ingredients except food coloring. Divide batter. Mix red food coloring in ½ of the batter. Roll dough into two long tubes. Twist and shape to look like candy canes. Sprinkle with sugar. Bake at 375 degrees for 9-12 minutes\"},{\"id\":165,\"category\":\"Desserts\",\"name\":\"Chocolate Crispies\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":15},\"ingredients\":[{\"name\":\"Flour\",\"amount\":\"1 cup\"},{\"name\":\"Baking powder\",\"amount\":\"1/2 tsp\"},{\"name\":\"Baking soda\",\"amount\":\"1/2 tsp\"},{\"name\":\"Margarine (softened)\",\"amount\":\"1/2 cup\"},{\"name\":\"Brown sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Egg\",\"amount\":\"1\"},{\"name\":\"Unsweetened baking chocolate\",\"amount\":\"2 (2oz) envelopes\"},{\"name\":\"Quick oats, uncooked\",\"amount\":\"1/2 cup\"},{\"name\":\"Shredded coconut\",\"amount\":\"1/2 cup\"}],\"directions\":\"In a large bowl, combine margarine, brown sugar, sugar, and egg. Beat until creamy. Blend in baking chocolate. Add remaining ingredients. Drop rounded tablespoon onto greased cookie sheet. Bake at 350 degrees for 10-12 minutes\"},{\"id\":166,\"category\":\"Desserts\",\"name\":\"Chocolate Drops\",\"subIngredients\":false,\"cook\":{\"hours\":4,\"minutes\":15},\"ingredients\":[{\"name\":\"Butter\",\"amount\":\"1/2 cup\"},{\"name\":\"Unsweetened chocolate\",\"amount\":\"4 squares\"},{\"name\":\"Sugar\",\"amount\":\"2 cups\"},{\"name\":\"Vanilla\",\"amount\":\"2 tsp\"},{\"name\":\"Eggs\",\"amount\":\"4\"},{\"name\":\"Flour\",\"amount\":\"2 cups\"},{\"name\":\"Baking powder\",\"amount\":\"2 tsp\"},{\"name\":\"Confectionary sugar\",\"amount\":\"\"}],\"directions\":\"Melt chocolate and butter. Add sugar and vanilla. Add eggs and beat. Add remaining ingredients except confectionary sugar. Chill several hours. Form small balls and roll in confectionary sugar. Place on greased cookie sheet. Cook at 350 degrees for 12 minutes\"},{\"id\":167,\"category\":\"Desserts\",\"name\":\"Chocolate Mint Cookies\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":25},\"ingredients\":[{\"name\":\"Margarine\",\"amount\":\"3/4 cup\"},{\"name\":\"Firmly packed brown sugar\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Semi-sweet chocolate chips\",\"amount\":\"2 cups\"},{\"name\":\"Eggs\",\"amount\":\"2\"},{\"name\":\"Flour\",\"amount\":\"2 1/2 cups\"},{\"name\":\"Baking soda\",\"amount\":\"1 1/4 tsp\"},{\"name\":\"Andes candies\",\"amount\":\"1 lb\"},{\"name\":\"Sprinkles\",\"amount\":\"\"}],\"directions\":\"In large saucepan over low heat, cook margarine, sugar, and 2 tablespoons of water until butter is melted. Add chocolate chips and stir until partially melted. Remove from heat and continue to stir until chocolate is completely melted. Pour into a large bowl and let stand for 10 minutes to cool slightly. Beat in one egg at a time, slowly add dry ingredients. Chill dough at least one hour for easier handling. Line cookie sheets with foil. Bake 12-13 minutes at 350 degrees. Remove from oven and immediately place mint on hot cookie\"},{\"id\":168,\"category\":\"Desserts\",\"name\":\"Cream Cheese Chocolate Chip Cookies\",\"subIngredients\":false,\"cook\":{\"hours\":2,\"minutes\":20},\"ingredients\":[{\"name\":\"Unsalted butter, softened\",\"amount\":\"1/2 cup (1 stick)\"},{\"name\":\"Cream cheese, softened\",\"amount\":\"1/4 cup\"},{\"name\":\"Light brown sugar, packed\",\"amount\":\"3/4 cup\"},{\"name\":\"Granulated sugar\",\"amount\":\"1/4 cup\"},{\"name\":\"Egg\",\"amount\":\"1\"},{\"name\":\"Vanilla extract\",\"amount\":\"2 tsp\"},{\"name\":\"All-purpose flour\",\"amount\":\"2 1/4 cups\"},{\"name\":\"Cornstarch\",\"amount\":\"2 tsp\"},{\"name\":\"Baking soda\",\"amount\":\"1 tsp\"},{\"name\":\"Salt (optional)\",\"amount\":\"A pinch\"},{\"name\":\"Chocolate chips or chunks\",\"amount\":\"1 package\"}],\"directions\":\"Using a mixmaster, combine the butter, cream cheese, sugars, egg, vanilla, and beat on medium-high speed until well-creamed, light, and fluffy, about 5 minutes. Stop, scrape down the sides of the bowl, and add flour, cornstarch, baking soda, optional salt, and mix until just combined, about 1 minute. Add chocolate chips and chunks, and beat momentarily to incorporate, or fold in by hand. Form 2-inch rounds and place mounds on a large plate or baking sheet. Flatten mounds slightly with your palm, cover with plastic wrap, and refrigerate for at least 2 hours, or up to 5 days, before baking; Do not bake with warm dough because cookies with spread and bake thinner and flatter. Preheat oven to 350 degrees, line a baking sheet with parchment paper and place mounds on baking sheet, spaced at least 2 inches apart. Bake for 8-9 minutes, or until edges have set and tops are just beginning to set. Do not bake longer than 10 minutes as cookies will firm up as they cool. Allow cookies to cool on the baking sheet for 5 minutes before removing and transferring to rack to finish cooling\"},{\"id\":169,\"category\":\"Desserts\",\"name\":\"Fingerlings\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":20},\"ingredients\":[{\"name\":\"Margarine\",\"amount\":\"1 cup\"},{\"name\":\"Confectionary sugar\",\"amount\":\"6 tbsp\"},{\"name\":\"Flour\",\"amount\":\"2 1/4 cups\"},{\"name\":\"Vanilla\",\"amount\":\"1 tsp\"},{\"name\":\"Finely chopped nuts\",\"amount\":\"3/4 cups\"}],\"directions\":\"Combine all ingredients. Roll cookies to size of individual fingers, roll in granulated sugar. Bake at 350 degrees for 12-15 minutes\"},{\"id\":170,\"category\":\"Desserts\",\"name\":\"Lemond Crinkle Cookies\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":21},\"ingredients\":[{\"name\":\"Butter, softened\",\"amount\":\"1/2 cup\"},{\"name\":\"Granulated sugar\",\"amount\":\"1 cup\"},{\"name\":\"Vanilla extract\",\"amount\":\"1/2 tsp\"},{\"name\":\"Egg\",\"amount\":\"1\"},{\"name\":\"Lemon zest\",\"amount\":\"1 tsp\"},{\"name\":\"Lemon juice\",\"amount\":\"1 tbsp\"},{\"name\":\"Salt\",\"amount\":\"1/4 tsp\"},{\"name\":\"Baking powder\",\"amount\":\"1/4 tsp\"},{\"name\":\"Baking soda\",\"amount\":\"1/8 tsp\"},{\"name\":\"All-purpose flour\",\"amount\":\"1 1/2 cup\"},{\"name\":\"Powdered sugar\",\"amount\":\"1/2 cup\"}],\"directions\":\"Preheat oven to 350 degrees. Grease light colored baking sheets with non stick cooking spray and set aside. In a large bowl, cream butter and sugar together until light and fluffy. Whip in vanilla, egg, lemon zest, and juice. Scrape sides and mix again. Stir in all dry ingredients slowly until just combined, excluding the powdered sugar. Scrape sides of bowl and mix again briefly. Pour powdered sugar onto a large plate. Roll a heaping teaspoon of dough into a ball and roll in the powdered sugar. Place on baking sheet and repeat with remaining dough. Bake for 9-11 minutes or until bottoms begint to barely brown and cookies look matte (not melty or shiny). Remove from oven and cool cookies about 3 minutes before transferring to a cooling rack NOTE: If using non-stick darker baking tray, reduce baking time by about 2 minutes\"},{\"id\":171,\"category\":\"Desserts\",\"name\":\"M&M Cookies\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":25},\"ingredients\":[{\"name\":\"Brown sugar\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Margarine\",\"amount\":\"3/4 cups\"},{\"name\":\"Vanilla\",\"amount\":\"1 tsp\"},{\"name\":\"Eggs\",\"amount\":\"2\"},{\"name\":\"Flour\",\"amount\":\"2 1/4 cups\"},{\"name\":\"M&Ms\",\"amount\":\"1 cup\"},{\"name\":\"Nuts (optional)\",\"amount\":\"1/2 cup\"},{\"name\":\"Baking soda\",\"amount\":\"1 tsp\"}],\"directions\":\"Mix brown sugar, margarine, vanilla, and eggs in large bowl until well blended. Stir in remaining ingredients. Bake until brown at 350 for 10-12 minutes\"},{\"id\":173,\"category\":\"Desserts\",\"name\":\"Oatmeal Cookies\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":15},\"ingredients\":[{\"name\":\"Margarine\",\"amount\":\"1 1/4 cup\"},{\"name\":\"Firmly packed brown sugar\",\"amount\":\"3/4 cup\"},{\"name\":\"Sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Egg\",\"amount\":\"1\"},{\"name\":\"Vanilla\",\"amount\":\"1 tsp\"},{\"name\":\"Raisins\",\"amount\":\"1 cup\"},{\"name\":\"Baking soda\",\"amount\":\"1 tsp\"},{\"name\":\"Cinnamon\",\"amount\":\"1 tsp\"},{\"name\":\"Nutmeg\",\"amount\":\"1/4 tsp\"},{\"name\":\"Old fashioned oats\",\"amount\":\"3 cups\"}],\"directions\":\"Beat together margarine and sugar until light and fluffy. Beat in egg and vanilla. Add dry ingredients, mixing well. Stir in oats. Drop by rounded tablespoon onto ungreased cookie sheets. Bake at 375 degrees for 8-9 minutes\"},{\"id\":174,\"category\":\"Desserts\",\"name\":\"Peanut Blossoms\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":20},\"ingredients\":[{\"name\":\"Flour\",\"amount\":\"1 3/4 cups\"},{\"name\":\"Baking soda\",\"amount\":\"1/4 tsp\"},{\"name\":\"Sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Brown sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Shortening\",\"amount\":\"1/2 cup\"},{\"name\":\"Peanut butter\",\"amount\":\"1/2 cup\"},{\"name\":\"Egg\",\"amount\":\"1\"},{\"name\":\"Milk\",\"amount\":\"2 tsp\"},{\"name\":\"Vanilla\",\"amount\":\"1 tsp\"},{\"name\":\"Hershey kisses\",\"amount\":\"\"}],\"directions\":\"Combine all ingredients except hershey kisses in a large bowl. Mix on lowest speed until dough forms. Shape dough into balls, roll balls into granulated sugar, place on ungreased cookie sheet. Bake at 375 degrees for 10-12 minutes. Remove from oven and top with candy kiss; press down so cookie cracks\"},{\"id\":175,\"category\":\"Desserts\",\"name\":\"Shortbread Hearts\",\"subIngredients\":false,\"cook\":{\"hours\":7,\"minutes\":0},\"ingredients\":[{\"name\":\"Sweet butter\",\"amount\":\"3/4 lb\"},{\"name\":\"Confectionary sugar\",\"amount\":\"1 cup\"},{\"name\":\"Flour\",\"amount\":\"3 cups\"},{\"name\":\"Vanilla\",\"amount\":\"1/2 tsp\"},{\"name\":\"Sugar\",\"amount\":\"1/4 cup\"}],\"directions\":\"Cream butter and confectionary sugar together until light. Add flour and vanilla to mixture and blend thoroughly. Gather dough into a ball, wrap in wax paper, and chill 4-6 hours. Roll out chilled dough to ⅝ inch thickness. Using a heart-shaped cookie cutter, cut out cookies. Sprinkle top with granulated sugar. Place cookies on ungreased cookie sheet and refrigerate 45 minutes before baking. Bake at 325 degrees for 20 minutes or until just starting to color lightly; cookies should not be brown at all\"},{\"id\":176,\"category\":\"Desserts\",\"name\":\"Snickerdoodles\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":20},\"ingredients\":[{\"name\":\"Sugar\",\"amount\":\"1 1/2 cup\"},{\"name\":\"Margarine\",\"amount\":\"1/2 cup\"},{\"name\":\"Shortening\",\"amount\":\"1/2 cup\"},{\"name\":\"Eggs\",\"amount\":\"2\"},{\"name\":\"Flour\",\"amount\":\"2 3/4 cups\"},{\"name\":\"Cream of tartar\",\"amount\":\"2 tsp\"},{\"name\":\"Baking soda\",\"amount\":\"1 tsp\"},{\"name\":\"Sugar\",\"amount\":\"3 tbsp\"},{\"name\":\"Cinnamon\",\"amount\":\"3 tbs\"}],\"directions\":\"Mix sugar, margarine, shortening, and eggs in a large bowl. Stir in flour, cream of tartar, and baking soda. Shape dough into small balls. Mix sugar and cinnamon together, roll balls into mixture. Cook on ungreased cookie sheet. Bake at 400 degrees for 8-10 minutes\"},{\"id\":177,\"category\":\"Desserts\",\"name\":\"Sugar Cookies\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":35},\"ingredients\":[{\"name\":\"Flour\",\"amount\":\"2 cups\"},{\"name\":\"Baking powder\",\"amount\":\"1 1/2 tsp\"},{\"name\":\"Butter\",\"amount\":\"1/2 cup\"},{\"name\":\"Vanilla\",\"amount\":\"1 tsp\"},{\"name\":\"Sugar\",\"amount\":\"3/4 cup\"},{\"name\":\"Eggs\",\"amount\":\"2\"}],\"directions\":\"Mix all ingredients. Chill thoroughly before rolling. Bake at 350 for 10-12 minutes\"},{\"id\":178,\"category\":\"Desserts\",\"name\":\"Swedish Butterball Cookies\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":30},\"ingredients\":[{\"name\":\"Margarine\",\"amount\":\"1 cup\"},{\"name\":\"Powdered sugar\",\"amount\":\"3 tbsp\"},{\"name\":\"Chopped nuts\",\"amount\":\"1 cup\"},{\"name\":\"Vanilla\",\"amount\":\"1 tsp\"},{\"name\":\"Flour\",\"amount\":\"2 cups\"}],\"directions\":\"Mix all ingredients. Make into small balls. Bake on ungreased cookie sheet (they do not get brown). Bake at 325 degrees for 20-25 minutes. While the cookies are still hot, roll in powdered sugar\"},{\"id\":179,\"category\":\"Desserts\",\"name\":\"Caramel Peanut Popcorn Squares\",\"subIngredients\":false,\"cook\":{\"hours\":2,\"minutes\":10},\"ingredients\":[{\"name\":\"Refrigerated peanut butter cookies\",\"amount\":\"1 (16.5oz) roll\"},{\"name\":\"Mini marshmallows\",\"amount\":\"3 1/2 cups\"},{\"name\":\"Butter-flavored microwave popcorn, popped\",\"amount\":\"1 (3oz) bag (8 cups)\"},{\"name\":\"Salted dry-roasted peanuts\",\"amount\":\"1 cup\"},{\"name\":\"Peanut butter chips\",\"amount\":\"1 (10oz) bag (1 2/3 cups)\"},{\"name\":\"Light corn syrup\",\"amount\":\"2/3 cup\"},{\"name\":\"Butter or margarine\",\"amount\":\"1/4 cup\"},{\"name\":\"Semisweet chocolate chips\",\"amount\":\"1 cup\"}],\"directions\":\"Heat oven to 350 degrees. Spray 13x9-inch pan with cooking spray. With floured fingers, press dough evenly in bottom of pan to form crust. Bake 14-16 minutes longer or until golden brown. Sprinkle marshmallows over crust. Bake 3 minutes longer or until marshmallows are puffed but not browned. Meanwhile, in large bowl, mix popcorn and peanuts; set aside. In medium microwavable bowl, microwave peanut butter chips, corn syrup, and butter uncovered on high 1-2 minutes, stirring every 30 seconds until melted and smooth. Pour over popcorn mixture; stir to coat completely. Immediately press mixture over marshmallows in even layer using back of spoon. In small microwavable bowl, microwave chocolate chips uncovered on high 1 minute to 1 ½ minutes, stirring every 30 seconds until softened and chips can be stirred smooth. Drizzle melted chocolate over bars. Cool on cooling rack for 1 hour. Refrigerate 30 minutes or until set. Cut into 6 rows by 4 rows\"},{\"id\":180,\"category\":\"Desserts\",\"name\":\"Chocolate and PB Marshmallow Squares\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":50},\"ingredients\":[{\"name\":\"Refrigerated crescent dinner rolls\",\"amount\":\"1 can\"},{\"name\":\"Creamy peanut butter\",\"amount\":\"3/4 cup\"},{\"name\":\"Packed brown sugar\",\"amount\":\"3 tbsp\"},{\"name\":\"Mini marshmallows\",\"amount\":\"1 3/4 cups\"},{\"name\":\"Milk chocolate candy, broken in small pieces\",\"amount\":\"2 (1.55oz) bars\"},{\"name\":\"Egg white, beaten\",\"amount\":\"1\"},{\"name\":\"Granulated sugar\",\"amount\":\"2 tbsp\"}],\"directions\":\"Heat oven to 375 degrees. Line cookie sheet with parchment paper. Unroll dough; separate into 2 rectangles. Place 1 rectangle on cookie sheet; press perforations to seal. In small bowl, mix peanut butter and brown sugar. Spread over dough to within 1/4 inch of edges. Press marshmallows into peanut butter mixture; top with candy bars and remaining dough rectangle. Press edges and perforations to seal. Brush top with egg white; sprinkle with granulated sugar. Bake 15-20 minutes or until deep golden brown. Cool 10 minutes; serve warm or cool\"},{\"id\":181,\"category\":\"Desserts\",\"name\":\"Chocolate Chip, Oats, and Caramel Cookie Squares\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":35},\"ingredients\":[{\"name\":\"Refrigerated chocolate chip cookies\",\"amount\":\"1 (16.5oz) roll\"},{\"name\":\"Quick-cooking oats\",\"amount\":\"1 cup\"},{\"name\":\"Caramel ice cream topping\",\"amount\":\"2/3 cup\"},{\"name\":\"All-purpose flour\",\"amount\":\"5 tbsp\"},{\"name\":\"Vanilla\",\"amount\":\"1 tsp\"},{\"name\":\"Chopped walnuts\",\"amount\":\"3/4 cup\"},{\"name\":\"Semisweet baking chips\",\"amount\":\"1 cup\"}],\"directions\":\"Heat oven to 350 degrees. In large bowl, break up cookie dough. Stir or knead in oats and salt. Reserve ½ cup dough for topping. In ungreased 9-inch square pan, press remaining dough mixture evenly in bottom to form crust. Bake 10-12 minutes or until dough puffs and appears dry. In small bowl, mix caramel topping, flour, and vanilla until well blended. Sprinkle walnuts and baking chips evenly over crust. Drizzle evenly with caramel mixture. Crumble reserved ½ cup dough mixture over caramel. Bake 20-25 minutes longer or until golden brown. Cool 10 minutes. Run knife around sides of pan to loosen bars. Cool completely, about 1 hour 30 minutes. For bars, cut into 4 rows by 4 rows. Store tightly covered\"},{\"id\":182,\"category\":\"Desserts\",\"name\":\"Congo Bars\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":30},\"ingredients\":[{\"name\":\"Yellow cake mix\",\"amount\":\"\"},{\"name\":\"Eggs\",\"amount\":\"2\"},{\"name\":\"Margarine\",\"amount\":\"1/4 cup\"},{\"name\":\"Brown sugar\",\"amount\":\"1/3 cup\"},{\"name\":\"Semisweet morsels\",\"amount\":\"12oz\"}],\"directions\":\"Combine cake with all other ingredients. Mix well then pour into greased 13x9 pan and bake at 350 degrees for 20-25 minutes\"},{\"id\":183,\"category\":\"Desserts\",\"name\":\"Crescent Layer Bars\",\"subIngredients\":false,\"cook\":{\"hours\":2,\"minutes\":20},\"ingredients\":[{\"name\":\"Refrigerated crescent dinner rolls\",\"amount\":\"1 (8oz) can\"},{\"name\":\"White vanilla baking chips\",\"amount\":\"1 cup\"},{\"name\":\"Semisweet chocolate chips\",\"amount\":\"1 cup\"},{\"name\":\"Slivered almonds\",\"amount\":\"1 cup\"},{\"name\":\"Cashew halves and pieces\",\"amount\":\"1 cup\"},{\"name\":\"Sweetened condensed milk\",\"amount\":\"1 (14oz) can\"}],\"directions\":\"Heat oven to 375 degrees (350 degrees for dark pans). Grease bottom and sides of 13x9-inch pan. Unroll dough into 2 long rectangles. Place in pan; press over bottom and ½ inch up sides to form crust. Bake 5 minutes. Remove partially baked crust from oven. Sprinkle vanilla chips, chocolate chips, almonds, and cashews evenly over crust. Pour condensed milk evenly over top. Return to oven; bake 20-25 minutes longer or until golden brown. Cool 10 minutes. Run knife around sides of pan. Cool 1 hour. Refrigerate about 30 minutes or until chocolate is set. For bars, cut into 9 rows by 4 rows\"},{\"id\":184,\"category\":\"Desserts\",\"name\":\"Hermits\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":25},\"ingredients\":[{\"name\":\"Shortening\",\"amount\":\"1/2 cup\"},{\"name\":\"Sugar\",\"amount\":\"1 1/4 cups\"},{\"name\":\"Eggs\",\"amount\":\"2\"},{\"name\":\"Molasses\",\"amount\":\"1/2 cup\"},{\"name\":\"Flour\",\"amount\":\"3 1/2 cups\"},{\"name\":\"Baking powder\",\"amount\":\"1 1/2 tsp\"},{\"name\":\"Cinnamon\",\"amount\":\"1 1/2 tsp\"},{\"name\":\"Baking soda\",\"amount\":\"1 1/2 tsp\"},{\"name\":\"Allspice\",\"amount\":\"1 1/2 tsp\"},{\"name\":\"Raisins\",\"amount\":\"1 cup\"}],\"directions\":\"Cream shortening and sugar. Add eggs and molasses; beat. Add raisins, dry ingredients; stir. Use 2 cookie sheets; divide dough into 4 parts. Form rolls and place on cookie sheet. Flatten with glass dipped in sugar. Bake at 350 degrees for 10-12 minutes\"},{\"id\":185,\"category\":\"Desserts\",\"name\":\"No Name Bars\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":40},\"ingredients\":[{\"name\":\"Graham crackers, crumbs\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Sugar\",\"amount\":\"3 tbsp\"},{\"name\":\"Margarine\",\"amount\":\"1 stick\"},{\"name\":\"Chocolate chips\",\"amount\":\"1 cup\"},{\"name\":\"Coconut\",\"amount\":\"3 1/2oz\"},{\"name\":\"Nuts\",\"amount\":\"1 cup\"},{\"name\":\"Condensed milk\",\"amount\":\"1 can\"}],\"directions\":\"Melt margarine, mix with graham cracker crumbs and sugar. Spread on bottom of 9x13x2 pan. Layer: chocolate chips, coconut, nuts. Pour sweetened condensed milk over top. Bake at 350 degrees for 25 minutes\"},{\"id\":186,\"category\":\"Desserts\",\"name\":\"Peanut Butter Cookie Dough Brownies\",\"subIngredients\":false,\"cook\":{\"hours\":2,\"minutes\":35},\"ingredients\":[{\"name\":\"Fudge brownie mix, cooked and cooled in a 9x13 pan\",\"amount\":\"1 package\"},{\"name\":\"Butter, softened\",\"amount\":\"1/4 cup\"},{\"name\":\"Peanut butter\",\"amount\":\"1/2 cup\"},{\"name\":\"Sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Brown sugar\",\"amount\":\"1 cup\"},{\"name\":\"Milk\",\"amount\":\"1/4 cup\"},{\"name\":\"Vanilla\",\"amount\":\"1 tbsp\"},{\"name\":\"Flour\",\"amount\":\"2 cups\"},{\"name\":\"Reese's Pieces\",\"amount\":\"1 cup\"}],\"directions\":\"Cream together butter, peanut butter, sugar, and brown sugar in a stand mixer. Add in milk and vanilla, mixing well. Gradually add in the flour while the mixer is turned on low, scraping down the sides every few minutes. Spread cookie dough over cooled brownies. Sprinkle Reese’s Pieces clever the dough and press slightly to adhere. Refrigerate leftovers\"},{\"id\":187,\"category\":\"Desserts\",\"name\":\"Peanut Butter Crunch Layer Brown\",\"subIngredients\":false,\"cook\":{\"hours\":2,\"minutes\":10},\"ingredients\":[{\"name\":\"Refrigerated peanut butter cookie dough\",\"amount\":\"2 rolls\"},{\"name\":\"Toffee bits\",\"amount\":\"3/4 cups\"},{\"name\":\"Peanut butter baking chips\",\"amount\":\"1 cup\"},{\"name\":\"Nut Topping\",\"amount\":\"1 3/4 cups\"},{\"name\":\"Vanilla Extract\",\"amount\":\"1 tsp\"},{\"name\":\"Semisweet chocolate baking chips\",\"amount\":\"1 (12oz) bag\"},{\"name\":\"Butterscotch baking chips\",\"amount\":\"1 (11oz) bag\"},{\"name\":\"Creamy peanut butter\",\"amount\":\"1/4 cup\"}],\"directions\":\"Heat oven to 350 degrees. Spray 13x9-inch pan (dark pan not recommended) with cooking spray. In large bowl, break up 1 ½ rolls of cookie dough (refrigerate ½ roll of cookie dough for another use). Add toffee bits, peanut butter chips, ½ cup of the nut topping and vanilla. Mix with wooden spoon or knead with hands until well blended. Press evenly in bottom of pan. Bake for 18-24 minutes or until golden brown. Remove from oven to cooling rack. Cool completely, about 1 hour. In large microwavable bowl, microwave chocolate chips and butterscotch chips on high 2 to 2 ½ minutes, stirring every 30 seconds until smooth. Stir in peanut butter until smooth. Spread over cooled bars. Sprinkle with remaining 1 ¼ cups nut topping; press in lightly. Refrigerate 30 minutes until firm. For bars, cut into 6 rows by 6 rows. Store covered\"},{\"id\":188,\"category\":\"Desserts\",\"name\":\"Raspberry Squares\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":50},\"ingredients\":[{\"name\":\"Sugar\",\"amount\":\"1 cup\"},{\"name\":\"Flour\",\"amount\":\"2 cups\"},{\"name\":\"Shredded coconut\",\"amount\":\"1 1/2 cups\"},{\"name\":\"Margarine, softened\",\"amount\":\"3/4 cup\"},{\"name\":\"Egg, beaten\",\"amount\":\"1\"},{\"name\":\"Vanilla\",\"amount\":\"1 tsp\"},{\"name\":\"Raspberry preserves\",\"amount\":\"\"}],\"directions\":\"Mix all ingredients except preserves with hands until crumbly. Press ¾ of the mix into greased 13x9 pan. Spread medium size jar of raspberry preserves over entire crust, then drop remaining batter by spoonful over the top. Bake at 350 degrees for 35 to 40 minutes\"},{\"id\":189,\"category\":\"Desserts\",\"name\":\"Vacuum Cleaner Bars\",\"subIngredients\":false,\"cook\":{\"hours\":1,\"minutes\":0},\"ingredients\":[{\"name\":\"Margarine, melted (not butter)\",\"amount\":\"1/2 cup\"},{\"name\":\"Yellow cake mix (no pudding added)\",\"amount\":\"1 package\"},{\"name\":\"Eggs\",\"amount\":\"3\"},{\"name\":\"Cream cheese, softened\",\"amount\":\"1 (8oz) package\"},{\"name\":\"Flaked coconut\",\"amount\":\"1/4 cup\"},{\"name\":\"Walnuts or pecans, chopped (optional)\",\"amount\":\"1/2 cup\"}],\"directions\":\"Combine margarine, cake mix, and egg. Stir together until dry ingredients are moistened. Pat mixture into bottom of a well-greased 10x15 jelly roll pan (I used a cookie sheet and it worked just as well). Beat 2 eggs lightly, then beat in cream cheese and powdered sugar. Stir in coconut and nuts. Pour over patted cake mixture, spreading evenly. Bake at 325 degrees for 45-50 minutes or until golden brown. Cool pan on wire rack to room temperature. Cut into bars. Makes 4 dozen\"},{\"id\":190,\"category\":\"Salads\",\"name\":\"Chinese Salad\",\"subIngredients\":true,\"cook\":{\"hours\":0,\"minutes\":25},\"ingredients\":[{\"name\":\"Sliced almonds\",\"amount\":\"1/2 cup\"},{\"name\":\"Granulated sugar\",\"amount\":\"2 tbsp\"},{\"name\":\"Salad mix\",\"amount\":\"1 bag\"},{\"name\":\"Chopped scallions\",\"amount\":\"3\"},{\"name\":\"Mandarin oranges\",\"amount\":\"1 can\"}],\"subName\":\"Dressing\",\"sub\":[{\"name\":\"Pepper\",\"amount\":\"1 tsp\"},{\"name\":\"Sugar\",\"amount\":\"4 tbsp\"},{\"name\":\"White vinegar\",\"amount\":\"6 tbsp\"},{\"name\":\"Olive oil\",\"amount\":\"1/2 cup\"}],\"directions\":\"Combine all dressing ingredients together. Mix until sugar dissolves (this is best done several hours ahead of time). Saute sliced almonds with granulated sugar until brown. Spread onto foil to cool. Break apart large pieces into smaller ones. Pour salad mix, oranges, and almonds into salad bowl. Pour dressing over salad and toss\"},{\"id\":191,\"category\":\"Salads\",\"name\":\"Crunchy Asian Slaw\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":20},\"ingredients\":[{\"name\":\"Good Seasons Italian\",\"amount\":\"1 envelope\"},{\"name\":\"Sugar\",\"amount\":\"1/2 cup\"},{\"name\":\"Soy sauce\",\"amount\":\"2 tbsp\"},{\"name\":\"Ramen noodles\",\"amount\":\"2 packages\"},{\"name\":\"Coleslaw blend\",\"amount\":\"2 packages\"},{\"name\":\"Scallions, sliced\",\"amount\":\"1 bunch\"},{\"name\":\"Dry roasted sunflower kernals\",\"amount\":\"1/2 cup\"},{\"name\":\"Sliced almonds, toasted\",\"amount\":\"1/2 cup\"}],\"directions\":\"Prepare dressing mix as directed (I usually do a bit less oil and more water). Stir in sugar and soy sauce. In a large bowl, break apart noodles. Add coleslaw blend, scallions, sunflower seeds, and almonds; Mix well. Add dressing just before serving\"},{\"id\":192,\"category\":\"Salads\",\"name\":\"Oriental Cashew Chicken Salad\",\"subIngredients\":true,\"cook\":{\"hours\":0,\"minutes\":15},\"ingredients\":[{\"name\":\"Coleslaw\",\"amount\":\"1 package\"},{\"name\":\"Scalliones - diced to the whites\",\"amount\":\"1 bunch\"},{\"name\":\"Perdue shortcuts - Italian grilled (diced)\",\"amount\":\"1 package\"},{\"name\":\"Cashews and sunflower seed\",\"amount\":\"As much as you like\"},{\"name\":\"Oriental ramen noodle soup (uncooked)\",\"amount\":\"2 or 3 packages\"}],\"subName\":\"Dressing\",\"sub\":[{\"name\":\"Vegetable oil\",\"amount\":\"3/4 cup\"},{\"name\":\"Sugar\",\"amount\":\"4 tbsp\"},{\"name\":\"White vinegar\",\"amount\":\"6 tsp\"},{\"name\":\"Oriental seasoning (from ramen soup)\",\"amount\":\"1 packet\"}],\"directions\":\"Mix ingredients together in large bowl. For dressing: whisk together until it looks like duck sauce\"},{\"id\":193,\"category\":\"Salads\",\"name\":\"Taco Salad\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":25},\"ingredients\":[{\"name\":\"Ground beef or chicken\",\"amount\":\"1 lb,\"},{\"name\":\"Medium onion (optional)\",\"amount\":\"1\"},{\"name\":\"Taco seasoning mix\",\"amount\":\"1 package\"},{\"name\":\"Lettuce, shredded\",\"amount\":\"1 head\"},{\"name\":\"Medium tomatoes, cut up small\",\"amount\":\"3\"},{\"name\":\"Shredded cheese\",\"amount\":\"1 (16oz) bag\"},{\"name\":\"Italian dressing\",\"amount\":\"1/2 cup\"},{\"name\":\"Cheese doritos, crushed up small\",\"amount\":\"1 bag\"},{\"name\":\"Creamy french dressing\",\"amount\":\"1/2 cup\"},{\"name\":\"Taco sauce\",\"amount\":\"1/2 cup\"}],\"directions\":\"Cook ground beef or chicken and onion, drain fat. Add taco seasoning mix and ½ cup of water, simmer for 15 minutes; let cool. Mix meat with lettuce, tomatoes, and cheese. Mix in dressings, taco sauce, and doritos right before serving so doritos don’t get soggy\"},{\"id\":194,\"category\":\"Vegetables\",\"name\":\"Cook the Potatoes\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":30},\"ingredients\":[{\"name\":\"Milk\",\"amount\":\"3 cups\"},{\"name\":\"Velveeta\",\"amount\":\"2 cups\"},{\"name\":\"Butter\",\"amount\":\"1/2 stick\"},{\"name\":\"Flour\",\"amount\":\"2 tbsp\"}],\"directions\":\"Cook on low until it is boiling, then pour over potatoes and bake at 350 degrees until golden brown\"},{\"id\":195,\"category\":\"Vegetables\",\"name\":\"Green Bean Casserole\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":35},\"ingredients\":[{\"name\":\"Cream of chicken soup\",\"amount\":\"1 can\"},{\"name\":\"Milk\",\"amount\":\"1/2 cup\"},{\"name\":\"Soy sauce\",\"amount\":\"1 tsp\"},{\"name\":\"Green beans\",\"amount\":\"4 cups\"},{\"name\":\"French's fried onions\",\"amount\":\"1 (2.8oz) can\"}],\"directions\":\"In 1 1/2 quart casserole dish; mix soup, milk, soy sauce, beans, and 1/2 can onions. Bake at 350 degrees for 25 minutes; stir. Sprinkle remaining onion over bean mixture. Bake 5 minutes more or until onions are golden\"},{\"id\":196,\"category\":\"Vegetables\",\"name\":\"Grandmas Stuffing\",\"subIngredients\":false,\"cook\":{\"hours\":0,\"minutes\":0},\"ingredients\":[{\"name\":\"Stuffing bread, unseasoned\",\"amount\":\"2 loaves, depending on size of turkey\"},{\"name\":\"Butter\",\"amount\":\"2 sticks\"},{\"name\":\"Large onion\",\"amount\":\"1\"},{\"name\":\"Salt\",\"amount\":\"A pinch\"},{\"name\":\"Pepper\",\"amount\":\"\"},{\"name\":\"Bell stuffing seasoning\",\"amount\":\"\"}],\"directions\":\"Jean says: I am really glad you are coming up for Thanksgiving; It will be fun; In fact, I need your recipe for stuffing. Yucel says: Oh that is really easy. Jean says: Easy for you to say, I have never made homemade stuffing. Yucel says: I don't measure anything so I'll have to tell you to judge by eye. Jean says: oh no. Yucel says: Break up stuffing bread into chunks. Jean says: do they sell bread called stuffing bread at the store, I don't think I've ever seen it. Yucel says: In between pour in some chopped onions, bell stuffing seasoning, and melted butter. Yucel says: yes, it comes unsliced, and is called stuffing bread, unseasoned. Jean says: ok. Yucel says: Depending on the size of the turkey, you probably need 2 loaves. Jean says: 18 pds. Yucel says: For an 18-20 lb turkey, I usually use 2 sticks of butter and 1 large onion. Jean says: ok and just mix them together?. Yucel says: The seasoning I couldn't tell you like I said I just sprinkle it off and on. Jean says: and keep taste testing. Yucel says: Then pour some boiling water over it just to moisten it and also that makes handling and stuffing easier. Some salt and pepper, go easy on the salt; that's it. Yucel says: I've never done that. Jean says: well, if nothing else this first time will be interesting\"},{\"id\":198,\"category\":\"Vegetables\",\"name\":\"Sweet Potato Casserole\",\"subIngredients\":true,\"cook\":{\"hours\":0,\"minutes\":35},\"ingredients\":[{\"name\":\"Sweet potato, cubed\",\"amount\":\"2 cups\"},{\"name\":\"Granulated sugar\",\"amount\":\"1/4 cup\"},{\"name\":\"Egg, beaten\",\"amount\":\"1\"},{\"name\":\"Margarine, softened\",\"amount\":\"2 tbsp\"},{\"name\":\"Milk\",\"amount\":\"1/4 cup\"},{\"name\":\"Vanilla\",\"amount\":\"1/4 tsp\"},{\"name\":\"Pecans\",\"amount\":\"\"}],\"subName\":\"Topping\",\"sub\":[{\"name\":\"Packed brown sugar\",\"amount\":\"1/4 cup\"},{\"name\":\"Flour\",\"amount\":\"2 tbsp and 2 tsp\"},{\"name\":\"Butter, softened\",\"amount\":\"1 tbs and 1 1/2 tsp\"}],\"directions\":\"Cook sweet potato in boiling water until tender, drain, and mash. In a large bowl, mix together sweet potato, white sugar, egg, butter, milk, and vanilla. Mix until smooth. Transfer to 9x13 dish. In medium bowl, mix brown sugar and flour. Cut in butter until mixture is coarse. Stir in pecans. Sprinkle the mixture over potatoes. Bake 30 minutes\"}]");
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
      }); // This file can be replaced during build by using the `fileReplacements` array.
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
      /*! /Users/jeff/Desktop/projects/website_rework/personal-website-ng/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map