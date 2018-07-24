import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/github.css";
import "./assets/css/base.css";
import CssBaseline from "material-ui/CssBaseline";
import "typeface-roboto";
import {
    MuiThemeProvider,
    createMuiTheme,
} from "material-ui/styles/";
import cyverseTheme from "cyverse-ui/styles/cyverseTheme";
import StyleGuide from "./src/StyleGuide.js";
import { setup } from "./setup";
import { BrowserRouter as Router, Route } from "react-router-dom";
setup();

let newTheme = createMuiTheme(cyverseTheme);
const App = () => (
    <MuiThemeProvider theme={newTheme}>
        <CssBaseline />
        <Router>
            <StyleGuide />
        </Router>
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
