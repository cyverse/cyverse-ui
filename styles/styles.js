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

        label: {
            display: "block",
            fontSize: "15px",
            fontWeight: "400",
            margin: "0px 0px 8px"
        },

        caption: {
            fontSize: "12px",
            fontWeight: "400",
            color: _variables2.default.c.grey.dark
        },

        display4: {
            fontSize: "112px",
            fontWeight: "300",
            letterSpacing: "1px"
        },

        display3: {
            fontSize: "56px",
            fontWeight: "400px",
            letterSpacing: "1px"
        },

        display2: {
            fontSize: "45px",
            fontWeight: "400",
            letterSpacing: "1px"
        },

        display1: {
            fontSize: "34px",
            fontWeight: "400",
            letterSpacing: "1px"
        },

        headline: {
            fontSize: "24px",
            fontWeight: "400",
            letterSpacing: "1px"
        },

        title: {
            fontSize: "20px",
            fontWeight: "400",
            letterSpacing: "1px"
        },

        subheading: {
            color: _variables2.default.c.grey.dark,
            fontSize: "16px",
            fontWeight: "400"
        },

        body2: {
            fontSize: "14px",
            fontWeight: "500"
        },

        body1: {
            fontSize: "14px",
            fontWeight: "300"
        },

        button1: {
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "1",
            margin: "0px",
            letterSpacing: "1px"
        }
    },
    BgColors: {
        greyXxDark: {
            background: _variables2.default.c.grey.xXDark
        },
        greyXDark: {
            background: _variables2.default.c.grey.xDark
        },
        greyDark: {
            background: _variables2.default.c.grey.dark
        },
        greyDarkMid: {
            background: _variables2.default.c.grey.darkMid
        },
        greyMid: {
            background: _variables2.default.c.grey.mid
        },
        greyLightMid: {
            background: _variables2.default.c.grey.lightMid
        },
        greyLight: {
            background: _variables2.default.c.grey.light
        },
        greyXLight: {
            background: _variables2.default.c.grey.xLight
        },
        greyXxlight: {
            background: _variables2.default.c.grey.xXLight
        }
    },
    u: {
        kHide: {
            position: "fixed",
            top: "9999px"
        },

        inlineUl: {
            padding: 0,
            margin: 0
        },

        inlineLi: {
            display: "inline-block",
            listStyle: "none"
        }
    }
};

exports.default = styleVariables;