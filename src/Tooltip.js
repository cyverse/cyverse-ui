import React from "react";
import PropTypes from "prop-types";
import * as colors from "material-ui/styles/colors";

/**
 * A Tooltip is used to show on demand information about an element, usually an action. Is initially hidden to keep the UI clean but can be shown by hovering over the element in question.
 */
export default class extends React.Component {
    static propTypes = {
        /**
         * Text that shows on tooltip
         */
        message: PropTypes.string.isRequired,
        /**
         * The direction of the element Tooltip will open from. Expects one of: "right", "bottom", "left", "top".
         */
        direction: PropTypes.oneOf([
            "right",
            "left",
            "top",
            "bottom",
        ]),
        /**
         * The element that shows Tooltip on hover and anchors the toopltip's direction
         */
        children: PropTypes.node.isRequired,
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

    directionStyle = () => {
        let direction = this.props.direction;
        const offset = "calc(100% + 10px)";
        switch (direction) {
            case "top":
                return {
                    transformOrigin: "0% 100%",
                    bottom: offset,
                };
            case "right":
                return {
                    transformOrigin: "0% 50%",
                    left: offset,
                };
            case "bottom":
                return {
                    transformOrigin: "0% 0%",
                    top: offset,
                };
            case "left":
                return {
                    transformOrigin: "100% 50%",
                    right: offset,
                };
            default:
                return {
                    transformOrigin: "0 100%",
                    bottom: offset,
                };
        }
    };

    style = () => {
        const { showTooltip } = this.state;
        const x = showTooltip ? 1 : 0;
        return {
            content: {
                ...this.directionStyle(),
                zIndex: "9999",
                display: "block",
                padding: "5px",
                background: colors.grey900,
                borderRadius: "2px",
                color: "white",
                fontSize: "10px",
                textAlign: "center",
                whiteSpace: "nowrap",
                position: "absolute",
                alignSelf: "center",
                opacity: x,
                transform: `scale(${x})`,
                transition: "opacity ease .2s, transform ease .2s",
            },
        };
    };

    render() {
        return (
            <span
                style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "start",
                    ...this.props.style,
                }}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                {this.props.children}
                <span style={this.style().content}>
                    <div>{this.props.message}</div>
                </span>
            </span>
        );
    }
}
