import React from "react";
import PropTypes from "prop-types";
import injectSheet, { withTheme } from "react-jss";
import classnames from "classnames";
import Element from "./Element";

const styles = theme => ({
    wrapper: {
        display: "inline-block",
        ...theme.whitespace.mr2,
    },
    innerWrapper: {
        display: "flex",
        alignItems: "center",
    },
    pillBody: {
        background: theme.palette.text.primary,
        display: "inline-block",
        verticalAlign: "middle",
        padding: "4px",
        lineHeight: "74%",
        fontSize: "12px",
        borderRadius: "9999px",
        color: "white",
    },
    icon: {
        height: "24px",
        color: theme.palette.text.primary,
    },
    pillPrimary: {
        background: theme.palette.primary.main,
    },
    iconPrimary: {
        color: theme.palette.primary.main,
    },
    pillSecondary: {
        color: theme.palette.secondary.main,
    },
    iconSecondary: {
        color: theme.palette.secondary.main,
    },
});

/**
 * A Pill is used to indicate meta data like number of active users or if an item is featured or recommended. It is sort of like a badge but smaller to fit under a title or in the footer of a card.
 */
const Pill = ({
    classes,
    theme,
    className,
    pillClassName,
    iconClassName,
    children,
    themeColor,
    color,
    icon,
    ...rest
}) => {
    const wrapperClasses = classnames(
        { [className]: className },
        "CY-Pill",
        classes.wrapper
    );
    const innerWrapperClasses = classnames(
        "CY-Pill-innerWrapper",
        classes.innerWrapper
    );
    const pillBodyClasses = classnames(
        {
            [pillClassName]: pillClassName,
            [classes.pillPrimary]: color === "primary",
            [classes.pillSecondary]: color === "secondary",
        },

        "CY-Pill-pillBody",
        classes.pillBody
    );
    const pillIconClasses = classnames(
        {
            [iconClassName]: iconClassName,
            [classes.iconPrimary]: color === "primary",
            [classes.iconSecondary]: color === "secondary",
        },
        "CY-Pill-icon",
        classes.icon
    );
    return (
        <Element {...rest} root="span" className={wrapperClasses}>
            <span className={innerWrapperClasses}>
                <Element root="span" className={pillBodyClasses}>
                    {children}
                </Element>
                {icon ? (
                    <span className={pillIconClasses}>{icon}</span>
                ) : null}
            </span>
        </Element>
    );
};

Pill.displayName = "Pill";

Pill.propTypes = {
    /**
     *The background color.
     */
    color: PropTypes.string,
    /**
     *Displays an Icon, expects MUI or CY-UI icons.
     */
    icon: PropTypes.element,
    /**
     *The text that is displayed, can optionally pass an icon here and style if not MUI or CY-UI.
     */
    children: PropTypes.node,
};

export default withTheme(injectSheet(styles)(Pill));
