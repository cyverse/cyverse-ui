import * as colors from 'material-ui/styles/colors';

var primary1Color = "#0971ab",
    primary2Color = "#318cc8",
    accent1Color = "#57cbea";

export default {
    header: {
        headerColor: primary1Color,
        headerBorderColor: accent1Color,
        headerLinkColor: "rgba(255, 255, 255, 0.7)"
    },
    palette: {
        primary1Color: primary1Color,
        primary2Color: primary2Color,
        primary3Color: colors.grey400,
        accent1Color: accent1Color,
        accent2Color: colors.grey100,
        accent3Color: colors.grey500,
        alternateTextColor: colors.white,
        danger: colors.red500,
        success: colors.green500,
        canvasColor: colors.white,
        borderColor: colors.grey300,
        pickerHeaderColor: primary2Color,
        shadowColor: colors.fullBlack
    },
    tabs: {
        backgroundColor: "white",
        selectedTextColor: "black",
        textColor: "rgba(0,0,0,.4)"
    },
    inkBar: {
        backgroundColor: primary1Color
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
            fontSize: "45px",
            fontWeight: "400",
            letterSpacing: "1px",
        },

        display1: {
            fontSize: "34px",
            fontWeight: "400",
            letterSpacing: "1px",
        },

        headline: {
            fontSize: "24px",
            fontWeight: "400",
            letterSpacing: "1px",
        },

        title: {
            fontSize: "20px",
            fontWeight: "400",
            letterSpacing: "1px",
        },

        subheading: {
            color: colors.grey400,
            fontSize: "16px",
            fontWeight: "400",
        },

        body2: {
            fontSize: "16px",
            fontWeight: "500",
        },

        body1: {
            fontSize: "14px",
            fontWeight: "300",
        },

        label: {
            fontSize: "12px",
            fontWeight: "200",
            color: "rgba(0, 0, 0, 0.3)",
            margin: "0px 0px 10px",
        },

        caption: {
            fontSize: "14px",
            fontWeight: "400",
            color: colors.grey500,
        },

        button1: {
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "1",
            marginTop: "0px",
            marginRight: "0px",
            marginBottom: "0px",
            marginLeft: "0px",
            letterSpacing: "1px",
        }
    }
};
