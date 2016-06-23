"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _tinycolor = require("tinycolor2");

var _tinycolor2 = _interopRequireDefault(_tinycolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = _react2.default.createClass({
    displayName: "Avatar",

    render: function render() {
        var letter = this.props.name[0].toUpperCase();
        var size = this.props.size;
        var color = this.props.color;

        return _react2.default.createElement(
            "div",
            { style: _extends({
                    display: "inline-block",
                    textAlign: "center",
                    width: size + "px",
                    height: size + "px",
                    borderRadius: "999px",
                    background: color,
                    fontSize: size * .7 + "px",
                    lineHeight: size + 2 + "px",
                    color: "rgba(255,255,255,.7)"
                }, this.props.style)
            },
            letter
        );
    }

});

exports.default = (0, _radium2.default)(Button);