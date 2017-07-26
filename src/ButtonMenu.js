import React from 'react';
import Div from './Div';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';

export default React.createClass({

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
