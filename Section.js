'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = _react2.default.createClass({
    displayName: 'Section',
    render: function render() {
        return _react2.default.createElement(
            'section',
            { style: this.styles() },
            this.props.children
        );
    },
    styles: function styles() {
        var displayType = this.props.flex ? { display: "flex" } : { display: "block" };

        return _extends({
            position: "relative"
        }, displayType, (0, _styles.marg)(this.props), (0, _styles.pad)(this.props), this.props.styles);
    }
});

Section.propTypes = {
    className: _react.PropTypes.string
};

exports.default = Section;