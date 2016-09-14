'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Hr',
    style: function style() {
        return _extends({
            border: "0px",
            height: "1px",
            background: "rgba( 0, 0, 0, .1 )"
        }, (0, _styles.marg)(this.props), this.props.style);
    },
    render: function render() {
        return _react2.default.createElement('hr', { style: this.style() });
    }
});