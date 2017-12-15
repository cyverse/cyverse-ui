import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import getStyleManager from "./styles/getStyleManager";
import Element from "./Element";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () => (
    createStyleSheet('ListCardIdentity',
        theme => ({
            wrapper: {
                alignItems: "center",
                minWidth: "300px",
            }
        }
    ))
);
/**
 * ListCardIdentity is the space on the left side within ListCardHeader that contains the ListCard's identity.
 */
const ListCardIdentity = ({ children, ...rest }) => {

    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({})
    .render(styleSheet());

    return (
        <Element
            { ...rest }
            display="flex"
            className={ classes.wrapper }
        >
            { children }
        </Element>
    )
};
ListCardIdentity.displayName = "ListCardIdentity";

ListCardIdentity.propTypes = {
    /**
     * Pass anything you want to render within ListCardIdentity as children.
     *
     * For best results use Identity
     */
    children: PropTypes.node
};

export default ListCardIdentity
