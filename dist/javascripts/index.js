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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/api/index.js":
/*!**************************************!*\
  !*** ./src/javascripts/api/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n//为了统一处理跨域路径，对请求回来的数据进行处理\r\nconst api = {\r\n    request ({\r\n        url,\r\n        data,\r\n        methoed,\r\n        // success\r\n    }) {\r\n        return $.ajax({\r\n            url: '/maoyan' + url,\r\n            data:data || {},\r\n            methoed:methoed || 'get',\r\n            success: (res) => {\r\n                // console.log(res)\r\n                // success (res)\r\n                return res\r\n            },\r\n            error:(error) => {\r\n                console.log('请求出错',error)\r\n            }\r\n            \r\n        })\r\n    }\r\n}\r\n\r\nmodule.exports = api\n\n//# sourceURL=webpack:///./src/javascripts/api/index.js?");

/***/ }),

/***/ "./src/javascripts/controllers/index/app-controller.js":
/*!*************************************************************!*\
  !*** ./src/javascripts/controllers/index/app-controller.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//整个应用程序控制器\r\n//任务之一：将视图渲染到页面中\r\nconst appMainController = __webpack_require__(/*! ./app-main-controllers */ \"./src/javascripts/controllers/index/app-main-controllers.js\")\r\n\r\n\r\n// getFilmsList.render()\r\n\r\nconst render = () => {\r\n    //0、承载容器\r\n    // let opp = $('#app');\r\n    // let header = $('#header');\r\n    // let footer = $('#footer');\r\n    // let main = $('#main');\r\n    //1.获取视图\r\n    let appHeaderView = __webpack_require__(/*! ../../views/app-header.html */ \"./src/javascripts/views/app-header.html\")\r\n    \r\n    let appFooterView = __webpack_require__(/*! ../../views/app-footer.html */ \"./src/javascripts/views/app-footer.html\")\r\n    // console.log(appHeaderView)\r\n    //2、渲染试图\r\n    $('#header').html(\r\n        Handlebars.compile(appHeaderView)({title: '猫眼电影'})\r\n    )\r\n    \r\n    $('#footer').html(appFooterView)\r\n    $('#app-footer nav a').eq(0).addClass('active')\r\n    appMainController.render()\r\n}\r\n\r\nmodule.exports = { render }\n\n//# sourceURL=webpack:///./src/javascripts/controllers/index/app-controller.js?");

/***/ }),

/***/ "./src/javascripts/controllers/index/app-main-controllers.js":
/*!*******************************************************************!*\
  !*** ./src/javascripts/controllers/index/app-main-controllers.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst { getFilmsList } = __webpack_require__(/*! ../../models/index/app-main-model */ \"./src/javascripts/models/index/app-main-model.js\")\r\n\r\nconst render = async ( ) => {\r\n    let appMainView = __webpack_require__(/*! ../../views/app-main.html */ \"./src/javascripts/views/app-main.html\")\r\n    //渲染首页的电影列表页面\r\n    let FileList = await getFilmsList()\r\n    let template = Handlebars.compile(appMainView)\r\n    $('#main').html(template({ films: FileList.movieList}))\r\n    console.log(FileList)\r\n\r\n}\r\n\r\nmodule.exports = { render } \n\n//# sourceURL=webpack:///./src/javascripts/controllers/index/app-main-controllers.js?");

/***/ }),

/***/ "./src/javascripts/index.js":
/*!**********************************!*\
  !*** ./src/javascripts/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst appController = __webpack_require__(/*! ./controllers/index/app-controller */ \"./src/javascripts/controllers/index/app-controller.js\")\r\n\r\nappController.render()\n\n//# sourceURL=webpack:///./src/javascripts/index.js?");

/***/ }),

/***/ "./src/javascripts/models/index/app-main-model.js":
/*!********************************************************!*\
  !*** ./src/javascripts/models/index/app-main-model.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst api = __webpack_require__(/*! ../../api/index */ \"./src/javascripts/api/index.js\")\r\n\r\nconst getFilmsList = () => {\r\n    return api.request({url: '/ajax/movieOnInfoList?token='})\r\n    // return new Promise((res, rej) => {\r\n    //     api.request({\r\n    //         url: '/ajax/movieOnInfoList?token=',\r\n    //         success: (data) => {\r\n    //             res(data)\r\n    //         }\r\n    //     })\r\n    // })\r\n}\r\n\r\nmodule.exports = {\r\n    getFilmsList\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/javascripts/models/index/app-main-model.js?");

/***/ }),

/***/ "./src/javascripts/views/app-footer.html":
/*!***********************************************!*\
  !*** ./src/javascripts/views/app-footer.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<footer id=\\\"app-footer\\\">    <nav>        <a href=\\\"index.html\\\"><i class=\\\"icon icon-dianying\\\"></i><span>电影</span></a>        <a href=\\\"cinema.html\\\"><i class=\\\"icon icon-yingyuan\\\"></i><span>影院</span></a>        <a href=\\\"\\\"><i class=\\\"icon icon-wode-copy\\\"></i><span>我的</span></a>    </nav></footer>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-footer.html?");

/***/ }),

/***/ "./src/javascripts/views/app-header.html":
/*!***********************************************!*\
  !*** ./src/javascripts/views/app-header.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<header id=\\\"app-header\\\">    {{title}}</header>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-header.html?");

/***/ }),

/***/ "./src/javascripts/views/app-main.html":
/*!*********************************************!*\
  !*** ./src/javascripts/views/app-main.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<main id=\\\"app-container\\\">            <!-- 内容区域顶部的控制 start -->    <div class=\\\"film-controls\\\">        <div class=\\\"film-controls__city\\\">北京            <span class=\\\"triangle\\\"></span>        </div>                <div class=\\\"film-controls__types\\\">            <div class=\\\"film-controls__type-item active\\\">正在热映</div>            <div class=\\\"film-controls__type-item\\\">即将上映</div>        </div>        <div class=\\\"film-controls__search\\\"><i class=\\\"icon icon-wode-copy\\\"></i></div>    </div>    <!-- 内容区域顶部的控制 end -->    <!-- 内容影片列表 start -->    <div class=\\\"film-list\\\">        {{#each films}}        <div class=\\\"film-list__item\\\">            <div class=\\\"film-list__item-img\\\">                <img width=\\\"100%\\\" height=\\\"100%\\\" src=\\\"{{img}}\\\" alt=\\\"\\\">            </div>            <div class=\\\"film-list__item-info\\\">                <div class=\\\"film-list__item-title\\\">                    <h1 class=\\\"line-ellipsis\\\">{{nm}}</h1>                    <span class=\\\"film-list__item-desc-img max\\\"></span>                </div>                <div class=\\\"film-list__item-detail\\\">                    <p class=\\\"film-list__detail-score\\\">观众评<span>{{sc}}</span></p>                    <p class=\\\"film-list__detail-actor line-ellipsis\\\">{{star}}</p>                    <p class=\\\"film-list__detail-show\\\">{{showInfo}}</p>                </div>            </div>            <div class=\\\"film-list__item-btn\\\">               <button class=\\\"film-list__btn film-list__btn--buy active\\\">购票</button>                <button class=\\\"film-list__btn film-list__btn--pre\\\">预售</button>             </div>        </div>        {{/each}}    </div>    <!-- 内容影片列表 end --></main>\"\n\n//# sourceURL=webpack:///./src/javascripts/views/app-main.html?");

/***/ })

/******/ });