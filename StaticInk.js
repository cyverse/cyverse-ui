"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: "StaticInk",
    render: function render() {
        return _react2.default.createElement("span", {
            style: this.style()

        });
    },
    style: function style() {
        var background = this.props.isFocused ? "rgba(0,0,0,.1)" : "rgba(0,0,0,0)";
        var scale = this.props.isFocused ? "scale(1.75)" : "scale(1)";
        var size = "100%";
        var width = size;
        var height = size;
        return {
            display: "block",
            transition: "all ease .3s",
            position: "absolute",
            transform: scale,
            transformOrigin: "50% 50%",
            background: background,
            width: width,
            height: height,
            borderRadius: "999px"
        };
    }
});