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
    displayName: 'Loader',
    getInitialState: function getInitialState() {
        return {
            percent: 20,
            degree: 0,
            degTransition: 10
        };
    },
    componentDidMount: function componentDidMount(prevProps, prevState) {
        this.rotateWrapper(this.refs.path);
        this.scalePath(this.refs.path);
    },
    scalePath: function scalePath(path, step) {
        var _this = this;

        var stroke = 7;
        var baseSize = 50 - stroke * .67;
        var length = 2 * Math.PI * baseSize;
        var size = 70;
        var offset = function offset(percent) {
            return length * (1 - percent * 0.01);
        };

        step = step || 0;
        step %= 3;

        if (step === 0) {
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = offset(1);
            path.style.transitionDuration = '0ms';
        } else if (step === 1) {
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = offset(100);
            path.style.transitionDuration = '1000ms';
        } else {
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = offset(200);
            path.style.transitionDuration = '1200ms';
        }

        this.scalePathTimer = setTimeout(function () {
            return _this.scalePath(path, step + 1);
        }, step ? 1165 : 160);
    },
    rotateWrapper: function rotateWrapper(wrapper) {
        var _this2 = this;

        wrapper.style.transform = 'rotate(0deg)';
        wrapper.style.transitionDuration = '0ms';

        setTimeout(function () {
            wrapper.style.transform = 'rotate(1800deg)';
            wrapper.style.transitionDuration = '10s';
            wrapper.style.transitionTimingFunction = 'linear';
        }, 50);

        this.rotateWrapperTimer = setTimeout(function () {
            return _this2.rotateWrapper(wrapper);
        }, 10050);
    },
    render: function render() {
        var stroke = 7;
        var baseSize = 50 - stroke * .67;
        var length = 2 * Math.PI * baseSize;
        var percent = 200;
        var size = 70;
        var offset = length * (1 - percent * 0.01);

        return _react2.default.createElement(
            'svg',
            {
                ref: 'wrapper',
                style: _extends({
                    width: size,
                    position: "relative",
                    display: "block"
                }, (0, _styles.marg)(this.props)),
                viewBox: '0 0 100 100'
            },
            _react2.default.createElement('circle', {
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
                    transformOrigin: "center"
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