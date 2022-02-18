"use strict";
(self["webpackChunkadmin"] = self["webpackChunkadmin"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_errors_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/errors/page404/page404.component */ 9188);
/* harmony import */ var _components_errors_page500_page500_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/errors/page500/page500.component */ 8576);
/* harmony import */ var _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/default-layout/default-layout.component */ 5163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: '404',
        component: _components_errors_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__.Page404Component
    },
    {
        path: '500',
        component: _components_errors_page500_page500_component__WEBPACK_IMPORTED_MODULE_1__.Page500Component
    },
    {
        path: '',
        component: _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutComponent,
        children: []
    },
    {
        path: '**',
        component: _components_errors_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__.Page404Component
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() {
        this.title = 'admin';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_errors_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/errors/page404/page404.component */ 9188);
/* harmony import */ var _components_errors_page500_page500_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/errors/page500/page500.component */ 8576);
/* harmony import */ var _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/default-layout/default-layout.component */ 5163);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @coreui/angular */ 8988);
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/icons-angular */ 4837);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 2916);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.LocationStrategy,
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__.HashLocationStrategy
        },
        _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_7__.IconSetService,
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.AppAsideModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.AppBreadcrumbModule.forRoot(),
            _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.AppFooterModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.AppHeaderModule,
            _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.AppSidebarModule,
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_7__.IconModule,
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_7__.IconSetModule.forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__.TabsModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_errors_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__.Page404Component,
        _components_errors_page500_page500_component__WEBPACK_IMPORTED_MODULE_3__.Page500Component,
        _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.AppAsideModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.AppBreadcrumbModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.AppFooterModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.AppHeaderModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_10__.AppSidebarModule,
        _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_7__.IconModule, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_7__.IconSetModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__.TabsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarModule] }); })();


/***/ }),

/***/ 9188:
/*!****************************************************************!*\
  !*** ./src/app/components/errors/page404/page404.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page404Component": () => (/* binding */ Page404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Page404Component {
    constructor() { }
    ngOnInit() {
    }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 2, vars: 0, template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page404 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNDA0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8576:
/*!****************************************************************!*\
  !*** ./src/app/components/errors/page500/page500.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page500Component": () => (/* binding */ Page500Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Page500Component {
    constructor() { }
    ngOnInit() {
    }
}
Page500Component.ɵfac = function Page500Component_Factory(t) { return new (t || Page500Component)(); };
Page500Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page500Component, selectors: [["app-page500"]], decls: 2, vars: 0, template: function Page500Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page500 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNTAwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2976:
/*!*********************************!*\
  !*** ./src/app/layouts/_nav.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navItems": () => (/* binding */ navItems)
