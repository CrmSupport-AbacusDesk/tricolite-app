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
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
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


    __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/complaintfiltermodal/complaintfiltermodal.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/complaintfiltermodal/complaintfiltermodal.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComplaintfiltermodalComplaintfiltermodalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"cs-modal-container\">\r\n    <div class=\"modal-container full-modal-container\">\r\n        <div class=\"main-figure\">\r\n            <div class=\"cs-modal-body\">\r\n               \r\n                    <div class=\"custome-filter\">\r\n                            <div class=\"cs-header\">\r\n\r\n                                <ion-button (click)=\"dismiss()\"><i class=\"material-icons\">keyboard_arrow_down</i></ion-button>\r\n                                <h1>filters</h1>\r\n\r\n                                <ion-text (click)=\"onRemoveAllFilterHandler()\">Clear</ion-text>\r\n                            </div>\r\n                            \r\n                            <div class=\"fiter-data\">\r\n\r\n                                <div class=\"cs-left\">\r\n\r\n                                    <ion-button (click)=\"currentActiveTab = 1\" [ngClass]=\"currentActiveTab==1 ? 'active' : ''\" fill=\"clear\" color=\"dark\">Date & Days</ion-button>\r\n\r\n                                    <ion-button (click)=\"currentActiveTab = 2\" fill=\"clear\" color=\"dark\" [ngClass]=\"currentActiveTab==2 ? 'active' : ''\">Priority</ion-button>\r\n\r\n                                    <ion-button (click)=\"currentActiveTab = 3\" fill=\"clear\" color=\"dark\" [ngClass]=\"currentActiveTab==3 ? 'active' : ''\">Req. Type</ion-button>\r\n\r\n                                    <ion-button (click)=\"currentActiveTab = 4\" fill=\"clear\" color=\"dark\" [ngClass]=\"currentActiveTab==4 ? 'active' : ''\">Status</ion-button>\r\n\r\n                                </div>\r\n                                \r\n                                <div class=\"cs-right\">\r\n\r\n                                 <div *ngIf=\"currentActiveTab==1\" id=\"days\">\r\n                                        <div class=\"common_form inner_page\">\r\n                                                <ion-item class=\"date-time\">\r\n                                                    <ion-label>Date From</ion-label>\r\n                                                    <ion-datetime [(ngModel)]=\"data.dateFrom\" (ngModelChange)=\"onDateFromChangeHandler()\" displayFormat=\"DD MMM YYYY\" max=\"{{currentDate}}\"></ion-datetime>\r\n                                                </ion-item>\r\n                                                <ion-item class=\"date-time\">\r\n                                                    <ion-label>Date To</ion-label>\r\n                                                    <ion-datetime [(ngModel)]=\"data.dateTo\" (ngModelChange)=\"data.range = 0\"  displayFormat=\"DD MMM YYYY\" min=\"{{minDate}}\" max=\"{{currentDate}}\"></ion-datetime>\r\n                                                </ion-item>\r\n                                            </div>\r\n\r\n                                            <div class=\"or-cnt or-cnt16\">\r\n                                                <div>OR</div>\r\n                                            </div>\r\n                                            \r\n\r\n                                            <div class=\"cs-range\">\r\n        \r\n                                                <h1>Days Range <span><ion-text>{{data.range}}</ion-text></span></h1>\r\n                                                <ion-item>\r\n        \r\n                                                    <ion-range [(ngModel)]=\"data.range\" (ngModelChange) = \"data.dateFrom = ''; data.dateTo = ''\"  min=\"0\" max=\"30\" color=\"warning\">\r\n        \r\n                                                        <ion-label slot=\"start\">0 Days</ion-label>\r\n        \r\n                                                        <ion-label slot=\"end\">30 Days</ion-label>\r\n        \r\n                                                    </ion-range>\r\n        \r\n                                                </ion-item>\r\n        \r\n                                            </div>\r\n                                 </div>\r\n\r\n                                    \r\n                                    \r\n                                    <div *ngIf=\"currentActiveTab==2\" id=\"priority\" class=\"cs-checkbox\">\r\n                                        <ion-list>\r\n                                            <ion-item *ngFor=\"let row of priorityList\">\r\n\r\n                                                <ion-label>{{row.name}}</ion-label>\r\n\r\n                                                <ion-checkbox [(ngModel)]=\"row.checked\" slot=\"start\" color=\"success\"></ion-checkbox>\r\n\r\n                                            </ion-item>\r\n                                        </ion-list>\r\n                                    </div>\r\n\r\n                                    <div *ngIf=\"currentActiveTab==3\" id=\"complaintTitle\" class=\"cs-checkbox\">\r\n                                            <ion-list>\r\n                                                <ion-item *ngFor=\"let row of complaintTypeList\">\r\n                                                    <ion-label>{{row.title}}</ion-label>\r\n                                                    <ion-checkbox [(ngModel)]=\"row.checked\" slot=\"start\" color=\"success\"></ion-checkbox>\r\n                                                </ion-item>\r\n                                            </ion-list>\r\n                                    </div>\r\n\r\n                                    <div *ngIf=\"currentActiveTab==4\" id=\"complaintStatus\" class=\"cs-checkbox\">\r\n\r\n                                            <ion-list>\r\n\r\n                                                <ion-item *ngFor=\"let row of statusList\">\r\n\r\n                                                    <ion-label>{{row.name}}</ion-label>\r\n\r\n                                                    <ion-checkbox [(ngModel)]=\"row.checked\" slot=\"start\" color=\"success\"></ion-checkbox>\r\n\r\n                                                </ion-item>\r\n\r\n                                            </ion-list>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            \r\n                         <div class=\"cs-btn\" padding>\r\n                                <ion-button (click)=\"onApplyFilterHandler()\" class=\"success min\" shape=\"round\" expand=\"full\">APPLY</ion-button>\r\n                            </div>\r\n                        </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/confirmmodal/confirmmodal.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/confirmmodal/confirmmodal.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomer_appConfirmmodalConfirmmodalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"cs-modal-container\">\r\n    <div class=\"modal-container\">\r\n        <div class=\"main-figure\">\r\n            <div class=\"cs-modal-body\">\r\n                <div class=\"logo\">\r\n                    <img src=\"assets/img/logo.jpg\" alt=\"\">\r\n                </div>\r\n                <div class=\"modal-content\">\r\n                    <p>You registration has been successfull.Account has been under verification process. Your account will be Login after 24 hours.</p>                    \r\n                    <p>Meanwhile, you can contact us<br><a href=\"tel: 0120 4550400\">0120 4550400</a>  ,  <br><a href=\"tel: 0124 4695300\">0124 4695300</a> or mail us<br><a>customercare@tricolite.com</a> if you any question.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-close\">\r\n                <ion-button color=\"danger\" (click)=\"dismiss()\"><ion-icon name=\"close\"></ion-icon></ion-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/escalationdetail/escalationdetail.page.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/escalationdetail/escalationdetail.page.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomer_appEscalationdetailEscalationdetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <title>ESCALATION MATRIX</title> -->\r\n\r\n<head>\r\n\t<title>ESCALATION MATRIX</title>\r\n\t<meta charset=\"UTF-8\">\r\n\t<meta name=\"description\" content=\"Free Web tutorials\">\r\n\t<meta name=\"keywords\" content=\"HTML,CSS,XML,JavaScript\">\r\n\t<meta name=\"author\" content=\"Hege Refsnes\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n</head>\r\n\r\n\r\n\r\n<table width=\"800px\" cellpadding=\"0\" style=\"margin: 0px auto; font-size:12px; padding: 0px 0px 0px; background: #fff; border:solid 1px #000;\" cellpadding=\"0\" cellspacing=\"0\">\r\n\t<tr>\r\n\t\t<td style=\" padding:0px 0px; width: 800px;\">\r\n\t\t\t<table style=\"width:800px; border-collapse:collapse;\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style=\"width:800px;font-size: 16px; text-align: right;font-weight: 600;padding: 10px;font-style: italic;\">Head Office <span style=\"color: #0000ff;\">CUSTOMER CENTER</span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<table style=\"width:800px; border-collapse:collapse;\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style=\"width:341px;padding: 0px 200px;text-align: center;font-size: 14px;font-style: italic;\">\r\n\t\t\t\t\t\t<p style=\"margin-top: 15px; padding: 10px;border-radius: 15px; border: 1px solid #000; color: #795548; font-weight: 600;\">ESCALATION MATRIX</p>\r\n\t\t\t\t\t\t<p style=\"margin-top: 20px; padding: 10px;border-radius: 15px; border: 1px solid #000; color: #339; font-weight: 600;\">CUSTOMER CARE CENTER <br> Helpline No:- 0120-4550400, 0124-4695300, </p>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td>\r\n\t\t\t<table style=\"width:800px; border-collapse:collapse; border-top: 1px solid #000;\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style=\"font-size: 14px; text-align: center;font-weight: 600;padding: 10px;\">Logging request @ Tricolite Customer Service APP(Available on play store)</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr>\r\n\t\t<td class=\"width=800px;\">\r\n\t\t\t<table border=\"1\" style=\"width:800px; font-size: 14px; font-weight: 600; border-collapse:collapse;\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style=\"background: #ffffff; width: 100px; text-align:center; padding: 8px;\">LEVEL 1</td>\r\n\t\t\t\t\t<td style=\"background: #ffffff; text-align:center; padding: 8px;\">\r\n\t\t\t\t\t\t<table style=\"border-collapse:collapse; text-align: left;\">\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td style=\"padding-bottom: 10px;\">+91-99589 98882</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td style=\"padding-bottom: 10px;text-decoration: underline; color: #099;\">Customercare@tricolite.com</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td style=\"padding-bottom: 10px;\">+91-93196 44993 – Chetna Sharma</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td style=\"text-decoration: underline; color: #099;\">Chetna.sharma@tricolite.com</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style=\"background: #ffffff; width: 100px; text-align:center; padding: 8px;\">LEVEL 2</td>\r\n\t\t\t\t\t<td style=\"background: #ffffff; text-align:center; padding: 8px;\">\r\n\t\t\t\t\t\t<table style=\"border-collapse:collapse; text-align: left;\">\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td style=\"padding-bottom: 10px;\">+91-92058 83483 - Mr. Shiv Shakti – for Warranty & FOC Services</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td style=\"padding-bottom: 10px;text-decoration: underline; color: #099;\">Shivshakti.bhardwaj@tricolite.com</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td style=\"padding-bottom: 10px;\">+91-99589 98161 – Mr. Pawan Kumar – for AMC/Paid Services</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td style=\"text-decoration: underline; color: #099;\">Pawan.kumar@tricolite.com</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style=\"background: #ffffff; width: 100px; text-align:center; padding: 8px;\">LEVEL 3</td>\r\n\t\t\t\t\t<td style=\"background: #ffffff; text-align:center; padding: 8px;\">\r\n\t\t\t\t\t\t<table style=\"border-collapse:collapse; text-align: left;\">\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td style=\"padding-bottom: 10px;\">Mr. Sanjay Gupta- for LV Panel Services</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td style=\"padding-bottom: 10px;text-decoration: underline; color: #099;\">Sanjay@tricolite.com</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td style=\"padding-bottom: 10px;\">Mr. DK Singh- for HT Panel Services</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td style=\"padding-bottom: 10px;text-decoration: underline; color: #099;\">dk.singh@tricolite.com</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</td>\r\n\t</tr>\r\n</table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/projectdetail/contactpersonmodel/contactpersonmodel.page.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/projectdetail/contactpersonmodel/contactpersonmodel.page.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomer_appProjectdetailContactpersonmodelContactpersonmodelPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"cs-modal-container\">\r\n    <div class=\"modal-container align-center\">\r\n        <div class=\"main-figure\">\r\n            <div class=\"cs-modal-body\">\r\n                <form [formGroup]=\"cpForm\" (ngSubmit)=\"onSaveHandler()\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"common_form shadow-none padding0\">\r\n                            <div class=\"heading\"><h1>Add Contact Person</h1></div>\r\n                            \r\n                            <ion-item [ngClass]=\"{'has-text': cpForm.get('cpName').hasError('required') && cpForm.get('cpName').touched}\">\r\n                                <ion-label position=\"floating\">Name</ion-label>\r\n                                <ion-input formControlName=\"cpName\"></ion-input>\r\n\r\n                                <ion-text  class=\"cs-error\" *ngIf=\"cpForm.get('cpName').hasError('required') && cpForm.get('cpName').touched\">\r\n                                    This Field is Required\r\n                                </ion-text>\r\n                            </ion-item>\r\n                            \r\n                            <ion-item [ngClass]=\"{'has-text': cpForm.get('cpMobile').hasError('required') && cpForm.get('cpMobile').touched}\">\r\n                                <ion-label position=\"floating\">Mobile No.</ion-label>\r\n                                <ion-input type=\"tel\" formControlName=\"cpMobile\"></ion-input>\r\n\r\n                                <ion-text class=\"cs-error\" *ngIf=\"cpForm.get('cpMobile').hasError('required') && cpForm.get('cpMobile').touched\">\r\n                                    This Field is Required\r\n                                </ion-text>\r\n\r\n                                <ion-text class=\"cs-error\" *ngIf=\"cpForm.get('cpMobile').hasError('minlength') || cpForm.get('cpMobile').hasError('maxlength')\">\r\n                                    Mobile No. must be at least 10 Digit.\r\n                                </ion-text>\r\n                            </ion-item>\r\n                            \r\n                            <ion-item [ngClass]=\"{'has-text': cpForm.get('cpDesignation').hasError('required') && cpForm.get('cpDesignation').touched}\">\r\n                                <ion-label position=\"floating\">Designation</ion-label>\r\n                                <ion-input formControlName=\"cpDesignation\"></ion-input>\r\n\r\n                                <ion-text class=\"cs-error\" *ngIf=\"cpForm.get('cpDesignation').hasError('required') && cpForm.get('cpDesignation').touched\">\r\n                                    This Field is Required\r\n                                </ion-text>\r\n                            </ion-item>\r\n                            \r\n                            <ion-item [ngClass]=\"{'has-text': cpForm.get('cpEmail').hasError('required') && cpForm.get('cpEmail').touched}\">\r\n                                <ion-label position=\"floating\">Email</ion-label>\r\n                                <ion-input type=\"email\" formControlName=\"cpEmail\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"></ion-input>\r\n\r\n                                <ion-text class=\"cs-error\" *ngIf=\"cpForm.get('cpEmail').hasError('required') && cpForm.get('cpEmail').touched\">\r\n                                    This Field is Required\r\n                                </ion-text>\r\n\r\n                                <ion-text class=\"cs-error\" *ngIf=\"cpForm.get('cpEmail').hasError('pattern')\">\r\n                                    Enter a valid Email\r\n                                </ion-text>\r\n                            </ion-item>\r\n                        </div>\r\n                        \r\n                        <div class=\"cs-btn mt16 lr\">\r\n                            <ion-button type=\"submit\" class=\"success min w100\" >SAVE</ion-button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-close model-cross\">\r\n                <ion-button color=\"danger\" (click)=\"dismiss()\"><ion-icon name=\"close\"></ion-icon></ion-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/request-popover/request-popover.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/request-popover/request-popover.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomer_appService_requestRequestPopoverRequestPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"cs-popover\">\r\n\r\n    <ion-button *ngIf=\"taskPopUpData && taskPopUpData.taskInstalledPartCount && taskPopUpData.taskInstalledPartCount != 0\" fill=\"clear\" (click)=\"GoToSpare()\" (click)=\"DismissClick()\"><div><img src=\"assets/icon/add_remark.svg\" alt=\"\">Spare Part</div></ion-button>\r\n\r\n    <ion-button fill=\"clear\"  (click)=\"GoToImages()\"   (click)=\"DismissClick()\"><div><img src=\"assets/icon/view_service_report.svg\" alt=\"\">Images</div></ion-button>\r\n\r\n    <ion-button *ngIf=\"taskPopUpData && taskPopUpData.taskReportCount && taskPopUpData.taskReportCount != 0\" fill=\"clear\"><div><img src=\"assets/icon/mail_service_report.svg\" alt=\"\">View Service Report</div></ion-button>\r\n\r\n    <ion-button fill=\"clear\" *ngIf=\"taskPopUpData && taskPopUpData.status && taskPopUpData.status != 'Cancel'\" (click)=\"onCancelComplaintHandler()\"><div><img src=\"assets/icon/cancel-complaint.svg\" alt=\"\">Cancel Request</div></ion-button>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/imagemodal/imagemodal.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imagemodal/imagemodal.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppImagemodalImagemodalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content style=\"display: none;\">\r\n  <div class=\"login-container\">\r\n      <div class=\"logo\"><img src=\"../../assets/img/logo.jpg\" alt=\"\"></div>\r\n      \r\n      <div class=\"form-container\">\r\n          \r\n          <div class=\"head\">\r\n              \r\n              <div class=\"heading\">\r\n                  \r\n                  <h1>PANEL NAME PLATE</h1>\r\n                  \r\n                  <ion-button fill=\"clear\" routerLink=\"/registration\" routerDirection=\"\">\r\n                      <i class=\"material-icons\">arrow_right_alt</i> Back</ion-button>\r\n                      \r\n                  </div>\r\n                  \r\n                \r\n                  \r\n              </div>\r\n              \r\n              <div class=\"input-container\">\r\n                <div class=\"pop-imge\">\r\n                  <img src=\"../../assets/img/panel.jpg\">\r\n                 \r\n              \r\n              </div>\r\n              \r\n                \r\n                 \r\n                  \r\n              </div>\r\n          </div>\r\n      </div>\r\n      \r\n  </ion-content>\r\n  <ion-content class=\"cs-modal-container\">\r\n    <div class=\"modal-container\">\r\n        <div class=\"main-figure\">\r\n            <div class=\"cs-modal-body\">\r\n                <div class=\"modal-content\">\r\n                    <img src=\"../../assets/img/panel.jpg\">\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-close\">\r\n                <ion-button color=\"danger\" (click)=\"dismiss()\"><ion-icon name=\"close\"></ion-icon></ion-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/signaturemodal/signaturemodal.page.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/signaturemodal/signaturemodal.page.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTechnician_appComplaintsSignaturemodalSignaturemodalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"cs-modal-container\">\r\n    <div class=\"modal-container\">\r\n        <div class=\"main-figure\">\r\n            <div class=\"cs-modal-body\">\r\n                    <signature-pad [options]=\"signaturePadOptions\"  id=\"signatureCanvas\"></signature-pad>\r\n\r\n                    <div class=\"cs-btn mt16 lr\">\r\n\r\n                        <ion-button (click)=\"drawClear()\" class=\"dark min w100 clear border\" fill=\"clear\">Clear</ion-button>\r\n\r\n                        <ion-button (click)=\"drawComplete()\" class=\"success min w100\">Apply</ion-button>\r\n\r\n                    </div>\r\n            </div>\r\n            <div class=\"modal-close\">\r\n                <ion-button color=\"danger\" (click)=\"dismiss()\"><ion-icon name=\"close\"></ion-icon></ion-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTechnician_appComplaintsTecCompliantPopoverTecCompliantPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"cs-popover\">\r\n    \r\n    <ion-button fill=\"clear\" (click)=\"GoToRemarks()\" (click)=\"DismissClick()\"><div><img src=\"assets/icon/spare_parts.svg\" alt=\"\"> Remark</div></ion-button>\r\n    \r\n    <!-- <ion-button fill=\"clear\" (click)=\"GoToStatus()\" (click)=\"DismissClick()\"><div><img src=\"assets/icon/change_status.svg\" alt=\"\">Status</div></ion-button> -->\r\n    \r\n    <ion-button fill=\"clear\" (click)=\"GoToSpareParts()\" (click)=\"DismissClick()\"><div><img src=\"assets/icon/add_remark.svg\" alt=\"\"> Assigned Material Details</div></ion-button>\r\n    \r\n    <ion-button fill=\"clear\"  (click)=\"GoToImages()\"   (click)=\"DismissClick()\"><div><img src=\"assets/icon/view_service_report.svg\" alt=\"\">Images</div></ion-button>\r\n    \r\n    <!-- <ion-button fill=\"clear\" (click)=\"GoToReport('dailyReport')\" (click)=\"DismissClick()\"><div><img src=\"assets/icon/export_service_report.svg\" alt=\"\">Daily Report</div></ion-button> -->\r\n    \r\n    <ion-button  *ngFor=\"let row of taskPopUpData.taskWorkReport\" fill=\"clear\" [hidden]=\"!taskPopUpData || !taskPopUpData.taskReportCount || taskPopUpData.taskReportCount  == 0\" (click)=\"GoToServiceReport(row.id)\"><div><img src=\"assets/icon/report.svg\" alt=\"\" class=\"h20\">Service Report ({{row.date_created | date: 'dd MMM yyyy'}})</div></ion-button>\r\n    \r\n    <ion-button (click)=\"GoToReport('checkListReport')\" *ngIf=\"routeType == 'commissioning'\" (click)=\"DismissClick()\" fill=\"clear\"><div><img src=\"assets/icon/checkmark.svg\" alt=\"\" class=\"h20\">Check List</div></ion-button>\r\n    \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/home/home.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/home/home.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTechnician_appHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n    <div class=\"dashboard_cnt\">\r\n        <div class=\"cs-header\" padding>\r\n            <div class=\"logo\"><img src=\"assets/img/logo.jpg\" alt=\"\"></div>\r\n            \r\n            <div class=\"profile-segment mt16\">\r\n                <div class=\"pr-icon\">\r\n                    <div *ngIf=\"!profileData.image_url\" class=\"cs-icon\"></div>\r\n                    \r\n                    <div *ngIf=\"profileData.image_url\" class=\"cs-thumb\">\r\n                        <img  src=\"{{dbService.userDocURL + profileData.image_url}}\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"dashboardData && dashboardData['loginData']\" class=\"info\">\r\n                    <ion-text color=\"light\">{{dashboardData['loginData']['name']}}<br><span>{{dashboardData['loginData']['mobile']}}</span></ion-text>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div *ngIf=\"dashboardData\" class=\"dashboard_container\">\r\n        <div class=\"top-counters\">\r\n            <div class=\"figure\">\r\n                <div routerLink=\"/technicians/complaints\">\r\n                    <h1>{{dashboardData.typeTotalCount1}}</h1>\r\n                    <ion-text>< 5 Day</ion-text>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"figure\">\r\n                <div routerLink=\"{{dashboardData.typeTotalCount2 && dashboardData.typeTotalCount2 != '0' ? '/technicians/complaints' : ''}}\">\r\n                    <h1>{{dashboardData.typeTotalCount2}}</h1>\r\n                    <ion-text>5 - 10 Day</ion-text>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"figure\">\r\n                <div routerLink=\"{{dashboardData.typeTotalCount3 && dashboardData.typeTotalCount3 != '0' ? '/technicians/complaints' : ''}}\">\r\n                    <h1>{{dashboardData.typeTotalCount3}}</h1>\r\n                    <ion-text>> 10 Day</ion-text>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n\r\n        \r\n        \r\n        <div class=\"midd-counters\">\r\n\r\n            <ion-button (click)= \"onDashboardCountClickHandler('freeTask')\" routerLink=\"/technicians/complaints\" *ngIf=\"dashboardData.freeServiceTask && dashboardData.freeServiceTask != '0'\" fill=\"clear\" class=\"free\">\r\n                <div class=\"figure\">\r\n                    <div class=\"count\"><ion-text>{{dashboardData.freeServiceTask}}</ion-text> Request</div>\r\n                    <div class=\"pr-section\">\r\n                        <h1>Under  <ion-text>warranty</ion-text></h1>\r\n                        <i class=\"material-icons\">keyboard_arrow_right</i>\r\n                    </div>\r\n                </div>\r\n            </ion-button>\r\n\r\n            <ion-button (click)= \"onDashboardCountClickHandler('freeTask')\" *ngIf=\"!dashboardData.freeServiceTask ||dashboardData.freeServiceTask == '0'\" fill=\"clear\" class=\"free\">\r\n                <div class=\"figure\">\r\n                    <div class=\"count\"><ion-text>{{dashboardData.freeServiceTask}}</ion-text> Request</div>\r\n                    <div class=\"pr-section\">\r\n                        <h1>Under  <ion-text>warranty</ion-text></h1>\r\n                        <i class=\"material-icons\">keyboard_arrow_right</i>\r\n                    </div>\r\n                </div>\r\n            </ion-button>\r\n\r\n            <ion-button (click)= \"onDashboardCountClickHandler('paidTask')\" routerLink=\"/technicians/complaints\" *ngIf=\"dashboardData.paidServiceTask && dashboardData.paidServiceTask != '0'\" fill=\"clear\" class=\"paid\">\r\n                <div class=\"figure\">\r\n                    <div class=\"count\"><ion-text>{{dashboardData.paidServiceTask}}</ion-text> Request</div>\r\n                    <div class=\"pr-section\">\r\n                        <h1>Out <ion-text>of warranty </ion-text></h1>\r\n                        <i class=\"material-icons\">keyboard_arrow_right</i>\r\n                    </div>\r\n                </div>\r\n            </ion-button>\r\n\r\n            <ion-button (click)= \"onDashboardCountClickHandler('paidTask')\" *ngIf=\"!dashboardData.paidServiceTask ||dashboardData.paidServiceTask == '0'\" fill=\"clear\" class=\"paid\">\r\n                <div class=\"figure\">\r\n                    <div class=\"count\"><ion-text>{{dashboardData.paidServiceTask}}</ion-text> Request</div>\r\n                    <div class=\"pr-section\">\r\n                        <h1>Out <ion-text>of warranty </ion-text></h1>\r\n                        <i class=\"material-icons\">keyboard_arrow_right</i>\r\n                    </div>\r\n                </div>\r\n            </ion-button>\r\n\r\n            <ion-button routerLink=\"/technicians/commissioning\" *ngIf=\"dashboardData.commissioningTask && dashboardData.commissioningTask != '0'\" fill=\"clear\" class=\"default\">\r\n                <div class=\"figure\">\r\n                    <div class=\"count\"><ion-text>{{dashboardData.commissioningTask}}</ion-text> Task</div>\r\n                    <div class=\"pr-section\">\r\n                        <h1>Commissioning</h1>\r\n                        <i class=\"material-icons\">keyboard_arrow_right</i>\r\n                    </div>\r\n                </div>\r\n            </ion-button>\r\n\r\n            <ion-button *ngIf=\"!dashboardData.commissioningTask || dashboardData.commissioningTask == '0' \" fill=\"clear\" class=\"default\">\r\n                <div class=\"figure\">\r\n                    <div class=\"count\"><ion-text>{{dashboardData.commissioningTask}}</ion-text> Task</div>\r\n                    <div class=\"pr-section\">\r\n                        <h1>Commissioning</h1>\r\n                        <i class=\"material-icons\">keyboard_arrow_right</i>\r\n                    </div>\r\n                </div>\r\n            </ion-button>\r\n        </div>\r\n        \r\n        <!-- <div class=\"cs-btn give_feedback mt32\">\r\n            <ion-button class=\"round large\" fill=\"clear\" expand=\"full\">\r\n                <div class=\"figure\">\r\n                    <h1>Give Your Feedback</h1>\r\n                    <i class=\"material-icons\">arrow_right_alt</i>\r\n                </div>\r\n            </ion-button>\r\n        </div> -->\r\n    </div>\r\n    \r\n    \r\n</ion-content>\r\n";
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
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
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

    var routes = [{
      path: 'loginType',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | logintype-logintype-module */
        "logintype-logintype-module").then(__webpack_require__.bind(null,
        /*! ./logintype/logintype.module */
        "./src/app/logintype/logintype.module.ts")).then(function (m) {
          return m.LogintypePageModule;
        });
      }
    }, {
      path: 'imagemodal',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./imagemodal/imagemodal.module */
        "./src/app/imagemodal/imagemodal.module.ts")).then(function (m) {
          return m.ImagemodalPageModule;
        });
      }
    }, {
      path: 'techlogin',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | technician_app-login-login-module */
        "technician_app-login-login-module").then(__webpack_require__.bind(null,
        /*! ./technician_app/login/login.module */
        "./src/app/technician_app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'technicians',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | technician_app-tabs-tabs-module */
        "technician_app-tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./technician_app/tabs/tabs.module */
        "./src/app/technician_app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'forgotpassword',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | technician_app-forgotpassword-forgotpassword-module */
        "technician_app-forgotpassword-forgotpassword-module").then(__webpack_require__.bind(null,
        /*! ./technician_app/forgotpassword/forgotpassword.module */
        "./src/app/technician_app/forgotpassword/forgotpassword.module.ts")).then(function (m) {
          return m.ForgotpasswordPageModule;
        });
      }
    }, // =================================
    // =================================
    // ================================= Customer APP Routing Start
    // =================================
    // =================================
    // {
    //   path: 'customer',
    //   loadChildren: () => import('./customer_app/tabs/tabs.module').then(m => m.TabsPageModule)
    // },
    {
      path: 'customer',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | customer_app-customertabs-customertabs-module */
        "customer_app-customertabs-customertabs-module").then(__webpack_require__.bind(null,
        /*! ./customer_app/customertabs/customertabs.module */
        "./src/app/customer_app/customertabs/customertabs.module.ts")).then(function (m) {
          return m.CustomertabsPageModule;
        });
      }
    }, {
      path: 'customerlogin',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | customer_app-login-login-module */
        "customer_app-login-login-module").then(__webpack_require__.bind(null,
        /*! ./customer_app/login/login.module */
        "./src/app/customer_app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'registration',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | customer_app-registration-registration-module */
        "customer_app-registration-registration-module").then(__webpack_require__.bind(null,
        /*! ./customer_app/registration/registration.module */
        "./src/app/customer_app/registration/registration.module.ts")).then(function (m) {
          return m.RegistrationPageModule;
        });
      }
    }, // {
    //   path: 'customerprofile',
    //   loadChildren: () => import('./customer_app/customerprofile/customerprofile.module').then( m => m.CustomerprofilePageModule)
    // },
    // {
    //   path: 'callrequest',
    //   loadChildren: () => import('./customer_app/callrequest/callrequest.module').then( m => m.CallrequestPageModule)
    // },
    // {
    //   path: 'customerdocuments',
    //   loadChildren: () => import('./customer_app/customerdocuments/customerdocuments.module').then( m => m.CustomerdocumentsPageModule)
    // },
    {
      path: 'changepassword',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | customer_app-changepassword-changepassword-module */
        "customer_app-changepassword-changepassword-module").then(__webpack_require__.bind(null,
        /*! ./customer_app/changepassword/changepassword.module */
        "./src/app/customer_app/changepassword/changepassword.module.ts")).then(function (m) {
          return m.ChangepasswordPageModule;
        });
      }
    }, {
      path: 'aboutus',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | customer_app-aboutus-aboutus-module */
        "aboutus-aboutus-module").then(__webpack_require__.bind(null,
        /*! ./customer_app/aboutus/aboutus.module */
        "./src/app/customer_app/aboutus/aboutus.module.ts")).then(function (m) {
          return m.AboutusPageModule;
        });
      }
    }, {
      path: 'customer_forgotpassword',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | customer_app-forgotpassword-forgotpassword-module */
        "customer_app-forgotpassword-forgotpassword-module").then(__webpack_require__.bind(null,
        /*! ./customer_app/forgotpassword/forgotpassword.module */
        "./src/app/customer_app/forgotpassword/forgotpassword.module.ts")).then(function (m) {
          return m.ForgotpasswordPageModule;
        });
      }
    }, {
      path: 'contactpersonmodel',
      // tslint:disable-next-line:max-line-length
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./customer_app/projectdetail/contactpersonmodel/contactpersonmodel.module */
        "./src/app/customer_app/projectdetail/contactpersonmodel/contactpersonmodel.module.ts")).then(function (m) {
          return m.ContactpersonmodelPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
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
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/db-service.service */
    "./src/app/db-service.service.ts");
    /* harmony import */


    var _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/push/ngx */
    "./node_modules/@ionic-native/push/ngx/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, route, location, formBuilder, alertCtrl, dbService, push) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.route = route;
        this.location = location;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.dbService = dbService;
        this.push = push;
        this.navLinksArray = [];
        this.initializeApp(); // this.initPushNotification();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            var loginData = JSON.parse(localStorage.getItem('loginData'));
            console.log(loginData);

            if (loginData && loginData["loginId"]) {
              var inputData = {};

              _this.dbService.presentLoader();

              _this.dbService.onPostRequestHandler(inputData, 'login/onValidateLoginById').subscribe(function (result) {
                console.log(result);
                setTimeout(function () {
                  _this.dbService.dismissLoader();
                }, 3000);

                if (result["status"] == 'error') {
                  localStorage.removeItem('loginData');

                  _this.route.navigate(['/loginType']);
                } else {
                  var updatedLoginData = {
                    loginType: result["loginType"],
                    loginId: result["loginId"],
                    loginName: result["loginName"],
                    loginStatus: result["loginStatus"]
                  };
                  localStorage.setItem('loginData', JSON.stringify(updatedLoginData));

                  if (loginData["loginType"] == 'Technician') {
                    _this.route.navigate(['/technicians']);
                  }

                  if (loginData["loginType"] == 'Customer') {
                    _this.route.navigate(['/customer']);
                  }
                }
              });
            } else {
              _this.route.navigate(['/loginType']);
            }

            _this.platform.backButton.subscribeWithPriority(0, function () {
              console.log('hello');
              console.log(_this.route.url); // tslint:disable-next-line:max-line-length

              if (_this.route.url === '/loginType' || _this.route.url === '/technicians/home' || _this.route.url === '/customer/home' || _this.route.url == '/customer/aboutus') {
                if (_this.dbService.backButton == 0) {
                  console.log('hello2');
                  _this.dbService.backButton = 1;

                  _this.dbService.presentToast('Press again to exit!');

                  setTimeout(function () {
                    _this.dbService.backButton = 0;
                  }, 2500);
                } else {
                  console.log('hello1');
                  navigator["app"].exitApp();
                } // tslint:disable-next-line:max-line-length triple-equals

              } else if (_this.route.url === '/technicians/complaints' || _this.route.url == '/technicians/commissioning' || _this.route.url == '/technicians/menu') {
                _this.route.navigateByUrl('/technicians/home'); // tslint:disable-next-line:triple-equals

              } else if (_this.route.url === '/customer/request' || _this.route.url == '/customer/projects') {
                _this.route.navigateByUrl('/customer/home');
              } else {
                _this.location.back();
              }
            });
          });
        }
      }, {
        key: "initPushNotification",
        value: function initPushNotification() {
          var _this2 = this;

          this.push.hasPermission().then(function (res) {
            if (res.isEnabled) {
              console.log('We have permission to send push notifications');
            } else {
              console.log('We don\'t have permission to send push notifications');
            }
          }); // to initialize push notifications

          var options = {
            android: {
              senderID: '590596859248',
              icon: './assets/imgs/logo_small'
            },
            ios: {
              alert: 'true',
              badge: true,
              sound: 'false'
            },
            windows: {}
          };
          var pushObject = this.push.init(options);
          pushObject.on('notification').subscribe(function (notification) {
            console.log('Received a notification', notification); // Notification Display Section

            var confirmAlert = _this2.alertCtrl.create({
              message: JSON.stringify(notification.message),
              buttons: [{
                text: 'Ignore',
                role: 'cancel'
              }, {
                text: 'View',
                handler: function handler() {
                  // TODO: Your logic here
                  console.log('View Notification');
                }
              }]
            });
          });
          pushObject.on('registration').subscribe(function (registration) {
            console.log('Device registered', registration);
            console.log('Device Token', registration.registrationId); // this.dbService.onPostRequestHandler({'registration_id':registration.registrationId },'task/update_token_static')
            // .subscribe((r)=>
            // {
            //   console.log(r);
            // });
          });
          pushObject.on('error').subscribe(function (error) {
            return console.error('Error with Push plugin', error);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_7__["DbServiceService"]
      }, {
        type: _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_8__["Push"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"])], AppComponent.prototype, "routerOutlets", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_7__["DbServiceService"], _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_8__["Push"]])], AppComponent);
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _technician_app_complaints_tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component */
    "./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.ts");
    /* harmony import */


    var _customer_app_service_request_request_popover_request_popover_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./customer_app/service_request/request-popover/request-popover.component */
    "./src/app/customer_app/service_request/request-popover/request-popover.component.ts");
    /* harmony import */


    var _customer_app_confirmmodal_confirmmodal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./customer_app/confirmmodal/confirmmodal.module */
    "./src/app/customer_app/confirmmodal/confirmmodal.module.ts");
    /* harmony import */


    var _technician_app_complaints_signaturemodal_signaturemodal_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./technician_app/complaints/signaturemodal/signaturemodal.module */
    "./src/app/technician_app/complaints/signaturemodal/signaturemodal.module.ts");
    /* harmony import */


    var _complaintfiltermodal_complaintfiltermodal_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./complaintfiltermodal/complaintfiltermodal.module */
    "./src/app/complaintfiltermodal/complaintfiltermodal.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ionic_selectable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ionic-selectable */
    "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
    /* harmony import */


    var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/diagnostic/ngx */
    "./node_modules/@ionic-native/diagnostic/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/ngx/index.js");
    /* harmony import */


    var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/base64/ngx */
    "./node_modules/@ionic-native/base64/ngx/index.js");
    /* harmony import */


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
    /* harmony import */


    var _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/push/ngx */
    "./node_modules/@ionic-native/push/ngx/index.js");
    /* harmony import */


    var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! angular2-signaturepad */
    "./node_modules/angular2-signaturepad/index.js");
    /* harmony import */


    var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(angular2_signaturepad__WEBPACK_IMPORTED_MODULE_23__);
    /* harmony import */


    var _customer_app_projectdetail_contactpersonmodel_contactpersonmodel_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./customer_app/projectdetail/contactpersonmodel/contactpersonmodel.module */
    "./src/app/customer_app/projectdetail/contactpersonmodel/contactpersonmodel.module.ts");
    /* harmony import */


    var _technician_app_home_home_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./technician_app/home/home.page */
    "./src/app/technician_app/home/home.page.ts");
    /* harmony import */


    var _customer_app_escalationdetail_escalationdetail_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./customer_app/escalationdetail/escalationdetail.module */
    "./src/app/customer_app/escalationdetail/escalationdetail.module.ts");
    /* harmony import */


    var _imagemodal_imagemodal_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./imagemodal/imagemodal.module */
    "./src/app/imagemodal/imagemodal.module.ts"); // import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _technician_app_complaints_tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_10__["TecCompliantPopoverComponent"], _customer_app_service_request_request_popover_request_popover_component__WEBPACK_IMPORTED_MODULE_11__["RequestPopoverComponent"]],
      entryComponents: [_technician_app_complaints_tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_10__["TecCompliantPopoverComponent"], _customer_app_service_request_request_popover_request_popover_component__WEBPACK_IMPORTED_MODULE_11__["RequestPopoverComponent"]],
      imports: [_imagemodal_imagemodal_module__WEBPACK_IMPORTED_MODULE_27__["ImagemodalPageModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _customer_app_confirmmodal_confirmmodal_module__WEBPACK_IMPORTED_MODULE_12__["ConfirmmodalPageModule"], _customer_app_projectdetail_contactpersonmodel_contactpersonmodel_module__WEBPACK_IMPORTED_MODULE_24__["ContactpersonmodelPageModule"], _complaintfiltermodal_complaintfiltermodal_module__WEBPACK_IMPORTED_MODULE_14__["ComplaintfiltermodalPageModule"], _technician_app_complaints_signaturemodal_signaturemodal_module__WEBPACK_IMPORTED_MODULE_13__["SignaturemodalPageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_16__["IonicSelectableModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_23__["SignaturePadModule"], _customer_app_escalationdetail_escalationdetail_module__WEBPACK_IMPORTED_MODULE_26__["EscalationdetailPageModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_18__["Camera"], _technician_app_home_home_page__WEBPACK_IMPORTED_MODULE_25__["HomePage"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_17__["Diagnostic"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_19__["ImagePicker"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_20__["Base64"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_21__["PhotoViewer"], _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_22__["Push"], // DocumentViewer,
      {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/complaintfiltermodal/complaintfiltermodal-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/complaintfiltermodal/complaintfiltermodal-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ComplaintfiltermodalPageRoutingModule */

  /***/
  function srcAppComplaintfiltermodalComplaintfiltermodalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComplaintfiltermodalPageRoutingModule", function () {
      return ComplaintfiltermodalPageRoutingModule;
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


    var _complaintfiltermodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./complaintfiltermodal.page */
    "./src/app/complaintfiltermodal/complaintfiltermodal.page.ts");

    var routes = [{
      path: 'filterModal',
      component: _complaintfiltermodal_page__WEBPACK_IMPORTED_MODULE_3__["ComplaintfiltermodalPage"]
    }];

    var ComplaintfiltermodalPageRoutingModule = function ComplaintfiltermodalPageRoutingModule() {
      _classCallCheck(this, ComplaintfiltermodalPageRoutingModule);
    };

    ComplaintfiltermodalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ComplaintfiltermodalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/complaintfiltermodal/complaintfiltermodal.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/complaintfiltermodal/complaintfiltermodal.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ComplaintfiltermodalPageModule */

  /***/
  function srcAppComplaintfiltermodalComplaintfiltermodalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComplaintfiltermodalPageModule", function () {
      return ComplaintfiltermodalPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _complaintfiltermodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./complaintfiltermodal-routing.module */
    "./src/app/complaintfiltermodal/complaintfiltermodal-routing.module.ts");
    /* harmony import */


    var _complaintfiltermodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./complaintfiltermodal.page */
    "./src/app/complaintfiltermodal/complaintfiltermodal.page.ts");

    var ComplaintfiltermodalPageModule = function ComplaintfiltermodalPageModule() {
      _classCallCheck(this, ComplaintfiltermodalPageModule);
    };

    ComplaintfiltermodalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _complaintfiltermodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComplaintfiltermodalPageRoutingModule"]],
      declarations: [_complaintfiltermodal_page__WEBPACK_IMPORTED_MODULE_6__["ComplaintfiltermodalPage"]]
    })], ComplaintfiltermodalPageModule);
    /***/
  },

  /***/
  "./src/app/complaintfiltermodal/complaintfiltermodal.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/complaintfiltermodal/complaintfiltermodal.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComplaintfiltermodalComplaintfiltermodalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBsYWludGZpbHRlcm1vZGFsL2NvbXBsYWludGZpbHRlcm1vZGFsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/complaintfiltermodal/complaintfiltermodal.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/complaintfiltermodal/complaintfiltermodal.page.ts ***!
    \*******************************************************************/

  /*! exports provided: ComplaintfiltermodalPage */

  /***/
  function srcAppComplaintfiltermodalComplaintfiltermodalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComplaintfiltermodalPage", function () {
      return ComplaintfiltermodalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/db-service.service */
    "./src/app/db-service.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

    var ComplaintfiltermodalPage = /*#__PURE__*/function () {
      function ComplaintfiltermodalPage(modalCtrl, route, formBuilder, alertCtrl, navParams, modalController, dbService) {
        _classCallCheck(this, ComplaintfiltermodalPage);

        this.modalCtrl = modalCtrl;
        this.route = route;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.modalController = modalController;
        this.dbService = dbService;
        this.priorityList = [];
        this.complaintTypeList = [];
        this.statusList = [{
          name: 'Open',
          checked: false
        }, {
          name: 'Pending',
          checked: false
        }, {
          name: 'Running',
          checked: false
        }, {
          name: 'Hold',
          checked: false
        }, {
          name: 'Close',
          checked: false
        }];
        this.data = {};
        this.currentActiveTab = 1;
        this.currentDate = '';
        this.minDate = '';
        this.data.range = 0;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD');
        this.searchData = this.navParams.get('searchData');
        console.log(this.searchData);

        if (this.searchData && this.searchData.priorityList && this.searchData.priorityList.length) {
          if (this.searchData.dateFrom) {
            this.data.dateFrom = new Date(this.searchData.dateFrom);
            this.data.dateTo = new Date(this.searchData.dateTo);
            this.minDate = moment__WEBPACK_IMPORTED_MODULE_6__(this.searchData.dateFrom).format('YYYY-MM-DD');
          }

          if (this.searchData.range) {
            this.data.range = this.searchData.range;
          }

          this.priorityList = this.searchData.priorityList;
          this.complaintTypeList = this.searchData.complaintTypeList;
          this.statusList = this.searchData.statusList;
        } else {
          this.getPriorityList();
          this.getComplaintTypeList();
        }
      }

      _createClass(ComplaintfiltermodalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onRemoveAllFilterHandler",
        value: function onRemoveAllFilterHandler() {
          this.data.dateFrom = '';
          this.data.dateTo = '';
          this.data.range = 0;

          for (var index = 0; index < this.priorityList.length; index++) {
            this.priorityList[index].checked = false;
          }

          for (var _index = 0; _index < this.complaintTypeList.length; _index++) {
            this.complaintTypeList[_index].checked = false;
          }

          for (var _index2 = 0; _index2 < this.statusList.length; _index2++) {
            this.statusList[_index2].checked = false;
          }

          this.dbService.presentToast('Filter Cleared!');
        }
      }, {
        key: "onDateFromChangeHandler",
        value: function onDateFromChangeHandler() {
          this.data.range = 0;
          this.minDate = moment__WEBPACK_IMPORTED_MODULE_6__(this.data.dateFrom).format('YYYY-MM-DD');
        }
      }, {
        key: "onApplyFilterHandler",
        value: function onApplyFilterHandler() {
          var filterData = JSON.parse(JSON.stringify(this.data));

          if (this.data.dateFrom && !this.data.dateTo || !this.data.dateFrom && this.data.dateTo) {
            this.dbService.onShowAlertMessage('Error', 'Date Missing!');
            return;
          }

          if (this.data.dateFrom && this.data.dateTo) {
            filterData["dateFrom"] = moment__WEBPACK_IMPORTED_MODULE_6__(this.data.dateFrom).format('YYYY-MM-DD');
            filterData["dateTo"] = moment__WEBPACK_IMPORTED_MODULE_6__(this.data.dateTo).format('YYYY-MM-DD');
          }

          filterData["priorityList"] = this.priorityList;
          filterData["complaintTypeList"] = this.complaintTypeList;
          filterData["statusList"] = this.statusList;
          this.modalCtrl.dismiss({
            'dismissed': true,
            data: filterData
          });
        }
      }, {
        key: "getPriorityList",
        value: function getPriorityList() {
          var _this3 = this;

          this.dbService.presentLoader();
          var inputData = {};
          this.dbService.onPostRequestHandler(inputData, 'task/getPriorityList').subscribe(function (result) {
            console.log(result);

            _this3.dbService.dismissLoader();

            _this3.priorityList = result["priorityList"];
          });
        }
      }, {
        key: "getComplaintTypeList",
        value: function getComplaintTypeList() {
          var _this4 = this;

          var inputData = {};
          this.dbService.onPostRequestHandler(inputData, 'task/getComplaintTypeList').subscribe(function (result) {
            console.log(result);
            _this4.complaintTypeList = result["complaintTypeList"];
          });
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
      }]);

      return ComplaintfiltermodalPage;
    }();

    ComplaintfiltermodalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ComplaintfiltermodalPage.prototype, "searchData", void 0);
    ComplaintfiltermodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-complaintfiltermodal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./complaintfiltermodal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/complaintfiltermodal/complaintfiltermodal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./complaintfiltermodal.page.scss */
      "./src/app/complaintfiltermodal/complaintfiltermodal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])], ComplaintfiltermodalPage);
    /***/
  },

  /***/
  "./src/app/customer_app/confirmmodal/confirmmodal-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/customer_app/confirmmodal/confirmmodal-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ConfirmmodalPageRoutingModule */

  /***/
  function srcAppCustomer_appConfirmmodalConfirmmodalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmmodalPageRoutingModule", function () {
      return ConfirmmodalPageRoutingModule;
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


    var _confirmmodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./confirmmodal.page */
    "./src/app/customer_app/confirmmodal/confirmmodal.page.ts");

    var routes = [{
      path: 'confirmModal',
      component: _confirmmodal_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmmodalPage"]
    }];

    var ConfirmmodalPageRoutingModule = function ConfirmmodalPageRoutingModule() {
      _classCallCheck(this, ConfirmmodalPageRoutingModule);
    };

    ConfirmmodalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConfirmmodalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/customer_app/confirmmodal/confirmmodal.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/customer_app/confirmmodal/confirmmodal.module.ts ***!
    \******************************************************************/

  /*! exports provided: ConfirmmodalPageModule */

  /***/
  function srcAppCustomer_appConfirmmodalConfirmmodalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmmodalPageModule", function () {
      return ConfirmmodalPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _confirmmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./confirmmodal-routing.module */
    "./src/app/customer_app/confirmmodal/confirmmodal-routing.module.ts");
    /* harmony import */


    var _confirmmodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./confirmmodal.page */
    "./src/app/customer_app/confirmmodal/confirmmodal.page.ts");

    var ConfirmmodalPageModule = function ConfirmmodalPageModule() {
      _classCallCheck(this, ConfirmmodalPageModule);
    };

    ConfirmmodalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confirmmodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmmodalPageRoutingModule"]],
      declarations: [_confirmmodal_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmmodalPage"]]
    })], ConfirmmodalPageModule);
    /***/
  },

  /***/
  "./src/app/customer_app/confirmmodal/confirmmodal.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/customer_app/confirmmodal/confirmmodal.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomer_appConfirmmodalConfirmmodalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9jb25maXJtbW9kYWwvY29uZmlybW1vZGFsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/customer_app/confirmmodal/confirmmodal.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/customer_app/confirmmodal/confirmmodal.page.ts ***!
    \****************************************************************/

  /*! exports provided: ConfirmmodalPage */

  /***/
  function srcAppCustomer_appConfirmmodalConfirmmodalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmmodalPage", function () {
      return ConfirmmodalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var ConfirmmodalPage = /*#__PURE__*/function () {
      function ConfirmmodalPage(modalCtrl) {
        _classCallCheck(this, ConfirmmodalPage);

        this.modalCtrl = modalCtrl;
      }

      _createClass(ConfirmmodalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
      }]);

      return ConfirmmodalPage;
    }();

    ConfirmmodalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ConfirmmodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confirmmodal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirmmodal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/confirmmodal/confirmmodal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirmmodal.page.scss */
      "./src/app/customer_app/confirmmodal/confirmmodal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], ConfirmmodalPage);
    /***/
  },

  /***/
  "./src/app/customer_app/escalationdetail/escalationdetail-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/customer_app/escalationdetail/escalationdetail-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: EscalationdetailPageRoutingModule */

  /***/
  function srcAppCustomer_appEscalationdetailEscalationdetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EscalationdetailPageRoutingModule", function () {
      return EscalationdetailPageRoutingModule;
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


    var _escalationdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./escalationdetail.page */
    "./src/app/customer_app/escalationdetail/escalationdetail.page.ts");

    var routes = [{
      path: '',
      component: _escalationdetail_page__WEBPACK_IMPORTED_MODULE_3__["EscalationdetailPage"]
    }];

    var EscalationdetailPageRoutingModule = function EscalationdetailPageRoutingModule() {
      _classCallCheck(this, EscalationdetailPageRoutingModule);
    };

    EscalationdetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EscalationdetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/customer_app/escalationdetail/escalationdetail.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/customer_app/escalationdetail/escalationdetail.module.ts ***!
    \**************************************************************************/

  /*! exports provided: EscalationdetailPageModule */

  /***/
  function srcAppCustomer_appEscalationdetailEscalationdetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EscalationdetailPageModule", function () {
      return EscalationdetailPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _escalationdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./escalationdetail-routing.module */
    "./src/app/customer_app/escalationdetail/escalationdetail-routing.module.ts");
    /* harmony import */


    var _escalationdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./escalationdetail.page */
    "./src/app/customer_app/escalationdetail/escalationdetail.page.ts");

    var EscalationdetailPageModule = function EscalationdetailPageModule() {
      _classCallCheck(this, EscalationdetailPageModule);
    };

    EscalationdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _escalationdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["EscalationdetailPageRoutingModule"]],
      declarations: [_escalationdetail_page__WEBPACK_IMPORTED_MODULE_6__["EscalationdetailPage"]]
    })], EscalationdetailPageModule);
    /***/
  },

  /***/
  "./src/app/customer_app/escalationdetail/escalationdetail.page.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/customer_app/escalationdetail/escalationdetail.page.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomer_appEscalationdetailEscalationdetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9lc2NhbGF0aW9uZGV0YWlsL2VzY2FsYXRpb25kZXRhaWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/customer_app/escalationdetail/escalationdetail.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/customer_app/escalationdetail/escalationdetail.page.ts ***!
    \************************************************************************/

  /*! exports provided: EscalationdetailPage */

  /***/
  function srcAppCustomer_appEscalationdetailEscalationdetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EscalationdetailPage", function () {
      return EscalationdetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EscalationdetailPage = /*#__PURE__*/function () {
      function EscalationdetailPage() {
        _classCallCheck(this, EscalationdetailPage);
      }

      _createClass(EscalationdetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('helllllllllllllllooooooooooo');
        }
      }]);

      return EscalationdetailPage;
    }();

    EscalationdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-escalationdetail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./escalationdetail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/escalationdetail/escalationdetail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./escalationdetail.page.scss */
      "./src/app/customer_app/escalationdetail/escalationdetail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], EscalationdetailPage);
    /***/
  },

  /***/
  "./src/app/customer_app/projectdetail/contactpersonmodel/contactpersonmodel-routing.module.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/customer_app/projectdetail/contactpersonmodel/contactpersonmodel-routing.module.ts ***!
    \****************************************************************************************************/

  /*! exports provided: ContactpersonmodelPageRoutingModule */

  /***/
  function srcAppCustomer_appProjectdetailContactpersonmodelContactpersonmodelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactpersonmodelPageRoutingModule", function () {
      return ContactpersonmodelPageRoutingModule;
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


    var _contactpersonmodel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contactpersonmodel.page */
    "./src/app/customer_app/projectdetail/contactpersonmodel/contactpersonmodel.page.ts");

    var routes = [{
      path: '',
      component: _contactpersonmodel_page__WEBPACK_IMPORTED_MODULE_3__["ContactpersonmodelPage"]
    }];

    var ContactpersonmodelPageRoutingModule = function ContactpersonmodelPageRoutingModule() {
      _classCallCheck(this, ContactpersonmodelPageRoutingModule);
    };

    ContactpersonmodelPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactpersonmodelPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/customer_app/projectdetail/contactpersonmodel/contactpersonmodel.module.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/customer_app/projectdetail/contactpersonmodel/contactpersonmodel.module.ts ***!
    \********************************************************************************************/

  /*! exports provided: ContactpersonmodelPageModule */

  /***/
  function srcAppCustomer_appProjectdetailContactpersonmodelContactpersonmodelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactpersonmodelPageModule", function () {
      return ContactpersonmodelPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _contactpersonmodel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contactpersonmodel-routing.module */
    "./src/app/customer_app/projectdetail/contactpersonmodel/contactpersonmodel-routing.module.ts");
    /* harmony import */


    var _contactpersonmodel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contactpersonmodel.page */
    "./src/app/customer_app/projectdetail/contactpersonmodel/contactpersonmodel.page.ts");

    var ContactpersonmodelPageModule = function ContactpersonmodelPageModule() {
      _classCallCheck(this, ContactpersonmodelPageModule);
    };

    ContactpersonmodelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contactpersonmodel_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactpersonmodelPageRoutingModule"]],
      declarations: [_contactpersonmodel_page__WEBPACK_IMPORTED_MODULE_6__["ContactpersonmodelPage"]]
    })], ContactpersonmodelPageModule);
    /***/
  },

  /***/
  "./src/app/customer_app/projectdetail/contactpersonmodel/contactpersonmodel.page.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/customer_app/projectdetail/contactpersonmodel/contactpersonmodel.page.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomer_appProjectdetailContactpersonmodelContactpersonmodelPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9wcm9qZWN0ZGV0YWlsL2NvbnRhY3RwZXJzb25tb2RlbC9jb250YWN0cGVyc29ubW9kZWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/customer_app/projectdetail/contactpersonmodel/contactpersonmodel.page.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/customer_app/projectdetail/contactpersonmodel/contactpersonmodel.page.ts ***!
    \******************************************************************************************/

  /*! exports provided: ContactpersonmodelPage */

  /***/
  function srcAppCustomer_appProjectdetailContactpersonmodelContactpersonmodelPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactpersonmodelPage", function () {
      return ContactpersonmodelPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/db-service.service */
    "./src/app/db-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/push/ngx */
    "./node_modules/@ionic-native/push/ngx/index.js");

    var ContactpersonmodelPage = /*#__PURE__*/function () {
      function ContactpersonmodelPage(route, modalController, push, formBuilder, dbService, navCtrl, navParams) {
        _classCallCheck(this, ContactpersonmodelPage);

        this.route = route;
        this.modalController = modalController;
        this.push = push;
        this.formBuilder = formBuilder;
        this.dbService = dbService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.projectID = '';
        this.inputData = {};
        this.projectID = this.navParams.get('projectId');
        this.cpForm = this.formBuilder.group({
          cpName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          cpMobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]],
          cpDesignation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          cpEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
      }

      _createClass(ContactpersonmodelPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss({
            'dismissed': true
          });
        }
      }, {
        key: "onSaveHandler",
        value: function onSaveHandler() {
          var _this5 = this;

          if (this.cpForm.invalid) {
            this.cpForm.get('cpName').markAsTouched();
            this.cpForm.get('cpMobile').markAsTouched();
            this.cpForm.get('cpDesignation').markAsTouched();
            this.cpForm.get('cpEmail').markAsTouched();
            return;
          }

          this.inputData = this.cpForm.value;
          this.inputData.projectId = this.projectID;
          this.dbService.onPostRequestHandler(this.inputData, 'customer/saveContactPersonData').subscribe(function (result) {
            console.log(result);

            _this5.dbService.dismissLoader();

            if (result["status"] != 'true') {
              console.log(result["status"]);

              _this5.dbService.onShowAlertMessage('Error', result["statusMessage"]);
            } else {
              console.log(result["status"]);
              _this5.data = {};

              _this5.modalController.dismiss({
                'dismissed': true
              });

              _this5.dbService.presentToast('Contact Saved Successfully!');
            }
          });
        }
      }, {
        key: "project_detail",
        value: function project_detail() {}
      }]);

      return ContactpersonmodelPage;
    }();

    ContactpersonmodelPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__["Push"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_4__["DbServiceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    ContactpersonmodelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contactpersonmodel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contactpersonmodel.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/projectdetail/contactpersonmodel/contactpersonmodel.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contactpersonmodel.page.scss */
      "./src/app/customer_app/projectdetail/contactpersonmodel/contactpersonmodel.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__["Push"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_4__["DbServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], ContactpersonmodelPage);
    /***/
  },

  /***/
  "./src/app/customer_app/service_request/request-popover/request-popover.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/customer_app/service_request/request-popover/request-popover.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomer_appService_requestRequestPopoverRequestPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9zZXJ2aWNlX3JlcXVlc3QvcmVxdWVzdC1wb3BvdmVyL3JlcXVlc3QtcG9wb3Zlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/customer_app/service_request/request-popover/request-popover.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/customer_app/service_request/request-popover/request-popover.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: RequestPopoverComponent */

  /***/
  function srcAppCustomer_appService_requestRequestPopoverRequestPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestPopoverComponent", function () {
      return RequestPopoverComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/db-service.service */
    "./src/app/db-service.service.ts");

    var RequestPopoverComponent = /*#__PURE__*/function () {
      function RequestPopoverComponent(popoverController, router, navParams, alertCtrl, dbService) {
        _classCallCheck(this, RequestPopoverComponent);

        this.popoverController = popoverController;
        this.router = router;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.dbService = dbService;
        this.taskId = '';
        this.taskNo = '';
        this.taskType = '';
        this.taskStatus = '';
        this.taskReportCount = '';
        this.taskId = navParams.get('taskId');
        this.taskNo = navParams.get('taskNo');
        this.taskStatus = navParams.get('taskStatus');
        this.taskType = navParams.get('taskType');
        this.taskPopUpData = JSON.parse(localStorage.getItem('taskPopUpData'));
        console.log(this.taskStatus);
        console.log(this.taskReportCount);
        console.log(this.taskNo);
        console.log(this.taskId);
      }

      _createClass(RequestPopoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onCancelComplaintHandler",
        value: function onCancelComplaintHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this6 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'Confirm',
                      message: 'Are You Sure, You Want To Cancel Request ?',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('No clicked');

                          _this6.popoverController.dismiss();
                        }
                      }, {
                        text: 'Yes',
                        handler: function handler() {
                          console.log('Yes clicked');
                          var inputData = {};
                          inputData["taskId"] = _this6.taskId;

                          _this6.dbService.presentLoader();

                          console.log(inputData);

                          _this6.dbService.onPostRequestHandler(inputData, 'task/onCancelComplaintHandler').subscribe(function (result) {
                            console.log(result);

                            _this6.dbService.dismissLoader();

                            _this6.popoverController.dismiss();

                            _this6.dbService.presentToast('Complaint Cancel Successfully!');
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "DismissClick",
        value: function DismissClick() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.popoverController.dismiss();

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "GoToImages",
        value: function GoToImages() {
          var pathName;
          ;

          if (this.taskType == 'commissioning') {
            pathName = 'complaints';
          } else {
            pathName = 'commissioning';
          }

          this.router.navigateByUrl('/technicians/' + pathName + '/details/images/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus + '');
        }
      }, {
        key: "GoToSpare",
        value: function GoToSpare() {
          console.log(JSON.parse(localStorage.getItem('taskPopUpData')));
          this.router.navigateByUrl('/customer/request/spareparts/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus + '');
        }
      }]);

      return RequestPopoverComponent;
    }();

    RequestPopoverComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_4__["DbServiceService"]
      }];
    };

    RequestPopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-request-popover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./request-popover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/request-popover/request-popover.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./request-popover.component.scss */
      "./src/app/customer_app/service_request/request-popover/request-popover.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_4__["DbServiceService"]])], RequestPopoverComponent);
    /***/
  },

  /***/
  "./src/app/db-service.service.ts":
  /*!***************************************!*\
    !*** ./src/app/db-service.service.ts ***!
    \***************************************/

  /*! exports provided: DbServiceService */

  /***/
  function srcAppDbServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DbServiceService", function () {
      return DbServiceService;
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
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DbServiceService = /*#__PURE__*/function () {
      function DbServiceService(http, loadingCtrl, alertCtrl, toastCtrl, route) {
        _classCallCheck(this, DbServiceService);

        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.isShowing = false;
        this.user = JSON.parse(localStorage.getItem('loginData')) || []; // public serverURL: any = 'http://crm.tricolite.com/api/index.php/app/';
        // public uploadURL: any = 'http://crm.tricolite.com/api/uploads/Task_Doc/';
        // public masterDocURL: any = 'http://crm.tricolite.com/api/uploads/Master_Doc/';
        // public customerDocURL: any = 'http://crm.tricolite.com/api/uploads/Customer_Doc/';
        // public userDocURL: any = 'http://crm.tricolite.com/api/uploads/User_Doc/';
        // public ReportDocURL: any = 'http://crm.tricolite.com/api/uploads/Report_Doc/';
        // public upload_url: any = 'http://crm.tricolite.com/api/uploads/Task_Doc/'; 

        this.serverURL = 'http://phpstack-83335-1824762.cloudwaysapps.com/api/index.php/app/';
        this.uploadURL = 'http://phpstack-83335-1824762.cloudwaysapps.com/api/uploads/Task_Doc/';
        this.masterDocURL = 'http://phpstack-83335-1824762.cloudwaysapps.com/api/uploads/Master_Doc/';
        this.customerDocURL = 'http://phpstack-83335-1824762.cloudwaysapps.com/api/uploads/Customer_Doc/';
        this.userDocURL = 'http://phpstack-83335-1824762.cloudwaysapps.com/api/uploads/User_Doc/';
        this.ReportDocURL = 'http://phpstack-83335-1824762.cloudwaysapps.com/api/uploads/Report_Doc/';
        this.upload_url = 'http://phpstack-83335-1824762.cloudwaysapps.com/api/uploads/Task_Doc/';
        this.backButton = 0;
      }

      _createClass(DbServiceService, [{
        key: "presentLoader",
        value: function presentLoader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (this.isShowing) {
                      _context3.next = 11;
                      break;
                    }

                    _context3.next = 3;
                    return this.loadingCtrl.create({
                      message: "Please Wait...."
                    });

                  case 3:
                    this.loading = _context3.sent;
                    this.isShowing = true;
                    console.log(this.loading);
                    _context3.next = 8;
                    return this.loading.present();

                  case 8:
                    return _context3.abrupt("return", _context3.sent);

                  case 11:
                    this.isShowing = true;
                    this.loading.message = 'sasas';

                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "dismissLoader",
        value: function dismissLoader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log(this.loading);

                    if (!(this.loading && this.isShowing)) {
                      _context4.next = 5;
                      break;
                    }

                    this.isShowing = false;
                    _context4.next = 5;
                    return this.loading.dismiss();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "onShowAlertMessage",
        value: function onShowAlertMessage(title, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertCtrl.create({
                      header: title,
                      message: message,
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Ok',
                        handler: function handler() {
                          console.log('Ok Button Clicked!');
                        }
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var toast;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 2000
                    });

                  case 2:
                    toast = _context6.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "numberOnly",
        value: function numberOnly(event) {
          var charCode = event.which ? event.which : event.keyCode;

          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
          }

          return true;
        }
      }, {
        key: "onPostRequestHandler",
        value: function onPostRequestHandler(requestData, fn) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers.append('Accept', 'application/json');
          headers.append('Content-Type', 'application/json');
          var loginData = JSON.parse(localStorage.getItem('loginData'));
          console.log(loginData);

          if (loginData) {
            requestData["loginId"] = loginData["loginId"];
            requestData["loginName"] = loginData["loginName"];
            requestData["loginType"] = loginData["loginType"];
          }

          console.log(requestData);
          return this.http.post(this.serverURL + fn, JSON.stringify(requestData), {
            headers: headers
          });
        }
      }]);

      return DbServiceService;
    }();

    DbServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    DbServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], DbServiceService);
    /***/
  },

  /***/
  "./src/app/imagemodal/imagemodal-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/imagemodal/imagemodal-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ImagemodalPageRoutingModule */

  /***/
  function srcAppImagemodalImagemodalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagemodalPageRoutingModule", function () {
      return ImagemodalPageRoutingModule;
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


    var _imagemodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./imagemodal.page */
    "./src/app/imagemodal/imagemodal.page.ts");

    var routes = [{
      path: '',
      component: _imagemodal_page__WEBPACK_IMPORTED_MODULE_3__["ImagemodalPage"]
    }];

    var ImagemodalPageRoutingModule = function ImagemodalPageRoutingModule() {
      _classCallCheck(this, ImagemodalPageRoutingModule);
    };

    ImagemodalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ImagemodalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/imagemodal/imagemodal.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/imagemodal/imagemodal.module.ts ***!
    \*************************************************/

  /*! exports provided: ImagemodalPageModule */

  /***/
  function srcAppImagemodalImagemodalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagemodalPageModule", function () {
      return ImagemodalPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _imagemodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./imagemodal-routing.module */
    "./src/app/imagemodal/imagemodal-routing.module.ts");
    /* harmony import */


    var _imagemodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./imagemodal.page */
    "./src/app/imagemodal/imagemodal.page.ts");

    var ImagemodalPageModule = function ImagemodalPageModule() {
      _classCallCheck(this, ImagemodalPageModule);
    };

    ImagemodalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _imagemodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImagemodalPageRoutingModule"]],
      declarations: [_imagemodal_page__WEBPACK_IMPORTED_MODULE_6__["ImagemodalPage"]]
    })], ImagemodalPageModule);
    /***/
  },

  /***/
  "./src/app/imagemodal/imagemodal.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/imagemodal/imagemodal.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppImagemodalImagemodalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".module {\n  background: rgba(0, 0, 0, 0.9) !important;\n}\n.module .scroll-content {\n  left: 0;\n  right: 0;\n  top: 50%;\n  position: absolute;\n  transform: translateY(-50%);\n  overflow: inherit;\n  bottom: inherit;\n  contain: initial;\n}\n.module .scroll-content .pop-imge {\n  padding: 20px;\n  margin: 6px;\n  position: relative;\n  border-radius: 5px;\n}\n.module .scroll-content .pop-imge img {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n}\n.module .scroll-content .pop-imge a {\n  position: absolute;\n  top: 9px;\n  right: 9px;\n  background: #d31010;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 24px;\n}\n.module .scroll-content .pop-imge a i {\n  color: #fff;\n  font-size: 20px;\n}\n.cs-modal-container {\n  --background: rgba(0,0,0, 0.3);\n}\n.cs-modal-container .modal-container {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cs-modal-container .modal-container .main-figure {\n  padding: 32px;\n  width: 100%;\n  position: relative;\n}\n.cs-modal-container .modal-container .main-figure .cs-modal-body {\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0px 13px 26px rgba(0, 0, 0, 0.16);\n  padding: 16px;\n}\n.cs-modal-container .modal-container .main-figure .cs-modal-body signature-pad canvas {\n  width: 100% !important;\n}\n.cs-modal-container .modal-container .main-figure .cs-modal-body .logo img {\n  height: 30px;\n}\n.cs-modal-container .modal-container .main-figure .cs-modal-body .modal-content p {\n  font-size: 14px;\n  line-height: 28px;\n  color: var(--ion-color-dark);\n  margin-top: 20px;\n}\n.cs-modal-container .modal-container .main-figure .modal-close {\n  text-align: center;\n  margin-top: 32px;\n}\n.cs-modal-container .modal-container .main-figure .modal-close ion-button {\n  width: 40px;\n  height: 40px;\n  border: 1px solid #fff;\n  border-radius: 100%;\n  --border-radius: 100%;\n}\n.cs-modal-container .modal-container .main-figure .modal-close.model-cross {\n  position: absolute;\n  top: 0px;\n  right: 38px;\n}\n.cs-modal-container .modal-container .main-figure .modal-close.model-cross ion-button {\n  width: 23px;\n  height: 23px;\n}\n.cs-modal-container .modal-container.full-modal-container .main-figure {\n  width: 100%;\n  padding: 0px;\n}\n.cs-modal-container .modal-container.full-modal-container .main-figure .cs-modal-body {\n  background: #ffffff;\n  border-radius: 20px 20px 0px 0px;\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2Vtb2RhbC9FOlxcdHJpY29saXRlLWFwcC9zcmNcXGFwcFxcaW1hZ2Vtb2RhbFxcaW1hZ2Vtb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ltYWdlbW9kYWwvaW1hZ2Vtb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtBQ0NKO0FEQUk7RUFDSSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUVBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBRERRO0VBRUksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRVo7QUREWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNHaEI7QUREWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0doQjtBREZnQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDSXBCO0FER0E7RUFFSSw4QkFBQTtBQ0RKO0FER0k7RUFFSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNGUjtBRElRO0VBRUksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0haO0FES1k7RUFFSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0FDSmhCO0FEUW9CO0VBQ0ksc0JBQUE7QUNOeEI7QURhb0I7RUFBSSxZQUFBO0FDVnhCO0FEZW9CO0VBR0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ2Z4QjtBRHdCWTtFQUVJLGtCQUFBO0VBQ0EsZ0JBQUE7QUN2QmhCO0FEeUJnQjtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDeEJwQjtBRDJCZ0I7RUFFSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDMUJwQjtBRDRCb0I7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQzNCeEI7QURtQ1k7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQ2xDaEI7QURvQ2dCO0VBRUksbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUNuQ3BCIiwiZmlsZSI6InNyYy9hcHAvaW1hZ2Vtb2RhbC9pbWFnZW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGUge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpICFpbXBvcnRhbnQ7XHJcbiAgICAuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxuICAgICAgICBib3R0b206IGluaGVyaXQ7XHJcbiAgICAgICAgY29udGFpbjogaW5pdGlhbDtcclxuICAgICAgICAucG9wLWltZ2Uge1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogOXB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDlweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkMzEwMTA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY3MtbW9kYWwtY29udGFpbmVyXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLDAsMCwgMC4zKTtcclxuICAgIFxyXG4gICAgLm1vZGFsLWNvbnRhaW5lclxyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5tYWluLWZpZ3VyZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMzJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jcy1tb2RhbC1ib2R5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMjZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzaWduYXR1cmUtcGFkIHtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubG9nb1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ3toZWlnaHQ6IDMwcHg7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubW9kYWwtY29udGVudFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEBleHRlbmQucmVndWxhcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlvbi10ZXh0e0BleHRlbmQubWVkaXVtO31cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF7fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLm1vZGFsLWNsb3NlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlvbi1idXR0b25cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJi5tb2RlbC1jcm9zc1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMzhweDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpb24tYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLmZ1bGwtbW9kYWwtY29udGFpbmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAubWFpbi1maWd1cmVcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jcy1tb2RhbC1ib2R5XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIubW9kdWxlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpICFpbXBvcnRhbnQ7XG59XG4ubW9kdWxlIC5zY3JvbGwtY29udGVudCB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgYm90dG9tOiBpbmhlcml0O1xuICBjb250YWluOiBpbml0aWFsO1xufVxuLm1vZHVsZSAuc2Nyb2xsLWNvbnRlbnQgLnBvcC1pbWdlIHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiA2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1vZHVsZSAuc2Nyb2xsLWNvbnRlbnQgLnBvcC1pbWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tb2R1bGUgLnNjcm9sbC1jb250ZW50IC5wb3AtaW1nZSBhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDlweDtcbiAgcmlnaHQ6IDlweDtcbiAgYmFja2dyb3VuZDogI2QzMTAxMDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG4ubW9kdWxlIC5zY3JvbGwtY29udGVudCAucG9wLWltZ2UgYSBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNzLW1vZGFsLWNvbnRhaW5lciB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLDAsMCwgMC4zKTtcbn1cbi5jcy1tb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNzLW1vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGFpbmVyIC5tYWluLWZpZ3VyZSB7XG4gIHBhZGRpbmc6IDMycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY3MtbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250YWluZXIgLm1haW4tZmlndXJlIC5jcy1tb2RhbC1ib2R5IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDEzcHggMjZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmNzLW1vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGFpbmVyIC5tYWluLWZpZ3VyZSAuY3MtbW9kYWwtYm9keSBzaWduYXR1cmUtcGFkIGNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uY3MtbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250YWluZXIgLm1haW4tZmlndXJlIC5jcy1tb2RhbC1ib2R5IC5sb2dvIGltZyB7XG4gIGhlaWdodDogMzBweDtcbn1cbi5jcy1tb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRhaW5lciAubWFpbi1maWd1cmUgLmNzLW1vZGFsLWJvZHkgLm1vZGFsLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY3MtbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250YWluZXIgLm1haW4tZmlndXJlIC5tb2RhbC1jbG9zZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cbi5jcy1tb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRhaW5lciAubWFpbi1maWd1cmUgLm1vZGFsLWNsb3NlIGlvbi1idXR0b24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uY3MtbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250YWluZXIgLm1haW4tZmlndXJlIC5tb2RhbC1jbG9zZS5tb2RlbC1jcm9zcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAzOHB4O1xufVxuLmNzLW1vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGFpbmVyIC5tYWluLWZpZ3VyZSAubW9kYWwtY2xvc2UubW9kZWwtY3Jvc3MgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyM3B4O1xuICBoZWlnaHQ6IDIzcHg7XG59XG4uY3MtbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250YWluZXIuZnVsbC1tb2RhbC1jb250YWluZXIgLm1haW4tZmlndXJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jcy1tb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRhaW5lci5mdWxsLW1vZGFsLWNvbnRhaW5lciAubWFpbi1maWd1cmUgLmNzLW1vZGFsLWJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgcGFkZGluZzogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/imagemodal/imagemodal.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/imagemodal/imagemodal.page.ts ***!
    \***********************************************/

  /*! exports provided: ImagemodalPage */

  /***/
  function srcAppImagemodalImagemodalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagemodalPage", function () {
      return ImagemodalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var ImagemodalPage = /*#__PURE__*/function () {
      function ImagemodalPage(modalController, navCtrl) {
        _classCallCheck(this, ImagemodalPage);

        this.modalController = modalController;
        this.navCtrl = navCtrl;
      }

      _createClass(ImagemodalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss({
            'dismissed': true
          });
        }
      }]);

      return ImagemodalPage;
    }();

    ImagemodalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    ImagemodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-imagemodal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./imagemodal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/imagemodal/imagemodal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./imagemodal.page.scss */
      "./src/app/imagemodal/imagemodal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], ImagemodalPage);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/signaturemodal/signaturemodal-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/signaturemodal/signaturemodal-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: SignaturemodalPageRoutingModule */

  /***/
  function srcAppTechnician_appComplaintsSignaturemodalSignaturemodalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignaturemodalPageRoutingModule", function () {
      return SignaturemodalPageRoutingModule;
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


    var _signaturemodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signaturemodal.page */
    "./src/app/technician_app/complaints/signaturemodal/signaturemodal.page.ts");

    var routes = [{
      path: 'signatueModal',
      component: _signaturemodal_page__WEBPACK_IMPORTED_MODULE_3__["SignaturemodalPage"]
    }];

    var SignaturemodalPageRoutingModule = function SignaturemodalPageRoutingModule() {
      _classCallCheck(this, SignaturemodalPageRoutingModule);
    };

    SignaturemodalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignaturemodalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/signaturemodal/signaturemodal.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/technician_app/complaints/signaturemodal/signaturemodal.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: SignaturemodalPageModule */

  /***/
  function srcAppTechnician_appComplaintsSignaturemodalSignaturemodalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignaturemodalPageModule", function () {
      return SignaturemodalPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _signaturemodal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signaturemodal-routing.module */
    "./src/app/technician_app/complaints/signaturemodal/signaturemodal-routing.module.ts");
    /* harmony import */


    var _signaturemodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signaturemodal.page */
    "./src/app/technician_app/complaints/signaturemodal/signaturemodal.page.ts");
    /* harmony import */


    var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular2-signaturepad */
    "./node_modules/angular2-signaturepad/index.js");
    /* harmony import */


    var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__);

    var SignaturemodalPageModule = function SignaturemodalPageModule() {
      _classCallCheck(this, SignaturemodalPageModule);
    };

    SignaturemodalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePadModule"], _signaturemodal_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignaturemodalPageRoutingModule"]],
      declarations: [_signaturemodal_page__WEBPACK_IMPORTED_MODULE_6__["SignaturemodalPage"]]
    })], SignaturemodalPageModule);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/signaturemodal/signaturemodal.page.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/technician_app/complaints/signaturemodal/signaturemodal.page.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTechnician_appComplaintsSignaturemodalSignaturemodalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvc2lnbmF0dXJlbW9kYWwvc2lnbmF0dXJlbW9kYWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/signaturemodal/signaturemodal.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/technician_app/complaints/signaturemodal/signaturemodal.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: SignaturemodalPage */

  /***/
  function srcAppTechnician_appComplaintsSignaturemodalSignaturemodalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignaturemodalPage", function () {
      return SignaturemodalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular2-signaturepad/signature-pad */
    "./node_modules/angular2-signaturepad/signature-pad.js");
    /* harmony import */


    var angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_3__);

    var SignaturemodalPage = /*#__PURE__*/function () {
      function SignaturemodalPage(modalCtrl, navParams) {
        _classCallCheck(this, SignaturemodalPage);

        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.signaturePadOptions = {
          minWidth: 2,
          canvasWidth: 340,
          canvasHeight: 200
        };
        this.signaturePadView = false;
        this.signatureImage = this.navParams.get('sigImage');
      }

      _createClass(SignaturemodalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          console.log(this.signatureImage);
          setTimeout(function () {
            _this7.signaturePad.clear();

            _this7.canvasResize();
          }, 1000);
        }
      }, {
        key: "canvasResize",
        value: function canvasResize() {
          var canvas = document.querySelector('canvas');
          this.signaturePad.set('minWidth', 1);
          this.signaturePad.set('canvasWidth', canvas.offsetWidth);
          this.signaturePad.set('canvasHeight', canvas.offsetHeight);
        }
      }, {
        key: "drawCancel",
        value: function drawCancel() {
          this.signaturePadView = false;
        }
      }, {
        key: "drawComplete",
        value: function drawComplete() {
          this.signatureImage = this.signaturePad.toDataURL();
          console.log(this.signatureImage);
          this.modalCtrl.dismiss({
            'dismissed': true,
            'signatureImage': this.signatureImage
          });
        }
      }, {
        key: "drawClear",
        value: function drawClear() {
          this.signaturePad.clear();
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          this.modalCtrl.dismiss({
            'dismissed': true,
            data: this.signatureImage
          });
        }
      }]);

      return SignaturemodalPage;
    }();

    SignaturemodalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SignaturemodalPage.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_3__["SignaturePad"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_3__["SignaturePad"])], SignaturemodalPage.prototype, "signaturePad", void 0);
    SignaturemodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signaturemodal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signaturemodal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/signaturemodal/signaturemodal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signaturemodal.page.scss */
      "./src/app/technician_app/complaints/signaturemodal/signaturemodal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], SignaturemodalPage);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTechnician_appComplaintsTecCompliantPopoverTecCompliantPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvdGVjLWNvbXBsaWFudC1wb3BvdmVyL3RlYy1jb21wbGlhbnQtcG9wb3Zlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: TecCompliantPopoverComponent */

  /***/
  function srcAppTechnician_appComplaintsTecCompliantPopoverTecCompliantPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TecCompliantPopoverComponent", function () {
      return TecCompliantPopoverComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/db-service.service */
    "./src/app/db-service.service.ts");

    var TecCompliantPopoverComponent = /*#__PURE__*/function () {
      function TecCompliantPopoverComponent(popoverController, router, navParams, dbService) {
        _classCallCheck(this, TecCompliantPopoverComponent);

        this.popoverController = popoverController;
        this.router = router;
        this.navParams = navParams;
        this.dbService = dbService;
        this.taskId = '';
        this.taskNo = '';
        this.taskStatus = '';
        this.taskType = '';
        this.routeType = '';
        this.taskAllData = '';
        this.GoToImages1 = '';
        this.status = '';
        this.taskId = navParams.get('taskId');
        this.taskNo = navParams.get('taskNo');
        this.taskStatus = navParams.get('taskStatus');
        this.taskType = navParams.get('taskType');
        this.taskType = navParams.get('taskType');
        this.GoToImages1 = navParams.get('GoToImages1');
        this.status = navParams.get('status');
        localStorage.setItem('taskType', this.taskType);
        console.log(this.taskType);
        this.routeType = localStorage.getItem('routeType');
        this.taskPopUpData = JSON.parse(localStorage.getItem('taskPopUpData'));
      }

      _createClass(TecCompliantPopoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "DismissClick",
        value: function DismissClick() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.popoverController.dismiss();

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "GoToRemarks",
        value: function GoToRemarks() {
          // tslint:disable-next-line:max-line-length
          this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/remarks/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus + '');
        }
      }, {
        key: "GoToStatus",
        value: function GoToStatus() {
          // tslint:disable-next-line:max-line-length
          this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/status/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus + '');
        }
      }, {
        key: "GoToSpareParts",
        value: function GoToSpareParts() {
          // tslint:disable-next-line:max-line-length
          this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/spareparts/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus + '');
        }
      }, {
        key: "GoToImages",
        value: function GoToImages() {
          // tslint:disable-next-line:max-line-length
          this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/images/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus + '');
        }
      }, {
        key: "GoToReport",
        value: function GoToReport(type) {
          localStorage.setItem('reportType', type); // tslint:disable-next-line:max-line-length

          this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/dailyreport/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus + '');
        }
      }, {
        key: "GoToServiceReport",
        value: function GoToServiceReport(taskReportId) {
          console.log('hello');
          var inputData = {
            taskId: this.taskId,
            taskReportId: taskReportId
          };
          this.dbService.onPostRequestHandler(inputData, 'Report/viewMobileServiceReport').subscribe(function (result) {
            console.log(result);
            var options = {
              documentSize: 'A4',
              type: 'share',
              fileName: 'myFile.pdf'
            };
            cordova.plugins.pdf.htmlToPDF({
              data: result,
              documentSize: 'A4',
              type: 'share',
              fileName: 'my-pdf.pdf'
            }, function (sucess) {
              return console.log('sucess: ', sucess);
            }, function (error) {
              return console.log('error:', error);
            });
          });
        }
      }]);

      return TecCompliantPopoverComponent;
    }();

    TecCompliantPopoverComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_4__["DbServiceService"]
      }];
    };

    TecCompliantPopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tec-compliant-popover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tec-compliant-popover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tec-compliant-popover.component.scss */
      "./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_4__["DbServiceService"]])], TecCompliantPopoverComponent);
    /***/
  },

  /***/
  "./src/app/technician_app/home/home.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/technician_app/home/home.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTechnician_appHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/technician_app/home/home.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/technician_app/home/home.page.ts ***!
    \**************************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppTechnician_appHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/db-service.service */
    "./src/app/db-service.service.ts");
    /* harmony import */


    var _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/push/ngx */
    "./node_modules/@ionic-native/push/ngx/index.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(route, formBuilder, alertCtrl, dbService, push) {
        _classCallCheck(this, HomePage);

        this.route = route;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.dbService = dbService;
        this.push = push;
        this.dashboardData = {};
        this.profileData = {};
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.onGetDashboardDataHandler();
          this.notification();
        }
      }, {
        key: "onDashboardCountClickHandler",
        value: function onDashboardCountClickHandler(targetType) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var dashboardCountFilterData;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    dashboardCountFilterData = {};
                    dashboardCountFilterData["countFilter"] = targetType;
                    localStorage.setItem('dashboardCountFilterData', JSON.stringify(dashboardCountFilterData));

                  case 3:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));
        }
      }, {
        key: "onGetDashboardDataHandler",
        value: function onGetDashboardDataHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this8 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    console.log('hello');
                    this.dbService.onPostRequestHandler({}, 'dashboard/onGetDashboardData').subscribe(function (result) {
                      console.log(result);
                      _this8.dashboardData = result;
                    });

                  case 2:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "onGetProfileDataHandler",
        value: function onGetProfileDataHandler() {
          var _this9 = this;

          var inputData = {};
          this.dbService.onPostRequestHandler(inputData, 'login/onGetLoginUserCompleteDetail').subscribe(function (result) {
            console.log(result);
            _this9.profileData = result["loginData"];
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.onGetProfileDataHandler();
          this.notification();
        }
      }, {
        key: "notification",
        value: function notification() {
          var _this10 = this;

          // alert("test");
          console.log("bhanu 12345");
          var loginData = JSON.parse(localStorage.getItem('loginData'));
          console.log(loginData);
          this.push.hasPermission().then(function (res) {
            if (res.isEnabled) {
              console.log('We have permission to send push notifications');
            } else {
              console.log('We do not have permission to send push notifications');
            }
          });
          var options = {
            android: {
              senderID: '590596859248'
            },
            ios: {
              alert: 'true',
              badge: true,
              sound: true
            },
            windows: {},
            browser: {
              pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            }
          };
          var pushObject = this.push.init(options);
          pushObject.on('notification').subscribe(function (notification) {
            return console.log('Received a notification', notification);
          });
          pushObject.on('registration').subscribe(function (registration) {
            console.log('Device registered', registration);

            _this10.dbService.onPostRequestHandler({
              'id': loginData.loginId,
              'registration_id': registration.registrationId
            }, 'task/update_token').subscribe(function (r) {
              console.log(r);
            });
          });
          pushObject.on('error').subscribe(function (error) {
            return console.error('Error with Push plugin', error);
          });
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]
      }, {
        type: _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__["Push"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/technician_app/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"], _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__["Push"]])], HomePage);
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
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
    /*! E:\tricolite-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map