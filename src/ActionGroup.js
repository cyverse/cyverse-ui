import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import getStyleManager from "./styles/getStyleManager";

import Div from "./Div";

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
 * ActionGroup is used to...
 */
const ActionGroup = ({children, ...rest}) => {

    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({})
    .render(styleSheet());

    return(
        <Div
            { ...rest }
            flex
            className={ classes.wrapper }
        >
            { children }
        </Div>
    )
};
ActionGroup.displayName = "ActionGroup";

ActionGroup.propTypes = {
    /**
     * Expects...
     */
    children: PropTypes.node
};

export default ActionGroup
