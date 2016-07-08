import React from 'react';
import { styles, marg } from './styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { RadioButton } from 'material-ui/RadioButton';

export default React.createClass({
    render() {
       const muiTheme = getMuiTheme({
	  palette: {
	    primary1Color: this.props.color,
	  },
	}); 
        return (
            <MuiThemeProvider muiTheme={ muiTheme } >
                <RadioButton { ...this.props } 
                />
            </MuiThemeProvider>
        )
    },

    styles() {
        return {
            label: { ...styles.t.label }
        }
    },
});
