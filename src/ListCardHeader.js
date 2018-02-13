import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import classnames from "classnames";
import Element from "./Element";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styles = theme => ({
    wrapper: {
        display: "flex",
        flexWrap: "nowrap",
        alignContent: "stretch",
        justifyContent: "space-between",
        minHeight: "65px",
        alignItems: "center",
        "&:focus": {
            outline: "transparent",
            borderLeft: `solid 5px ${theme.palette.primary1Color}`,
        },
    },
    wrapper__clickable: {
        cursor: "pointer",
    },
});

/**
 * The ListCardHeader is the area the appears at the top of the ListCard and contains the ListCards identity and actions.
 *
 * If your ListCard is to be expandable the click handler for toggling state should be applied to ListCardHeader. For a more "automagic" solution to expanding ListCards or for an example of what's possible see `MediaCard`
 */
const ListCardHeader = ({
    classes,
    className,
    children,
    ...rest
}) => {
    const wrapperClasses = classnames(
        { [className]: className },
        "CY-ListCardHeader",
        classes.wrapper,
        {
            [classes.wrapper__clickable]: rest.onClick,
        }
    );
    return (
        <Element {...rest} className={wrapperClasses} whiteSpace="p2">
            {children}
        </Element>
    );
};
ListCardHeader.displayName = "ListCardHeader";

ListCardHeader.propTypes = {
    /**
     * Pass anything you want to render in ListCardHeader as children.
     *
     * Generally ListCardIdentity, ListCardSummary, and ListCardActions in this order for best results.
     */
    children: PropTypes.node,
};

export default injectSheet(styles)(ListCardHeader);
