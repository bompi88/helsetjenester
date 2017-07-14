
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
  }, 'Helsetjenestekart'), _react2.default.createElement('script', { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAsBErMTKVnCd2rEGfcNMWvD_vi-VY2s-c&callback=initMap', __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzk0MGQwMDIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nb29nbGUtbWFwLmpzPzk0MGQwMDIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nb29nbGUtbWFwLW1hcmtlci5qcz85NDBkMDAyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhbHRoLXNlcnZpY2UuanM/OTQwZDAwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuaW1wb3J0IEdvb2dsZU1hcCBmcm9tICcuLi9jb21wb25lbnRzL2dvb2dsZS1tYXAnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnY2FsYygxMDB2aCAtIDQwcHgpJywgbWFyZ2luVG9wOiAnNDBweCcsIHBhZGRpbmdCb3R0b206ICctNDBweCd9fT5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZSxjaHJvbWU9MVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjBcIiAvPlxuXG4gICAgICA8dGl0bGU+SGVsc2V0amVuZXN0ZWthcnQ8L3RpdGxlPlxuXG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9QUl6YVN5QXNCRXJNVEtWbkNkMnJFR2ZjTk1XdkRfdmktVlkycy1jJmNhbGxiYWNrPWluaXRNYXBcIj48L3NjcmlwdD5cbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjIvc2VtYW50aWMubWluLmNzcycgLz5cbiAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nL3N0YXRpYy9tYWluLmNzcycgLz5cblxuICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9qcXVlcnkvMy4yLjEvanF1ZXJ5LmpzXCI+PC9zY3JpcHQ+XG4gICAgPC9IZWFkPlxuICAgIDxNZW51IGludmVydGVkIGZpeGVkPSd0b3AnIGJvcmRlcmxlc3Mgc3R5bGU9e3sgYm9yZGVyOiAwLCBtYXJnaW46IDAgfX0+XG4gICAgICA8TWVudS5JdGVtIG5hbWU9J0hlbHNldGplbmVzdGVrYXJ0JyBhY3RpdmU9e3RydWV9IC8+XG4gICAgPC9NZW51PlxuICAgIDxHb29nbGVNYXBcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQ9e1xuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9fSAvPlxuICAgICAgfVxuICAgICAgbWFwRWxlbWVudD17XG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH19IC8+XG4gICAgICB9XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoR29vZ2xlTWFwLCBHb29nbGVNYXAgfSBmcm9tICdyZWFjdC1nb29nbGUtbWFwcyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmltcG9ydCBHb29nbGVNYXBNYXJrZXIgZnJvbSAnLi9nb29nbGUtbWFwLW1hcmtlcic7XG5cbmNsYXNzIEdvb2dsZU1hcENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgbWFya2VyOiBudWxsLCBzZXJ2aWNlczogW10gfTtcbiAgICB0aGlzLm9uTWFwTG9hZCA9IHRoaXMub25NYXBMb2FkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbk1hcENsaWNrID0gdGhpcy5vbk1hcENsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbk1hcExvYWQoLi4uYXJncykge1xuICAgIGNvbnNvbGUubG9nKCdNYXAgbG9hZGVkJywgYXJncyk7XG4gIH1cblxuICBvbk1hcENsaWNrKHsgbGF0TG5nIH0pIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcmtlcjoge1xuICAgICAgICBwb3NpdGlvbjogbGF0TG5nLFxuICAgICAgICBkZWZhdWx0QW5pbWF0aW9uOiAwLFxuICAgICAgICBrZXk6IERhdGUubm93KClcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8R29vZ2xlTWFwXG4gICAgICAgIHJlZj17dGhpcy5vbk1hcExvYWR9XG4gICAgICAgIGRlZmF1bHRab29tPXs0fVxuICAgICAgICBkZWZhdWx0Q2VudGVyPXt7IGxhdDogNjYuMSwgbG5nOiAxMy40IH19XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMub25NYXBDbGlja31cbiAgICAgID5cbiAgICAgICAgeyB0aGlzLnN0YXRlLm1hcmtlciA/IDxHb29nbGVNYXBNYXJrZXIgey4uLnRoaXMuc3RhdGUubWFya2VyfSAvPiA6IG51bGwgfVxuICAgICAgPC9Hb29nbGVNYXA+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoR29vZ2xlTWFwKEdvb2dsZU1hcENvbnRhaW5lcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2dvb2dsZS1tYXAuanMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYXJrZXIsIEluZm9XaW5kb3cgfSBmcm9tICdyZWFjdC1nb29nbGUtbWFwcyc7XG5pbXBvcnQgeyBMaXN0LCBJY29uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5pbXBvcnQgSGVhbHRoU2VydmljZSBmcm9tICcuL2hlYWx0aC1zZXJ2aWNlJztcblxuY2xhc3MgR29vZ2xlTWFwTWFya2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuZmV0Y2hIZWFsdGhTZXJ2aWNlcyA9IHRoaXMuZmV0Y2hIZWFsdGhTZXJ2aWNlcy5iaW5kKHRoaXMpO1xuXG4gICAgY29uc3QgeyBwb3NpdGlvbiB9ID0gcHJvcHM7XG5cbiAgICB0aGlzLmZldGNoSGVhbHRoU2VydmljZXMocG9zaXRpb24ubGF0KCksIHBvc2l0aW9uLmxuZygpKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VydmljZXM6IFtdLFxuICAgIH07XG4gIH1cblxuICBmZXRjaEhlYWx0aFNlcnZpY2VzKGxhdCwgbG5nKSB7XG4gICAgZmV0Y2goYC9oZWFsdGhzZXJ2aWNlcy8ke2xhdH0vJHtsbmd9YClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgXHRcdGlmIChyZXNwb25zZS5zdGF0dXMgPj0gNDAwKSB7XG4gIFx0XHRcdHRocm93IG5ldyBFcnJvcignQmFkIHJlc3BvbnNlIGZyb20gc2VydmVyJyk7XG4gIFx0XHR9XG4gIFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICBcdH0pLnRoZW4oKHNlcnZpY2VzKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VydmljZXMgfSk7XG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaGFzQ29udGVudCA9IHRoaXMuc3RhdGUuc2VydmljZXMubGVuZ3RoO1xuICAgIHJldHVybiAoXG4gICAgICA8TWFya2VyIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPEluZm9XaW5kb3dcbiAgICAgICAgICBvbkNsb3NlQ2xpY2s9eygpID0+IHt9fVxuICAgICAgICAgIG9uRG9tUmVhZHk9eygpID0+IHt9fVxuICAgICAgICAgIG9uWkluZGV4Q2hhbmdlZD17KCkgPT4ge319XG4gICAgICAgID5cbiAgICAgICAgICB7IGhhc0NvbnRlbnQgPyAoXG4gICAgICAgICAgICA8TGlzdCBkaXZpZGVkIHJlbGF4ZWQ+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlcnZpY2VzLm1hcCgoc2VydmljZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8SGVhbHRoU2VydmljZSB7Li4uc2VydmljZX0vPjtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgKSA6IDxJY29uIGxvYWRpbmcgbmFtZT0nbm90Y2hlZCBjaXJjbGUnLz4gfVxuICAgICAgICA8L0luZm9XaW5kb3c+XG4gICAgICA8L01hcmtlcj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBHb29nbGVNYXBNYXJrZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2dvb2dsZS1tYXAtbWFya2VyLmpzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGlzdCwgSWNvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuY2xhc3MgSGVhbHRoU2VydmljZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcGhvbmVIb21lKHBob25lKSB7XG4gICAgY29uc29sZS5sb2cocGhvbmUpXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgdGVsOi8vJHtwaG9uZX1gO1xuICB9XG5cbiAgc2VuZEVtYWlsKGVtYWlsKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgbWFpbHRvOiR7ZW1haWx9YDtcbiAgfVxuXG4gIGdvdG9TaXRlKHVybCkge1xuICAgIGNvbnN0IHdpbiA9IHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xuICAgIHdpbi5mb2N1cygpO1xuICB9XG5cbiAgcmVuZGVyUGhvbmUoKSB7XG4gICAgY29uc3QgeyBwaG9uZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3QuSXRlbSBjbGFzc05hbWU9J2NvbnRhY3QtYnV0dG9uJyBvbkNsaWNrPXt0aGlzLnBob25lSG9tZS5iaW5kKHRoaXMsIHBob25lKX0+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgc2l6ZT0nbGFyZ2UnXG4gICAgICAgICAgY29sb3I9J29saXZlJ1xuICAgICAgICAgIG5hbWU9J21vYmlsZSdcbiAgICAgICAgLz5cbiAgICAgIDwvTGlzdC5JdGVtPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJFbWFpbCgpIHtcbiAgICBjb25zdCB7IGVtYWlsIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdC5JdGVtIGNsYXNzTmFtZT0nY29udGFjdC1idXR0b24nIG9uQ2xpY2s9e3RoaXMuc2VuZEVtYWlsLmJpbmQodGhpcywgZW1haWwpfT5cbiAgICAgICAgPEljb25cbiAgICAgICAgICBzaXplPSdsYXJnZSdcbiAgICAgICAgICBjb2xvcj0nb2xpdmUnXG4gICAgICAgICAgbmFtZT0nbWFpbCdcbiAgICAgICAgLz5cbiAgICAgIDwvTGlzdC5JdGVtPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJXZWJzaXRlKCkge1xuICAgIGNvbnN0IHsgd2Vic2l0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3QuSXRlbSBjbGFzc05hbWU9J2NvbnRhY3QtYnV0dG9uJyBvbkNsaWNrPXt0aGlzLmdvdG9TaXRlLmJpbmQodGhpcywgd2Vic2l0ZSl9PlxuICAgICAgICA8SWNvblxuICAgICAgICAgIHNpemU9J2xhcmdlJ1xuICAgICAgICAgIGNvbG9yPSdvbGl2ZSdcbiAgICAgICAgICBuYW1lPSdsaW5raWZ5J1xuICAgICAgICAvPlxuICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBzdHJlZXQsXG4gICAgICBwb3N0TnIsXG4gICAgICBwb3N0TmFtZSxcbiAgICAgIHBob25lLFxuICAgICAgZW1haWwsXG4gICAgICB3ZWJzaXRlXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgICA8TGlzdC5IZWFkZXI+e25hbWV9PC9MaXN0LkhlYWRlcj5cbiAgICAgICAgICB7IHN0cmVldCA/IDxMaXN0LkRlc2NyaXB0aW9uPntzdHJlZXR9LCB7cG9zdE5yfSB7cG9zdE5hbWV9PC9MaXN0LkRlc2NyaXB0aW9uPiA6IG51bGwgfVxuICAgICAgICAgIDxMaXN0IGhvcml6b250YWwgZmxvYXRlZD0nbGVmdCc+XG4gICAgICAgICAgICB7IHBob25lID8gdGhpcy5yZW5kZXJQaG9uZSgpIDogbnVsbCB9XG4gICAgICAgICAgICB7IGVtYWlsID8gdGhpcy5yZW5kZXJFbWFpbCgpIDogbnVsbCB9XG4gICAgICAgICAgICB7IHdlYnNpdGUgPyB0aGlzLnJlbmRlcldlYnNpdGUoKSA6IG51bGwgfVxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XG5cbiAgICAgIDwvTGlzdC5JdGVtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhbHRoU2VydmljZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhbHRoLXNlcnZpY2UuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFEQTtBQU9BO0FBUEE7QUFBQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQURBO0FBQUE7QUFBQTtBQUFBOztBQVZBO0FBQUE7QUFBQTtBQUNBO0FBbkJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFBQTs7QUFHQTtBQUNBO0FBQUE7QUFGQTtBQURBOzs7O0FBVUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7O0FBSkE7QUFNQTtBQU5BO0FBQ0E7O0FBS0E7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBTEE7QUFPQTtBQVBBO0FBU0E7QUFFQTs7OztBQUdBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUlBO0FBSUE7QUFKQTtBQUFBOzs7OztBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFDQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQU9BO0FBUEE7QUFDQTs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQUE7O0FBSEE7QUFPQTtBQVBBO0FBQ0E7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUFBOztBQUhBO0FBT0E7QUFQQTtBQUNBOzs7O0FBUUE7QUFVQTtBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQVdBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        