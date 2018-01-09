import React from "react";
import PropTypes from "prop-types";
import { createStyleSheet } from "jss-theme-reactor";
import getStyleManager from "./styles/getStyleManager";
import Element from "./Element";
import Hr from "./Hr";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () =>
    createStyleSheet("CollapsibleDetail", theme => ({
        wrapper: {}
    }));
/**
 * CollapsibleDetail is used to build a collapsible component. It is the body or detail of your content. Typically the user clicks or taps CollapsibleSummary to show or hide CollapsibleDetail.
 */
const CollapsibleDetail = ({ children, isOpen, ...rest }) => {
    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({}).render(styleSheet());

    return (
        <Element {...rest} hide={!isOpen}>
            <Hr m={0} />
            <Element
                className={classes.wrapper}
                whiteSpace={{ p: 3 }}
            >
                {children}
            </Element>
        </Element>
    );
};
CollapsibleDetail.displayName = "CollapsibleDetail";

CollapsibleDetail.propTypes = {
    /**
     * The content to show in the body. Can be any component or element you wish.
     */
    children: PropTypes.node,
    /**
     * The open close state of your collapsible component. Controls whether the detail is hidden or not.
     */
    isOpen: PropTypes.bool
};

export default CollapsibleDetail;
