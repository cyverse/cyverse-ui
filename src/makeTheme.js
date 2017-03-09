var path = require('path');
var writeJson = require('write-json');
var requireMany = require('require-many');
var cm = require('material-ui/utils/colorManipulator');
var colors = require('material-ui/styles/colors');

var theme = {
  palette: {
    primary1Color: "#0971ab",
    primary2Color: "rgb(49, 140, 200)",
    primary3Color: colors.grey400,
    accent1Color: "rgba(87, 203, 234, 1)",
    accent2Color: colors.grey100,
    accent3Color: colors.grey500,
    alternateTextColor: colors.white,
    danger: "rgb(255, 47, 13)",
    success: "#5cb85c",
    canvasColor: colors.white,
    borderColor: colors.grey300,
    pickerHeaderColor: "rgb(49, 140, 200)",
    shadowColor: colors.fullBlack,
  },
};

writeJson('./styles/cyverseTheme.json', theme, function(err) {
    if (err) console.log(err);
});
