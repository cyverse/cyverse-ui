'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles2 = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = _react2.default.createClass({
    displayName: 'Title',
    render: function render() {
        var HTag = 'h1';

        if (this.props.h1) {
            HTag = 'h1';
        }
        if (this.props.h2) {
            HTag = 'h2';
        }
        if (this.props.h3) {
            HTag = 'h3';
        }
        if (this.props.h4) {
            HTag = 'h4';
        }
        return _react2.default.createElement(
            HTag,
            { style: this.styles() },
            this.props.children
        );
    },
    styles: function styles() {
        var color = this.props.color;

        var fontStyle = void 0;
        if (this.props.display4) {
            fontStyle = _styles2.styles.t.display4;
        }

        if (this.props.display3) {
            fontStyle = _styles2.styles.t.display3;
        }

        if (this.props.display2) {
            fontStyle = _styles2.styles.t.display2;
        }

        if (this.props.display1) {
            fontStyle = _styles2.styles.t.display1;
        }

        if (this.props.headline) {
            fontStyle = _styles2.styles.t.headline;
        }

        if (this.props.title) {
            fontStyle = _styles2.styles.t.title;
        }

        var margSize = void 0;
        if (!this.props.noMarg) {
            margSize = (0, _styles2.marg)({ mb: 4 });
        }

        return _extends({
            color: color
        }, fontStyle, margSize);
    }
});

Title.propTypes = {
    className: _react.PropTypes.string
};

exports.default = Title;