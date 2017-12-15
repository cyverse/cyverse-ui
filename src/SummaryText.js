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
 * SummaryText is used to limit text to a single line and available width. Typically used to preview a large block of text that can be shown by clicking `ShowMoreEllipsis` or a collapsed `MediaCard`.
 *
 * For another use case of SummaryText see 'MediaCard`
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
            className={ classes.wrapper }
        >
            { children }
        </Element>
    )
};
SummaryText.displayName = "SummaryText";

SummaryText.propTypes = {
    /**
     * Any length string will be shortened to fit the available width on a single line.
     */
    children: PropTypes.string
};

export default SummaryText
