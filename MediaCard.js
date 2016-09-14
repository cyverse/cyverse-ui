'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDimensions = require('react-dimensions');

var _reactDimensions2 = _interopRequireDefault(_reactDimensions);

var _reactScroll = require('react-scroll');

var _reactScroll2 = _interopRequireDefault(_reactScroll);

var _VerticalMenu = require('./VerticalMenu');

var _VerticalMenu2 = _interopRequireDefault(_VerticalMenu);

var _Hr = require('./Hr');

var _Hr2 = _interopRequireDefault(_Hr);

var _reactCollapse = require('react-collapse');

var _reactCollapse2 = _interopRequireDefault(_reactCollapse);

var _styles2 = require('./styles/styles');

var _styles3 = _interopRequireDefault(_styles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scroll = _reactScroll2.default.animateScroll;

var MediaCard = _react2.default.createClass({
    displayName: 'MediaCard',
    getInitialState: function getInitialState() {
        return {
            cardIsHovered: false
        };
    },
    onCardEnter: function onCardEnter() {
        this.setState({
            cardIsHovered: true
        });
    },
    onCardLeave: function onCardLeave() {
        this.setState({
            cardIsHovered: false
        });
    },
    renderQuickLinks: function renderQuickLinks() {
        if (this.props.quickLinks) {
            return _react2.default.createElement(
                'div',
                { style: this.styles().quickLinks },
                this.props.quickLinks.map(function (link) {
                    return link;
                })
            );
        }
    },
    onExpand: function onExpand() {
        this.props.onExpand();
        var scrollAmount = this.props.isExpanded ? -30 : 30;
        scroll.scrollMore(scrollAmount, {
            duration: 95
        });
    },
    detail: function detail() {
        var _props = this.props;
        var isExpanded = _props.isExpanded;
        var detail = _props.detail;


        return isExpanded ? _react2.default.createElement(
            'div',
            { style: this.styles().detail },
            _react2.default.createElement(_Hr2.default, { style: { margin: "0px -20px 20px" } }),
            detail
        ) : null;
    },
    render: function render() {

        return _react2.default.createElement(
            'div',
            { style: this.styles().card },
            _react2.default.createElement('div', {
                id: this.props.id,
                style: {
                    paddingTop: "40px",
                    marginTop: "-40px",
                    width: "1px", /* '0' will not work for Opera */
                    display: "inline-block"
                }

            }),
            _react2.default.createElement(
                _reactCollapse2.default,
                {
                    isOpened: true,
                    springConfig: { stiffness: 520, damping: 35, precision: .001 }
                },
                _react2.default.createElement(
                    'div',
                    {
                        style: this.styles().header,
                        onMouseEnter: this.onCardEnter,
                        onMouseLeave: this.onCardLeave,
                        onClick: this.onExpand
                    },
                    _react2.default.createElement(
                        'div',
                        { style: this.styles().identity },
                        _react2.default.createElement(
                            'div',
                            { style: this.styles().image },
                            this.props.image
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'div',
                                { style: this.styles().title },
                                this.props.title
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: this.styles().subTitle },
                                this.props.subTitle
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                this.props.titleInfo
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: this.styles().summary },
                        this.props.summary
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: this.styles().menu },
                        this.renderQuickLinks(),
                        _react2.default.createElement(_VerticalMenu2.default, {
                            menuItemList: this.props.contextualMenu
                        })
                    )
                ),
                this.detail()
            )
        );
    },
    styles: function styles() {
        var style = {};

        // card style
        var cardShadow = _styles3.default.boxShadow.li;
        var openStyle = {};
        if (this.props.isExpanded) {
            cardShadow = _styles3.default.boxShadow.lg;
            openStyle = { margin: "50px -20px" };
        }
        style.card = _extends({}, openStyle, {
            position: "relative",
            transition: "all ease .1s",
            background: "white"
        }, cardShadow);

        // header style
        style.header = {
            display: "flex",
            flexWrap: "nowrap",
            alignContent: "stretch",
            cursor: "pointer",
            padding: "15px",
            minHeight: "65px",
            alignItems: "center"
        };
        if (this.props.containerWidth <= 750) {
            style.header.display = "block";
        }

        // identety style
        style.identity = {
            display: "flex",
            alignItems: "center",
            minWidth: "250px"
        };
        if (this.props.containerWidth <= 750) {
            style.identity.marginRight = "50px";
        }

        // image style
        style.image = {
            flexShrink: "0",
            position: "relative",
            marginRight: "10px",
            alignSelf: "flex-start",
            borderRadius: "50%",
            overflow: "hidden"
        };

        // title style
        style.title = _extends({}, _styles3.default.t.body2, {
            marginRight: "20px",
            color: this.props.color
        });

        // subtitle style
        style.subTitle = _extends({}, _styles3.default.t.caption);

        // summary style
        style.summary = _extends({
            width: "100%",
            marginRight: "60px",
            opacity: "1"
        }, _styles3.default.t.body1);
        if (this.props.containerWidth <= 750) {
            style.summary.marginTop = "30px";
            style.summary.marginRight = "0px";
        }
        if (this.props.isExpanded) {
            style.summary.display = "none";
        }

        // menu style
        style.menu = {
            background: "linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 28%,rgba(255,255,255,1) 100%)",
            display: "flex",
            position: "absolute",
            right: "15px",
            top: "15px"
        };

        // quickMenu 
        style.quickLinks = {
            display: "none",
            padding: "5px 10px 5px 75px",
            alignItems: "center"
        };
        if (this.state.cardIsHovered || this.props.isExpanded) {
            style.quickLinks.display = "flex";
        }

        // detail style
        style.detail = {
            padding: "0px 20px 20px"
        };

        return style;
    }
});

exports.default = (0, _reactDimensions2.default)({
    containerStyle: { height: 'auto' }
})(MediaCard);