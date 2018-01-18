import React from "react";
import PropTypes from "prop-types";
import { createStyleSheet } from "jss-theme-reactor";
import getStyleManager from "./styles/getStyleManager";
import muiThemeable from "material-ui/styles/muiThemeable";
import * as colors from "material-ui/styles/colors";
import Element from "./Element";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = theme =>
    createStyleSheet("BarGraph", theme => ({
        wrapper: {
            display: "flex",
            background: colors.grey100,
        },
        barBefore: {
            transition: "flex-basis ease .3s",
            flexShrink: "0",
            maxWidth: "100%",
        },
        barAfter: {
            transition: "flex-basis ease .3s",
            opacity: ".5",
        },
    }));
/**
 * BarGraph is used to show a percentage of a whole.
 */
const BarGraph = ({
    startValue,
    afterValue,
    barColor,
    compact,
    muiTheme,
}) => {
    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager(muiTheme).render(styleSheet());

    const style = {
        wrapper: {
            height: compact ? "5px" : "10px",
        },
        barBefore: {
            flexBasis: startValue + "%",
            background: barColor,
        },
        barAfter: {
            flexBasis: afterValue + "%",
            background: barColor,
        },
    };
    return (
        <Element
            display="flex"
            style={style.wrapper}
            className={classes.wrapper}
        >
            <div
                style={style.barBefore}
                className={classes.barBefore}
            />
            <div
                style={style.barAfter}
                className={classes.barAfter}
            />
        </Element>
    );
};
BarGraph.displayName = "BarGraph";

BarGraph.propTypes = {
    /**
     * The number representing the primary percentage of a whole used
     */
    startValue: PropTypes.number,
    /**
     * The number representing the secondary percentage of a whole used. Typically a projected value after an action is taken.
     */
    afterValue: PropTypes.number,
    /**
     * The color of the bar representing the percentage of the whole used. The after value will be a lighter version of this color.
     */
    barColor: PropTypes.string,
    /**
     * Wether the BarGraph is compact or regular size
     */
    compact: PropTypes.bool,
};

export default muiThemeable()(BarGraph);
