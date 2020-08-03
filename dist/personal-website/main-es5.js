(function () {
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


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home/home.component */
      "./src/app/home/home.component.ts");
      /* harmony import */


      var _global_components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./global_components/menu-bar/menu-bar.component */
      "./src/app/global_components/menu-bar/menu-bar.component.ts");
      /* harmony import */


      var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./page-not-found/page-not-found.component */
      "./src/app/page-not-found/page-not-found.component.ts");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _recipe_book_recipe_book_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./recipe-book/recipe-book.component */
      "./src/app/recipe-book/recipe-book.component.ts"); // Routing modules
      // Components
      // Custom modules


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([{
          path: 'home',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
        }, {
          path: 'recipe',
          component: _recipe_book_recipe_book_component__WEBPACK_IMPORTED_MODULE_9__["RecipeBookComponent"]
        }, {
          path: 'page-not-found',
          component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
        }, {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        }, {
          path: '**',
          redirectTo: '/page-not-found',
          pathMatch: 'full'
        }]), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbThemeModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _global_components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_6__["MenuBarComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"], _recipe_book_recipe_book_component__WEBPACK_IMPORTED_MODULE_9__["RecipeBookComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _global_components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_6__["MenuBarComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"], _recipe_book_recipe_book_component__WEBPACK_IMPORTED_MODULE_9__["RecipeBookComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([{
              path: 'home',
              component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            }, {
              path: 'recipe',
              component: _recipe_book_recipe_book_component__WEBPACK_IMPORTED_MODULE_9__["RecipeBookComponent"]
            }, {
              path: 'page-not-found',
              component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
            }, {
              path: '',
              redirectTo: '/home',
              pathMatch: 'full'
            }, {
              path: '**',
              redirectTo: '/page-not-found',
              pathMatch: 'full'
            }]), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbThemeModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"]],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function HomeComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "About Section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Project Section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resume Section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

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
        decls: 44,
        vars: 3,
        consts: [[1, "intro-text"], [1, "image-container"], ["src", "../../assets/media/profile.jpg", 1, "profile"], ["href", "https://www.linkedin.com/in/jeffrey-carr/", "target", "_blank"], ["src", "../../assets/media/linkedin_profile.png", "alt", "linkedin logo", 1, "company-logo"], ["href", "https://github.com/jcarr98", "target", "_blank"], ["src", "../../assets/media/github_profile.png", 1, "company-logo"], [1, "colContainer"], [1, "buttonContainer"], ["nbButton", "", "status", "primary", 3, "click"], ["nbButton", "", "status", "primary"], ["nbButton", "", "status", "primary", "target", "_blank"], [4, "ngIf"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-layout-column");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " I am a junior year computer science major who loves to create. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-card-footer", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_17_listener() {
              return ctx.openDiv("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nb-layout-column");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " I work on a lot of projects. All my projects end up on Github. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nb-card-footer", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_26_listener() {
              return ctx.openDiv("project");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Open");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nb-layout-column");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nb-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Resume");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "My resume is where to get the most professional, up to date information about my career and personal achievements.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nb-card-footer", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_37_listener() {
              return ctx.openDiv("resume");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "More");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Open");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, HomeComponent_div_41_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, HomeComponent_div_42_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, HomeComponent_div_43_Template, 2, 0, "div", 12);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.aboutSection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projectSection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resumeSection);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["button[_ngcontent-%COMP%] {\n    margin: 0.5em;\n}\n\nnb-layout[_ngcontent-%COMP%] {\n    max-height: 3em;\n}\n\n.intro-text[_ngcontent-%COMP%] {\n    margin-top: 0.5em;\n    text-align: center;\n    font-family: 'Comfortaa', cursive;\n}\n\n.image-container[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 2em;\n    text-align: center;\n}\n\n.profile[_ngcontent-%COMP%] {\n    max-height: 345px;\n    max-width: 260px;\n    border-radius: 50%;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 0.5em;\n    display: block;\n}\n\n.company-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 50%;\n    margin: 0.3em;\n}\n\n.colContainer[_ngcontent-%COMP%] {\n    max-height: 1em;\n}\n\n.buttonContainer[_ngcontent-%COMP%] {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICAgIG1hcmdpbjogMC41ZW07XG59XG5cbm5iLWxheW91dCB7XG4gICAgbWF4LWhlaWdodDogM2VtO1xufVxuXG4uaW50cm8tdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlIHtcbiAgICBtYXgtaGVpZ2h0OiAzNDVweDtcbiAgICBtYXgtd2lkdGg6IDI2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb21wYW55LWxvZ28ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiAwLjNlbTtcbn1cblxuLmNvbENvbnRhaW5lciB7XG4gICAgbWF4LWhlaWdodDogMWVtO1xufVxuXG4uYnV0dG9uQ29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function RecipeBookComponent_ol_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
        }
      }

      var RecipeBookComponent = /*#__PURE__*/function () {
        function RecipeBookComponent() {
          _classCallCheck(this, RecipeBookComponent);
        }

        _createClass(RecipeBookComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.recipes = _assets_recipes_recipes_json__WEBPACK_IMPORTED_MODULE_1__;
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
        decls: 16,
        vars: 1,
        consts: [["nbButton", "", "size", "tiny", "status", "info", 1, "titleButton"], [1, "colored-column-basic"], [4, "ngFor", "ngForOf"]],
        template: function RecipeBookComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Jean's Recipe Book");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " About ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Item 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Item 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Item 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-layout-column", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RecipeBookComponent_ol_15_Template, 5, 2, "ol", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipes);
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutColumnComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["html[_ngcontent-%COMP%] {\n    font-family: 'Open Sans', sans-serif;\n}\n\nh1[_ngcontent-%COMP%] {\n    font-family: Comfortaa;\n}\n\n.titleButton[_ngcontent-%COMP%] {\n    margin-left: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlLWJvb2svcmVjaXBlLWJvb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS1ib29rL3JlY2lwZS1ib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xufVxuXG4udGl0bGVCdXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAzZW07XG59Il19 */"]
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
    "./src/assets/recipes/recipes.json":
    /*!*****************************************!*\
      !*** ./src/assets/recipes/recipes.json ***!
      \*****************************************/

    /*! exports provided: American Chop Suey, Bacon-Cheeseburger Potato Pie, default */

    /***/
    function srcAssetsRecipesRecipesJson(module) {
      module.exports = JSON.parse("{\"American Chop Suey\":{\"name\":\"American Chop Suey\",\"ingredients\":[{\"name\":\"Chopped green pepper\",\"amount\":\"1\"},{\"name\":\"Chopped Onion\",\"amount\":\"1\"},{\"name\":\"Can of tomato soup\",\"amount\":\"1\"},{\"name\":\"Hamburg\",\"amount\":\"1 pound\"},{\"name\":\"Cooked spaghetti\",\"amount\":\"\"}],\"directions\":\"Cook pepper and onion, add hamburg. Cook hamburg until no longer pink, drain. Add soup and 1/3 can of water. Add spaghetti, mix well and serve.\"},\"Bacon-Cheeseburger Potato Pie\":{\"name\":\"Bacon-Cheeseburger Potato Pie\",\"ingredients\":[{\"name\":\"Lean ground beef\",\"amount\":\"1 1/2 pound\"},{\"name\":\"Bread crumbs\",\"amount\":\"1/2 cup\"},{\"name\":\"Finely chopped onion\",\"amount\":\"1/4 cup\"},{\"name\":\"Ketchup\",\"amount\":\"1/4 cup\"},{\"name\":\"Prepared mustard\",\"amount\":\"2 tsp\"},{\"name\":\"Bacon\",\"amount\":\"3 slices\"},{\"name\":\"Water\",\"amount\":\"1 1/4 cup\"},{\"name\":\"Margarine\",\"amount\":\"3 tablespoons\"},{\"name\":\"Garlic salt\",\"amount\":\"1/4 tsp\"},{\"name\":\"Milk\",\"amount\":\"3/4 cup\"},{\"name\":\"Mashed potato flakes\",\"amount\":\"2 cups\"},{\"name\":\"Shredded cheddar cheese\",\"amount\":\"4 oz (1 cup)\"}],\"directions\":\"In med. bowl combine beef, bread crumbs, onion, ketchup, and mustard. Press mixture in bottom and sides of 9 inch pie plate. Bake at 375 for 15 minutes. Cook bacon. In saucepan, combine water, margarine, and garlic salt. Bring to a boil. Remove from heat and add milk. With fork, stir in potato flakes \\n\\n Remove beef crust from oven and pour off drippings. Spoon potato mixture evenly into crust. Return to oven and bake 15 minutes. Remove pie from oven and top with remaining cheese and crumbled up bacon. Return to oven for 5 additional minutes. Let stand 10 minutes before serving.\"}}");
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