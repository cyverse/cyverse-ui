'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShowMoreEllipsis = _react2.default.createClass({
    displayName: 'ShowMoreEllipsis',


    render: function render() {
        return _react2.default.createElement(
            'span',
            { style: _extends({
                    cursor: "pointer",
                    background: "rgba(0,0,0,0.1)",
                    borderRadius: "3px",
                    padding: "0 3px 12px",
                    display: "inline-block",
                    lineHeight: "0",
                    verticalAlign: "middle",
                    fontSize: "22px"
                }, (0, _styles.marg)({ mt: 2 }), {
                    ':hover': {
                        background: "rgba(0,0,0,0.2)"
                    }
                }) },
            '...'
        );
    }
});

exports.default = (0, _radium2.default)(ShowMoreEllipsis);