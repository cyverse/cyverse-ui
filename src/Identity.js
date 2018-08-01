import React from "react";
import PropTypes from "prop-types";
import {withStyles } from "material-ui/styles";
import classnames from "classnames";
import Element from "./Element";

// Each key of the returned object will be available in the prop "classes" below.
const styles = theme => ({
    wrapper: {
        position: "relative",
        display: "flex",
        alignItems: "center",
    },
    text: {
        marginBottom: 2,
        lineHeight: 1
    },
    avatar: {
        borderRadius: "999px",
        overflow: "hidden",
        marginRight: theme.spacing.unit * 2
    },
});

/**
 * Identity is used on a card or view to provide context to the content. A resource for example, would have the resource name as the primary text and useful meta as the secondary text, like the date the resource was created or a quick summary.
 *
 * An Identity is located at the top left of a card or view. A small Identity is used on cards and a large Identity or small Identity can be used on views.
 **/
const Identity = props => {
    const {
        classes,
        className,
        lg,
        avatar,
        primaryText,
        secondaryText,
        ...rest
    } = props;



    // Define wrapper classes
    const wrapperClasses = classnames(
        { [className]: className },
        "CY-Identity",
        classes.wrapper
    );

    // Define Image classes
    const imgClasses = classnames(
        "CY-Identity-img",
        classes.avatar,
    );

    return (
        <Element {...rest} className={wrapperClasses}>
            <div className={imgClasses}>
            {avatar}
            </div>
            <div className="CY-Identity-textGroup">
                <Element
                    root="h3"
                    className={`CY-Identity-text ${classes.text}`}
                    typography={lg ? "title" : "body2"}
                >
                    {primaryText}
                </Element>
                <Element
                    className={`CY-Identity-subtext ${classes.text}`}
                    typography={lg ? "subheading" : "caption"}
                >
                    {secondaryText}
                </Element>
            </div>
        </Element>
    );
};

Identity.propTypes = {
    /**
     * The first line of text, usually a name.
     */
    primaryText: PropTypes.node,
    /**
     * The second line of text, usually a date or caption.
     */
    secondaryText: PropTypes.node,
    /**
     * Expects MUI's Avatar but any node will work.
     */
    avatar: PropTypes.element,
    /**
     * If true Identity is rendered larger.
     */
    lg: PropTypes.bool,
};

Identity.displayName = "Identity";

export default withStyles(styles)(Identity);
