import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
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
        alignSelf: "flex-start",
        borderRadius: "50%",
        width: ({ size }) => size + "px !important",
        height: ({ size }) => size + "px !important",
        "&:focus": {
            outline: "none",
        },
    },
    Checkbox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute !important",
        width: ({ size }) => size + "px !important",
        left: ({ size }) => size * 0.5 - 12,
        opacity: ({ isCheckable }) => (isCheckable ? 1 : 0),
    },
    children: {
        opacity: ({ isCheckable }) => (isCheckable ? 0 : 1),
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
        ...rest
    } = props;

    const wrapperClasses = classnames(
        { [className]: className },
        "Checkable",
        classes.wrapper
    );

    return (
        <Element
            {...rest}
            root={root}
            stopPropagation
            className={wrapperClasses}
        >
            <Checkbox
                className={`${classes.Checkbox} Checkbox`}
                {...checkboxProps}
            />
            <div className={`${classes.children} Chackable-children`}>
                {children}
            </div>
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

export default injectSheet(styles)(Checkable);
