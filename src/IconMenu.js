import React from 'react';
import { styles, marg } from './styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconMenu from 'material-ui/IconMenu';

export default React.createClass({
    render() {
        const muiTheme = getMuiTheme({
            palette: {
                primary1Color: this.props.color,
	    },
	}); 
        return (
            <MuiThemeProvider muiTheme={ muiTheme } >
                <IconMenu { ...this.props } />
            </MuiThemeProvider>
        )
    }
})
