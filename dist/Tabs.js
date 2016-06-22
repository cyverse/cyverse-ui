'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _utils = require('./utils');

var _reactInk = require('react-ink');

var _reactInk2 = _interopRequireDefault(_reactInk);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = _react2.default.createClass({
    displayName: "Tabs",

    propTypes: {
        current: _react2.default.PropTypes.number.isRequired,
        tabList: _react2.default.PropTypes.array.isRequired,
        onChangeView: _react2.default.PropTypes.func
    },

    onTabClick: function onTabClick(i) {
        this.props.onTabClick(i);
    },
    UnderLine: function UnderLine(isActive) {
        var width = "0%";
        if (isActive) {
            width = "100%";
        }

        return _react2.default.createElement('div', { style: {
                transition: "all 0.2s ease",
                position: "absolute",
                bottom: "0px",
                right: "0px",
                left: "0px",
                margin: "auto",
                height: "3px",
                background: this.props.color,
                width: width
            }
        });
    },
    renderLink: function renderLink(item, i) {

        var isActive = i === this.props.current;
        var onTabClick = this.onTabClick.bind(this, i);

        var activeStyle = isActive ? {
            color: "black"
        } : {
            color: _styles.variables.grey.mid
        };

        return _react2.default.createElement(
            'li',
            { key: i,
                style: _extends({}, this.style().listItem, activeStyle),
                onClick: onTabClick
            },
            item,
            this.UnderLine(isActive),
            _react2.default.createElement(_reactInk2.default, {
                background: false })
        );
    },
    render: function render() {
        return _react2.default.createElement(
            _utils.ClearFix,
            null,
            _react2.default.createElement(
                'ul',
                { style: this.style().list },
                this.props.tabList.map(this.renderLink)
            )
        );
    },
    style: function style(i) {
        var s = _styles.styles;
        var v = _styles.variables;

        return {
            list: _extends({}, s.boxShadow.sm, {
                display: "block",
                position: "relative",
                padding: "0px 10px"

            }),
            listItem: _extends({}, s.t.body1, {
                cursor: "pointer",
                display: "inline-block",
                position: "relative",
                listStyle: "none",
                padding: "15px 0px",
                marginRight: "15px",
                textTransform: "uppercase",
                transition: "all 0.2s ease",
                ':hover': {
                    color: "black",
                    transition: "all 0.2s ease"
                }
            })
        };
    }
});

exports.default = (0, _radium2.default)(Tabs);