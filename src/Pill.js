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
    },
});

/**
 * A Pill is used to indicate meta data like number of active users or if an item is featured or recommended. It is sort of like a badge but smaller to fit under a title or in the footer of a card.
 */
const Pill = ({
    classes,
    theme,
    className,
    children,
    themeColor,
    color,
    icon,
    ...rest
}) => {
    const { palette: { textColor } } = theme;
    const iconColor = theme.palette[color] || color;
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
        "CY-Pill-pillBody",
        classes.pillBody
    );
    const pillIconClasses = classnames("CY-Pill-icon", classes.icon);
    return (
        <Element {...rest} root="span" className={wrapperClasses}>
            <span className={innerWrapperClasses}>
                <Element
                    root="span"
                    style={{ background: iconColor || textColor}}
                    className={pillBodyClasses}
                >
                    {children}
                </Element>
                <span className={pillIconClasses}>
                    {icon
                        ? React.cloneElement(icon, {
                              color: iconColor,
                          })
                        : null}
                </span>
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
