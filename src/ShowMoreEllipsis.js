import React from "react";
import injectSheet, { withTheme } from "react-jss";
import classnames from "classnames";
import Element from "./Element";

const styles = theme => ({
    wrapper: {
        ...theme.whitespace.ml1,
        cursor: "pointer",
        borderRadius: "3px",
        padding: "0 3px 12px",
        display: "inline-block",
        lineHeight: "0",
        verticalAlign: "middle",
        fontSize: "22px",
        background: "rgba(0,0,0,.1)",
        "&:hover": {
            background: "rgba(0,0,0,.3)",
        },
    },
});
/**
 * ShowMoreEllipsis is used to show he user that there is more content to see that has been hidden by the UI. Generally it is unnecessary to trigger any events with it as it is used on cards which expand when the user clicks anywhere inside.
 */
const ShowMoreEllipsis = props => {
    const { classes, className, ...rest } = props;
    const wrapperClasses = classnames(
        { [className]: className },
        "CY-ShowMoreEllipsis",
        classes.wrapper
    );
    return (
        <Element root="span" {...rest} className={wrapperClasses}>
            ...
        </Element>
    );
};

ShowMoreEllipsis.displayName = "ShowMoreEllipsis";

export default withTheme(injectSheet(styles)(ShowMoreEllipsis));
