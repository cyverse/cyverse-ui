import React from "react";
import PropTypes from "prop-types";
import { createStyleSheet } from "jss-theme-reactor";
import getStyleManager from "./styles/getStyleManager";
import ToggleArrowIcon from "material-ui/svg-icons/hardware/keyboard-arrow-down";

import Element from "./Element";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () =>
    createStyleSheet("CollapsibleSummary", theme => ({
        wrapper: {
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "space-between"
        },
        ToggleArrowIcon__open: {
            transform: "rotate(180deg)"
        }
    }));
/**
 * CollapsibleSummary is used to build a Collapsible component. It is the summary or title of your content. Typically the user clicks or taps CollapsibleSummary to show or hide CollapsibleDetail.
 */
const CollapsibleSummary = ({
    isOpen,
    onToggleOpen,
    children,
    ...rest
}) => {
    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({}).render(styleSheet());

    return (
        <Element
            {...rest}
            onClick={onToggleOpen}
            className={classes.wrapper}
            display="flex"
            whiteSpace={{ p: 3 }}
            typography="body2"
        >
            {children}
            <ToggleArrowIcon
                className={
                    isOpen ? classes.ToggleArrowIcon__open : null
                }
                style={{ width: "30px", height: "30px" }}
            />
        </Element>
    );
};
CollapsibleSummary.displayName = "CollapsibleSummary";

CollapsibleSummary.propTypes = {
    /**
     * The summary or title. Can be any component or element you wish but works best as a string
     */
    children: PropTypes.node,
    /**
     * The callback you wish to toggle open close state.
     */
    onToggleOpen: PropTypes.func,
    /**
     * The open close state of your collapsible component. Controls the direction of the open close icon.
     */
    isOpen: PropTypes.bool
};

export default CollapsibleSummary;
