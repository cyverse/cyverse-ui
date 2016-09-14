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
    displayName: 'P',
    render: function render() {
        return _react2.default.createElement(
            'p',
            { style: _extends({}, this.style(), this.props.style)
            },
            this.props.children
        );
    },
    style: function style() {
        var textStyle = _styles.styles.t.body1;

        if (this.props.body1) {
            textStyle = _styles.styles.t.body1;
        }

        if (this.props.body2) {
            textStyle = _styles.styles.t.body2;
        }

        if (this.props.subheading) {
            textStyle = _styles.styles.t.subheading;
        }

        return _extends({}, textStyle, {
            maxWidth: "600px",
            lineHeight: "24px",
            margin: "0px",
            marginBottom: "34px"
        });
    }
});