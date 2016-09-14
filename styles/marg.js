'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = _styles.variables.l.margSizes;

var marg = function marg(props) {

    //
    // For more information on how to use this style util 
    // see troposphere-ui/src/style/README.md 
    //

    return Object.keys(props).reduce(function (style, prop) {
        var value = props[prop];

        var cssField = void 0;
        switch (prop) {
            case "mr":
                style.marginRight = typeof value == "number" ? sizes[value - 1] : value;
                break;
            case "mb":
                style.marginBottom = typeof value == "number" ? sizes[value - 1] : value;
                break;
            case "ml":
                style.marginLeft = typeof value == "number" ? sizes[value - 1] : value;
                break;
            case "ms":
                style.marginRight = typeof value == "number" ? sizes[value - 1] * .5 : value;
                style.marginLeft = typeof value == "number" ? sizes[props.ms - 1] * .5 : value;
        }

        return style;
    }, {});
};

exports.default = marg;