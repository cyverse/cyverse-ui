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
            position: "absolute",
            left: "-10000px",
            top: "auto",
            width: "1px",
            height: "1px",
            overflow: "hidden",
        },
        hide: {
            display: "none !important",
        },
    },
};

export default styles;
