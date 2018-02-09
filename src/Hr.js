import React from "react";
import injectSheet, { withTheme } from "react-jss";
import classnames from "classnames";
import Element from "./Element";

// Each key of the returned object will be available in the prop "classes" below.
const styles = theme => ({
    wrapper: {
        border: "0px",
        height: "1px",
        background: "rgba( 0, 0, 0, .1 )",
    },
});

/**
 * Hr renders the proper styling on a horizontal rule.
 */
const Hr = ({ classes, className }) => {
    const wrapperClasses = classnames(
        { [className]: className },
        "Hr",
        classes.wrapper
    );
    return <Element root="hr" className={wrapperClasses} />;
};

export default withTheme(injectSheet(styles)(Hr));
