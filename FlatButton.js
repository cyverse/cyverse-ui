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

var v = _styles.variables;

var Button = _react2.default.createClass({
    displayName: "FlatButton",

    onTouch: function onTouch() {
        if (this.props.onTouch) {
            this.props.onTouch();
        }
    },
    ink: function ink() {
        if (this.props.disabled) return;
        return _react2.default.createElement(_reactInk2.default, null);
    },
    renderIcon: function renderIcon() {
        if (this.props.icon) {
            var Icon = _react2.default.cloneElement(this.props.icon, { size: 18 });
            return _react2.default.createElement(
                "span",
                { style: this.style().icon },
                Icon
            );
        }
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
                    style: _extends({}, this.style().button, this.props.style),
                    type: "button",
                    onClick: this.onTouch,
                    disabled: this.props.disabled,
                    id: this.props.id
                },
                this.renderIcon(),
                _react2.default.createElement(
                    "span",
                    { style: this.style().label },
                    this.props.children
                ),
                this.ink()
            )
        );
    },
    style: function style() {
        var txtColor = this.props.color || v.c.grey.xDark;

        var disabledStyle = this.props.disabled ? {
            cursor: "not-allowed",
            opacity: ".5"
        } : {
            cursor: "pointer"
        };

        var label = this.props.icon ? { marginLeft: "18px" } : {};

        var hoverStyle = this.props.disabled ? null : {
            background: "rgba(0,0,0,0.08)"
        };

        return {
            button: _extends({
                display: "inline-block",
                position: "relative",
                background: "none",
                padding: "10px 15px",
                outline: "none",
                border: "none",
                borderRadius: "2px",
                color: txtColor,
                textTransform: "uppercase",
                transition: "all ease .2s"
            }, _styles.styles.t.button1, disabledStyle, {
                ':hover': _extends({}, hoverStyle)
            }),
            label: label,
            icon: {
                position: "absolute",
                top: "7px",
                left: "14px"
            }
        };
    }
});

exports.default = (0, _radium2.default)(Button);