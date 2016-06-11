'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _backbone = require('backbone');

var _backbone2 = _interopRequireDefault(_backbone);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: "SelectMenu",

    propTypes: {
        defaultId: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
        optionName: _react2.default.PropTypes.func.isRequired,
        onSelectChange: _react2.default.PropTypes.func.isRequired,
        list: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.instanceOf(_backbone2.default.Collection), _react2.default.PropTypes.array]),
        hintText: _react2.default.PropTypes.string
    },

    onSelectChange: function onSelectChange(e) {
        var val = e.target.value;
        var list = this.props.list;
        var obj = list.get(val);

        this.props.onSelectChange(obj);
    },

    hintText: function hintText() {

        if (this.props.hintText) {

            return _react2.default.createElement(
                'option',
                { value: 'hint', disabled: true, hidden: true },
                this.props.hintText
            );
        }
    },

    renderOption: function renderOption(item) {

        return _react2.default.createElement(
            'option',
            { key: item.id, value: item.id },
            this.props.optionName(item)
        );
    },

    render: function render() {
        var value = this.props.defaultId;
        if (this.props.hintText) {
            value = "hint";
        }
        if (this.props.list) {
            var options = this.props.list.map(this.renderOption);

            return _react2.default.createElement(
                'select',
                { value: value, className: 'form-control', onChange: this.onSelectChange },
                this.hintText(),
                options
            );
        }

        return _react2.default.createElement(
            'select',
            { value: this.props.defaultId, className: 'form-control' },
            _react2.default.createElement(
                'option',
                { key: '1', value: '1' },
                ' Loading... '
            )
        );
    }
});