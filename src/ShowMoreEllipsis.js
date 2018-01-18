import React from "react";
import PropTypes from "prop-types";
import { hoverable } from "./utils";
import { marg } from "./styles";

/**
 * ShowMoreEllipsis is used to show he user that there is more content to see that has been hidden by the UI. Generally it is unnecessary to trigger any events with it as it is used on cards which expand when the user clicks anywhere inside.
 */
const ShowMoreEllipsis = props => {
    const {
        isHovered,
        onMouseEnter,
        onMouseLeave,
        onTouchTap,
    } = props;

    function handleClick() {
        if (onTouchTap) {
            onTouchTap();
        }
    }

    const styles = {
        ...marg({ mt: 2 }),
        cursor: "pointer",
        borderRadius: "3px",
        padding: "0 3px 12px",
        display: "inline-block",
        lineHeight: "0",
        verticalAlign: "middle",
        fontSize: "22px",
        background: "rgba(0,0,0,.1)",
        onHover: isHovered
            ? {
                  background: "rgba(0,0,0,.3)",
              }
            : {},
    };
    return (
        <span
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={handleClick}
            style={{
                ...styles,
                ...styles.onHover,
            }}
        >
            ...
        </span>
    );
};

ShowMoreEllipsis.displayName = "ShowMoreEllipsis";
ShowMoreEllipsis.propTypes = {
    /**
     *Callback when clicked or tapped
     */
    onTouchTap: PropTypes.func,
};

export default hoverable(ShowMoreEllipsis);
