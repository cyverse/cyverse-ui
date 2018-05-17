import React from "react";
import CodeBlock from "./CodeBlock";
import { Element, P } from "cyverse-ui";
const Instalation = () => (
    <Element whitespace="mb10">
        <Element whitespace="mb7">
            <Element whitespace="mb3" typography="display2">
                Getting Started
            </Element>
            <P>
                CyVerse-UI is an npm package and requires Material-UI
                as a peer dependency. To use CyVerse-UI you will need
                to install some packages and setup the root of your
                React application to provide the theme.
            </P>
        </Element>
        <Element whitespace="mb7">
            <Element typography="display1">Installation</Element>
            <P>Install packages and and them to your package.json.</P>
            <CodeBlock
                collapseDisabled={true}
                text={`npm install --save cyverse-ui@next @material-ui/core @material-ui/icons`}
            />
        </Element>
        <Element whitespace="mb7">
            <Element whitespace="mt4" typography="display1">
                Setting Up
            </Element>
            <P>
                Set up the root of your application to use the theme
                provider that ships with Material-ui and pass the
                CyVerse-UI theme.
            </P>
            <P>
                Note that we are also including "CssBaseline" and
                importing "typeface-roboto" these are for consistancy.
                You can read more about theming and these dependencies
                in the{" "}
                <a
                    href="https://material-ui-next.com/getting-started/installation/"
                    className="Link"
                >
                    Material-UI
                </a>{" "}
                documentation and our Theming section
            </P>
            <CodeBlock
                collapseDisabled={true}
                text={`import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "material-ui/CssBaseline";
import "typeface-roboto";
import {
    MuiThemeProvider,
    createMuiTheme,
} from "material-ui/styles/";
import cyverseTheme from "cyverse-ui/styles/cyverseTheme";
import MyApp from "./src/StyleGuide.js";

let newTheme = createMuiTheme(cyverseTheme);
const App = () => (
    <MuiThemeProvider theme={newTheme}>
        <CssBaseline />
        <MyApp />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));`}
            />
        </Element>
    </Element>
);
export default Instalation;
