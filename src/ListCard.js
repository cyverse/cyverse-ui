import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classnames from "classnames";
import Element from "./Element";

// Each key of the returned object will be available as a className below.
const styles = theme => {
    return {
        wrapper: {
            position: "relative",
            transition: "all ease .1s",
            background: "white",
            ...theme.elevation.elevation2,
        },
        wrapper__isExpanded: {
            margin: "32px -16px",
            ...theme.elevation.elevation6,
        },
    };
};

/**
 * ListCard and it's corresponding child components are used for listing entities that require more information and actions than MUI's `ListItem`.
 *
 * ListCard components are primatives that requires manual control and structure but offer more flexibility as a result. See `MediaCard` for a higher level "automagic" solution or an example of what can be done.
 */
const ListCard = props => {
    const { classes, className, isExpanded, ...rest } = props;

    const ListCardClasses = classnames(
        { [className]: className },
        "CY-ListCard",
        classes.wrapper,
        { [classes.wrapper__isExpanded]: isExpanded }
    );

    return (
        <Element {...rest} className={ListCardClasses}>
            {props.children}
        </Element>
    );
};
ListCard.displayName = "ListCard";

ListCard.propTypes = {
    /**
     * Expects...
     */
    children: PropTypes.node,
};

export default withStyles(styles)(ListCard);
