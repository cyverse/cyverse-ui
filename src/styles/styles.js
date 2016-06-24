import v from './variables';


let styleVariables = {
    boxShadow: {
        sm: {
            boxShadow: "0 1px 4px rgba(0, 0, 0, .5)"
        },

        md: {
            boxShadow: "0 1px 10px rgba(0, 0, 0, .5)"
        },

        lg: {
            boxShadow: "0 5px 15px rgba(0,0,0,.5)"
        },

        li: {
            boxShadow: "0 -1px 0 #e5e5e5,0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24)"
        },
    },

    t: {

        label: {
            display: "block",
            fontSize: "12px",
            fontWeight: "600",
            margin: "0px 0px 8px",
        },

        caption: {
            fontSize: "12px",
            fontWeight: "400",
            color: v.grey.dark,
        },

        display4: {
            fontSize: "112px",
            fontWeight: "300",
        },

        display3: {
            fontSize: "56px",
            fontWeight: "400px",
        },

        display2: {
            fontSize: "45px",
            fontWeight: "400",
        },

        display1: {
            fontSize: "34px",
            fontWeight: "400",
        },

        headline: {
            fontSize: "24px",
            fontWeight: "400",
            margin: "0 0 10px",
        },

        title: {
            fontSize: "20px",
            fontWeight: "400",
            margin: "0 0 10px",
        },

        subheading: {
            fontSize: "16px",
            fontWeight: "400",
            margin: "0 0 10px",
        },

        body2: {
            fontSize: "14px",
            fontWeight: "500",
        },

        body1: {
            fontSize: "14px",
            fontWeight: "300",
        },

        button1: {
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "1",
            margin: "0px",
        }
    },
    BgColors: {
        greyXxDark: {
            background: v.grey.xXDark,
        },
        greyXDark: {
            background: v.grey.xDark,
        },
        greyDark:{
            background: v.grey.dark,
        },
        greyDarkMid: {
            background: v.grey.darkMid,
        },
        greyMid: {
             background: v.grey.mid,
        },
        greyLightMid: {
            background: v.grey.lightMid,
        },
        greyLight: {
            background: v.grey.light,
        },
        greyXLight: {
            background: v.grey.xLight,
        },
        greyXxlight: {
            background: v.grey.xXLight,
        },
    },
    u: {
        kHide: {
            position: "fixed",
            top: "9999px",
        }
    }
};

export default styleVariables; 
