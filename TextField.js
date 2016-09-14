'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = TextField;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TextField(props) {
    var muiTheme = (0, _getMuiTheme2.default)({
        palette: {
            primary1Color: props.color
        }
    });

    return _react2.default.createElement(
        _MuiThemeProvider2.default,
        { muiTheme: muiTheme },
        _react2.default.createElement(_TextField2.default, _extends({}, props, {
            ref: props.passRef
        }))
    );
}