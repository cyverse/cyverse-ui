'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

var _ClearFix = require('./ClearFix');

var _ClearFix2 = _interopRequireDefault(_ClearFix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'ButtonGroup',
    render: function render() {
        var children = _react2.default.Children.map(this.props.children, function (child) {
            return _react2.default.cloneElement(child, {
                style: _extends({}, (0, _styles.marg)({ mr: 4 }))
            });
        });
        return _react2.default.createElement(
            _ClearFix2.default,
            this.props,
            children
        );
    }
});