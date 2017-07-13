webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hNDUyNWY2MDE5MjVhZGI4ZWQ2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nb29nbGUtbWFwLW1hcmtlci5qcz9lZjJiYjg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcmtlciwgSW5mb1dpbmRvdyB9IGZyb20gJ3JlYWN0LWdvb2dsZS1tYXBzJztcbmltcG9ydCB7IExpc3QsIEljb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmltcG9ydCBIZWFsdGhTZXJ2aWNlIGZyb20gJy4vaGVhbHRoLXNlcnZpY2UnO1xuXG5jbGFzcyBHb29nbGVNYXBNYXJrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5mZXRjaEhlYWx0aFNlcnZpY2VzID0gdGhpcy5mZXRjaEhlYWx0aFNlcnZpY2VzLmJpbmQodGhpcyk7XG5cbiAgICBjb25zdCB7IHBvc2l0aW9uIH0gPSBwcm9wcztcblxuICAgIHRoaXMuZmV0Y2hIZWFsdGhTZXJ2aWNlcyhwb3NpdGlvbi5sYXQoKSwgcG9zaXRpb24ubG5nKCkpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZXJ2aWNlczogW10sXG4gICAgfTtcbiAgfVxuXG4gIGZldGNoSGVhbHRoU2VydmljZXMobGF0LCBsbmcpIHtcbiAgICBmZXRjaChgL2hlYWx0aHNlcnZpY2VzLyR7bGF0fS8ke2xuZ31gKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICBcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcbiAgXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdCYWQgcmVzcG9uc2UgZnJvbSBzZXJ2ZXInKTtcbiAgXHRcdH1cbiAgXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIFx0fSkudGhlbigoc2VydmljZXMpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXJ2aWNlcyB9KTtcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBoYXNDb250ZW50ID0gdGhpcy5zdGF0ZS5zZXJ2aWNlcy5sZW5ndGg7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNYXJrZXIgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICA8SW5mb1dpbmRvd1xuICAgICAgICAgIG9uQ2xvc2VDbGljaz17KCkgPT4ge319XG4gICAgICAgICAgb25Eb21SZWFkeT17KCkgPT4ge319XG4gICAgICAgICAgb25aSW5kZXhDaGFuZ2VkPXsoKSA9PiB7fX1cbiAgICAgICAgPlxuICAgICAgICAgIHsgaGFzQ29udGVudCA/IChcbiAgICAgICAgICAgIDxMaXN0IGRpdmlkZWQgcmVsYXhlZD5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VydmljZXMubWFwKChzZXJ2aWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxIZWFsdGhTZXJ2aWNlIHsuLi5zZXJ2aWNlfS8+O1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICApIDogPEljb24gbG9hZGluZyBuYW1lPSdub3RjaGVkIGNpcmNsZScvPiB9XG4gICAgICAgIDwvSW5mb1dpbmRvdz5cbiAgICAgIDwvTWFya2VyPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEdvb2dsZU1hcE1hcmtlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZ29vZ2xlLW1hcC1tYXJrZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFMQTtBQU9BO0FBUEE7QUFTQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUhBO0FBS0E7QUFMQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBSUE7QUFJQTtBQUpBO0FBQUE7Ozs7O0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=