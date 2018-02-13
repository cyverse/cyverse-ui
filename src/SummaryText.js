import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import classnames from "classnames";
import Element from "./Element";

// Each key of the returned object will be available as a className below.
const styles = {
    wrapper: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        maxWidth: "500px",
    },
};

/**
 * SummaryText is used to limit text to a single line and available width. Typically used to preview a large block of text that can be shown by clicking `ShowMoreEllipsis` or a collapsed `MediaCard`.
 *
 * For another use case of SummaryText see 'MediaCard`
 */
const SummaryText = ({
    classes,
    className,
    root = "p",
    children,
    ...rest
}) => {
    const wrapperClasses = classnames(
        { [className]: className },
        "CY-SummaryText",
        classes.wrapper
    );
    return (
        <Element {...rest} root={root} className={wrapperClasses}>
            {children}
        </Element>
    );
};

SummaryText.displayName = "SummaryText";

SummaryText.propTypes = {
    /**
     * Any length string will be shortened to fit the available width on a single line.
     */
    children: PropTypes.string,
    /**
     * The root element to be renderd.
     */
    root: PropTypes.string,
};

export default injectSheet(styles)(SummaryText);
