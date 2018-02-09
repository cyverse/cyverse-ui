import React from "react";
import PropTypes from "prop-types";
import injectSheet, { withTheme } from "react-jss";
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
    },
    img: {
        borderRadius: "999px",
        overflow: "hidden",
    },
    img__sm: {
        ...theme.whitespace.mr2,
    },
    img__lg: {
        ...theme.whitespace.mr3,
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
        image,
        primaryText,
        secondaryText,
        ...rest
    } = props;

    // Set Image size
    const imageSize = lg ? 60 : 40;
    const renderImage = React.cloneElement(image, {
        size: imageSize,
    });

    // Define wrapper classes
    const wrapperClasses = classnames(
        { [className]: className },
        "Identity",
        classes.wrapper
    );

    // Define Image classes
    const imgClasses = classnames(
        "Identity-img",
        classes.img,
        { [classes.img__sm]: !lg },
        { [classes.img__lg]: lg }
    );

    return (
        <Element {...rest} className={wrapperClasses}>
            <div className={imgClasses}>{renderImage}</div>
            <div className="Identity-textGroup">
                <Element
                    className={`Identity-text ${classes.text}`}
                    typography={lg ? "title" : "body2"}
                >
                    {primaryText}
                </Element>
                <Element
                    className={`Identity-subtext ${classes.text}`}
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
     * Expects MUI's Avatar.
     */
    image: PropTypes.element,
    /**
     * If true Identity is rendered larger.
     */
    lg: PropTypes.bool,
};

Identity.displayName = "Identity";

export default withTheme(injectSheet(styles)(Identity));
