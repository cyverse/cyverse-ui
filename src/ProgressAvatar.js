import React from "react";
import PropTypes from "prop-types";
import injectSheet, { withTheme } from "react-jss";
import classnames from "classnames";
import { Avatar, CircularProgress } from "material-ui";
import Element from "./Element";

const styles = theme => ({
    wrapper: {
        position: "relative",
        "& *": {
            transition: "stroke-dashoffset ease .5s",
        },
    },
    progress: {
        position: "absolute",
        top: "0px",
        left: "0px",
    },
    progress__complete: {
        opacity: 0,
    },
    avatar__inProgress: {
        opacity: 0.3,
    },
});

/**
 * ProgressAvatar can be used in place of MUI's Avatar as a clear way to inform the user that a process is taking place on that item as well as what percentage of that process is finished without taking up valuable real estate and leveraging Avatar being a visual anchor for the item.
 */
const ProgressAvatar = ({
    classes,
    avatarClassName,
    children,
    className,
    progressColor,
    backgroundColor,
    src,
    icon,
    size,
    thickness,
    percent,
    name,
    theme,
    ...rest
}) => {
    const isInProgress = percent < 100;
    const wrapperClasses = classnames(
        { [className]: className },
        "CY-ProgressAvatar",
        classes.wrapper
    );
    const avatarClasses = classnames("CY-ProgressAvatar-avatar", {
        avatarClassName: avatarClassName,
        [classes.avatar__inProgress]: isInProgress,
    });
    const progressClasses = classnames(
        "CY-ProgressAvatar-progress",
        classes.progress,
        { [classes.progress__complete]: !isInProgress }
    );

    let { success = "green" } = theme.palette;
    let padding = 0;
    let avatarSize = size;
    let value = 0;
    let avatarColor = backgroundColor;

    if (isInProgress) {
        value = percent;
        avatarColor = "lightgrey";
        avatarSize = size - thickness * 2;
        padding = thickness;
    }

    return (
        <Element
            {...rest}
            className={wrapperClasses}
            display="inline-block"
            style={{
                padding,
            }}
        >
            <Avatar
                className={avatarClasses}
                name={name}
                src={src}
                style={{ background: avatarColor, width: avatarSize, height: avatarSize }}
            >
                {children}
            </Avatar>
            <div className={progressClasses}>
                <CircularProgress
                    className={progressClasses}
                    variant="static"
                    value={value}
                    size={size}
                    thickness={thickness}
                    style={{ color: success }}
                />
            </div>
        </Element>
    );
};

ProgressAvatar.displayName = "ProgressAvatar";

ProgressAvatar.propTypes = {
    /**
     * Optionally use an image source.
     */
    src: PropTypes.string,
    /**
     * Optionally use an Icon, expects MUI or CY-UI Icons.
     */
    icon: PropTypes.element,
    /**
     * The diameter of the Avatar.
     */
    size: PropTypes.number,
    /**
     * The thickness of the progress bar.
     */
    thickness: PropTypes.number,
    /**
     * The percentage of progress.
     */
    percent: PropTypes.number,
};

ProgressAvatar.defaultProps = {
    size: 40,
    thickness: 3,
};

export default withTheme(injectSheet(styles)(ProgressAvatar));
