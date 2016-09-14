"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SideBar = _react2.default.createClass({
    displayName: "SideBar",
    render: function render() {
        var openWidth = 250;
        var currentWidth = this.props.isOpen ? openWidth : 0;
        var style = {
            wrapper: {
                flex: "1 0 auto",
                position: "relative",
                width: openWidth
            },
            sideBar: {
                position: "fixed",
                top: "0px",
                bottom: "0px",
                width: currentWidth,
                marginTop: "50px",
                padding: "20px",
                background: "#EEEEEE",
                overflowY: "auto"
            }
        };

        return _react2.default.createElement(
            "nav",
            { id: "sideBar",
                style: style.wrapper
            },
            _react2.default.createElement(
                "div",
                { style: style.sideBar },
                this.props.children
            )
        );
    }
});

SideBar.propTypes = {
    className: _react.PropTypes.string
};

exports.default = SideBar;