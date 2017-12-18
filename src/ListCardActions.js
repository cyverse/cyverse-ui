import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import getStyleManager from "./styles/getStyleManager";
import Element from "./Element";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () => (
    createStyleSheet('ListCardActions',
        theme => ({
            wrapper: {
            },
        }
    ))
);
/**
 * ListCardActions is the area on ListCard on the right where actions live.
 */
const ListCardActions = ({children, ...rest}) => {

    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({})
    .render(styleSheet());

    return(
        <Element
            { ...rest }
            display="flex"
            stopPropagation
            className={ classes.wrapper }
        >
            {children}
        </Element>
    )
};
ListCardActions.displayName = "ListCardActions";

ListCardActions.propTypes = {
    /**
     * Pass anything you want to render within ListCardActions as children.
     *
     * For best results use `ActionGroup` with `IconButtons`.
     */
    children: PropTypes.node
};

export default ListCardActions
