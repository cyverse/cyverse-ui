import React from "react";
import injectSheet from "react-jss";
import classnames from "classnames";
import PropTypes from "prop-types";

// Each key of the returned object will be available as a className below.
const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        top: "100%",
        listStyle: "none",
        padding: "0",
        transition: "transform ease .1s",
        transformOrigin: "top",
    },
    wrapper__closed: {
        transform: "scale(0)",
    },
};

const FloatingActionButtonActions = props => {
    const { classes, className, children, isOpen } = props;
    const wrapperClasses = classnames(
        { [className]: className },
        "CY-FloatingActionButtonActions",
        classes.wrapper,
        { [classes.wrapper__closed]: !isOpen }
    );

    return (
        <ul className={wrapperClasses}>
            {React.Children.map(children, child => {
                return React.cloneElement(child, { isOpen: isOpen });
            })}
        </ul>
    );
};

FloatingActionButtonActions.displayName =
    "FloatingActionButtonActions";

FloatingActionButtonActions.propTypes = {
    children: PropTypes.node.isRequired,
};

export default injectSheet(styles)(FloatingActionButtonActions);
