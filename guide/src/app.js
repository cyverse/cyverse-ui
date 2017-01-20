import ReactDOM from "react-dom";
import React from 'react';
import StyleGuide from './StyleGuide.js';

// These two lines are necessary to interop with material-ui. It's supposed to
// be temporary. When the installation no longer mentions it, I suppose these
// can be removed.
// http://www.material-ui.com/#/get-started/installation
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    <StyleGuide/>,
    document.getElementById('app')
);