/* harmony export */ });
const navItems = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: {
            variant: 'info',
            text: 'NEW'
        }
    },
    {
        title: true,
        name: 'Theme'
    },
    {
        name: 'Colors',
        url: '/theme/colors',
        icon: 'icon-drop'
    },
    {
        name: 'Typography',
        url: '/theme/typography',
        icon: 'icon-pencil'
    },
    {
        title: true,
        name: 'Components'
    },
    {
        name: 'Base',
        url: '/base',
        icon: 'icon-puzzle',
        children: [
            {
                name: 'Cards',
                url: '/base/cards',
                icon: 'icon-puzzle'
            },
            {
                name: 'Carousels',
                url: '/base/carousels',
                icon: 'icon-puzzle'
            },
            {
                name: 'Collapses',
                url: '/base/collapses',
                icon: 'icon-puzzle'
            },
            {
                name: 'Forms',
                url: '/base/forms',
                icon: 'icon-puzzle'
            },
            {
                name: 'Navbars',
                url: '/base/navbars',
                icon: 'icon-puzzle'
            },
            {
                name: 'Pagination',
                url: '/base/paginations',
                icon: 'icon-puzzle'
            },
            {
                name: 'Popovers',
                url: '/base/popovers',
                icon: 'icon-puzzle'
            },
            {
                name: 'Progress',
                url: '/base/progress',
                icon: 'icon-puzzle'
            },
            {
                name: 'Switches',
                url: '/base/switches',
                icon: 'icon-puzzle'
            },
            {
                name: 'Tables',
                url: '/base/tables',
                icon: 'icon-puzzle'
            },
            {
                name: 'Tabs',
                url: '/base/tabs',
                icon: 'icon-puzzle'
            },
            {
                name: 'Tooltips',
                url: '/base/tooltips',
                icon: 'icon-puzzle'
            }
        ]
    },
    {
        name: 'Buttons',
        url: '/buttons',
        icon: 'icon-cursor',
        children: [
            {
                name: 'Buttons',
                url: '/buttons/buttons',
                icon: 'icon-cursor'
            },
            {
                name: 'Dropdowns',
                url: '/buttons/dropdowns',
                icon: 'icon-cursor'
            },
            {
                name: 'Brand Buttons',
                url: '/buttons/brand-buttons',
                icon: 'icon-cursor'
            }
        ]
    },
    {
        name: 'Charts',
        url: '/charts',
        icon: 'icon-pie-chart'
    },
    {
        name: 'Icons',
        url: '/icons',
        icon: 'icon-star',
        children: [
            {
                name: 'CoreUI Icons',
                url: '/icons/coreui-icons',
                icon: 'icon-star',
                badge: {
                    variant: 'success',
                    text: 'NEW'
                }
            },
            {
                name: 'Flags',
                url: '/icons/flags',
                icon: 'icon-star'
            },
            {
                name: 'Font Awesome',
                url: '/icons/font-awesome',
                icon: 'icon-star',
                badge: {
                    variant: 'secondary',
                    text: '4.7'
                }
            },
            {
                name: 'Simple Line Icons',
                url: '/icons/simple-line-icons',
                icon: 'icon-star'
            }
        ]
    },
    {
        name: 'Notifications',
        url: '/notifications',
        icon: 'icon-bell',
        children: [
            {
                name: 'Alerts',
                url: '/notifications/alerts',
                icon: 'icon-bell'
            },
            {
                name: 'Badges',
                url: '/notifications/badges',
                icon: 'icon-bell'
            },
            {
                name: 'Modals',
                url: '/notifications/modals',
                icon: 'icon-bell'
            }
        ]
    },
    {
        name: 'Widgets',
        url: '/widgets',
        icon: 'icon-calculator',
        badge: {
            variant: 'info',
            text: 'NEW'
        }
    },
    {
        divider: true
    },
    {
        title: true,
        name: 'Extras',
    },
    {
        name: 'Pages',
        url: '/pages',
        icon: 'icon-star',
        children: [
            {
                name: 'Login',
                url: '/login',
                icon: 'icon-star'
            },
            {
                name: 'Register',
                url: '/register',
                icon: 'icon-star'
            },
            {
                name: 'Error 404',
                url: '/404',
                icon: 'icon-star'
            },
            {
                name: 'Error 500',
                url: '/500',
                icon: 'icon-star'
            }
        ]
    },
    {
        name: 'Disabled',
        url: '/dashboard',
        icon: 'icon-ban',
        badge: {
            variant: 'secondary',
            text: 'NEW'
        },
        attributes: { disabled: true },
    },
    {
        name: 'Download CoreUI',
        url: 'http://coreui.io/angular/',
        icon: 'icon-cloud-download',
        class: 'mt-auto',
        variant: 'success',
        attributes: { target: '_blank', rel: 'noopener' }
    },
    {
        name: 'Try CoreUI PRO',
        url: 'http://coreui.io/pro/angular/',
        icon: 'icon-layers',
        variant: 'danger',
        attributes: { target: '_blank', rel: 'noopener' }
    }
];


/***/ }),

/***/ 5163:
/*!********************************************************************!*\
  !*** ./src/app/layouts/default-layout/default-layout.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLayoutComponent": () => (/* binding */ DefaultLayoutComponent)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_nav */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/angular */ 8988);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 2916);







function DefaultLayoutComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Updates");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "42");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "42");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "42");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "42");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Setting");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "42");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "42");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Lock account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DefaultLayoutComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 8);
} }
function DefaultLayoutComponent_ng_template_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 22);
} }
function DefaultLayoutComponent_ng_template_217_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 24);
} }
const _c0 = function () { return ["/dashboard"]; };
const _c1 = function () { return { src: "assets/img/brand/logo.svg", width: 89, height: 25, alt: "CoreUI Logo" }; };
const _c2 = function () { return { src: "assets/img/brand/sygnet.svg", width: 30, height: 30, alt: "CoreUI Logo" }; };
class DefaultLayoutComponent {
    constructor() {
        this.sidebarMinimized = false;
        this.navItems = _nav__WEBPACK_IMPORTED_MODULE_0__.navItems;
    }
    toggleMinimize(e) {
        this.sidebarMinimized = e;
    }
    ngOnInit() {
    }
}
DefaultLayoutComponent.ɵfac = function DefaultLayoutComponent_Factory(t) { return new (t || DefaultLayoutComponent)(); };
DefaultLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DefaultLayoutComponent, selectors: [["app-default-layout"]], decls: 304, vars: 17, consts: [[3, "navbarBrandRouterLink", "fixed", "navbarBrandFull", "navbarBrandMinimized", "sidebarToggler", "asideMenuToggler"], [1, "nav", "navbar-nav", "d-md-down-none"], [1, "nav-item", "px-3"], ["href", "#", 1, "nav-link"], [1, "nav", "navbar-nav", "ml-auto"], [1, "nav-item", "d-md-down-none"], [1, "icon-bell"], [1, "badge", "badge-pill", "badge-danger"], [1, "icon-list"], [1, "icon-location-pin"], ["dropdown", "", "placement", "bottom right", 1, "nav-item", "dropdown"], ["data-toggle", "dropdown", "href", "#", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", "dropdownToggle", "", 1, "nav-link", 3, "click"], ["src", "assets/img/avatars/6.jpg", "alt", "admin@bootstrapmaster.com", 1, "img-avatar"], ["class", "dropdown-menu dropdown-menu-right", "aria-labelledby", "simple-dropdown", 4, "dropdownMenu"], [1, "app-body"], [3, "fixed", "display", "minimized", "minimizedChange"], ["appSidebar", ""], [3, "navItems", "perfectScrollbar", "disabled"], [1, "main"], [1, "breadcrumb-menu", "d-md-down-none"], ["role", "group", "aria-label", "Button group with nested dropdown", 1, "btn-group"], ["href", "#", 1, "btn"], [1, "icon-speech"], [1, "icon-graph"], [1, "icon-settings"], [1, "container-fluid"], [3, "fixed", "display", "ngClass"], ["tabHeading", ""], [1, "list-group", "list-group-accent"], [1, "list-group-item", "list-group-item-accent-secondary", "bg-light", "text-center", "font-weight-bold", "text-muted", "text-uppercase", "small"], [1, "list-group-item", "list-group-item-accent-warning", "list-group-item-divider"], [1, "avatar", "float-right"], ["src", "assets/img/avatars/7.jpg", "alt", "admin@bootstrapmaster.com", 1, "img-avatar"], [1, "text-muted", "mr-3"], [1, "icon-calendar"], [1, "text-muted"], [1, "list-group-item", "list-group-item-accent-info"], ["src", "assets/img/avatars/4.jpg", "alt", "admin@bootstrapmaster.com", 1, "img-avatar"], [1, "icon-social-skype"], [1, "list-group-item", "list-group-item-accent-danger", "list-group-item-divider"], [1, "icon-home"], [1, "avatars-stack", "mt-2"], [1, "avatar", "avatar-xs"], ["src", "assets/img/avatars/2.jpg", "alt", "admin@bootstrapmaster.com", 1, "img-avatar"], ["src", "assets/img/avatars/3.jpg", "alt", "admin@bootstrapmaster.com", 1, "img-avatar"], ["src", "assets/img/avatars/5.jpg", "alt", "admin@bootstrapmaster.com", 1, "img-avatar"], [1, "list-group-item", "list-group-item-accent-success", "list-group-item-divider"], [1, "list-group-item", "list-group-item-accent-primary", "list-group-item-divider"], ["src", "assets/img/avatars/8.jpg", "alt", "admin@bootstrapmaster.com", 1, "img-avatar"], [1, "p-3"], [1, "message"], [1, "py-3", "pb-5", "mr-3", "float-left"], [1, "avatar"], [1, "avatar-status", "badge-success"], [1, "text-muted", "float-right", "mt-1"], [1, "text-truncate", "font-weight-bold"], [1, "aside-options"], [1, "clearfix", "mt-4"], [1, "switch", "switch-label", "switch-pill", "switch-success", "switch-sm", "float-right"], ["type", "checkbox", "checked", "", 1, "switch-input"], ["data-checked", "On", "data-unchecked", "Off", 1, "switch-slider"], [1, "clearfix", "mt-3"], ["type", "checkbox", 1, "switch-input"], [1, "switch-handle"], [1, "text-uppercase", "mb-1", "mt-4"], [1, "progress", "progress-xs"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "25%"], [1, "text-uppercase", "mb-1", "mt-2"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "95%"], ["role", "progressbar", "aria-valuenow", "10", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "10%"], ["href", "https://coreui.io"], [1, "ml-auto"], ["href", "https://coreui.io/angular"], ["aria-labelledby", "simple-dropdown", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-header", "text-center"], ["href", "#", 1, "dropdown-item"], [1, "fa", "fa-bell-o"], [1, "badge", "badge-info"], [1, "fa", "fa-envelope-o"], [1, "badge", "badge-success"], [1, "fa", "fa-tasks"], [1, "badge", "badge-danger"], [1, "fa", "fa-comments"], [1, "badge", "badge-warning"], [1, "fa", "fa-user"], [1, "fa", "fa-wrench"], [1, "fa", "fa-usd"], [1, "badge", "badge-dark"], [1, "fa", "fa-file"], [1, "badge", "badge-primary"], [1, "divider"], [1, "fa", "fa-shield"], [1, "fa", "fa-lock"]], template: function DefaultLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DefaultLayoutComponent_Template_a_click_24_listener() { return false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, DefaultLayoutComponent_div_26_Template, 50, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "app-sidebar", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("minimizedChange", function DefaultLayoutComponent_Template_app_sidebar_minimizedChange_28_listener($event) { return ctx.toggleMinimize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "app-sidebar-nav", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-sidebar-minimizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "main", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "cui-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " \u00A0Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " \u00A0Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "app-aside", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, DefaultLayoutComponent_ng_template_49_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Meeting with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Lucas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "small", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "\u00A0 1 - 3pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u00A0 Palo Alto, CA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Skype with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Megan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "small", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\u00A0 4 - 5pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "\u00A0 On-line");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Tomorrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "New UI Project - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "deadline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "small", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "\u00A0 10 - 11pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "\u00A0 creativeLabs HQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "#10 Startups.Garden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, " Meetup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "small", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "\u00A0 1 - 3pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "\u00A0 Palo Alto, CA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Team meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "small", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "\u00A0 4 - 6pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "\u00A0 creativeLabs HQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](140, DefaultLayoutComponent_ng_template_140_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Lukasz Holeczek");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "small", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "1:52 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Lukasz Holeczek");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "small", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "1:52 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Lukasz Holeczek");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "small", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "1:52 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Lukasz Holeczek");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "small", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "1:52 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](201, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](206, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Lukasz Holeczek");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "small", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "1:52 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](217, DefaultLayoutComponent_ng_template_217_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Option 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](227, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Option 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](238, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "Option 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](250, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](251, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "Option 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](258, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](259, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](260, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "System Utilization");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, "CPU Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](268, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "348 Processes. 1/4 Cores.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "Memory Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](276, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "11444GB/16384MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "SSD 1 Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](284, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "243GB/256GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "SSD 2 Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](292, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "25GB/256GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, "CoreUI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, " \u00A9 2021 creativeLabs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "Powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](303, "CoreUI for Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("navbarBrandRouterLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0))("fixed", true)("navbarBrandFull", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c1))("navbarBrandMinimized", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c2))("sidebarToggler", "lg")("asideMenuToggler", "lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixed", true)("display", "lg")("minimized", ctx.sidebarMinimized);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("navItems", ctx.navItems)("disabled", _r1.minimized);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixed", true)("display", false)("ngClass", "test");
    } }, directives: [_coreui_angular__WEBPACK_IMPORTED_MODULE_2__.AppHeaderComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_2__.AppSidebarComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_2__.AppSidebarNavComponent, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__.PerfectScrollbarDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_2__.AppSidebarMinimizerComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_2__.CuiBreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _coreui_angular__WEBPACK_IMPORTED_MODULE_2__.AppAsideComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__.TabsetComponent, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__.TabDirective, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__.TabHeadingDirective, _coreui_angular__WEBPACK_IMPORTED_MODULE_2__.AppFooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWZhdWx0LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map