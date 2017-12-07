import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import getStyleManager from "./styles/getStyleManager";
import { styles, pad, marg } from "./styles";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () => (
    createStyleSheet('ListCard',
        theme => {
            return {
                ListCard: {
                    position: "relative",
                    transition: "all ease .1s",
                    background: "white",
                    ...styles.boxShadow.li,
                },
                isExpanded: {
                    margin: "40px -20px",
                    borderLeft: "solid 5px #0971ab",
                    ...styles.boxShadow.lg,
                }
            }
        }
    )
);
/**
 * ListCard is used to...
 */
const ListCard = props => {

    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({})
    .render(styleSheet(props));

    const { white = {}, isExpanded } = props

    const computedStyle = {
        ...pad(white),
        ...marg(white),
    }

    return(
        <div className={ `${classes.ListCard} ${isExpanded ? classes.isExpanded : null}` } style={ computedStyle }>
            { props.children }
        </div>
    )
};
ListCard.displayName = "ListCard";

ListCard.propTypes = {
    /**
     * Expects...
     */
    children: PropTypes.node
};

export default ListCard
