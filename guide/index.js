import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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

let newTheme = getMuiTheme(cyverseTheme);
const App = () => (
    <MuiThemeProvider muiTheme={ newTheme }>
        <StyleGuide/>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
