import React from 'react';
import Div from './Div';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';

/**
 * A ButtonMenu is a menu that can be displayed by pressing a RaisedButton. In Troposphere a ButtonMenu is used to with the label "New" and opens a list of things that can be created.

As a general rule menus should appear to the top right of the view so this component defaults to opening from the right and down but can be overridden using `anchorOrigin` and `targetOrigin`. See [Material-UI's Popover](http://www.material-ui.com/#/components/popover) for better documentation.
 */
export default React.createClass({

    displayName: "ButtonMenu",
    propTypes: {
        /**
         * Override the inline-styles of the root element.
         */
        style: React.PropTypes.object,
        /**
         * Icon to render in button.
         */
        buttonIcon: React.PropTypes.element,
        /**
         * Text on the button.
         */
        buttonLabel: React.PropTypes.string,
        /**
         * If true the button uses the primary theme color.
         */
        primary: React.PropTypes.bool,
        /**
         * If true the button uses the secondary theme color.
         */
        secondary: React.PropTypes.bool,
        /**
         * If true the button will be disabled.
         */
        disabled: React.PropTypes.bool,
        /**
         * This is the point on the anchor where the popover's targetOrigin will attach to. Options: vertical: [top, center, bottom] horizontal: [left, middle, right].
         */
        anchorOrigin: React.PropTypes.object,
        /**
         * This is the point on the popover which will attach to the anchor's origin. Options: vertical: [top, center, bottom] horizontal: [left, middle, right].
         */
        targetOrigin: React.PropTypes.object,
    },

    getInitialState() {
        return {
            open: false,
        };
    },

    handleTouchTap(event) {
        // This prevents ghost click.
        event.preventDefault();
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    },

    handleRequestClose() {
        this.setState({
            open: false,
        });
    },

    handleItemTouchTap(e, item) {
        this.props.onItemTouchTap(e, item);
        this.setState({
            open: false,
        });
    },

    render() {
        const {
            style,
            buttonIcon,
            buttonLabel,
            children,
            primary,
            secondary,
            disabled,
            anchorOrigin = {horizontal: 'right', vertical: 'bottom'},
            targetOrigin = {horizontal: 'right', vertical: 'top'},
        } = this.props;

        return (
            <Div
                style={{
                    ...style,
                    display: "inline-block"
                }}
                id={ this.props.id }
            >
                <RaisedButton
                    onTouchTap={ this.handleTouchTap }
                    label={ buttonLabel }
                    icon={ buttonIcon }
                    primary={ primary }
                    secondary={ secondary }
                    disabled={ disabled }
                />
                <Popover
                    open={ this.state.open }
                    anchorEl={ this.state.anchorEl }
                    anchorOrigin={ anchorOrigin }
                    targetOrigin={ targetOrigin }
                    onRequestClose={ this.handleRequestClose }
                >
                    <Menu
                        onItemTouchTap={ this.handleItemTouchTap }
                    >
                        { children }
                    </Menu>
                </Popover>
            </Div>
        )
    },
});
