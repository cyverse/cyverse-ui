import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import getStyleManager from "./styles/getStyleManager";
import Checkbox from 'material-ui/Checkbox'

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
 * CheckableAvatar is used to...
 */
const CheckableAvatar = ({ isCheckable, image, ...rest }) => {

    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({})
    .render(styleSheet());

    return(
        <div className={ classes.wrapper }>
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
