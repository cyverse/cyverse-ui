import React from 'react';
import { styles, marg } from './styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiTextField from 'material-ui/TextField';

export default function TextField(props) {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: props.color,
      },
    }); 

    return (
        <MuiThemeProvider muiTheme={ muiTheme } >
            <MuiTextField { ...props }            
                ref={ props.passRef }
            />
        </MuiThemeProvider>
    );
}
