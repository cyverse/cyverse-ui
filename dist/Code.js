"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: "Code",
    style: function style() {
        return {
            display: "block",
            whiteSpace: "pre-wrap",
            padding: "20px",
            color: "darkgrey",
            borderLeft: "solid darkgrey 5px"
        };
    },
    render: function render() {
        return _react2.default.createElement("code", {
            style: _extends({}, this.style()),
            children: this.props.children
        });
    }
});