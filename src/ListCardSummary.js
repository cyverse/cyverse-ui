import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import getStyleManager from "./styles/getStyleManager";
import styles from "./styles/styles";
import Div from "./Div"

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () => (
    createStyleSheet('ListCardSummary',
        theme => ({
            wrapper: {
                width: "100%",
                marginRight: "60px",
                opacity: "1",
                ...styles.t.body1,
            }
        }
    ))
);
/**
 * ListCardSummary is used to...
 */
const ListCardSummary = ({children, ...rest}) => {

    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({})
    .render(styleSheet());

    return(
        <Div
            { ...rest }
            className={ classes.wrapper }
        >
            { children }
        </Div>
    )
};
ListCardSummary.displayName = "ListCardSummary";

ListCardSummary.propTypes = {
    /**
     * Expects...
     */
    children: PropTypes.node
};

export default ListCardSummary
