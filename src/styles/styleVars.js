import * as colors from "material-ui/styles/colors";

// Create sizeUnits array
const baseUnit = 8;
const sizeCount = 20;
let sizeUnits = [baseUnit];
for (let i = 0; i < sizeCount; i++) {
    let size = sizeUnits[i] + baseUnit;
    sizeUnits.push(size);
}

// Define
const styleVars = {
    sizeUnits,
    palette: {
        primary1Color: "#0971ab",
        primary2Color: "#318cc8",
        primary3Color: colors.grey400,
        accent1Color: "#57cbea",
        accent2Color: colors.grey100,
        accent3Color: colors.grey500,
        alternateTextColor: colors.white,
        danger: colors.red500,
        success: colors.green500,
        canvasColor: colors.white,
        borderColor: colors.grey300,
        pickerHeaderColor: "#318cc8",
        shadowColor: colors.fullBlack,
    },
};

export default styleVars;
