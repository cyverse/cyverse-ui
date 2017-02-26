import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

/**
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */
export default {
  palette: {
    primary1Color: "#0971ab",
    primary2Color: "rgb(49, 140, 200)",
    primary3Color: grey400,
    accent1Color: "rgba(87, 203, 234, 1)",
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: fade(darkBlack, 0.79),
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    danger: "rgb(255, 47, 13)",
    success: "#5cb85c",
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: "rgb(49, 140, 200)",
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};
