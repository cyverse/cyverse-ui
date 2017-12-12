import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import getStyleManager from "./styles/getStyleManager";
import Element from "./Element";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () => (
    createStyleSheet('ListCardHeader',
        theme => ({
            wrapper: {
                display: "flex",
                flexWrap: "nowrap",
                alignContent: "stretch",
                minHeight: "65px",
                alignItems: "center",
            },
            clickable: {
                cursor: "pointer",
            }
        }
    ))
);
/**
 * ListCardHeader is used to...
 */
const ListCardHeader = ({children, onClick, ...rest}) => {

    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({})
    .render(styleSheet());

    return(
        <Element
            { ...rest }
            onClick={onClick}
            whiteSpace={{ p:2 }}
            className={ `${classes.wrapper} ${ onClick ? classes.clickable : null}` }
        >
            { children }
        </Element>
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
