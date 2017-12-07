import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import getStyleManager from "./styles/getStyleManager";

import Div from "./Div";
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
 * ListCardDetail is used to...
 */
const ListCardDetail = ({children, ...rest}) => {

    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({})
    .render(styleSheet());

    return(
        <Div { ...rest }>
            <Hr style={{ margin: "0 0 20px"}}/>
            <div className={ classes.content }>
                { children }
            </div>
        </Div>
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
