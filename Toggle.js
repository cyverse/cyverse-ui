'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _StaticInk = require('./StaticInk');

var _StaticInk2 = _interopRequireDefault(_StaticInk);

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var v = _styles.variables;

exports.default = _react2.default.createClass({
    displayName: 'Toggle',
    getInitialState: function getInitialState() {
        var isToggled = this.props.defaultToggled ? true : false;
        var isDisabled = this.props.disabled ? true : false;

        return {
            isToggled: isToggled,
            isDisabled: isDisabled,
            isFocused: false
        };
    },
    onFocus: function onFocus() {
        this.setState({
            isFocused: true
        });
    },
    onBlur: function onBlur() {
        this.setState({
            isFocused: false
        });
    },
    onToggle: function onToggle() {
        var isToggled = !this.state.isToggled;
        if (!this.state.isDisabled) {
            if (this.props.onChange) {
                this.props.onChange(isToggled);
            }
            this.setState({
                isToggled: isToggled
            });
        }
    },
    render: function render() {
        return _react2.default.createElement(
            'fieldset',
            {
                style: _extends({}, this.style().fieldset)
            },
            _react2.default.createElement(
                'label',
                {
                    style: this.style().label,
                    htmlFor: this.props.id
                },
                this.props.label
            ),
            _react2.default.createElement('input', {
                tabIndex: '0',
                onFocus: this.onFocus,
                onBlur: this.onBlur,
                style: _styles.styles.u.kHide,
                id: this.props.id,
                type: 'checkbox',
                checked: this.state.isToggled,
                onChange: this.onToggle
            }),
            _react2.default.createElement(
                'span',
                {
                    style: _extends({}, this.style().toggleSlide, this.style().isToggledSlide, this.style().isDisabled),
                    onClick: this.onToggle
                },
                _react2.default.createElement(
                    'span',
                    {
                        style: _extends({}, this.style().toggleSwitch, this.style().isToggledSwitch)
                    },
                    _react2.default.createElement(_StaticInk2.default, {
                        isFocused: this.state.isFocused
                    })
                )
            )
        );
    },
    style: function style() {
        var size = 20;

        var switchColor = this.props.color;

        var slideColor = (0, _tinycolor2.default)(switchColor).lighten(50).toString();

        var isDisabled = !this.state.isDisabled ? {
            opacitiy: 1,
            cursor: "pointer"
        } : {
            opacity: .3,
            cursor: "not-allowed"
        };

        var label = this.props.showLabel ? _styles.styles.t.label : _styles.styles.u.kHide;

        var isToggled = !this.state.isToggled;

        var isToggledSwitch = isToggled ? {
            left: "0%",
            background: v.c.grey.xXLight
        } : {
            left: 'calc(100% - ' + size + 'px)',
            background: switchColor
        };

        var isToggledSlide = isToggled ? {
            background: "lightgrey"
        } : {
            background: slideColor
        };

        return {
            fieldset: {
                border: "none",
                margin: "0px",
                padding: "10px"
            },

            label: label,

            toggleSlide: {
                display: "block",
                position: "relative",
                height: size - size * .3 + 'px',
                width: size * 2 + 'px',
                borderRadius: "999px"
            },

            toggleSwitch: _extends({
                transition: "all 0.2s ease",
                display: "block",
                position: "absolute",
                top: '-' + size * .15 + 'px',
                height: size + 'px',
                width: size + 'px',
                borderRadius: "999px"
            }, _styles.styles.boxShadow.sm),
            isDisabled: isDisabled,
            isToggledSwitch: isToggledSwitch,
            isToggledSlide: isToggledSlide
        };
    }
});