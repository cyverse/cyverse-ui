import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import getStyleManager from "./styles/getStyleManager";
import Element from "./Element";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () => (
    createStyleSheet('SummaryText',
        theme => ({
            wrapper: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "500px"
            }
        }
    ))
);
/**
 * SummaryText is used to...
 */
const SummaryText = ({
    children,
    ...rest
}) => {

    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({})
    .render(styleSheet());

    return(
        <Element {...rest }
            tag="p"
            typography="body1"
            className={ classes.wrapper }
        >
            { children }
        </Element>
    )
};
SummaryText.displayName = "SummaryText";

SummaryText.propTypes = {
    /**
     * Expects...
     */
    children: PropTypes.node
};

export default SummaryText
