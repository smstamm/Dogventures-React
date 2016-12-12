webpackHotUpdate(0,{

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(173);

	var _MuiThemeProvider = __webpack_require__(257);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _getMuiTheme = __webpack_require__(344);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _theme = __webpack_require__(400);

	var _theme2 = _interopRequireDefault(_theme);

	var _Card = __webpack_require__(456);

	var _AppBar = __webpack_require__(401);

	var _AppBar2 = _interopRequireDefault(_AppBar);

	var _RaisedButton = __webpack_require__(468);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var muiTheme = (0, _getMuiTheme2.default)(_theme2.default);

	var Home = function (_Component) {
		_inherits(Home, _Component);

		function Home() {
			_classCallCheck(this, Home);

			return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
		}

		_createClass(Home, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_MuiThemeProvider2.default,
					{ muiTheme: muiTheme },
					_react2.default.createElement(
						"div",
						null,
						_react2.default.createElement(
							"div",
							{ id: "hero" },
							_react2.default.createElement("div", { id: "hero-overlay" })
						),
						_react2.default.createElement(
							"div",
							{ id: "hero-content" },
							_react2.default.createElement(
								"h1",
								null,
								"Find the perfect companion for your every adventure"
							),
							_react2.default.createElement(_RaisedButton2.default, { label: "Adopt a co-pilot", primary: true, onClick: function onClick() {
									_reactRouter.browserHistory.push("zip");
								} })
						)
					)
				);
			}
		}]);

		return Home;
	}(_react.Component);

	exports.default = Home;

/***/ }

})