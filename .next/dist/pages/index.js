'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require('semantic-ui-react');

var _googleMap = require('../components/google-map');

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