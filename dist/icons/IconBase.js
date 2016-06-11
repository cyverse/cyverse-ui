'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultSize = '1em';

var IconBase = function IconBase(_ref, _ref2) {
    var children = _ref.children;
    var size = _ref.size;
    var style = _ref.style;

    var props = _objectWithoutProperties(_ref, ['children', 'size', 'style']);

    var reactIconBase = _ref2.reactIconBase;

    var computedSize = size ? size : reactIconBase && reactIconBase.size || defaultSize;
    var computedStyle = _extends({
        verticalAlign: "middle"
    }, reactIconBase && reactIconBase.style || {}, style);
    return _react2.default.createElement(
        'svg',
        _extends({
            fill: 'currentColor',
            fit: true,
            preserveAspectRatio: 'xMidYMid meet',
            height: computedSize,
            width: computedSize
        }, reactIconBase, props, {
            style: computedStyle
        }),
        children
    );
};

IconBase.contextTypes = {
    reactIconBase: _react.PropTypes.object
};

IconBase.propTypes = {
    size: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    style: _react.PropTypes.object
};

exports.default = IconBase;