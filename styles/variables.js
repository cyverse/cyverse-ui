"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var gr = 1.61;

var baseSize = 5;
var goldenSizes = [baseSize];
for (var i = 0; i < 9; i++) {
    var size = goldenSizes[i] * gr;
    goldenSizes.push(size);
}

var variables = {
    l: {
        margSizes: goldenSizes,
        padSizes: goldenSizes
    },

    t: {},

    c: {
        grey: {
            xXDark: "#52595E",
            xDark: "#58646E",
            dark: "#8C9296",
            darkMid: "#D1D5D9",
            mid: "#C9CED5",
            lightMid: "#D8DDE2",
            light: "#E5E7EA",
            xLight: "#EFF1F2",
            xXLight: "#F7F8F8"
        }
    }
};

exports.default = variables;