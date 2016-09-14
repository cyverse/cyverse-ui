'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles2 = require('./styles');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _RadioButton = require('material-ui/RadioButton');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'RadioButton',
    render: function render() {
        var muiTheme = (0, _getMuiTheme2.default)({
            palette: {
                primary1Color: this.props.color
            }
        });
        return _react2.default.createElement(
            _MuiThemeProvider2.default,
            { muiTheme: muiTheme },
            _react2.default.createElement(_RadioButton.RadioButton, this.props)
        );
    },
    styles: function styles() {
        return {
            label: _extends({}, _styles2.styles.t.label)
        };
    }
});