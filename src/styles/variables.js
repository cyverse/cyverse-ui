const gr = 1.61;

const baseSize = 5;
const goldenSizes = [baseSize];
for (let i = 0; i < 9; i++) {
    let size = goldenSizes[i] * gr;
    goldenSizes.push(size);
}

const variables = {
    l: {
        margSizes: goldenSizes,
        padSizes: goldenSizes
    },

    t: {
    },

    c: {
        grey: {
            xXDark: "#52595E",
            xDark: "#58646E",
            dark: "#8C9296",
            darkMid: "#D1D5D9",
            mid: "#C9CED5",
            lightMid: "#D8DDE2",
            light: "#E5E7EA",
            xLight: "#EFF1F2",
            xXLight: "#F7F8F8",
        },
    }
};

export default variables;
