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
    displayName: "Button",

    onTouch: function onTouch() {
        if (this.props.onTouch) {
            this.props.onTouch();
        }
    },
    renderIcon: function renderIcon() {

        if (this.props.icon) {

            var Icon = _react2.default.cloneElement(this.props.icon, { size: 18 });

            return _react2.default.createElement(
                "span",
                {
                    style: {
                        position: "absolute",
                        top: "8px",
                        left: "12px"
                    }
                },
                Icon
            );
        }

        return;
    },
    renderInk: function renderInk() {
        if (this.props.disabled) {
            return;
        };

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
                    style: _extends({}, this.style().button, this.props.style),
                    type: "button",
                    onClick: this.onTouch,
                    disabled: this.props.disabled,
                    id: this.props.id
                },
                this.renderIcon(),
                _react2.default.createElement(
                    "span",
                    {
                        style: this.style().label
                    },
                    this.props.children
                ),
                this.renderInk()
            )
        );
    },
    style: function style() {
        var btnColor = this.props.color ? this.props.color : v.c.grey.xXLight;

        var txtColor = (0, _tinycolor2.default)(btnColor).isLight() ? "#55555" : "white";

        var disabledStyle = this.props.disabled ? {
            cursor: "not-allowed",
            opacity: ".5"
        } : {
            cursor: "pointer"
        };
        var withIcon = this.props.icon ? {
            marginLeft: "20px"
        } : {};

        var hoverStyle = this.props.disabled ? null : _extends({
            background: (0, _tinycolor2.default)(btnColor).darken(5).toString()
        }, _styles.styles.boxShadow.md);

        return {
            button: _extends({
                display: "inline-block",
                position: "relative",
                padding: "10px 15px",
                background: btnColor,
                outline: "none",
                border: "none",
                borderRadius: "2px",
                color: txtColor,
                textTransform: "uppercase",
                transition: "all ease .2s"
            }, disabledStyle, _styles.styles.t.button1, _styles.styles.boxShadow.sm, {
                ':hover': _extends({}, hoverStyle)
            }),
            label: _extends({
                display: "inline-block"
            }, withIcon)
        };
    }
});

exports.default = (0, _radium2.default)(Button);