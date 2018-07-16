import React from "react";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";

const styles = theme => {
    const {
        palette: {
            primary,
            secondary,
            error,
            grey,
            text,
            divider,
            background,
            action,
        },
    } = theme;
    return {
        wrapper: {
            color: "white",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            width: "100%",
        },
        swatch: {
            display: "flex",
            flexDirection: "column",
            margin: "1%",
            color: "white",
            fontSize: "11px",
            minWidth: "100px",
            flex: "0 1 22%",
            height: "200px",
            "& div": {
                paddingLeft: 8,
            }
        },
        swatchLong: {
            height: "500px",
        },
        primaryMain: {
            height: "100%",
            background: primary.main,
        },
        primaryDark: {
            height: "100%",
            background: primary.dark,
        },
        primaryLight: {
            height: "100%",
            background: primary.light,
        },
        secondaryMain: {
            height: "100%",
            background: secondary.main,
        },
        secondaryDark: {
            height: "100%",
            background: secondary.dark,
        },
        secondaryLight: {
            height: "100%",
            background: secondary.light,
        },
        errorMain: {
            height: "100%",
            background: error.main,
        },
        errorDark: {
            height: "100%",
            background: error.dark,
        },
        errorLight: {
            height: "100%",
            background: error.light,
        },
        grey50: {
            height: "100%",
            background: grey[50],
        },
        grey100: {
            height: "100%",
            background: grey[100],
        },
        grey200: {
            height: "100%",
            background: grey[200],
        },
        grey300: {
            height: "100%",
            background: grey[300],
        },
        grey400: {
            height: "100%",
            background: grey[400],
        },
        grey500: {
            height: "100%",
            background: grey[500],
        },
        grey600: {
            height: "100%",
            background: grey[600],
        },
        grey700: {
            height: "100%",
            background: grey[700],
        },
        grey800: {
            height: "100%",
            background: grey[800],
        },
        grey900: {
            height: "100%",
            background: grey[900],
        },
        greyA100: {
            height: "100%",
            background: grey["A100"],
        },
        greyA200: {
            height: "100%",
            background: grey["A200"],
        },
        greyA400: {
            height: "100%",
            background: grey["A400"],
        },
        greyA700: {
            height: "100%",
            background: grey["A700"],
        },
        textDisabled: {
            height: "100%",
            background: text.disabled,
        },
        textPrimary: {
            height: "100%",
            background: text.primary,
        },
        textSecondary: {
            height: "100%",
            background: text.secondary,
        },
        textHint: {
            height: "100%",
            background: text.hint,
        },
        divider: {
            height: "100%",
            background: divider,
        },
        backgroundPaper: {
            height: "100%",
            background: background.paper,
        },
        backgroundDefault: {
            height: "100%",
            background: background.default,
        },
        actionActive: {
            height: "100%",
            background: action.active
        },
        actionDisabled: {
            height: "100%",
            background: action.disabled
        },
        actionDisabledBackground: {
            height: "100%",
            background: action.disabledBackground
        },
        actionHover: {
            height: "100%",
            background: action.hover
        },
        actionSelected: {
            height: "100%",
            background: action.selected
        },
    };
};
class ThemeColorsEx extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.wrapper}>
                <Paper className={classes.swatch}>
                    <div className={classes.primaryMain}>Primary Main</div>
                    <div className={classes.primaryDark} >Primary Dark</div>
                    <div className={classes.primaryLight} >Primary Light</div>
                </Paper>
                <Paper className={classes.swatch}>
                    <div className={classes.secondaryMain} >Secondary Main</div>
                    <div className={classes.secondaryDark} >Secondary Dark</div>
                    <div className={classes.secondaryLight} >Secondary Light</div>
                </Paper>
                <Paper className={classes.swatch}>
                    <div className={classes.errorMain} >Error Main</div>
                    <div className={classes.errorDark} >Error Dark</div>
                    <div className={classes.errorLight} >Error Light</div>
                </Paper>
                <Paper className={classes.swatch}>
                    <div className={classes.backgroundPaper} >Background Paper</div>
                    <div className={classes.backgroundDefault} >Background Default</div>
                </Paper>
                <Paper className={classes.swatch}>
                    <div className={classes.textDisabled} >Text Disabled</div>
                    <div className={classes.textPrimary} >Text Primary</div>
                    <div className={classes.textSecondary} >Text Secondary</div>
                    <div className={classes.textHint} >Text Hint</div>
                </Paper>
                <Paper className={classes.swatch}>
                    <div className={classes.actionActive} >Action Active</div>
                    <div className={classes.actionDisabled} >Action Disabled</div>
                    <div className={classes.actionDisabledBackground} >Action Disabled Background</div>
                    <div className={classes.actionHover} >Action Hover</div>
                    <div className={classes.actionSelected} >Action Selected</div>
                </Paper>
                <Paper className={classes.swatch}>
                    <div className={classes.divider} >Divider</div>
                </Paper>
                <Paper
                    className={[classes.swatch, classes.swatchLong]}
                >
                    <div className={classes.grey50} >Grey 50</div>
                    <div className={classes.grey100} >Grey 100</div>
                    <div className={classes.grey200} >Grey 200</div>
                    <div className={classes.grey300} >Grey 300</div>
                    <div className={classes.grey400} >Grey 400</div>
                    <div className={classes.grey500} >Grey 500</div>
                    <div className={classes.grey600} >Grey 600</div>
                    <div className={classes.grey700} >Grey 700</div>
                    <div className={classes.grey800} >Grey 800</div>
                    <div className={classes.grey900} >Grey 900</div>
                    <div className={classes.greyA100} >Grey A100</div>
                    <div className={classes.greyA200} >Grey A200</div>
                    <div className={classes.greyA400} >Grey A400</div>
                    <div className={classes.greyA700} >Grey A700</div>
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(ThemeColorsEx);
