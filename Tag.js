'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _styles = require('./styles');

var _icons = require('./icons');

var _Tooltip = require('./Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = _styles.styles;
var v = _styles.variables;

var Tag = _react2.default.createClass({
    displayName: 'Tag',
    onClose: function onClose(e) {
        e.stopPropagation();
        e.preventDefault();
        this.props.onClose(e);
    },
    onTouch: function onTouch(e) {
        e.stopPropagation();
        e.preventDefault();
        if (this.props.onTouch) {
            this.props.onTouch(e);
        }
    },
    renderClose: function renderClose() {
        if (this.props.onClose) {
            return _react2.default.createElement(
                'span',
                {
                    onClick: this.onClose,
                    key: this.props.children.toString(),
                    style: this.style().icon
                },
                _react2.default.createElement(_icons.CloseIcon, null)
            );
        }
        return;
    },
    render: function render() {
        return _react2.default.createElement(
            _Tooltip2.default,
            { message: this.props.TooltipMessage },
            _react2.default.createElement(
                'span',
                {
                    onClick: this.onTouch,
                    style: this.style().Tag
                },
                _react2.default.createElement(
                    'span',
                    { style: this.style().label },
                    this.props.children
                ),
                this.renderClose()
            )
        );
    },
    style: function style() {
        var padding = "4px 8px";
        var labelMargR = this.props.onClose ? 10 : 0;

        var background = this.props.background ? this.props.background : v.c.grey.xXLight;

        var color = (0, _tinycolor2.default)(background).isLight ? "white" : v.c.grey.xXDark;

        return {
            Tag: {
                cursor: "pointer",
                display: "inline-block",
                padding: padding,
                background: background,
                color: color,
                borderRadius: 9999,
                fontSize: 11,
                ':hover': {
                    background: (0, _tinycolor2.default)(background).darken(10).toHexString()
                }
            },
            label: {
                marginRight: labelMargR
            },
            icon: {
                color: "rgba(0, 0, 0, .2)",
                position: "absolute",
                right: 5,
                top: 4,
                ':hover': {
                    color: "white",
                    background: "rgba(0,0,0,.3)",
                    borderRadius: 9999
                }
            }

        };
    }
});

Tag.propTypes = {
    className: _react.PropTypes.string
};

exports.default = (0, _radium2.default)(Tag);