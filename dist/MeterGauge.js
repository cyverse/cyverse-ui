'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO To be semantic this should be implemented with the Meter element. Support is strong enough for production and there are fall backs. It is a browser styled element however so it will require some style hacks to make it look good across all browsers. Since these style properties are browser specific vendor prefixing is used it is unknown to me without experimenting what autoprefixer will do to the styles or if this will require css over inline styles.

exports.default = _react2.default.createClass({
    displayName: 'MeterGauge',


    render: function render() {
        var startValue = this.props.startValue;
        var afterValue = this.props.afterValue;
        var startColor = this.props.color;

        if (startValue >= 100) {
            startValue = 100;
            startColor = "red";
        }

        if (startValue + afterValue >= 100) {
            afterValue = 100 - startValue;
            startColor = "red";
        }

        return _react2.default.createElement(
            'dl',
            null,
            _react2.default.createElement(
                'dt',
                {
                    style: {
                        fontSize: "12px",
                        fontWeight: "600",
                        margin: "0 0 10px"
                    }
                },
                this.props.label
            ),
            _react2.default.createElement(
                'dd',
                { style: { margin: "0px" } },
                _react2.default.createElement(
                    'div',
                    { style: _extends({}, _styles.styles.t.caption, {
                            fontSize: "10px",
                            margin: "0px 0px 3px"
                        })
                    },
                    this.props.data
                ),
                _react2.default.createElement(
                    'div',
                    { style: { background: _styles.variables.grey.xLight } },
                    _react2.default.createElement(
                        _utils.ClearFix,
                        null,
                        _react2.default.createElement('div', {
                            style: {
                                transition: "all ease .3s",
                                height: "10px",
                                float: "left",
                                width: startValue + "%",
                                background: startColor
                            }
                        }),
                        _react2.default.createElement('div', {
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
            )
        );
    }
});