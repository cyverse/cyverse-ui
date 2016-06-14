'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ClearFix = require('./ClearFix');

var _ClearFix2 = _interopRequireDefault(_ClearFix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'ButtonGroup',
    render: function render() {
        var children = _react2.default.Children.map(this.props.children, function (child) {
            return _react2.default.cloneElement(child, {
                style: { marginRight: "15px" }
            });
        });
        return _react2.default.createElement(
            _ClearFix2.default,
            null,
            children
        );
    }
});