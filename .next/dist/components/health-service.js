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

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

      return _react2.default.createElement(_semanticUiReact.List.Item, { className: 'contact-button', onClick: this.phoneHome.bind(this, phone) }, _react2.default.createElement(_semanticUiReact.Icon, {
        size: 'large',
        color: 'olive',
        name: 'mobile'
      }));
    }
  }, {
    key: 'renderEmail',
    value: function renderEmail() {
      var email = this.props.email;

      return _react2.default.createElement(_semanticUiReact.List.Item, { className: 'contact-button', onClick: this.sendEmail.bind(this, email) }, _react2.default.createElement(_semanticUiReact.Icon, {
        size: 'large',
        color: 'olive',
        name: 'mail'
      }));
    }
  }, {
    key: 'renderWebsite',
    value: function renderWebsite() {
      var website = this.props.website;

      return _react2.default.createElement(_semanticUiReact.List.Item, { className: 'contact-button', onClick: this.gotoSite.bind(this, website) }, _react2.default.createElement(_semanticUiReact.Icon, {
        size: 'large',
        color: 'olive',
        name: 'linkify'
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

      return _react2.default.createElement(_semanticUiReact.List.Item, null, _react2.default.createElement(_semanticUiReact.List.Content, null, _react2.default.createElement(_semanticUiReact.List.Header, null, name), street ? _react2.default.createElement(_semanticUiReact.List.Description, null, street, ', ', postNr, ' ', postName) : null, _react2.default.createElement(_semanticUiReact.List, { horizontal: true, floated: 'left' }, phone ? this.renderPhone() : null, email ? this.renderEmail() : null, website ? this.renderWebsite() : null)));
    }
  }]);

  return HealthService;
}(_react.Component);

exports.default = HealthService;