'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _randomcolor = require('randomcolor');

var _randomcolor2 = _interopRequireDefault(_randomcolor);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = _react2.default.createClass({
    displayName: "Avatar",

    render: function render() {
        var letter = this.props.name[0].toUpperCase();

        return _react2.default.createElement(
            'div',
            { style: this.styles() },
            letter
        );
    },

    styles: function styles() {
        var size = this.props.size;
        var color = (0, _randomcolor2.default)({
            seed: this.props.name
        });

        if (this.props.color) {
            color = this.props.color;
        }

        return _extends({
            transition: "all ease .2s",
            display: "inline-block",
            textAlign: "center",
            width: size + 'px',
            height: size + 'px',
            borderRadius: "999px",
            background: color,
            fontSize: size * .7 + 'px',
            lineHeight: size + 2 + 'px',
            color: "rgba(255,255,255,.7)"
        }, (0, _styles.marg)(this.props), this.props.style);
    }
});

exports.default = (0, _radium2.default)(Avatar);