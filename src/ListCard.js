import React from "react";
import PropTypes from "prop-types";
import { createStyleSheet } from "jss-theme-reactor";
import getStyleManager from "./styles/getStyleManager";
import { styles, pad, marg } from "./styles";
import Element from "./Element";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () =>
    createStyleSheet("ListCard", theme => {
        return {
            ListCard: {
                position: "relative",
                transition: "all ease .1s",
                background: "white",
                ...styles.boxShadow.li,
            },
            isExpanded: {
                margin: "40px -20px",
                borderLeft: "solid 5px #0971ab",
                ...styles.boxShadow.lg,
            },
        };
    });
/**
 * ListCard and it's corresponding child components are used for listing entities that require more information and actions than MUI's `ListItem`.
 *
 * ListCard components are primatives that requires manual control and structure but offer more flexibility as a result. See `MediaCard` for a higher level "automagic" solution or an example of what can be done.
 */
const ListCard = props => {
    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({}).render(styleSheet(props));

    const {
        white = {},
        isExpanded,
        className = "",
        style,
        ...rest
    } = props;

    const computedStyle = {
        ...pad(white),
        ...marg(white),
    };

    return (
        <Element
            {...rest}
            className={`${classes.ListCard} ${
                isExpanded ? classes.isExpanded : null
            } ${className}`}
            style={{ ...computedStyle, ...style }}
        >
            {props.children}
        </Element>
    );
};
ListCard.displayName = "ListCard";

ListCard.propTypes = {
    /**
     * Expects...
     */
    children: PropTypes.node,
};

export default ListCard;
