"use strict";
(self["webpackChunktest_vercel"] = self["webpackChunktest_vercel"] || []).push([["main"],{

/***/ 4206:
/*!***************************************!*\
  !*** ./frontend/app/app.component.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 4929);
const operators_1 = __webpack_require__(/*! rxjs/operators */ 1755);
const rxjs_1 = __webpack_require__(/*! rxjs */ 6469);
const myalgo_connect_1 = tslib_1.__importDefault(__webpack_require__(/*! @randlabs/myalgo-connect */ 7672));
const animations_1 = __webpack_require__(/*! @angular/animations */ 1631);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 3184));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/common/http */ 8784));
const i2 = tslib_1.__importStar(__webpack_require__(/*! @angular/common */ 6362));
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.error, " ");
} }
function AppComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const msg_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(msg_r3.info);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", msg_r3.value, " ");
} }
function AppComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, AppComponent_div_31_div_1_Template, 4, 2, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", msg_r3.info != "TxId");
} }
function AppComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "a", 21);
    i0.ɵɵtext(2, "View on Algo Explorer");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("href", "https://testnet.algoexplorer.io/tx/", ctx_r2.txId, "", i0.ɵɵsanitizeUrl);
} }
const _c0 = function (a0) { return { "disabled": a0 }; };
class AppComponent {
    constructor(http) {
        this.http = http;
        this.myAlgoConnect = new myalgo_connect_1.default();
        this.account = null;
        this.error = null;
        this.disableBtns = false;
        this.coinState = 'start';
        this.txId = null;
        this.messages = [];
    }
    connectOrDisconnect() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.error = null;
            try {
                if (this.account) {
                    this.account = null;
                }
                else {
                    let accounts = yield this.myAlgoConnect.connect({
                        shouldSelectOneAccount: true,
                        openManager: false
                    });
                    console.log(accounts);
                    this.account = accounts[0];
                }
            }
            catch (err) {
                this.error = err;
            }
        });
    }
    flip(choice) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    handleError(error) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return (0, rxjs_1.throwError)(() => error);
    }
    callTest() {
        this.test().subscribe({
            next: (result) => {
                console.log(result);
            },
            error: (err) => { }
        });
    }
    test() {
        return this.http.get('/api/test')
            .pipe((0, operators_1.catchError)(this.handleError));
    }
}
exports.AppComponent = AppComponent;
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(i0.ɵɵdirectiveInject(i1.HttpClient)); };
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 33, vars: 12, consts: [["lang", "en"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "container"], [4, "ngIf"], [1, "row", "subcontainer"], [1, "col", "s6", "truncate"], [1, "col", "s6", "right-align"], [1, "waves-effect", "waves-light", "btn", "indigo", "darken-4", 3, "click"], [1, "col", "m6", "s12"], [1, "row"], [1, "coin"], [1, "heads"], ["src", "assets/head.png"], [1, "tails"], ["src", "assets/tail.png"], [1, "row", "center"], [1, "col", "s6"], [1, "waves-effect", "waves-light", "btn", "indigo", "darken-4", 3, "ngClass", "click"], ["id", "info", 1, "col", "m6", "s12"], ["class", "truncate", 4, "ngFor", "ngForOf"], [1, "truncate"], ["target", "_blank", 3, "href"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "html", 0)(1, "head");
        i0.ɵɵelement(2, "meta", 1);
        i0.ɵɵelementStart(3, "title");
        i0.ɵɵtext(4, "Algorand game - Flip A Coin");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "body")(6, "div", 2);
        i0.ɵɵtemplate(7, AppComponent_div_7_Template, 2, 1, "div", 3);
        i0.ɵɵelementStart(8, "div", 4)(9, "div", 5)(10, "h6");
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(12, "div", 6)(13, "a", 7);
        i0.ɵɵlistener("click", function AppComponent_Template_a_click_13_listener() { return ctx.connectOrDisconnect(); });
        i0.ɵɵtext(14);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(15, "div", 4)(16, "div", 8)(17, "div", 9)(18, "div", 10)(19, "div", 11);
        i0.ɵɵelement(20, "img", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 13);
        i0.ɵɵelement(22, "img", 14);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(23, "div", 15)(24, "div", 16)(25, "a", 17);
        i0.ɵɵlistener("click", function AppComponent_Template_a_click_25_listener() { return ctx.flip("head"); });
        i0.ɵɵtext(26, " Head ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(27, "div", 16)(28, "a", 17);
        i0.ɵɵlistener("click", function AppComponent_Template_a_click_28_listener() { return ctx.flip("tail"); });
        i0.ɵɵtext(29, " Tail ");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(30, "div", 18);
        i0.ɵɵtemplate(31, AppComponent_div_31_Template, 2, 1, "div", 19);
        i0.ɵɵtemplate(32, AppComponent_div_32_Template, 3, 1, "div", 3);
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", ctx.error);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("Addr: ", ctx.account !== null ? ctx.account.address : "None", "");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.account !== null ? "Disconnect" : "Connect", " ");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("@rotatedState", ctx.coinState);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(8, _c0, ctx.disableBtns));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c0, ctx.disableBtns));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.messages);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.txId);
    } }, directives: [i2.NgIf, i2.NgClass, i2.NgForOf], styles: [".subcontainer[_ngcontent-%COMP%] {\r\n    background-color: #ffffff;\r\n    padding: 35px;\r\n    box-shadow: 15px 30px 35px rgba(0, 0, 0, 0.1);\r\n    border-radius: 10px;\r\n    perspective: 300px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.topcontainer[_ngcontent-%COMP%] {\r\n    padding: 15px !important;\r\n}\r\n\r\n.coin[_ngcontent-%COMP%] {\r\n    height: 150px;\r\n    width: 150px;\r\n    position: relative;\r\n    margin: 32px auto;\r\n    transform-style: preserve-3d;\r\n}\r\n\r\n.coin[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 145px;\r\n}\r\n\r\n.heads[_ngcontent-%COMP%], .tails[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n}\r\n\r\n.tails[_ngcontent-%COMP%] {\r\n    transform: rotateX(180deg);\r\n}\r\n\r\na.btn[_ngcontent-%COMP%] {\r\n    width: 130px;\r\n    font-size: 16px;\r\n    border-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiw2Q0FBNkM7SUFDN0MsbUJBQW1CO0lBRW5CLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFFakIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAzNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMTVweCAzMHB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDMwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnRvcGNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb2luIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDMycHggYXV0bztcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbi5jb2luIGltZyB7XHJcbiAgICB3aWR0aDogMTQ1cHg7XHJcbn1cclxuXHJcbi5oZWFkcyxcclxuLnRhaWxzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi50YWlscyB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxufVxyXG5cclxuYS5idG4ge1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbiJdfQ== */"], data: { animation: [
            (0, animations_1.trigger)('rotatedState', [
                (0, animations_1.state)('start', (0, animations_1.style)({ transform: 'rotateX(0)' })),
                (0, animations_1.state)('head', (0, animations_1.style)({ transform: 'rotateX(2160deg)' })),
                (0, animations_1.state)('tail', (0, animations_1.style)({ transform: 'rotateX(1980deg)' })),
                (0, animations_1.transition)('start => head', (0, animations_1.animate)('8000ms ease-out')),
                (0, animations_1.transition)('start => tail', (0, animations_1.animate)('3000ms ease-out')),
                (0, animations_1.transition)('head => tail', (0, animations_1.animate)('3000ms ease-out')),
                (0, animations_1.transition)('tail => head', (0, animations_1.animate)('3000ms ease-out'))
            ])
        ] } });


