import React, { Component } from "react";
import PropTypes from "prop-types";
import injectSheet, { withTheme } from "react-jss";
import classnames from "classnames";
import { FloatingActionButton as MuiFloatingActionButton } from "material-ui";
import { ContentAdd } from "material-ui/svg-icons";

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
            style,
            ...rest
        } = this.props;
        // Define classes for wrapper
        const wrapperClasses = classnames(
            { [className]: className },
            "FloatingActionButton",
            classes.wrapper
        );
        // Define classes for icon
        const iconClasses = classnames(
            "FloatingActionButton-icon",
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
            <div style={style}>
                <div className={wrapperClasses}>
                    <MuiFloatingActionButton
                        {...rest}
                        className="FloatingActionButton-btn"
                        backgroundColor={
                            isOpen ? "#585858" : closedBackground
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
                    </MuiFloatingActionButton>
                    {children
                        ? React.cloneElement(children, {
                              isOpen: isOpen,
                          })
                        : null}
                </div>
            </div>
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

export default withTheme(injectSheet(styles)(FloatingActionButton));
