webpackHotUpdate(5,{

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = __webpack_require__(756);

var _isomorphicFetch = __webpack_require__(778);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/bompi88/projects/helsetjenester/components/google-map.js';


var GoogleMapContainer = function (_Component) {
  (0, _inherits3.default)(GoogleMapContainer, _Component);

  function GoogleMapContainer(props) {
    (0, _classCallCheck3.default)(this, GoogleMapContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GoogleMapContainer.__proto__ || (0, _getPrototypeOf2.default)(GoogleMapContainer)).call(this, props));

    _this.state = { marker: null };
    _this.onMapLoad = _this.onMapLoad.bind(_this);
    _this.onMapClick = _this.onMapClick.bind(_this);
    _this.fetchHealthServices = _this.fetchHealthServices.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(GoogleMapContainer, [{
    key: 'onMapLoad',
    value: function onMapLoad() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      console.log('map loaded', args);
    }
  }, {
    key: 'fetchHealthServices',
    value: function fetchHealthServices(lat, lng) {
      console.log('http://data.helsenorge.no/healthservices?$top=10&latitude=' + lat + '&longitude=' + lng);
      (0, _isomorphicFetch2.default)('http://data.helsenorge.no/healthservices?$top=10&latitude=' + lat + '&longitude=' + lng).then(function (response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        console.log(response);
        return response.json();
      });
    }
  }, {
    key: 'onMapClick',
    value: function onMapClick(_ref) {
      var latLng = _ref.latLng;

      this.setState({
        marker: {
          position: latLng,
          defaultAnimation: 2,
          key: Date.now()
        }
      });
      this.fetchHealthServices(latLng.lat(), latLng.lng());
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_reactGoogleMaps.GoogleMap, {
        ref: this.onMapLoad,
        defaultZoom: 4,
        defaultCenter: { lat: 66.1, lng: 13.4 },
        onClick: this.onMapClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, this.state.marker ? _react2.default.createElement(_reactGoogleMaps.Marker, (0, _extends3.default)({}, this.state.marker, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      })) : null);
    }
  }]);

  return GoogleMapContainer;
}(_react.Component);

exports.default = (0, _reactGoogleMaps.withGoogleMap)(GoogleMapContainer);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/bompi88/projects/helsetjenester/components/google-map.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/bompi88/projects/helsetjenester/components/google-map.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44NTE4M2IyMDI1OTU5YmM2NDkyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nb29nbGUtbWFwLmpzPzNjYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aEdvb2dsZU1hcCwgR29vZ2xlTWFwLCBNYXJrZXIgfSBmcm9tICdyZWFjdC1nb29nbGUtbWFwcyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmNsYXNzIEdvb2dsZU1hcENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgbWFya2VyOiBudWxsIH07XG4gICAgdGhpcy5vbk1hcExvYWQgPSB0aGlzLm9uTWFwTG9hZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25NYXBDbGljayA9IHRoaXMub25NYXBDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmV0Y2hIZWFsdGhTZXJ2aWNlcyA9IHRoaXMuZmV0Y2hIZWFsdGhTZXJ2aWNlcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25NYXBMb2FkKC4uLmFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZygnbWFwIGxvYWRlZCcsIGFyZ3MpO1xuICB9XG5cbiAgZmV0Y2hIZWFsdGhTZXJ2aWNlcyhsYXQsIGxuZykge1xuICAgIGNvbnNvbGUubG9nKGBodHRwOi8vZGF0YS5oZWxzZW5vcmdlLm5vL2hlYWx0aHNlcnZpY2VzPyR0b3A9MTAmbGF0aXR1ZGU9JHtsYXR9JmxvbmdpdHVkZT0ke2xuZ31gKVxuICAgIGZldGNoKGBodHRwOi8vZGF0YS5oZWxzZW5vcmdlLm5vL2hlYWx0aHNlcnZpY2VzPyR0b3A9MTAmbGF0aXR1ZGU9JHtsYXR9JmxvbmdpdHVkZT0ke2xuZ31gKVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gIFx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCkge1xuICBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0JhZCByZXNwb25zZSBmcm9tIHNlcnZlcicpO1xuICBcdFx0fVxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICBcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgXHR9KTtcbiAgfVxuXG4gIG9uTWFwQ2xpY2soeyBsYXRMbmcgfSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFya2VyOiB7XG4gICAgICAgIHBvc2l0aW9uOiBsYXRMbmcsXG4gICAgICAgIGRlZmF1bHRBbmltYXRpb246IDIsXG4gICAgICAgIGtleTogRGF0ZS5ub3coKVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZmV0Y2hIZWFsdGhTZXJ2aWNlcyhsYXRMbmcubGF0KCksIGxhdExuZy5sbmcoKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEdvb2dsZU1hcFxuICAgICAgICByZWY9e3RoaXMub25NYXBMb2FkfVxuICAgICAgICBkZWZhdWx0Wm9vbT17NH1cbiAgICAgICAgZGVmYXVsdENlbnRlcj17eyBsYXQ6IDY2LjEsIGxuZzogMTMuNCB9fVxuICAgICAgICBvbkNsaWNrPXt0aGlzLm9uTWFwQ2xpY2t9XG4gICAgICA+XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5tYXJrZXIgP1xuICAgICAgICAgIDxNYXJrZXJcbiAgICAgICAgICAgIHsuLi50aGlzLnN0YXRlLm1hcmtlcn1cbiAgICAgICAgICAvPiA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9Hb29nbGVNYXA+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoR29vZ2xlTWFwKEdvb2dsZU1hcENvbnRhaW5lcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2dvb2dsZS1tYXAuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQUE7QUFDQTtBQUFBOztBQUdBO0FBQ0E7QUFBQTtBQUZBO0FBREE7QUFNQTs7OztBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBOztBQUpBO0FBTUE7QUFOQTtBQUNBOztBQU1BO0FBQUE7QUFBQTtBQUFBOzs7OztBQVNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9