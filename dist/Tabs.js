"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: "TabLinks",

    propTypes: {
        currentView: _react2.default.PropTypes.string.isRequired,
        linkList: _react2.default.PropTypes.array.isRequired,
        onChangeView: _react2.default.PropTypes.func.isRequired
    },

    onChangeView: function onChangeView(item) {
        this.props.onChangeView(item);
    },

    renderLinks: function renderLinks(item, i) {
        var active = "";
        if (item === this.props.currentView) {
            active = "TabLinks--active";
        }

        return _react2.default.createElement(
            "li",
            { key: i, className: "TabLinks-link" },
            _react2.default.createElement(
                "a",
                { className: active,
                    onClick: this.onChangeView.bind(this, item)
                },
                item
            )
        );
    },

    render: function render() {
        return _react2.default.createElement(
            "ul",
            { className: "TabLinks clearFix" },
            this.props.linkList.map(this.renderLinks)
        );
    }
});