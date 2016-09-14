'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDimensions = require('react-dimensions');

var _reactDimensions2 = _interopRequireDefault(_reactDimensions);

var _styles2 = require('./styles');

var _icons = require('./icons');

var _MediaCard = require('./MediaCard');

var _MediaCard2 = _interopRequireDefault(_MediaCard);

var _Avatar = require('./Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Hr = require('./Hr');

var _Hr2 = _interopRequireDefault(_Hr);

var _ProgressAvatar = require('./ProgressAvatar');

var _ProgressAvatar2 = _interopRequireDefault(_ProgressAvatar);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _TextField = require('./TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InstanceCard = _react2.default.createClass({
    displayName: 'InstanceCard',
    getInitialState: function getInitialState() {
        return {
            title: this.props.title,
            avatarIsHovered: false,
            titleIsHoverd: false,
            editTitle: false
        };
    },
    onAvatarEnter: function onAvatarEnter() {
        this.setState({
            avatarIsHovered: true
        });
    },
    onAvatarLeave: function onAvatarLeave() {
        this.setState({
            avatarIsHovered: false
        });
    },
    onChangeTitle: function onChangeTitle(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.onChangeTitle(e.target.value);
        this.setState({ editTitle: false });
    },
    onCheck: function onCheck(e) {
        e.nativeEvent.stopImmediatePropagation();
        e.preventDefault();
        e.stopPropagation();
        this.props.onBatchClick(e);
    },
    summary: function summary() {
        var _this = this;

        return _react2.default.createElement(
            'div',
            { style: this.styles().summary },
            this.props.summaryInfo.map(function (item) {
                return _react2.default.createElement(
                    'div',
                    { key: item.label, style: _this.styles().summaryCell },
                    item.value
                );
            })
        );
    },
    detail: function detail() {
        var _this2 = this;

        var _props = this.props;
        var title = _props.title;
        var launched = _props.launched;

        var labelWidth = "125px";

        var renderTitle = this.state.editTitle ? _react2.default.createElement(
            'form',
            { onSubmit: this.onChangeTitle },
            _react2.default.createElement(_TextField2.default, {
                passRef: function passRef(ref) {
                    if (ref != null) {
                        ref.focus();
                    }
                },
                id: 'changeInstanceName',
                onBlur: this.onChangeTitle,
                color: this.props.primaryColor,
                value: this.state.title,
                onChange: function onChange(e) {
                    _this2.setState({ title: e.target.value });
                }
            })
        ) : _react2.default.createElement(
            'h1',
            {
                onMouseEnter: function onMouseEnter(e) {
                    _this2.setState({ titleIsHovered: true });
                },
                onMouseLeave: function onMouseLeave(e) {
                    _this2.setState({ titleIsHovered: false });
                },
                onClick: function onClick(e) {
                    e.nativeEvent.stopImmediatePropagation();
                    e.preventDefault();
                    e.stopPropagation();
                    _this2.setState({ editTitle: true });
                },
                style: _extends({}, _styles2.styles.t.headline, { cursor: "pointer" })
            },
            title,
            _react2.default.createElement(_icons.EditIcon, {
                style: this.styles().editIcon,
                size: 18,
                ml: 4
            })
        );

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'header',
                {
                    style: _extends({}, (0, _styles2.marg)({ mb: 5 }), {
                        lineHeight: "1.3"
                    })
                },
                renderTitle,
                _react2.default.createElement(
                    'div',
                    {
                        style: _styles2.styles.t.subheading
                    },
                    'Launched on ' + launched
                )
            ),
            _react2.default.createElement(
                'div',
                {
                    id: title + '-stats',
                    style: _extends({}, _styles2.styles.t.body1)
                },
                this.props.detailInfo.map(function (item) {
                    return _react2.default.createElement(
                        'div',
                        {
                            key: item.label,
                            style: _this2.styles().detailRow
                        },
                        _react2.default.createElement(
                            'span',
                            { style: _this2.styles().detailLabel },
                            item.label
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            item.value
                        )
                    );
                })
            )
        );
    },
    avatar: function avatar() {
        var avatar = _react2.default.createElement(_ProgressAvatar2.default, {
            name: this.props.title,
            percent: this.props.percent,
            size: 36,
            stroke: 10,
            color: this.props.successColor
        });

        if (this.props.batchMode || this.state.avatarIsHovered) {
            avatar = _react2.default.createElement(_Checkbox2.default, {
                onClick: this.onCheck,
                checked: this.props.checked,
                style: { margin: "auto", width: "75%" },
                color: this.props.primaryColor
            });
        }

        return _react2.default.createElement(
            'div',
            {
                style: {
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    borderRadius: "50%",
                    overflow: "hidden",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px"
                },
                onMouseEnter: this.onAvatarEnter,
                onMouseLeave: this.onAvatarLeave
            },
            avatar
        );
    },
    render: function render() {
        return _react2.default.createElement(_MediaCard2.default, _extends({}, this.props, {
            summary: this.summary(),
            detail: this.detail(),
            image: this.avatar()
        }));
    },
    styles: function styles() {
        var style = {};

        style.summary = {
            display: "flex"
        };

        style.summaryCell = {
            paddingRight: "50px"
        };

        style.detailRow = {
            paddingBottom: "10px",
            display: "flex"
        };

        style.detailLabel = _extends({
            width: "125px"
        }, _styles2.styles.t.body2);

        if (this.props.containerWidth <= 500) {
            style.summary.display = "block";
            style.summaryCell.paddingRight = "0";
            style.summaryCell.paddingBottom = "10px";
        }

        style.editIcon = {
            opacity: "0"
        };

        if (this.state.titleIsHovered) {
            style.editIcon.opacity = "1";
        }

        return style;
    }
});

InstanceCard.propTypes = {
    className: _react.PropTypes.string
};

exports.default = (0, _reactDimensions2.default)({ containerStyle: { height: "auto" } })(InstanceCard);