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
        primary1Color: "#006ca9",
        primary2Color: colors.lightBlue500,
        primary3Color: colors.grey400,
        accent1Color: colors.cyanA400,
        accent2Color: colors.grey100,
        accent3Color: colors.grey500,
        textColor: "rgba(0, 0, 0, 0.75)",
        secondaryTextColor: "rgba(0, 0, 0, 0.4)",
        alternateTextColor: colors.white,
        danger: colors.red500,
        success: colors.green500,
        canvasColor: colors.white,
        borderColor: colors.grey300,
        disabledColor: colors.grey400,
        pickerHeaderColor: colors.lightBlue500,
        shadowColor: colors.fullBlack,
    },
};

export default styleVars;
