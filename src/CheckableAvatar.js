import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import getStyleManager from "./styles/getStyleManager";
import Checkbox from 'material-ui/Checkbox';
import * as events from "./utils/events";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () => (
    createStyleSheet('CheckableAvatar',
        theme => ({
            wrapper: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "40px",
                minWidth: "40px",
                flexShrink: "0",
                position: "relative",
                alignSelf: "flex-start",
                borderRadius: "50%",
            }
        }
    ))
);
/**
 * A pattern for list items like MediaCards or ListCards with an Avatar is that they can be made selected by replacing the Avatar with a checkbox ussually on focus or on hover. Checkable Avatar is to make this easier to implement.
 *
 * CheckableAvatar is a controled component so the state needs to be managed. This is to allow more fine grained control.
 */
const CheckableAvatar = ({ isCheckable, image, onClick, ...rest }) => {

    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({})
    .render(styleSheet());

    function handleRootClick(e) {
        events.stopPropagation(e);
        onClick ? onClick(e): null;
    }

    return(
        <div
            onClick={ handleRootClick }
            className={ classes.wrapper }>
            { isCheckable ? (
            <Checkbox
                {...rest }
                style={{ margin: "auto", width: "60%" }}
            /> ) : image }
        </div>
    )
};

CheckableAvatar.displayName = "CheckableAvatar";

CheckableAvatar.propTypes = {
    /**
     * Expects...
     */
    children: PropTypes.node
};

export default CheckableAvatar
