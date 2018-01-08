import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import getStyleManager from "./styles/getStyleManager";
import Checkbox from 'material-ui/Checkbox';

import Element from "./Element";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () => (
    createStyleSheet('CheckableAvatar',
        theme => ({
            Avatar: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "40px",
                minWidth: "40px",
                flexShrink: "0",
                position: "relative",
                alignSelf: "flex-start",
                borderRadius: "50%",
                cursor: "pointer",
            }
        }
    ))
);
/**
 * A pattern for list items like MediaCards or ListCards with an Avatar is that they can be made selectable by replacing the Avatar with a checkbox ussually on focus or on hover. Checkable Avatar is to make this easier to implement.
 *
 * CheckableAvatar is a controlled component so the state needs to be managed. This is to allow more fine grained control.
 */
const CheckableAvatar = ({ isCheckable, children, onClick, ...rest }) => {

    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({})
    .render(styleSheet());

    function handleRootClick(e) {
        onClick ? onClick(e): null;
    }

    return(
        <Element { ...rest }
            display="inline-block"
        >
            <Element
                tag="span"
                display="flex"
                stopPropagation
                onClick={ handleRootClick }
                className={ classes.Avatar }
            >
                { isCheckable ? (
                <Checkbox
                    {...rest }
                    style={{ margin: "auto", width: "60%" }}
                /> ) : children }
            </Element>
        </Element>
    )
};

CheckableAvatar.displayName = "CheckableAvatar";

CheckableAvatar.propTypes = {
    /**
     * Works best with Avatar but can be passed any component or element. For example: an image tag, icon, or third party avatar.
     */
    image: PropTypes.node
};

export default CheckableAvatar
