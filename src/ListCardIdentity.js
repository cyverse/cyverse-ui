import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import classnames from "classnames";
import Element from "./Element";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styles = {
    wrapper: {
        display: "flex",
        alignItems: "center",
        minWidth: "300px",
    },
};

/**
 * ListCardIdentity is the space on the left side within ListCardHeader that contains the ListCard's identity.
 */
const ListCardIdentity = ({
    classes,
    className,
    children,
    ...rest
}) => {
    const wrapperClasses = classnames(
        { [className]: className },
        "CY-ListCardIdentity",
        classes.wrapper
    );
    return (
        <Element
            {...rest}
            whitespace="pl2"
            className={wrapperClasses}
        >
            {children}
        </Element>
    );
};
ListCardIdentity.displayName = "ListCardIdentity";

ListCardIdentity.propTypes = {
    /**
     * Pass anything you want to render within ListCardIdentity as children.
     *
     * For best results use Identity
     */
    children: PropTypes.node,
};

export default injectSheet(styles)(ListCardIdentity);
