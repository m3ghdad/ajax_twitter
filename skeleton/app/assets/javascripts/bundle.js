/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(1)

$( () => {
  $('button.follow-toggle').each((idx, btn) => new FollowToggle(btn, {}) );
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(2)

class FollowToggle {
  constructor($el, options) {
    this.$el = $el

    this.render();
    this.handleClick();

    this.userId = this.$el.data('user-id') || options.userId;
    this.followState = this.$el.data('initial-follow-state') || options.followState;
  }

  render() {
    if (follow()) {
      return "Follow!"
    } else if (unfollow()) {
      return "Unfollow!"
    }
  }

  follow() {
    this.followState === "unfollowed";
  }

  unfollow() {
    this.followState === "followed";
  }

  handleClick(e) {
    const followToggle = this;
    e.preventDefault();

    if (unfollow()) {
      this.render();
      APIUtil.unfollowUser(this.userId).then(() => {
        followToggle.followState = 'unfollowed';
        followToggle.render();
      });
    }
    else if (follow()) {
      this.render();
      APIUtil.followUser(this.userId).then(() => {
        followToggle.render();
      });
    }
  }
}





module.exports = FollowToggle;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:14)\nYou may need an appropriate loader to handle this file type.\n| const APIUtil {\n| \n|   followUser: id => APIUtil.changeFollowStatus(id, 'POST'),");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map