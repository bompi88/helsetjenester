'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = require('react-google-maps');

var _isomorphicFetch = require('isomorphic-fetch');

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