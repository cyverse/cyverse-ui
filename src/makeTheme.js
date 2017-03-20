var path = require('path');
var writeJson = require('write-json');
var requireMany = require('require-many');
var cm = require('material-ui/utils/colorManipulator');
var colors = require('material-ui/styles/colors');

var primary1Color = "#0971ab",
    primary2Color = "#318cc8",
    accent1Color = "#57cbea";

var theme = {
    header: {
        headerColor: primary1Color,
        headerBorderColor: accent1Color,
        headerLinkColor: "rgba(255, 255, 255, 0.7)"
    },
    palette: {
        primary1Color: primary1Color,
        primary2Color: primary2Color,
        primary3Color: colors.grey400,
        accent1Color: accent1Color,
        accent2Color: colors.grey100,
        accent3Color: colors.grey500,
        alternateTextColor: colors.white,
        danger: "#ff2f0d",
        success: "#5cb85c",
        canvasColor: colors.white,
        borderColor: colors.grey300,
        pickerHeaderColor: primary2Color,
        shadowColor: colors.fullBlack,
    },
};

writeJson('./styles/cyverseTheme.json', theme, function(err) {
    if (err) console.log(err);
});
