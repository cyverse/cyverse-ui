import React from "react";
import PropTypes from "prop-types";
import { createStyleSheet } from "jss-theme-reactor";
import getStyleManager from "./styles/getStyleManager";
import styles from "./styles/styles";
import Element from "./Element";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () =>
    createStyleSheet("ListCardSummary", theme => ({
        wrapper: {
            width: "0%",
            marginRight: "20px",
            flex: "1",
            ...styles.t.body1,
        },
    }));
/**
 * ListCardSummary is the area in ListCardHeader between ListCardIdentity and ListCardActions. Used to display a short summary or overview information at a birds eye view. Works well with SummaryText for truncating / previewing large blocks of text into a single line. For to display more information make the card expandable and render the additional information in ListCardDetail.
 *
 * For a more "automagic" solution or to see an example of how ListCardSummary and ListCardDetail work together on expandable cards see `MediaCard`.
 */
const ListCardSummary = ({ children, ...rest }) => {
    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({}).render(styleSheet());

    return (
        <Element {...rest} className={classes.wrapper}>
            {children}
        </Element>
    );
};

ListCardSummary.displayName = "ListCardSummary";

ListCardSummary.propTypes = {
    /**
     * Pass anything you want to render within ListCardSummary as children.
     *
     * If a text summary is desired `SummaryText` is recommended.
     */
    children: PropTypes.node,
};

export default ListCardSummary;
