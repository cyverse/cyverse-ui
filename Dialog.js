'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogRender = _react2.default.createClass({
    displayName: 'DialogRender',
    render: function render() {
        return _react2.default.createElement(
            _MuiThemeProvider2.default,
            null,
            _react2.default.createElement(_materialUi.Dialog, this.props)
        );
    }
});

DialogRender.propTypes = {
    className: _react.PropTypes.string
};

exports.default = DialogRender;