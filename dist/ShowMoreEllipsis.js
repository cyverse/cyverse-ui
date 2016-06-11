'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShowMoreEllipsis = _react2.default.createClass({
    displayName: 'ShowMoreEllipsis',


    render: function render() {
        return _react2.default.createElement(
            'div',
            { style: {
                    background: "#EFEFEF",
                    borderRadius: "8px",
                    padding: "0 3px 12px",
                    display: "inline-block",
                    lineHeight: "0",
                    verticalAlign: "middle",
                    fontSize: "22px",
                    ':hover': {
                        background: "lightgrey"
                    }
                } },
            '...'
        );
    }
});

exports.default = (0, _radium2.default)(ShowMoreEllipsis);