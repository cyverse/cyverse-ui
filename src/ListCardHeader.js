import React from "react";
import PropTypes from "prop-types";
import { createStyleSheet } from "jss-theme-reactor";
import getStyleManager from "./styles/getStyleManager";
import Element from "./Element";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () =>
    createStyleSheet("ListCardHeader", theme => ({
        wrapper: {
            display: "flex",
            flexWrap: "nowrap",
            alignContent: "stretch",
            justifyContent: "space-between",
            minHeight: "65px",
            alignItems: "center",
        },
        clickable: {
            cursor: "pointer",
        },
    }));
/**
 * The ListCardHeader is the area the appears at the top of the ListCard and contains the ListCards identity and actions.
 *
 * If your ListCard is to be expandable the click handler for toggling state should be applied to ListCardHeader. For a more "automagic" solution to expanding ListCards or for an example of what's possible see `MediaCard`
 */
const ListCardHeader = ({ children, onClick, ...rest }) => {
    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({}).render(styleSheet());

    return (
        <Element
            {...rest}
            onClick={onClick}
            display="flex"
            whiteSpace={{ p: 2 }}
            className={`${classes.wrapper} ${
                onClick ? classes.clickable : null
            }`}
        >
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

export default ListCardHeader;
