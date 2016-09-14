'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = _styles.styles;

var TagGroup = _react2.default.createClass({
    displayName: 'TagGroup',
    listItems: function listItems(item) {
        return _react2.default.createElement(
            'li',
            {
                key: item.props.children.toString(),
                style: this.styles().li
            },
            item
        );
    },
    render: function render() {
        return _react2.default.createElement(
            'ul',
            { style: this.styles().ul },
            this.props.children.map(this.listItems)
        );
    },
    styles: function styles() {
        return {

            li: _extends({}, s.u.inlineLi, (0, _styles.marg)({ mr: 1, mb: 1 })),

            ul: _extends({}, s.u.inlineUl)
        };
    }
});

TagGroup.propTypes = {
    className: _react.PropTypes.string
};

exports.default = TagGroup;