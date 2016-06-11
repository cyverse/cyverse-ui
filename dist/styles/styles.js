"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _variables = require("./variables");

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleVariables = {
    boxShadow: {
        sm: {
            boxShadow: "0 1px 4px rgba(0, 0, 0, .5)"
        },

        md: {
            boxShadow: "0 1px 10px rgba(0, 0, 0, .5)"
        },

        lg: {
            boxShadow: "0 5px 15px rgba(0,0,0,.5)"
        },

        li: {
            boxShadow: "0 -1px 0 #e5e5e5,0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24)"
        }
    },

    t: {

        caption: {
            fontSize: "12px",
            fontWeight: "400",
            color: _variables2.default.grey.dark
        },

        display4: {
            fontSize: "112px",
            fontWeight: "300"
        },

        display3: {
            fontSize: "56px",
            fontWeight: "400px"
        },

        display2: {
            fontSize: "45px",
            fontWeight: "400"
        },

        display1: {
            fontSize: "34px",
            fontWeight: "400"
        },

        headline: {
            fontSize: "24px",
            fontWeight: "500",
            margin: "0 0 10px"
        },

        title: {
            fontSize: "20px",
            fontWeight: "50px",
            margin: "0 0 10px"
        },

        subheading: {
            fontSize: "16px",
            fontWeight: "400",
            margin: "0 0 10px"
        },

        body2: {
            fontSize: "14px",
            fontWeight: "500"
        },

        body1: {
            fontSize: "14px",
            fontWeight: "400"
        }

    },
    BgColors: {
        greyXxDark: {
            background: _variables2.default.grey.xXDark
        },
        greyXDark: {
            background: _variables2.default.grey.xDark
        },
        greyDark: {
            background: _variables2.default.grey.dark
        },
        greyDarkMid: {
            background: _variables2.default.grey.darkMid
        },
        greyMid: {
            background: _variables2.default.grey.mid
        },
        greyLightMid: {
            background: _variables2.default.grey.lightMid
        },
        greyLight: {
            background: _variables2.default.grey.light
        },
        greyXLight: {
            background: _variables2.default.grey.xLight
        },
        greyXxlight: {
            background: _variables2.default.grey.xXLight
        }

    }
};

exports.default = styleVariables;