import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";
import Button from "material-ui/Button";
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

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = (e, item) => {
        this.props.onItemTouchTap(e, item);
        this.setState({
            anchorEl: false,
        });
    };

    render() {
        const {
            anchorOrigin = {
                horizontal: "right",
                vertical: "bottom",
            },
            buttonLabel,
            ...rest
        } = this.props;
        return (
            <React.Fragment>
                <Button
                    {...rest}
                    className="CY-ButtonMenu-btn"
                    onClick={this.handleClick}
                > { buttonLabel }</Button>
                <Menu
                    className="CY-ButtonMenu-menu"
                    open={Boolean(this.state.anchorEl)}
                    onClose={ this.handleClose}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={anchorOrigin}
                >
                    {
                        React.Children.map( rest.children, child =>
                            React.cloneElement(child, {
                                onClick: this.handleClose
                            })
                        )
                    }
                </Menu>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ButtonMenu);
