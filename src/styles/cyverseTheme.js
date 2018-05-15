import { styleVars } from "../styles";
import { styles as cyverseStyles } from "../styles";

const { palette } = styleVars;

const theme = {
    palette,
    /*header: {
        headerColor: palette.primary1Color,
        headerBorderColor: palette.accent1Color,
        headerLinkColor: "rgba(255, 255, 255, 0.7)",
    },
    tabs: {
        backgroundColor: "white",
        selectedTextColor: "black",
        textColor: "rgba(0,0,0,.4)",
    },
    inkBar: {
        backgroundColor: palette.primary1Color,
    },*/
    ...cyverseStyles,
};
export default theme;
