import * as colors from "material-ui/colors";

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
        primary: {
            main: "#006ca9",
        },
        text: {
            primary: colors.grey[800]
        }
    },
};

export default styleVars;
