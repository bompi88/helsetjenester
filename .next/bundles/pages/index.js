
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(541);


/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = __webpack_require__(620);

var _googleMap = __webpack_require__(750);

var _googleMap2 = _interopRequireDefault(_googleMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/bompi88/projects/helsetjenester/pages/index.js?entry';

exports.default = function () {
  return _react2.default.createElement('div', { style: { height: 'calc(100vh - 40px)', marginTop: '40px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('meta', { charset: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Helsetjenestekart'), _react2.default.createElement('script', { src: 'https://maps.googleapis.com/maps/api/js', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })), _react2.default.createElement(_semanticUiReact.Menu, { inverted: true, fixed: 'top', borderless: true, style: { border: 0, margin: 0 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Helsetjenestekart', active: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })), _react2.default.createElement(_googleMap2.default, {
    containerElement: _react2.default.createElement('div', { style: {
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }),
    mapElement: _react2.default.createElement('div', { style: {
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/bompi88/projects/helsetjenester/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/bompi88/projects/helsetjenester/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(69)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

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

},[540]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2YyNjczOWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nb29nbGUtbWFwLmpzP2YyNjczOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5pbXBvcnQgR29vZ2xlTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvZ29vZ2xlLW1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gNDBweCknLCBtYXJnaW5Ub3A6ICc0MHB4JyB9fT5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2UsY2hyb21lPTFcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wXCIgLz5cblxuICAgICAgPHRpdGxlPkhlbHNldGplbmVzdGVrYXJ0PC90aXRsZT5cblxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanNcIj48L3NjcmlwdD5cbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjIvc2VtYW50aWMubWluLmNzcycgLz5cbiAgICA8L0hlYWQ+XG4gICAgPE1lbnUgaW52ZXJ0ZWQgZml4ZWQ9J3RvcCcgYm9yZGVybGVzcyBzdHlsZT17eyBib3JkZXI6IDAsIG1hcmdpbjogMCB9fT5cbiAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nSGVsc2V0amVuZXN0ZWthcnQnIGFjdGl2ZT17dHJ1ZX0gLz5cbiAgICA8L01lbnU+XG4gICAgPEdvb2dsZU1hcFxuICAgICAgY29udGFpbmVyRWxlbWVudD17XG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH19IC8+XG4gICAgICB9XG4gICAgICBtYXBFbGVtZW50PXtcbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfX0gLz5cbiAgICAgIH1cbiAgICAvPlxuICA8L2Rpdj5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhHb29nbGVNYXAsIEdvb2dsZU1hcCwgTWFya2VyIH0gZnJvbSAncmVhY3QtZ29vZ2xlLW1hcHMnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5jbGFzcyBHb29nbGVNYXBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IG1hcmtlcjogbnVsbCB9O1xuICAgIHRoaXMub25NYXBMb2FkID0gdGhpcy5vbk1hcExvYWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTWFwQ2xpY2sgPSB0aGlzLm9uTWFwQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmZldGNoSGVhbHRoU2VydmljZXMgPSB0aGlzLmZldGNoSGVhbHRoU2VydmljZXMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uTWFwTG9hZCguLi5hcmdzKSB7XG4gICAgY29uc29sZS5sb2coJ21hcCBsb2FkZWQnLCBhcmdzKTtcbiAgfVxuXG4gIGZldGNoSGVhbHRoU2VydmljZXMobGF0LCBsbmcpIHtcbiAgICBjb25zb2xlLmxvZyhgaHR0cDovL2RhdGEuaGVsc2Vub3JnZS5uby9oZWFsdGhzZXJ2aWNlcz8kdG9wPTEwJmxhdGl0dWRlPSR7bGF0fSZsb25naXR1ZGU9JHtsbmd9YClcbiAgICBmZXRjaChgaHR0cDovL2RhdGEuaGVsc2Vub3JnZS5uby9oZWFsdGhzZXJ2aWNlcz8kdG9wPTEwJmxhdGl0dWRlPSR7bGF0fSZsb25naXR1ZGU9JHtsbmd9YClcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICBcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcbiAgXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdCYWQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXInKTtcbiAgXHRcdH1cbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIFx0fSk7XG4gIH1cblxuICBvbk1hcENsaWNrKHsgbGF0TG5nIH0pIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcmtlcjoge1xuICAgICAgICBwb3NpdGlvbjogbGF0TG5nLFxuICAgICAgICBkZWZhdWx0QW5pbWF0aW9uOiAyLFxuICAgICAgICBrZXk6IERhdGUubm93KClcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmZldGNoSGVhbHRoU2VydmljZXMobGF0TG5nLmxhdCgpLCBsYXRMbmcubG5nKCkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxHb29nbGVNYXBcbiAgICAgICAgcmVmPXt0aGlzLm9uTWFwTG9hZH1cbiAgICAgICAgZGVmYXVsdFpvb209ezR9XG4gICAgICAgIGRlZmF1bHRDZW50ZXI9e3sgbGF0OiA2Ni4xLCBsbmc6IDEzLjQgfX1cbiAgICAgICAgb25DbGljaz17dGhpcy5vbk1hcENsaWNrfVxuICAgICAgPlxuICAgICAgICB7IHRoaXMuc3RhdGUubWFya2VyID9cbiAgICAgICAgICA8TWFya2VyXG4gICAgICAgICAgICB7Li4udGhpcy5zdGF0ZS5tYXJrZXJ9XG4gICAgICAgICAgLz4gOiBudWxsXG4gICAgICAgIH1cbiAgICAgIDwvR29vZ2xlTWFwPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEdvb2dsZU1hcChHb29nbGVNYXBDb250YWluZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9nb29nbGUtbWFwLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFEQTtBQU9BO0FBUEE7QUFBQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQURBO0FBQUE7QUFBQTtBQUFBOztBQVZBO0FBQUE7QUFBQTtBQUNBO0FBaEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQUE7QUFDQTtBQUFBOztBQUdBO0FBQ0E7QUFBQTtBQUZBO0FBREE7QUFNQTs7OztBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBOztBQUpBO0FBTUE7QUFOQTtBQUNBOztBQU1BO0FBQUE7QUFBQTtBQUFBOzs7OztBQVNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        