import React from 'react';
import { styles, marg } from './styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SelectField from 'material-ui/SelectField';

export default React.createClass({
    render() {
        const muiTheme = getMuiTheme({
            palette: {
                primary1Color: this.props.color,
	    },
	}); 

        return (
            <MuiThemeProvider muiTheme={ muiTheme }>
                <SelectField { ...this.props }
                    onChange={ this.props.onClick }
                >
                    { this.props.children }
                </SelectField>
            </MuiThemeProvider>
        );
    }
});
