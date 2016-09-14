'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles2 = require('troposphere-ui/lib/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sheet = _react2.default.createClass({
    displayName: 'Sheet',
    render: function render() {
        return _react2.default.createElement(
            'div',
            { style: this.styles() },
            this.props.children
        );
    },
    styles: function styles() {
        var size = { p: 3 };
        return _extends({
            background: "white"
        }, _styles2.styles.boxShadow.sm, (0, _styles2.pad)(size), (0, _styles2.marg)(this.props));
    }
});

Sheet.propTypes = {
    className: _react.PropTypes.string
};

exports.default = Sheet;