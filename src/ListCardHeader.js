import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import getStyleManager from "./styles/getStyleManager";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () => (
    createStyleSheet('ListCardHeader',
        theme => ({
            wrapper: {
                display: "flex",
                flexWrap: "nowrap",
                alignContent: "stretch",
                cursor: "pointer",
                padding: "10px",
                minHeight: "65px",
                alignItems: "center",
            }
        }
    ))
);
/**
 * ListCardHeader is used to...
 */
const ListCardHeader = ({children, ...rest}) => {

    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({})
    .render(styleSheet());

    return(
        <div
            { ...rest }
            className={ classes.wrapper }
        >
            { children }
        </div>
    )
};
ListCardHeader.displayName = "ListCardHeader";

ListCardHeader.propTypes = {
    /**
     * Expects...
     */
    children: PropTypes.node
};

export default ListCardHeader
