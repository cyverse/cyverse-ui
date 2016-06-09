'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _styles = require('./styles/styles');

var _styles2 = _interopRequireDefault(_styles);

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _reactInk = require('react-ink');

var _reactInk2 = _interopRequireDefault(_reactInk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = _react2.default.createClass({
    displayName: "Button",

    style: function style() {
        var btnColor = this.props.color;
        var txtColor = (0, _tinycolor2.default)(btnColor).isLight() ? "#55555" : "white";

        return _extends({
            cursor: "pointer",
            display: "inline-block",
            position: "relative",
            marginRight: "20px",
            padding: "10px 15px",
            background: btnColor,
            outline: "none",
            border: "none",
            borderRadius: "2px",
            color: txtColor,
            fontSize: "14px",
            transition: "all ease .2s"
        }, _styles2.default.boxShadow.sm, {
            ':hover': _extends({
                background: (0, _tinycolor2.default)(this.props.color).darken(5).toString()
            }, _styles2.default.boxShadow.md)
        });
    },
    render: function render() {
        return _react2.default.createElement(
            'button',
            {
                style: this.style(),
                onClick: this.props.onTouchTap
            },
            this.props.children,
            _react2.default.createElement(_reactInk2.default, null)
        );
    }
});

exports.default = (0, _radium2.default)(Button);