import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui";
import classnames from "classnames";
import Checkbox from "material-ui/Checkbox";

import Element from "./Element";

// Each key of the returned object will be available in the prop "classes" below.
const styles = {
    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: "0",
        position: "relative",
        borderRadius: "50%",
        "&:focus": {
            outline: "none",
        },
        "&:hover": {
            "& > .CY-Checkable-checkbox": {
                opacity: 1,
            },
            "& > .CY-Checkable-children": {
                opacity: 0,
            },
        },
    },
    checkbox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        opacity: 0,
    },
    checkbox__checkable: {
        opacity: 1,
    },
    children__checkable: {
        opacity: 0,
    },
};

/**
 * A pattern for list items like MediaCards or ListCards with an Avatar is that they can be made selectable by replacing the Avatar with a checkbox usually on focus or on hover. Checkable is to make this easier to implement.
 *
 * Checkable is a controlled component so the state needs to be managed. This is to allow more control.
 *
 * The size prop needs to be set to the width of the Avatar or component passed to properly align the checkbox.
 */
const Checkable = props => {
    const {
        classes,
        className,
        children,
        checkboxProps,
        root = "div",
        isCheckable,
        ...rest
    } = props;

    const wrapperClasses = classnames(
        { [className]: className },
        "CY-Checkable",
        classes.wrapper
    );
    const checkBoxClasses = classnames(
        "CY-Checkable-checkbox",
        classes.checkbox,
        { [classes.checkbox__checkable]: isCheckable }
    );
    const childrenClasses = classnames(
        "CY-Checkable-children",
        classes.children,
        { [classes.children__checkable]: isCheckable }
    );
    return (
        <Element {...rest} root={root} className={wrapperClasses}>
            <div className={childrenClasses}>{children}</div>
            <Checkbox
                className={checkBoxClasses}
                {...checkboxProps}
            />
        </Element>
    );
};

Checkable.displayName = "Checkable";

Checkable.defaultProps = {
    size: 40,
    isCheckable: false,
};

Checkable.propTypes = {
    /**
     * Works best with Avatar but can be passed any component or element. For example: an image tag, icon, or third party avatar.
     */
    children: PropTypes.node,
    /**
     * The size is a number representing pixles and needs to be set to the size of your child to keep the checkbox centered.
     */
    size: PropTypes.number,
    /**
     * The props to control "Checkbox" see MUI's checkbox for information on how to use. It is assumed that the child has the same height and width.
     */
    checkboxProps: PropTypes.object,
    /**
     * If true the Checkbox will show.
     */
    isCheckable: PropTypes.bool,
};

export default withStyles(styles)(Checkable);
