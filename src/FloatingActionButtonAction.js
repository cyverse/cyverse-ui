import React from "react";
import { withStyles } from "material-ui";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Button } from "material-ui";
import Tooltip from "./Tooltip";

// Each key of the returned object will be available as a className below.
const styles = theme => ({
    wrapper: {
        position: "relative",
        padding: "10px 0",
        transition: "transform ease .1s",
    },
    wrapper__closed: {
        transform: "scale(0)",
    },
});

const FloatingActionButtonAction = props => {
    const {
        classes,
        className,
        tooltipDirection,
        tooltip,
        isOpen,
        ...other
    } = props;

    const wrapperClasses = classnames(
        { [className]: className },
        "CY-FloatingActionButtonAction",
        classes.wrapper,
        { [classes.wrapper__closed]: !isOpen }
    );

    return (
        <li className={wrapperClasses}>
            <Tooltip
                className="CY-FloatingActionButtonAction-tooltip"
                direction={tooltipDirection}
                message={tooltip}
            >
                <Button
                    variant="fab"
                    className="CY-FloatingActionButtonAction-btn"
                    color="primary"
                    mini={true}
                    {...other}
                />
            </Tooltip>
        </li>
    );
};

FloatingActionButtonAction.displayName = "FloatingActionButtonAction";

FloatingActionButtonAction.propTypes = {
    /**
     * The icon shown in the action
     */
    icon: PropTypes.node,
    /**
     * The callback on click
     */
    onClick: PropTypes.func.isRequired,
    /**
     * The message shown in the tooltip
     */
    tooltip: PropTypes.string.isRequired,
    /**
     * the direction of the tooltip. Should be left if FAB is on the right and vise versa. Supports top and bottom shouldn't be used.
     */
    tooltipDirection: PropTypes.string,
};

FloatingActionButtonAction.defaultProps = {
    tooltip: "",
    tooltipDirection: "left",
    onClick: () => {},
};

export default withStyles(styles)(FloatingActionButtonAction)
