'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var _reactMotion = require('react-motion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Tooltip',

    propTypes: {
        message: _react2.default.PropTypes.string
    },

    getInitialState: function getInitialState() {
        return {
            showTooltip: false
        };
    },
    showTooltip: function showTooltip() {
        if (this.props.message) {
            this.setState({
                showTooltip: true
            });
        }
    },
    hideTooltip: function hideTooltip() {
        this.setState({
            showTooltip: false
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
    directionStyle: function directionStyle() {
        var direction = this.props.direction;
        switch (direction) {
            case "top":
                return {
                    transformOrigin: "0% 100%",
                    bottom: "calc(100% + 5px)"
                };
            case "right":
                return {
                    transformOrigin: "0% 50%",
                    bottom: "10%",
                    left: "calc(100% + 5px)"
                };
            case "bottom":
                return {
                    transformOrigin: "0% 0%",
                    top: "calc(100% + 5px)"
                };
            case "left":
                return {
                    transformOrigin: "100% 50%",
                    bottom: "10%",
                    right: "calc(100% + 5px)"
                };
            default:
                return {
                    transformOrigin: "0 100%",
                    bottom: "calc(100% + 5px)"
                };
        }
    },
    style: function style() {
        return {
            content: _extends({}, this.directionStyle(), {
                zIndex: "999999999999",
                display: "block",
                padding: "5px",
                background: "black",
                boxShadow: "0px 2px 5px 0px rgba(0,0,0,.6)",
                borderRadius: "3px",
                color: "white",
                fontSize: "11px",
                textAlign: "center",
                whiteSpace: "nowrap",
                position: "absolute"
            })
        };
    },
    render: function render() {
        var _this2 = this;

        return _react2.default.createElement(
            'span',
            {
                style: {
                    position: "relative",
                    display: "inline-block"
                },
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave
            },
            this.props.children,
            _react2.default.createElement(
                _reactMotion.Motion,
                {
                    style: {
                        x: (0, _reactMotion.spring)(this.state.showTooltip ? 1 : 0, {
                            stiffness: 360,
                            damping: 18
                        })
                    }
                },
                function (_ref) {
                    var x = _ref.x;

                    return _react2.default.createElement(
                        'span',
                        { style: _extends({}, _this2.style().content, { opacity: x, transform: 'scale(' + x + ')' }) },
                        _react2.default.createElement(
                            'div',
                            null,
                            _this2.props.message
                        )
                    );
                }
            )
        );
    }
});