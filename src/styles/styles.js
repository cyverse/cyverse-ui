import styleVars from "./styleVars";
import * as styleGenerators from "./styleGenerators";
import * as colors from "material-ui/styles/colors";

const { sizeUnits } = styleVars;

const {
    generateMarginStyles,
    generatePaddingStyles,
    generateShadowStyles,
} = styleGenerators;

const styleVariables = {
    elevation: {
        ...generateShadowStyles(),
    },
    whitespace: {
        ...generateMarginStyles(sizeUnits),
        ...generatePaddingStyles(sizeUnits),
    },
    typography: {
        display4: {
            fontSize: "112px",
            fontWeight: "300",
            letterSpacing: "1px",
        },
        display3: {
            fontSize: "56px",
            fontWeight: "400px",
            letterSpacing: "1px",
        },
        display2: {
            fontSize: "48px",
            lineHeight: "48px",
            fontWeight: "400",
            letterSpacing: "1px",
        },
        display1: {
            fontSize: "34px",
            lineHeight: "40px",
            fontWeight: "400",
            letterSpacing: "1px",
        },
        headline: {
            fontSize: "24px",
            lineHeight: "1",
            fontWeight: "400",
            letterSpacing: "1px",
        },
        title: {
            fontSize: "20px",
            lineHeight: "24px",
            fontWeight: "400",
            letterSpacing: "1px",
        },
        subheading: {
            color: colors.grey400,
            fontSize: "16px",
            lineHeight: "1",
            fontWeight: "400",
        },
        body2: {
            fontSize: "16px",
            lineHeight: "1",
            fontWeight: "500",
        },
        body1: {
            fontSize: "14px",
            lineHeight: "16px",
            fontWeight: "300",
        },
        caption: {
            fontSize: "14px",
            lineHeight: "16px",
            fontWeight: "400",
            color: colors.grey500,
        },
        label: {
            fontSize: "12px",
            lineHeight: "1",
            fontWeight: "200",
            color: "rgba(0, 0, 0, 0.3)",
            margin: "0px 0px 10px",
        },
    },
    utility: {
        hideReadable: {
            position: "fixed",
            top: "9999px",
        },
        hide: {
            display: "none",
        },
    },
};

export default styleVariables;
