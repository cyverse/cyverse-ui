import styleVars from "./styleVars";
import * as styleGenerators from "./styleGenerators";

const { sizeUnits } = styleVars;

const {
    generateMarginStyles,
    generatePaddingStyles,
    generateShadowStyles,
} = styleGenerators;

const styles = {
    elevation: {
        ...generateShadowStyles(),
    },
    whitespace: {
        ...generateMarginStyles(sizeUnits),
        ...generatePaddingStyles(sizeUnits),
    },
    utility: {
        hideReadable: {
            position: "fixed",
            top: "9999px",
        },
        hide: {
            display: "none !important",
        },
    },
};

export default styles;
