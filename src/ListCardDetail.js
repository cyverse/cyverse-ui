import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import getStyleManager from "./styles/getStyleManager";

import Element from "./Element";
import Hr from "./Hr";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () => (
    createStyleSheet('ListCardDetail',
        theme => ({
            content: {
                padding: "0 20px 20px"
            }
        }
    ))
);
/**
 * ListCardDetail is the area below ListCardHeader where the details on the ListCard lives.
 *
 * Typically the details are only shown on an "expanded" ListCard while at the same time hiding ListCardSummary. This is done by manually controlling these components by setting the `hide` prop to `true`.
 *
 * ListCardDetail is a primative component that needs to be controled but is more flexible. For a more "automagic" solution see `MediaCard`.
 */
const ListCardDetail = ({children, ...rest}) => {

    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({})
    .render(styleSheet());

    return(
        <Element { ...rest }>
            <Hr style={{ margin: "0 0 20px"}}/>
            <div className={ classes.content }>
                { children }
            </div>
        </Element>
    )
};
ListCardDetail.displayName = "ListCardDetail";

ListCardDetail.propTypes = {
    /**
     * Expects...
     */
    children: PropTypes.node
};

export default ListCardDetail
