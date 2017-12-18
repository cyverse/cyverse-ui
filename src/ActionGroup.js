import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import getStyleManager from "./styles/getStyleManager";

import Element from "./Element";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () => (
    createStyleSheet('ActionGroup',
        theme => ({
            wrapper: {
                display: "flex",
                alignItems: "center",
            }
        }
    ))
);
/**
 * Organize groups of IconButtons on list cards or in app bars.
 */
const ActionGroup = ({children, ...rest}) => {

    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({})
    .render(styleSheet());

    return(
        <Element
            { ...rest }
            display="flex"
            className={ classes.wrapper }
        >
            { children }
        </Element>
    )
};
ActionGroup.displayName = "ActionGroup";

ActionGroup.propTypes = {
    /**
     * Although one can pass any component or elements to be rendered as children, ActionGroup was designed for IconButtons or components like `VerticalMenu` that are made with IconButton.
     */
    children: PropTypes.node
};

export default ActionGroup
