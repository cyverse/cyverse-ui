import React from 'react';
import { styles } from './styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Checkbox } from 'material-ui';

export default React.createClass({
    render() {
       const muiTheme = getMuiTheme({
	  palette: {
	    primary1Color: this.props.color,
	  },
	}); 
        return (
            <MuiThemeProvider muiTheme={ muiTheme }>
                <Checkbox {...this.props } 
                    labelStyle={ this.styles().label }
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
