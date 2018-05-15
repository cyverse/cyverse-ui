import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/github.css";
import "./assets/css/base.css"
import CssBaseline from 'material-ui/CssBaseline';
import 'typeface-roboto'

import { MuiThemeProvider, createMuiTheme}  from 'material-ui/styles/';

// These two lines are necessary to interop with material-ui. It's supposed to
// be temporary. When the installation no longer mentions it, I suppose these
// can be removed.
// http://www.material-ui.com/#/get-started/installation
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { setup } from './setup';

import cyverseTheme from 'cyverse-ui/styles/cyverseTheme';
import StyleGuide from './src/StyleGuide.js';

setup();

let newTheme = createMuiTheme(cyverseTheme);
console.log(cyverseTheme, newTheme)
const App = () => (
    <MuiThemeProvider theme={ newTheme }>
        <CssBaseline/>
       <StyleGuide/>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
