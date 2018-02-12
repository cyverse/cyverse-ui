import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import classnames from "classnames";
import Element from "./Element";
import RaisedButton from "material-ui/RaisedButton";
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";

// Each key of the returned object will be available as a className below.
const styles = {
    wrapper: {
        display: "inline-block",
    },
};

/**
 * A ButtonMenu is a menu that can be displayed by pressing a RaisedButton. In Troposphere a ButtonMenu is used to with the label "New" and opens a list of things that can be created.

As a general rule menus should appear to the top right of the view so this component defaults to opening from the right and down but can be overridden using `anchorOrigin` and `targetOrigin`. See [Material-UI's Popover](http://www.material-ui.com/#/components/popover) for better documentation.
 */
class ButtonMenu extends React.Component {
    static displayName = "ButtonMenu";

    static propTypes = {
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
        /**
         * Icon to render in button.
         */
        buttonIcon: PropTypes.element,
        /**
         * Text on the button.
         */
        buttonLabel: PropTypes.string,
        /**
         * If true the button uses the primary theme color.
         */
        primary: PropTypes.bool,
        /**
         * If true the button uses the secondary theme color.
         */
        secondary: PropTypes.bool,
        /**
         * If true the button will be disabled.
         */
        disabled: PropTypes.bool,
        /**
         * This is the point on the anchor where the popover's targetOrigin will attach to. Options: vertical: [top, center, bottom] horizontal: [left, middle, right].
         */
        anchorOrigin: PropTypes.object,
        /**
         * This is the point on the popover which will attach to the anchor's origin. Options: vertical: [top, center, bottom] horizontal: [left, middle, right].
         */
        targetOrigin: PropTypes.object,
    };

    state = {
        open: false,
    };

    handleTouchTap = event => {
        // This prevents ghost click.
        event.preventDefault();
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    handleItemTouchTap = (e, item) => {
        this.props.onItemTouchTap(e, item);
        this.setState({
            open: false,
        });
    };

    render() {
        const {
            classes,
            className,
            buttonIcon,
            buttonLabel,
            children,
            primary,
            secondary,
            disabled,
            anchorOrigin = {
                horizontal: "right",
                vertical: "bottom",
            },
            targetOrigin = { horizontal: "right", vertical: "top" },
            ...rest
        } = this.props;
        const wrapperClasses = classnames(
            { [className]: className },
            "CY-ButtonMenu",
            classes.wrapper
        );
        return (
            <Element {...rest} className={wrapperClasses}>
                <RaisedButton
                    className="CY-ButtonMenu-btn"
                    onTouchTap={this.handleTouchTap}
                    label={buttonLabel}
                    icon={buttonIcon}
                    primary={primary}
                    secondary={secondary}
                    disabled={disabled}
                />
                <Popover
                    className="CY-ButtonMenu-popover"
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={anchorOrigin}
                    targetOrigin={targetOrigin}
                    onRequestClose={this.handleRequestClose}
                >
                    <Menu
                        className="CY-ButtonMenu-menu"
                        onItemTouchTap={this.handleItemTouchTap}
                    >
                        {children}
                    </Menu>
                </Popover>
            </Element>
        );
    }
}

export default injectSheet(styles)(ButtonMenu);
