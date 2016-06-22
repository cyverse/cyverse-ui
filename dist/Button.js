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

var _reactInk = require("react-ink");

var _reactInk2 = _interopRequireDefault(_reactInk);

var _Tooltip = require("./Tooltip");

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = _react2.default.createClass({
    displayName: "Button",

    onTouchTap: function onTouchTap() {
        if (this.props.onTouchTap) {
            this.props.onTouchTap();
        }
    },
    style: function style() {
        var btnColor = this.props.color ? this.props.color : _styles.variables.grey.xXLight;

        var txtColor = (0, _tinycolor2.default)(btnColor).isLight() ? "#55555" : "white";

        var disabledStyle = this.props.disabled ? {
            cursor: "not-allowed",
            opacity: ".5"
        } : {
            cursor: "pointer"
        };

        var hoverStyle = this.props.disabled ? null : _extends({
            background: (0, _tinycolor2.default)(btnColor).darken(5).toString()
        }, _styles.styles.boxShadow.md);

        return _extends({
            display: "inline-block",
            position: "relative",
            padding: "10px 15px",
            background: btnColor,
            outline: "none",
            border: "none",
            borderRadius: "2px",
            color: txtColor,
            fontSize: "14px",
            textTransform: "uppercase",
            transition: "all ease .2s"
        }, disabledStyle, _styles.styles.boxShadow.sm, {
            ':hover': _extends({}, hoverStyle)
        });
    },
    ink: function ink() {
        if (this.props.disabled) return;
        return _react2.default.createElement(_reactInk2.default, null);
    },
    render: function render() {
        var disabled = this.props.isdisabled;
        return _react2.default.createElement(
            _Tooltip2.default,
            {
                message: this.props.tooltipMessage,
                direction: this.props.tooltipDirection
            },
            _react2.default.createElement(
                "button",
                {
                    style: _extends({}, this.style(), this.props.style),
                    type: "button",
                    onClick: this.onTouchTap,
                    disabled: this.props.disabled
                },
                this.props.children,
                this.ink()
            )
        );
    }
});

exports.default = (0, _radium2.default)(Button);