/***/ }),

/***/ 2268:
/*!************************************!*\
  !*** ./frontend/app/app.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 4929);
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 318);
const http_1 = __webpack_require__(/*! @angular/common/http */ 8784);
const animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
const app_component_1 = __webpack_require__(/*! ./app.component */ 4206);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 3184));
class AppModule {
}
exports.AppModule = AppModule;
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [app_component_1.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [], imports: [[
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            animations_1.BrowserAnimationsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [app_component_1.AppComponent], imports: [platform_browser_1.BrowserModule,
        http_1.HttpClientModule,
        animations_1.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 3019:
/*!**********************************************!*\
  !*** ./frontend/environments/environment.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.environment = void 0;
exports.environment = {
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

/***/ 2095:
/*!**************************!*\
  !*** ./frontend/main.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ 4929);
const __NgCli_bootstrap_1 = tslib_1.__importStar(__webpack_require__(/*! @angular/platform-browser */ 318));
const core_1 = __webpack_require__(/*! @angular/core */ 3184);
const app_module_1 = __webpack_require__(/*! ./app/app.module */ 2268);
const environment_1 = __webpack_require__(/*! ./environments/environment */ 3019);
if (environment_1.environment.production) {
    (0, core_1.enableProdMode)();
}
__NgCli_bootstrap_1.platformBrowser().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(2095)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map