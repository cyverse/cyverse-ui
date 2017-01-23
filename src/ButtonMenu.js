import React from 'react';
import { styles, marg } from './styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';

import Button from './Button';

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
        const { color, buttonIcon, buttonLabel, children, isOpen, onItemTouchTap, onTouch } = this.props;
        const muiTheme = getMuiTheme({
	  palette: {
	    primary1Color: color,
	  },
	}); 

        let popover = null;

        // Popover seems to be flawed, w/o this isOpen test, it will sometimes
        // be open when isOpen is false and vice versa. Further investigation
        // required.
        if (this.state.anchorEl && isOpen) {
            popover = (
            <Popover
                open={isOpen}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                onRequestClose={ onTouch }>
                <Menu onItemTouchTap={ onItemTouchTap }>
                { children }
                </Menu>
            </Popover>
            );
        }
        return (
            <MuiThemeProvider muiTheme={ muiTheme } >
                <div>       
                    <Button
                        onTouch={this.handleTouchTap}
                        children={ buttonLabel }
                        icon={ buttonIcon }
                        color={ color }
                    />
                    { popover }
                </div>
            </MuiThemeProvider>
        )
    },

    styles() {
        return {
            label: { ...styles.t.label }
        }
    },
});
