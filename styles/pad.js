'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = _styles.variables.l.padSizes;

var pad = function pad(props) {

    if (props.p) {

        if (props.p.substring) {
            return {
                padding: props.pr
            };
        }
        return {
            padding: sizes[props.p - 1] + 'px'
        };
    }

    if (props.pr) {
        if (props.pr.substring) {
            return {
                paddingRight: props.mr
            };
        }
        return {
            paddingRight: sizes[props.pr - 1] + 'px'
        };
    }

    if (props.pb) {
        if (props.pb.substring) {
            return {
                paddingBottom: props.mb
            };
        }
        return {
            paddingBottom: sizes[props.pb - 1] + 'px'
        };
    }

    if (props.pl) {
        if (props.pl.substring) {
            return {
                paddingLeft: props.pl
            };
        }
        return {
            paddingLeft: sizes[props.ml - 1] + 'px'
        };
    }

    if (props.pt) {
        if (props.pt.substring) {
            return {
                paddingTop: props.pt
            };
        }
        return {
            paddingTop: sizes[props.pt - 1] + 'px'
        };
    }

    if (props.ps) {
        if (props.ms.substring) {
            return {
                paddingRight: props.ps
            };
        }
        return {
            paddingRight: sizes[props.ps - 1] + 'px',
            paddingLeft: sizes[props.ps - 1] + 'px'
        };
    }
};

exports.default = pad;