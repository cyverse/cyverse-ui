import v from './variables';


let styleVariables = {
    boxShadow: {
        xsm: {
            boxShadow: "0 0 3px rgba(0, 0, 0, .3)"
        },
        sm: {
            boxShadow: "0 1px 3px rgba(0, 0, 0, .3)"
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
            fontWeight: "200",
            color: "rgba(0, 0, 0, 0.3)",
            margin: "0px 0px 10px",
        },

        caption: {
            fontSize: "14px",
            fontWeight: "400",
            color: v.c.grey.dark,
        },

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
            color: v.c.grey.dark,
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
    },
    BgColors: {
        greyXxDark: {
            background: v.c.grey.xXDark,
        },
        greyXDark: {
            background: v.c.grey.xDark,
        },
        greyDark:{
            background: v.c.grey.dark,
        },
        greyDarkMid: {
            background: v.c.grey.darkMid,
        },
        greyMid: {
             background: v.c.grey.mid,
        },
        greyLightMid: {
            background: v.c.grey.lightMid,
        },
        greyLight: {
            background: v.c.grey.light,
        },
        greyXLight: {
            background: v.c.grey.xLight,
        },
        greyXxlight: {
            background: v.c.grey.xXLight,
        },
    },
    u: {
        kHide: {
            position: "fixed",
            top: "9999px",
        },

        inlineUl: {
            padding: 0,
            margin: 0,
        },

        inlineLi: {
            display: "inline-block",
            listStyle: "none",
        },
    }
};

export default styleVariables;
