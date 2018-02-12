import React from "react";
import PropTypes from "prop-types";
import injectSheet, { withTheme } from "react-jss";
import classnames from "classnames";
import * as colors from "material-ui/styles/colors";
import Element from "./Element";

const tooltipDirection = (direction, classes) => {
    const {
        message__top: top,
        message__right: right,
        message__bottom: bottom,
        message__left: left,
    } = classes;
    switch (direction) {
        case "top":
            return top;
        case "right":
            return right;
        case "bottom":
            return bottom;
        case "left":
            return left;
        default:
            return top;
    }
};

// Each key of the returned object will be available as a className below.
const styles = theme => {
    const messageOffset = "calc(100% + 8px)";
    return {
        wrapper: {
            display: "inline-block",
        },
        innerWrapper: {
            position: "relative",
            display: "flex",
            alignItems: "start",
        },
        message: {
            zIndex: "9999",
            display: "block",
            padding: "5px",
            background: colors.grey900,
            borderRadius: "2px",
            color: "white",
            fontSize: "12px",
            textAlign: "center",
            whiteSpace: "nowrap",
            position: "absolute",
            alignSelf: "center",
            transition: "opacity ease .2s, transform ease .2s",
        },
        message__long: {
            whiteSpace: "normal",
            minWidth: "250px",
        },
        message__hide: {
            opacity: 0,
            transform: "scale(0)",
        },
        message__show: {
            opacity: 1,
            tranform: "scale(1)",
        },
        message__top: {
            transformOrigin: "0% 100%",
            bottom: messageOffset,
        },
        message__right: {
            transformOrigin: "0% 50%",
            left: messageOffset,
        },
        message__bottom: {
            transformOrigin: "0% -100%",
            top: messageOffset,
        },
        message__left: {
            transformOrigin: "100% 50%",
            right: messageOffset,
        },
    };
};

/**
 * A Tooltip is used to show on demand information about an element, usually an action. Is initially hidden to keep the UI clean but can be shown by hovering over the element in question.
 */
class Tooltip extends React.Component {
    static propTypes = {
        /**
         * Text that shows on tooltip
         */
        message: PropTypes.string.isRequired,
        /**
         * The direction of the element Tooltip will open from. Expects one of: "right", "bottom", "left", "top".
         */
        direction: PropTypes.string,
        /**
         * The element that shows Tooltip on hover and anchors the toopltip's direction
         */
        children: PropTypes.node.isRequired,
    };

    static defaultProps = {
        direction: "top",
    };

    static displayName = "Tooltip";

    state = {
        showTooltip: false,
    };

    showTooltip = () => {
        if (this.props.message) {
            this.setState({
                showTooltip: true,
            });
        }
    };

    hideTooltip = () => {
        this.setState({
            showTooltip: false,
        });
    };

    onMouseEnter = () => {
        if (!this.props.isDisabled) {
            this.showTooltip();
        }
    };

    onMouseLeave = () => {
        this.hideTooltip();
    };

    onTouch = () => {
        this.props.onTouch();
        setTimeout(() => this.hideTooltip(), 2000);
    };

    render() {
        const {
            classes,
            className,
            message,
            direction,
            ...rest
        } = this.props;
        const { showTooltip } = this.state;

        const wrapperClasses = classnames(
            { [className]: className },
            "CY-Tooltip",
            classes.wrapper
        );

        const innerWrapperClasses = classnames(
            "CY-Tooltip-innerWrapper",
            classes.innerWrapper
        );

        const messageClasses = classnames(
            "CY-Tooltip-message",
            classes.message,
            { [classes.message__show]: showTooltip },
            { [classes.message__hide]: !showTooltip },
            { [classes.message__long]: message.length > 40 },
            tooltipDirection(direction, classes)
        );

        return (
            <Element {...rest} className={wrapperClasses}>
                <span
                    className={innerWrapperClasses}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                >
                    {this.props.children}
                    <span className={messageClasses}>
                        <div>{message}</div>
                    </span>
                </span>
            </Element>
        );
    }
}

export default withTheme(injectSheet(styles)(Tooltip));
