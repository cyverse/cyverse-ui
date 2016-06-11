'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VerticalMenu = require('./VerticalMenu');

var _VerticalMenu2 = _interopRequireDefault(_VerticalMenu);

var _Hr = require('./Hr');

var _Hr2 = _interopRequireDefault(_Hr);

var _styles = require('./styles/styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'MediaCard',
    onExpand: function onExpand() {
        this.props.onExpand();
        var scrollAmount = this.props.isExpanded ? -50 : 50;
        window.scrollBy(0, scrollAmount);
    },
    render: function render() {
        var shadow = _styles2.default.boxShadow.li;
        var detailWidth = "";
        var detailPadding = "0 50px 0 0";
        var titleMarg = "";
        var openStyle = {};
        var HeaderRule = null;

        if (this.props.isExpanded) {
            shadow = _styles2.default.boxShadow.lg;
            detailWidth = "100%";
            detailPadding = "0";
            titleMarg = "20px";
            openStyle = { margin: "50px -20px" };
            HeaderRule = _react2.default.createElement(_Hr2.default, { style: { margin: "0 -20px 20px" } });
        }

        var headerIcons = function headerIcons(icon) {
            return _react2.default.createElement(
                'div',
                { style: { float: "right", marginLeft: "5px" } },
                icon
            );
        };

        return _react2.default.createElement(
            'div',
            {
                style: _extends({}, openStyle, {
                    position: "relative",
                    transition: "all ease .1s",
                    cursor: "pointer",
                    background: "white",
                    padding: "20px"
                }, shadow),
                onClick: this.onExpand
            },
            _react2.default.createElement(
                'div',
                {
                    style: {
                        padding: detailPadding,
                        display: "flex",
                        flexFlow: "row wrap"
                    }
                },
                _react2.default.createElement(
                    'div',
                    { style: {
                            position: "relative",
                            marginRight: "10px",
                            alignSelf: "flex-start"
                        }
                    },
                    _react2.default.createElement(
                        'div',
                        { style: {
                                borderRadius: "50%",
                                overflow: "hidden"
                            }
                        },
                        this.props.image
                    )
                ),
                _react2.default.createElement(
                    'div',
                    {
                        style: {
                            flex: "0 300px",
                            marginBottom: '' + titleMarg
                        }
                    },
                    _react2.default.createElement(
                        'div',
                        { style: _extends({}, _styles2.default.t.body2, {
                                color: this.props.color
                            })
                        },
                        this.props.title
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: _extends({}, _styles2.default.t.caption)
                        },
                        this.props.subTitle
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        this.props.titleInfo
                    )
                ),
                _react2.default.createElement(
                    'div',
                    {
                        style: _extends({
                            flex: '1 0 ' + detailWidth
                        }, _styles2.default.t.body1)
                    },
                    HeaderRule,
                    this.props.detail
                )
            ),
            _react2.default.createElement(
                'div',
                {
                    style: {
                        position: "absolute",
                        right: "10px",
                        top: "10px"
                    }
                },
                _react2.default.createElement(_VerticalMenu2.default, {
                    menuItemList: this.props.contextualMenu
                })
            )
        );
    }
});