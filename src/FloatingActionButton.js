import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "material-ui";
import classnames from "classnames";
import { Button } from "material-ui";
import ContentAdd from "@material-ui/icons/Add";
import Element from "./Element";

// Each key of the returned object will be available as a className below.
const styles = theme => ({
    wrapper: {
        position: "relative",
    },
    icon: {
        transition: "transform ease .1s",
    },
    icon__open: {
        transform: "rotate(45deg)",
    },
});

/**
* FloatingActionButton is an extention of the Material-ui FloatingActionButton. See their documentation for full API.

It should be used for creating content in place of a new button. It should be positioned absolutely or fixed in either the top or bottom right corners of the view port. In tropospher it is located half covering the bottom edge of the appbar.
 */
class FloatingActionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            showButton: false,
        };
    }

    onClick = () => {
        const { children } = this.props;
        const { isOpen } = this.state;

        if (children) {
            this.setState({
                isOpen: !isOpen,
            });
        }
    };

    render() {
        const {
            theme,
            classes,
            className,
            children,
            icon,
            onClick,
            backgroundColor,
            secondary,
            isOpen,
            ...rest
        } = this.props;
        // Define classes for wrapper
        const wrapperClasses = classnames(
            { [className]: className },
            "CY-FloatingActionButton",
            classes.wrapper
        );
        // Define classes for icon
        const iconClasses = classnames(
            "CY-FloatingActionButton-icon",
            classes.icon,
            {
                [classes.icon__open]: isOpen,
            }
        );

        // Define background color,
        // priority goes to secondary "accent color" prop,
        // else to backgroundColor prop,
        // defaults to primary color
        const { accent1Color, primary1Color } = theme.palette;
        const closedBackground = secondary
            ? accent1Color
            : backgroundColor || primary1Color;

        return (
            <Element {...rest} className={wrapperClasses}>
                <Button
                    {...rest}
                    variant="fab"
                    className="CY-FloatingActionButton-btn"
                    color={
                        isOpen ? "#585858" : "secondary"
                    }
                    onClick={onClick || this.onClick}
                >
                    {icon ? (
                        React.cloneElement(icon, {
                            className: iconClasses,
                        })
                    ) : (
                        <ContentAdd className={iconClasses} />
                    )}
                </Button>
                {children
                    ? React.cloneElement(children, {
                            isOpen: isOpen,
                        })
                    : null}
            </Element>
        );
    }
}

FloatingActionButton.displayName = "FloatingActionButton";

FloatingActionButton.propTypes = {
    /**
     * Optional Icon to show
     */
    icon: PropTypes.node,
    /**
     * Override the add icon with your own icon or other element
     */
    children: PropTypes.node,
    /**
     * The list of actions that show when FAB is clicked.
     *
     * For best results pass an array of MUI's `FloatingActionButton`s see FAB example.
     */
    actions: PropTypes.array,
};

export default withTheme()(withStyles(styles)(FloatingActionButton));
