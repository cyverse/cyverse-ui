"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: "ToolTip",

    propTypes: {
        message: _react2.default.PropTypes.string
    },

    getInitialState: function getInitialState() {
        return {
            showTooltip: false
        };
    },

    showTooltip: function showTooltip() {
        this.setState({
            showTooltip: true
        });
    },
    hideTooltip: function hideTooltip() {
        this.setState({
            showTooltip: false,
            animate: {
                opacity: "0",
                bottom: "50px"
            }
        });
    },
    onMouseEnter: function onMouseEnter() {
        if (!this.props.isDisabled) {
            this.showTooltip();
        }
    },
    onMouseLeave: function onMouseLeave() {
        this.hideTooltip();
    },
    onTouch: function onTouch() {
        var _this = this;

        this.props.onTouch();
        setTimeout(function () {
            return _this.hideTooltip();
        }, 2000);
    },
    tooltip: function tooltip() {
        var message = this.props.message;
        if (this.state.showTooltip) {
            return _react2.default.createElement(
                "span",
                { style: this.style.content },
                _react2.default.createElement(
                    "div",
                    null,
                    message
                ),
                _react2.default.createElement("div", { style: this.style.originPoint })
            );
        }
    },


    style: {
        content: {
            display: "inline-block",
            transition: "all ease .2s",
            position: "absolute",
            right: "0px",
            left: "0px",
            margin: "auto",
            bottom: "50px",
            padding: "10px",
            background: "black",
            boxShadow: "0px 2px 5px 0px rgba(0,0,0,.6)",
            borderRadius: "3px",
            color: "white",
            textAlign: "center"

        },

        originPoint: {
            position: "absolute",
            right: "0px",
            left: "0px",
            bottom: "-20px",
            margin: "auto",
            width: "10px",
            border: "solid 10px rgba(0,0,0,0)",
            borderTop: "solid 10px black"
        }
    },

    render: function render() {

        return _react2.default.createElement(
            "span",
            {
                style: { position: "relative" },
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave
            },
            this.props.children,
            this.tooltip()
        );
    }
});