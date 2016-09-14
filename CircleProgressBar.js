'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'CircleProgressBar',
    render: function render() {
        var stroke = this.props.stroke;
        var baseSize = 50 - stroke * .67;
        var length = 2 * Math.PI * baseSize;
        var percent = this.props.percent;
        var size = this.props.size;
        var offset = length * (1 - percent * 0.01);

        var transition = "none";

        if (percent > 0) {
            transition = "all 1s ease";
        }

        return _react2.default.createElement(
            'svg',
            {
                style: _extends({
                    width: size + "px"
                }, this.props.style, (0, _styles.marg)(this.props)),
                viewBox: '0 0 100 100'
            },
            _react2.default.createElement('circle', {
                ref: 'path',
                style: {
                    position: 'relative'
                },
                cx: '50',
                cy: '50',
                r: baseSize,
                fill: 'none',
                stroke: 'rgba(0,0,0,0.05)',
                strokeWidth: stroke,
                strokeLinecap: 'round'
            }),
            _react2.default.createElement('circle', {
                ref: 'path',
                style: {
                    position: 'relative',
                    transform: "rotate(180deg)",
                    transformOrigin: "center",
                    strokeDasharray: length,
                    strokeDashoffset: offset,
                    transition: transition
                },
                cx: '50',
                cy: '50',
                r: baseSize,
                fill: 'none',
                stroke: this.props.color,
                strokeWidth: stroke,
                strokeLinecap: 'round'
            })
        );
    }
});