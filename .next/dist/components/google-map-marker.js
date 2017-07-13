'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _semanticUiReact = require('semantic-ui-react');

var _healthService = require('./health-service');

var _healthService2 = _interopRequireDefault(_healthService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return _react2.default.createElement(_reactGoogleMaps.Marker, this.props, _react2.default.createElement(_reactGoogleMaps.InfoWindow, {
        onCloseClick: function onCloseClick() {},
        onDomReady: function onDomReady() {},
        onZIndexChanged: function onZIndexChanged() {}
      }, hasContent ? _react2.default.createElement(_semanticUiReact.List, { divided: true, relaxed: true }, this.state.services.map(function (service) {
        return _react2.default.createElement(_healthService2.default, service);
      })) : _react2.default.createElement(_semanticUiReact.Icon, { loading: true, name: 'notched circle' })));
    }
  }]);

  return GoogleMapMarker;
}(_react.Component);

exports.default = GoogleMapMarker;