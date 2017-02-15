import React from 'react';
import { styles, marg } from './styles';
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
        this.props.onTouch();
        this.setState({
            anchorEl: event.currentTarget,
        });
    },

    render() {
        const { 
            color,
            buttonIcon,
            buttonLabel,
            children,
            isOpen,
            onItemTouchTap
        } = this.props;

        return (
                <div id={ this.props.id }>       
                    <RaisedButton
                        onTouchTap={this.handleTouchTap}
                        children={ buttonLabel }
                        icon={ buttonIcon }
                        primary={ this.props.primary }
                        secondary={ this.props.secondary }
                        disabled={ this.props.disabled }
                    />
                    <Popover
                        open={isOpen}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        onRequestClosed={ onTouch }
                    >
                        <Menu
                            onItemTouchTap={ onItemTouchTap }
                        >
                            { children }
                        </Menu>
                    </Popover>
                </div>
        )
    },
});
