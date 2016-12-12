webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(173);

	var _reactRedux = __webpack_require__(228);

	var _redux = __webpack_require__(235);

	var _app = __webpack_require__(256);

	var _app2 = _interopRequireDefault(_app);

	var _home = __webpack_require__(455);

	var _home2 = _interopRequireDefault(_home);

	var _about = __webpack_require__(470);

	var _about2 = _interopRequireDefault(_about);

	var _zip = __webpack_require__(471);

	var _zip2 = _interopRequireDefault(_zip);

	var _reducers = __webpack_require__(472);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _reactTapEventPlugin = __webpack_require__(473);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if (true) {
		module.hot.accept();
	}
	// COMPONENTS

	(0, _reactTapEventPlugin2.default)();

	var createStoreWithMiddleware = (0, _redux.applyMiddleware)()(_redux.createStore);

	_reactDom2.default.render(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: createStoreWithMiddleware(_reducers2.default) },
		_react2.default.createElement(
			_reactRouter.Router,
			{ history: _reactRouter.browserHistory },
			_react2.default.createElement(
				_reactRouter.Route,
				{ path: "/", component: _app2.default },
				_react2.default.createElement(_reactRouter.Route, { path: "home", component: _home2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: "about", component: _about2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: "zip", component: _zip2.default })
			)
		)
	), document.querySelector("#dogventures"));

/***/ }
])