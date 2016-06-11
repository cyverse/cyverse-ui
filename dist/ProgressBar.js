"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: "ProgressBar",

    render: function render() {
        var startValue = this.props.startValue;
        var afterValue = this.props.afterValue;
        var startColor = this.props.startColor;

        if (startValue >= 100) {
            startValue = 100;
            startColor = "red";
        }

        if (startValue + afterValue >= 100) {
            afterValue = 100 - startValue;
            startColor = "red";
        }

        return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
                "div",
                { className: "ProgressBar" },
                _react2.default.createElement(
                    "p",
                    { className: "t-Caption" },
                    this.props.label
                ),
                _react2.default.createElement(
                    "div",
                    { className: "ProgressBar-wrapper clearfix",
                        style: { background: "#efefef", marginBottom: "20px" } },
                    _react2.default.createElement("div", { className: "ProgressBar-startIndicator",
                        style: {
                            transition: "all ease .3s",
                            height: "10px",
                            float: "left",
                            width: startValue + "%",
                            background: startColor
                        }
                    }),
                    _react2.default.createElement("div", { className: "ProgressBar-afterIndicator",
                        style: {
                            transition: "all ease .3s",
                            height: "10px",
                            float: "left",
                            width: afterValue + "%",
                            background: startColor,
                            opacity: ".5"
                        }
                    })
                )
            )
        );
    }
});