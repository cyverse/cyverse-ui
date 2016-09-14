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
    displayName: 'Badge',
    render: function render() {

        return _react2.default.createElement(
            'span',
            { style: this.style() },
            this.props.children
        );
    },
    style: function style() {
        var bg = this.props.color ? { background: this.props.color } : _styles.styles.BgColors.greyXDark;

        return _extends({
            display: "inline-block",
            verticalAlign: "middle",
            padding: "3px",
            lineHeight: "74%",
            fontSize: "8px",
            borderRadius: "9999px",
            color: "white"
        }, bg, this.props.style, (0, _styles.marg)(this.props));
    }
});