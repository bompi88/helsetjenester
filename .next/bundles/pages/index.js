
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(627);


/***/ }),

/***/ 627:
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

var _semanticUiReact = __webpack_require__(628);

var _googleMap = __webpack_require__(756);

var _googleMap2 = _interopRequireDefault(_googleMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/bompi88/projects/helsetjenester/pages/index.js?entry';

exports.default = function () {
  return _react2.default.createElement('div', { style: { height: 'calc(100vh - 40px)', marginTop: '40px', paddingBottom: '-40px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1', __source: {
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
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/main.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })), _react2.default.createElement(_semanticUiReact.Menu, { inverted: true, fixed: 'top', borderless: true, style: { border: 0, margin: 0 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Helsetjenestekart', active: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })), _react2.default.createElement(_googleMap2.default, {
    containerElement: _react2.default.createElement('div', { style: {
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }),
    mapElement: _react2.default.createElement('div', { style: {
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0
      }, __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
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

/***/ 756:
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

var _reactGoogleMaps = __webpack_require__(625);

var _isomorphicFetch = __webpack_require__(778);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _googleMapMarker = __webpack_require__(780);

var _googleMapMarker2 = _interopRequireDefault(_googleMapMarker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/bompi88/projects/helsetjenester/components/google-map.js';


var GoogleMapContainer = function (_Component) {
  (0, _inherits3.default)(GoogleMapContainer, _Component);

  function GoogleMapContainer(props) {
    (0, _classCallCheck3.default)(this, GoogleMapContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GoogleMapContainer.__proto__ || (0, _getPrototypeOf2.default)(GoogleMapContainer)).call(this, props));

    _this.state = { marker: null, services: [] };
    _this.onMapLoad = _this.onMapLoad.bind(_this);
    _this.onMapClick = _this.onMapClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(GoogleMapContainer, [{
    key: 'onMapLoad',
    value: function onMapLoad() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      console.log('Map loaded', args);
    }
  }, {
    key: 'onMapClick',
    value: function onMapClick(_ref) {
      var latLng = _ref.latLng;

      this.setState({
        marker: {
          position: latLng,
          defaultAnimation: 0,
          key: Date.now()
        }
      });
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
          lineNumber: 33
        }
      }, this.state.marker ? _react2.default.createElement(_googleMapMarker2.default, (0, _extends3.default)({}, this.state.marker, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })) : null);
    }
  }]);

  return GoogleMapContainer;
}(_react.Component);

exports.default = (0, _reactGoogleMaps.withGoogleMap)(GoogleMapContainer);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/bompi88/projects/helsetjenester/components/google-map.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/bompi88/projects/helsetjenester/components/google-map.js"); } } })();

/***/ }),

/***/ 780:
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

var _reactGoogleMaps = __webpack_require__(625);

var _semanticUiReact = __webpack_require__(628);

var _healthService = __webpack_require__(781);

var _healthService2 = _interopRequireDefault(_healthService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/bompi88/projects/helsetjenester/components/google-map-marker.js';


var GoogleMapMarker = function (_Component) {
  (0, _inherits3.default)(GoogleMapMarker, _Component);

  function GoogleMapMarker(props) {
    (0, _classCallCheck3.default)(this, GoogleMapMarker);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GoogleMapMarker.__proto__ || (0, _getPrototypeOf2.default)(GoogleMapMarker)).call(this, props));

    _this.fetchHealthServices = _this.fetchHealthServices.bind(_this);

    var position = props.position;

    _this.fetchHealthServices(position.lat(), position.lng());
    _this.state = {
      services: []
    };
    return _this;
  }

  (0, _createClass3.default)(GoogleMapMarker, [{
    key: 'fetchHealthServices',
    value: function fetchHealthServices(lat, lng) {
      var _this2 = this;

      fetch('/healthservices/' + lat + '/' + lng).then(function (response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      }).then(function (services) {
        _this2.setState({ services: services });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var hasContent = this.state.services.length;
      return _react2.default.createElement(_reactGoogleMaps.Marker, (0, _extends3.default)({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement(_reactGoogleMaps.InfoWindow, {
        onCloseClick: function onCloseClick() {},
        onDomReady: function onDomReady() {},
        onZIndexChanged: function onZIndexChanged() {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, hasContent ? _react2.default.createElement(_semanticUiReact.List, { divided: true, relaxed: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, this.state.services.map(function (service) {
        return _react2.default.createElement(_healthService2.default, (0, _extends3.default)({}, service, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }));
      })) : _react2.default.createElement(_semanticUiReact.Icon, { loading: true, name: 'notched circle', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })));
    }
  }]);

  return GoogleMapMarker;
}(_react.Component);

exports.default = GoogleMapMarker;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/bompi88/projects/helsetjenester/components/google-map-marker.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/bompi88/projects/helsetjenester/components/google-map-marker.js"); } } })();

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _semanticUiReact = __webpack_require__(628);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/bompi88/projects/helsetjenester/components/health-service.js';


var HealthService = function (_Component) {
  (0, _inherits3.default)(HealthService, _Component);

  function HealthService() {
    (0, _classCallCheck3.default)(this, HealthService);

    return (0, _possibleConstructorReturn3.default)(this, (HealthService.__proto__ || (0, _getPrototypeOf2.default)(HealthService)).apply(this, arguments));
  }

  (0, _createClass3.default)(HealthService, [{
    key: 'phoneHome',
    value: function phoneHome(phone) {
      console.log(phone);
      window.location.href = 'tel://' + phone;
    }
  }, {
    key: 'sendEmail',
    value: function sendEmail(email) {
      window.location.href = 'mailto:' + email;
    }
  }, {
    key: 'gotoSite',
    value: function gotoSite(url) {
      var win = window.open(url, '_blank');
      win.focus();
    }
  }, {
    key: 'renderPhone',
    value: function renderPhone() {
      var phone = this.props.phone;

      return _react2.default.createElement(_semanticUiReact.List.Item, { className: 'contact-button', onClick: this.phoneHome.bind(this, phone), __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, {
        size: 'large',
        color: 'olive',
        name: 'mobile',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }));
    }
  }, {
    key: 'renderEmail',
    value: function renderEmail() {
      var email = this.props.email;

      return _react2.default.createElement(_semanticUiReact.List.Item, { className: 'contact-button', onClick: this.sendEmail.bind(this, email), __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, {
        size: 'large',
        color: 'olive',
        name: 'mail',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }));
    }
  }, {
    key: 'renderWebsite',
    value: function renderWebsite() {
      var website = this.props.website;

      return _react2.default.createElement(_semanticUiReact.List.Item, { className: 'contact-button', onClick: this.gotoSite.bind(this, website), __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, {
        size: 'large',
        color: 'olive',
        name: 'linkify',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          street = _props.street,
          postNr = _props.postNr,
          postName = _props.postName,
          phone = _props.phone,
          email = _props.email,
          website = _props.website;

      return _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.List.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.List.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, name), street ? _react2.default.createElement(_semanticUiReact.List.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, street, ', ', postNr, ' ', postName) : null, _react2.default.createElement(_semanticUiReact.List, { horizontal: true, floated: 'left', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, phone ? this.renderPhone() : null, email ? this.renderEmail() : null, website ? this.renderWebsite() : null)));
    }
  }]);

  return HealthService;
}(_react.Component);

exports.default = HealthService;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/bompi88/projects/helsetjenester/components/health-service.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/bompi88/projects/helsetjenester/components/health-service.js"); } } })();

/***/ })

},[626]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzFmZjhmMTAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nb29nbGUtbWFwLmpzPzFmZjhmMTAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nb29nbGUtbWFwLW1hcmtlci5qcz8xZmY4ZjEwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhbHRoLXNlcnZpY2UuanM/ZWYyYmI4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuaW1wb3J0IEdvb2dsZU1hcCBmcm9tICcuLi9jb21wb25lbnRzL2dvb2dsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnY2FsYygxMDB2aCAtIDQwcHgpJywgbWFyZ2luVG9wOiAnNDBweCcsIHBhZGRpbmdCb3R0b206ICctNDBweCd9fT5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZSxjaHJvbWU9MVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjBcIiAvPlxuXG4gICAgICA8dGl0bGU+SGVsc2V0amVuZXN0ZWthcnQ8L3RpdGxlPlxuXG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qc1wiPjwvc2NyaXB0PlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPScvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMi9zZW1hbnRpYy5taW4uY3NzJyAvPlxuICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPScvc3RhdGljL21haW4uY3NzJyAvPlxuXG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2pxdWVyeS8zLjIuMS9qcXVlcnkuanNcIj48L3NjcmlwdD5cbiAgICA8L0hlYWQ+XG4gICAgPE1lbnUgaW52ZXJ0ZWQgZml4ZWQ9J3RvcCcgYm9yZGVybGVzcyBzdHlsZT17eyBib3JkZXI6IDAsIG1hcmdpbjogMCB9fT5cbiAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nSGVsc2V0amVuZXN0ZWthcnQnIGFjdGl2ZT17dHJ1ZX0gLz5cbiAgICA8L01lbnU+XG4gICAgPEdvb2dsZU1hcFxuICAgICAgY29udGFpbmVyRWxlbWVudD17XG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH19IC8+XG4gICAgICB9XG4gICAgICBtYXBFbGVtZW50PXtcbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfX0gLz5cbiAgICAgIH1cbiAgICAvPlxuICA8L2Rpdj5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhHb29nbGVNYXAsIEdvb2dsZU1hcCB9IGZyb20gJ3JlYWN0LWdvb2dsZS1tYXBzJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcblxuaW1wb3J0IEdvb2dsZU1hcE1hcmtlciBmcm9tICcuL2dvb2dsZS1tYXAtbWFya2VyJztcblxuY2xhc3MgR29vZ2xlTWFwQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBtYXJrZXI6IG51bGwsIHNlcnZpY2VzOiBbXSB9O1xuICAgIHRoaXMub25NYXBMb2FkID0gdGhpcy5vbk1hcExvYWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTWFwQ2xpY2sgPSB0aGlzLm9uTWFwQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uTWFwTG9hZCguLi5hcmdzKSB7XG4gICAgY29uc29sZS5sb2coJ01hcCBsb2FkZWQnLCBhcmdzKTtcbiAgfVxuXG4gIG9uTWFwQ2xpY2soeyBsYXRMbmcgfSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFya2VyOiB7XG4gICAgICAgIHBvc2l0aW9uOiBsYXRMbmcsXG4gICAgICAgIGRlZmF1bHRBbmltYXRpb246IDAsXG4gICAgICAgIGtleTogRGF0ZS5ub3coKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxHb29nbGVNYXBcbiAgICAgICAgcmVmPXt0aGlzLm9uTWFwTG9hZH1cbiAgICAgICAgZGVmYXVsdFpvb209ezR9XG4gICAgICAgIGRlZmF1bHRDZW50ZXI9e3sgbGF0OiA2Ni4xLCBsbmc6IDEzLjQgfX1cbiAgICAgICAgb25DbGljaz17dGhpcy5vbk1hcENsaWNrfVxuICAgICAgPlxuICAgICAgICB7IHRoaXMuc3RhdGUubWFya2VyID8gPEdvb2dsZU1hcE1hcmtlciB7Li4udGhpcy5zdGF0ZS5tYXJrZXJ9IC8+IDogbnVsbCB9XG4gICAgICA8L0dvb2dsZU1hcD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhHb29nbGVNYXAoR29vZ2xlTWFwQ29udGFpbmVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZ29vZ2xlLW1hcC5qcyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcmtlciwgSW5mb1dpbmRvdyB9IGZyb20gJ3JlYWN0LWdvb2dsZS1tYXBzJztcbmltcG9ydCB7IExpc3QsIEljb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmltcG9ydCBIZWFsdGhTZXJ2aWNlIGZyb20gJy4vaGVhbHRoLXNlcnZpY2UnO1xuXG5jbGFzcyBHb29nbGVNYXBNYXJrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5mZXRjaEhlYWx0aFNlcnZpY2VzID0gdGhpcy5mZXRjaEhlYWx0aFNlcnZpY2VzLmJpbmQodGhpcyk7XG5cbiAgICBjb25zdCB7IHBvc2l0aW9uIH0gPSBwcm9wcztcblxuICAgIHRoaXMuZmV0Y2hIZWFsdGhTZXJ2aWNlcyhwb3NpdGlvbi5sYXQoKSwgcG9zaXRpb24ubG5nKCkpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZXJ2aWNlczogW10sXG4gICAgfTtcbiAgfVxuXG4gIGZldGNoSGVhbHRoU2VydmljZXMobGF0LCBsbmcpIHtcbiAgICBmZXRjaChgL2hlYWx0aHNlcnZpY2VzLyR7bGF0fS8ke2xuZ31gKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICBcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcbiAgXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdCYWQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXInKTtcbiAgXHRcdH1cbiAgXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIFx0fSkudGhlbigoc2VydmljZXMpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXJ2aWNlcyB9KTtcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBoYXNDb250ZW50ID0gdGhpcy5zdGF0ZS5zZXJ2aWNlcy5sZW5ndGg7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNYXJrZXIgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICA8SW5mb1dpbmRvd1xuICAgICAgICAgIG9uQ2xvc2VDbGljaz17KCkgPT4ge319XG4gICAgICAgICAgb25Eb21SZWFkeT17KCkgPT4ge319XG4gICAgICAgICAgb25aSW5kZXhDaGFuZ2VkPXsoKSA9PiB7fX1cbiAgICAgICAgPlxuICAgICAgICAgIHsgaGFzQ29udGVudCA/IChcbiAgICAgICAgICAgIDxMaXN0IGRpdmlkZWQgcmVsYXhlZD5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VydmljZXMubWFwKChzZXJ2aWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxIZWFsdGhTZXJ2aWNlIHsuLi5zZXJ2aWNlfS8+O1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICApIDogPEljb24gbG9hZGluZyBuYW1lPSdub3RjaGVkIGNpcmNsZScvPiB9XG4gICAgICAgIDwvSW5mb1dpbmRvdz5cbiAgICAgIDwvTWFya2VyPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEdvb2dsZU1hcE1hcmtlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZ29vZ2xlLW1hcC1tYXJrZXIuanMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaXN0LCBJY29uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5jbGFzcyBIZWFsdGhTZXJ2aWNlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBwaG9uZUhvbWUocGhvbmUpIHtcbiAgICBjb25zb2xlLmxvZyhwaG9uZSlcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGB0ZWw6Ly8ke3Bob25lfWA7XG4gIH1cblxuICBzZW5kRW1haWwoZW1haWwpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBtYWlsdG86JHtlbWFpbH1gO1xuICB9XG5cbiAgZ290b1NpdGUodXJsKSB7XG4gICAgY29uc3Qgd2luID0gd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XG4gICAgd2luLmZvY3VzKCk7XG4gIH1cblxuICByZW5kZXJQaG9uZSgpIHtcbiAgICBjb25zdCB7IHBob25lIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdC5JdGVtIGNsYXNzTmFtZT0nY29udGFjdC1idXR0b24nIG9uQ2xpY2s9e3RoaXMucGhvbmVIb21lLmJpbmQodGhpcywgcGhvbmUpfT5cbiAgICAgICAgPEljb25cbiAgICAgICAgICBzaXplPSdsYXJnZSdcbiAgICAgICAgICBjb2xvcj0nb2xpdmUnXG4gICAgICAgICAgbmFtZT0nbW9iaWxlJ1xuICAgICAgICAvPlxuICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckVtYWlsKCkge1xuICAgIGNvbnN0IHsgZW1haWwgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0Lkl0ZW0gY2xhc3NOYW1lPSdjb250YWN0LWJ1dHRvbicgb25DbGljaz17dGhpcy5zZW5kRW1haWwuYmluZCh0aGlzLCBlbWFpbCl9PlxuICAgICAgICA8SWNvblxuICAgICAgICAgIHNpemU9J2xhcmdlJ1xuICAgICAgICAgIGNvbG9yPSdvbGl2ZSdcbiAgICAgICAgICBuYW1lPSdtYWlsJ1xuICAgICAgICAvPlxuICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcldlYnNpdGUoKSB7XG4gICAgY29uc3QgeyB3ZWJzaXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdC5JdGVtIGNsYXNzTmFtZT0nY29udGFjdC1idXR0b24nIG9uQ2xpY2s9e3RoaXMuZ290b1NpdGUuYmluZCh0aGlzLCB3ZWJzaXRlKX0+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgc2l6ZT0nbGFyZ2UnXG4gICAgICAgICAgY29sb3I9J29saXZlJ1xuICAgICAgICAgIG5hbWU9J2xpbmtpZnknXG4gICAgICAgIC8+XG4gICAgICA8L0xpc3QuSXRlbT5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3Qge1xuICAgICAgbmFtZSxcbiAgICAgIHN0cmVldCxcbiAgICAgIHBvc3ROcixcbiAgICAgIHBvc3ROYW1lLFxuICAgICAgcGhvbmUsXG4gICAgICBlbWFpbCxcbiAgICAgIHdlYnNpdGVcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8TGlzdC5JdGVtPlxuICAgICAgICA8TGlzdC5Db250ZW50PlxuICAgICAgICAgIDxMaXN0LkhlYWRlcj57bmFtZX08L0xpc3QuSGVhZGVyPlxuICAgICAgICAgIHsgc3RyZWV0ID8gPExpc3QuRGVzY3JpcHRpb24+e3N0cmVldH0sIHtwb3N0TnJ9IHtwb3N0TmFtZX08L0xpc3QuRGVzY3JpcHRpb24+IDogbnVsbCB9XG4gICAgICAgICAgPExpc3QgaG9yaXpvbnRhbCBmbG9hdGVkPSdsZWZ0Jz5cbiAgICAgICAgICAgIHsgcGhvbmUgPyB0aGlzLnJlbmRlclBob25lKCkgOiBudWxsIH1cbiAgICAgICAgICAgIHsgZW1haWwgPyB0aGlzLnJlbmRlckVtYWlsKCkgOiBudWxsIH1cbiAgICAgICAgICAgIHsgd2Vic2l0ZSA/IHRoaXMucmVuZGVyV2Vic2l0ZSgpIDogbnVsbCB9XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L0xpc3QuQ29udGVudD5cblxuICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFsdGhTZXJ2aWNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFsdGgtc2VydmljZS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBR0E7QUFDQTs7Ozs7OztBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQURBO0FBT0E7QUFQQTtBQUFBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBREE7QUFBQTtBQUFBO0FBQUE7O0FBVkE7QUFBQTtBQUFBO0FBQ0E7QUFuQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTs7OztBQUdBO0FBQUE7QUFDQTtBQUFBOztBQUdBO0FBQ0E7QUFBQTtBQUZBO0FBREE7Ozs7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTs7QUFLQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQU9BO0FBUEE7QUFTQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUhBO0FBS0E7QUFMQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBSUE7QUFJQTtBQUpBO0FBQUE7Ozs7O0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUFBOztBQUhBO0FBT0E7QUFQQTtBQUNBOzs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQU9BO0FBUEE7QUFDQTs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQUE7O0FBSEE7QUFPQTtBQVBBO0FBQ0E7Ozs7QUFRQTtBQVVBO0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7O0FBV0E7QUFDQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        