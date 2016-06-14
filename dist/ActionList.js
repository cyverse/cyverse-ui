'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInk = require('react-ink');

var _reactInk2 = _interopRequireDefault(_reactInk);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionList = _react2.default.createClass({
    displayName: 'ActionList',
    render: function render() {

        var style = {
            list: {
                padding: "6px 0px"
            },
            listItem: {
                cursor: "pointer",
                display: "block",
                padding: "10px 14px",
                textDecoration: "none",
                color: "#444444",
                ':hover': {
                    background: "rgba(0,0,0,.1)"
                }
            }
        };

        var List = this.props.list.map(function (option, i) {
            if (option.href) {
                return _react2.default.createElement(
                    'li',
                    {
                        key: i,
                        style: {
                            listStyle: "none",
                            position: "relative"
                        }
                    },
                    _react2.default.createElement(
                        'a',
                        {
                            key: option.href,
                            style: style.listItem,
                            href: option.href
                        },
                        option.label,
                        _react2.default.createElement(_reactInk2.default, null)
                    )
                );
            }

            return _react2.default.createElement(
                'li',
                { style: [style.listItem, { listStyle: "none" }] },
                ' ',
                option.label,
                ' '
            );
        });
        return _react2.default.createElement(
            'ul',
            { style: style.list },
            List
        );
    }
});

exports.default = (0, _radium2.default)(ActionList);