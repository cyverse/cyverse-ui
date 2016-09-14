'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaCardGroup = _react2.default.createClass({
    displayName: 'MediaCardGroup',
    getInitialState: function getInitialState() {
        return {
            expanded: null
        };
    },


    componentDidMount: function componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick, false);
    },

    componentWillUnmount: function componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick, false);
    },

    handleDocumentClick: function handleDocumentClick(e) {
        var cards = this.refs.root;
        if (!cards.contains(e.target)) {
            this.setState({ expanded: null });
        }
    },

    onExpand: function onExpand(el) {
        var expanded = this.state.expanded === el ? null : el;
        this.setState({
            expanded: expanded
        });
    },
    render: function render() {
        var _this = this;

        var children = _react2.default.Children.map(this.props.children, function (child) {
            return _react2.default.cloneElement(child, {
                onExpand: _this.onExpand.bind(_this, child),
                isExpanded: _this.state.expanded === child
            });
        });
        return _react2.default.createElement(
            'div',
            {
                style: (0, _styles.marg)(_extends({}, this.props)),
                ref: 'root'
            },
            children
        );
    }
});

MediaCardGroup.propTypes = {
    className: _react.PropTypes.string
};

exports.default = MediaCardGroup;