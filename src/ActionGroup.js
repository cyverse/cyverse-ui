import React from "react";
import PropTypes from "prop-types";
import injectSheet, { withTheme } from "react-jss";
import classnames from "classnames";

import Element from "./Element";

// Each key of the returned object will be available as a className below.
const styles = theme => ({
    wrapper: {
        display: "flex",
        alignItems: "center",
    },
});

/**
 * Organize groups of IconButtons on list cards or in app bars.
 */
const ActionGroup = ({ classes, className, children, ...rest }) => {
    const wrapperClasses = classnames(
        { [className]: className },
        "CY-ActionGroup",
        classes.wrapper
    );

    return (
        <Element {...rest} className={wrapperClasses}>
            {children}
        </Element>
    );
};
ActionGroup.displayName = "ActionGroup";

ActionGroup.propTypes = {
    /**
     * Although one can pass any component or elements to be rendered as children, ActionGroup was designed for IconButtons or components like `VerticalMenu` that are made with IconButton.
     */
    children: PropTypes.node,
};

export default withTheme(injectSheet(styles)(ActionGroup));
