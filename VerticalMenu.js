'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactInk = require('react-ink');

var _reactInk2 = _interopRequireDefault(_reactInk);

var _VerticalMenuIcon = require('./VerticalMenuIcon');

var _VerticalMenuIcon2 = _interopRequireDefault(_VerticalMenuIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerticalMenu = _react2.default.createClass({
    displayName: 'VerticalMenu',
    getInitialState: function getInitialState() {
        return {
            isOpen: false
        };
    },


    componentDidMount: function componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick, false);
    },

    componentWillUnmount: function componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick, false);
    },

    handleDocumentClick: function handleDocumentClick(e) {
        var menu = this.refs.root;
        if (!menu.contains(e.target) && this.state.isOpen) {
            this.setState({ isOpen: false });
        }
    },

    onTouch: function onTouch(e) {
        e.stopPropagation();
        e.preventDefault();
        var isOpen = this.state.isOpen ? false : true;
        this.setState({
            isOpen: isOpen
        });
    },
    onSelectOption: function onSelectOption(action, e) {
        e.stopPropagation();
        e.preventDefault();
        action();
        var isOpen = this.state.isOpen ? false : true;
        this.setState({
            isOpen: isOpen
        });
    },
    renderMenuItem: function renderMenuItem(item, i) {
        return _react2.default.createElement(
            'li',
            {
                key: i,
                style: {
                    position: "relative",
                    display: "block",
                    padding: "10px 14px",
                    listStyle: "none",
                    ':hover': {
                        background: "#EFEFEF"
                    }
                },
                onClick: this.onSelectOption.bind(this, item.action)
            },
            item.render,
            _react2.default.createElement(_reactInk2.default, null)
        );
    },
    render: function render() {
        var menuItemList = this.props.menuItemList.map(this.renderMenuItem);
        var showList = this.state.isOpen ? "block" : "none";
        var openMenuStyle = this.state.isOpen ? {
            background: "#EFEFEF",
            color: "black"
        } : { color: "grey" };

        return _react2.default.createElement(
            'div',
            { style: { position: "relative" }, ref: 'root' },
            _react2.default.createElement(
                'div',
                {
                    style: _extends({}, openMenuStyle, {
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "17px",
                        borderRadius: "50%",
                        height: "35px",
                        width: "35px"
                    }),
                    onClick: this.onTouch
                },
                _react2.default.createElement(_VerticalMenuIcon2.default, { size: 24, style: { top: "0px" } })
            ),
            _react2.default.createElement(
                'ul',
                {
                    style: {
                        display: showList,
                        width: "200px",
                        position: "absolute",
                        background: "white",
                        right: "40px",
                        top: "-5px",
                        padding: "6px 0px",
                        zIndex: "200",
                        boxShadow: "0px -1px 0 #e5e5e5, 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.24)"
                    }
                },
                menuItemList
            )
        );
    }
});

exports.default = (0, _radium2.default)(VerticalMenu);