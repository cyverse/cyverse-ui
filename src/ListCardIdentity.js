import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import getStyleManager from "./styles/getStyleManager";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () => (
    createStyleSheet('ListCardIdentity',
        theme => ({
            wrapper: {
                display: "flex",
                alignItems: "center",
                minWidth: "300px",
            }
        }
    ))
);
/**
 * ListCardIdentity is used to...
 */
const ListCardIdentity = ({ children, ...rest }) => {

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
ListCardIdentity.displayName = "ListCardIdentity";

ListCardIdentity.propTypes = {
    /**
     * Expects...
     */
    children: PropTypes.node
};

export default ListCardIdentity
