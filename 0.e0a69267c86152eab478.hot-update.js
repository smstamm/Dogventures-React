webpackHotUpdate(0,{

/***/ 676:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _index = __webpack_require__(331);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(336);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(78);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(337);

	var _index6 = _interopRequireDefault(_index5);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactRouter = __webpack_require__(248);

	var _MuiThemeProvider = __webpack_require__(478);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _getMuiTheme = __webpack_require__(565);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _theme = __webpack_require__(621);

	var _theme2 = _interopRequireDefault(_theme);

	var _Card = __webpack_require__(677);

	var _AppBar = __webpack_require__(622);

	var _AppBar2 = _interopRequireDefault(_AppBar);

	var _RaisedButton = __webpack_require__(689);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _components = {
		Home: {
			displayName: "Home"
		}
	};

	var _UsersStammSteglesDevelopmentDogventuresReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
		filename: "/Users/Stamm-Stegles/Development/dogventures-react/src/components/home.jsx",
		components: _components,
		locals: [module],
		imports: [_react3.default]
	});

	var _UsersStammSteglesDevelopmentDogventuresReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
		filename: "/Users/Stamm-Stegles/Development/dogventures-react/src/components/home.jsx",
		components: _components,
		locals: [],
		imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
		return function (Component) {
			return _UsersStammSteglesDevelopmentDogventuresReactNode_modulesReactTransformHmrLibIndexJs2(_UsersStammSteglesDevelopmentDogventuresReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
		};
	}

	var muiTheme = (0, _getMuiTheme2.default)(_theme2.default);

	var Home = _wrapComponent("Home")(function (_Component) {
		_inherits(Home, _Component);

		function Home() {
			_classCallCheck(this, Home);

			return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
		}

		_createClass(Home, [{
			key: "render",
			value: function render() {
				return _react3.default.createElement(
					_MuiThemeProvider2.default,
					{ muiTheme: muiTheme },
					_react3.default.createElement(
						"div",
						null,
						_react3.default.createElement(
							"div",
							{ id: "hero" },
							_react3.default.createElement("div", { id: "hero-overlay" })
						),
						_react3.default.createElement(
							"div",
							{ id: "hero-content" },
							_react3.default.createElement(
								"h1",
								null,
								"Find the perfect companionajriejrej;rie for your every adventure"
							),
							_react3.default.createElement(_RaisedButton2.default, { label: "Adopt a co-pilot", primary: true, onClick: function onClick() {
									_reactRouter.browserHistory.push("zip");
								} })
						)
					)
				);
			}
		}]);

		return Home;
	}(_react2.Component));

	exports.default = Home;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})