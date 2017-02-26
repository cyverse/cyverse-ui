import React from 'react';
import { P } from 'cyverse-ui';
import { Code, Figure } from './components';
import Paper from 'Material-ui/Paper';
import ThemeEx from './examples/ThemeEx';
import ThemeColorsEx from './examples/ThemeColorsEx';

const ThemeExList = [
    {
        name: "Cyverse Theme",
        desc: (
            <div>
                <P>
                    The cyverseTheme is provided by the Cyverse-UI library and works with the Material-UI theme system to maintain a consistent "Cyverse look" across all applications using it.  
                </P>
		<ThemeEx/>
            </div>
        ), 
    },
    {
        name: "Cyverse Theme Colors",
        desc: (
            <div>
                <P>
                    The cyverseTheme colors are part of a color system, encouraging proper contrast and consistency while enforcing the Cyverse band.  
                </P>
                <P>
                    These colors can be overridden when initializing the Material-UI theme provider. See directions for this and installing the Cyverse theme below.	 
                </P>
                <Paper style={{ padding: "20px" }}>
                    <ThemeColorsEx/>
                </Paper>
            </div>
        ), 
    },
    {
        name: "Installing Cyverse Theme",
        desc: (
            <div>
                <P>
                    To use the Cyverse theme we need to wrap our entire application in the Material-UI theme provider (MuiThemeProvider) and initialize it with our custom Cyverse theme using "getMuiTheme" as our base theme. This will make the theme values available to all of the components. 
                </P>
                <Code>
                    {
`import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyverseTheme } from 'cyverse-ui/styles';
import MyApp from './MyApp';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(cyverseTheme)}>
    <MyApp/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);`

                    }
                </Code>
            </div>
        ), 
    },
    {
        name: "muiThemeable",
        desc: (
            <div>
                <P>
                    The cyverseTheme values can be used by your app specific components using Material-ui's "muiThemeable" module. To use export "muiThemeable" passing your component as a second argument.  The theme object will be available to your component through it's props. 
                </P>
                <Code>
                    {
`import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

const ThemeColorsEx = React.createClass({
    render() {
        const { 
            muiTheme: { 
                palette: {
                    primary1Color,
                }
            } 
        } = this.props;

        
        return (
            <div>
                <div 
                    style={{ 
                        backgroundColor: primary1Color,
                        width: "75px",
                        height: "75px"
                    }} 
                />
            </div>
        )
    }
});

export default muiThemeable()(ThemeColorsEx);`
                    }
                </Code>
            </div>
        ), 
    },
];

export default ThemeExList;
