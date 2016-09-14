'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Avatar = require('./Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _CircleProgressBar = require('./CircleProgressBar');

var _CircleProgressBar2 = _interopRequireDefault(_CircleProgressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressAvatar = _react2.default.createClass({
    displayName: 'ProgressAvatar',
    render: function render() {
        var _props = this.props;
        var color = _props.color;
        var size = _props.size;
        var stroke = _props.stroke;
        var percent = _props.percent;
        var name = _props.name;

        var opacity = 0;
        var padding = 0;
        var avatarSize = size;

        var avatarColor = void 0;
        if (percent < 100) {
            opacity = 1;
            avatarColor = "lightgrey";
            avatarSize = size - size / stroke * 2;
            padding = size / stroke;
        }

        return _react2.default.createElement(
            'div',
            { style: {
                    display: "inline-block",
                    transition: "all ease .2s",
                    position: "relative",
                    padding: padding
                }
            },
            _react2.default.createElement(_CircleProgressBar2.default, {
                style: {
                    opacity: opacity,
                    position: "absolute",
                    top: "0px",
                    left: "0px"
                },
                percent: percent,
                color: color,
                size: size,
                stroke: stroke
            }),
            _react2.default.createElement(_Avatar2.default, {
                name: name,
                color: avatarColor,
                size: avatarSize
            })
        );
    }
});

ProgressAvatar.propTypes = {
    className: _react.PropTypes.string
};

exports.default = ProgressAvatar;