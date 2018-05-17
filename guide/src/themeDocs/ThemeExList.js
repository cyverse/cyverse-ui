import React from "react";
import { P } from "cyverse-ui";
import { Figure } from "../components";
import CodeBlock from "../components/CodeBlock";
import Paper from "material-ui/Paper";
import ThemeEx from "./ThemeEx";
import ThemeColorsEx from "./ThemeColorsEx";
import index from "!raw-loader!../../index";

const ThemeExList = [
    {
        name: "CyVerse Theme",
        desc: (
            <div>
                <P>
                    The{" "}
                    <code className="CodeInline">cyverseTheme</code>{" "}
                    is provided by the CyVerse-UI library and works
                    with the Material-UI theme system to maintain a
                    consistent "CyVerse look" across all applications
                    using it.
                </P>
                {<ThemeEx />}
            </div>
        ),
    },
    {
        name: "CyVerse Theme Colors",
        desc: (
            <div>
                <P>
                    The{" "}
                    <code className="CodeInline">cyverseTheme</code>{" "}
                    colors are part of a color system, encouraging
                    proper contrast and consistency while enforcing
                    the CyVerse brand.
                </P>
                <P>
                    These colors can be overridden when initializing
                    the Material-UI theme provider. See directions for
                    this and installing the CyVerse theme below.
                </P>
                <Paper style={{ padding: "20px" }}>
                    <ThemeColorsEx />
                </Paper>
            </div>
        ),
    },
    {
        name: "Theme Installation",
        desc: (
            <div>
                <P>
                    To use the CyVerse theme we need to wrap our
                    entire application in the Material-UI theme
                    provider{" "}
                    <code className="CodeInline">
                        MuiThemeProvider
                    </code>{" "}
                    and initialize it with our custom CyVerse theme
                    with{" "}
                    <code className="CodeInline">createMuiTheme</code>{" "}
                    as our base theme. This will make the theme values
                    available to all of the components.
                </P>
                <P>
                    For consistency in styling we also want include
                    Material-ui's<code className="CodeInline">
                        CssBaseline
                    </code>{" "}
                    which is a minimal set of styles that "normalize"
                    the global styles across browsers. If you have
                    used CSS Reset or Normalize.css this is esentially
                    the same thing.
                </P>
                <CodeBlock collapseDisabled={true} text={index} />
            </div>
        ),
    },
    {
        name: "Using the Theme",
        desc: (
            <div>
                <P>
                    The "theme" values can be used by your
                    application's components through a theme object as
                    a prop for inline styles, or using{" "}
                    <a
                        className="Link"
                        href="http://cssinjs.org/?v=v9.8.1"
                    >
                        JSS
                    </a>. To access the theme Material-UI has provided{" "}
                    <code className="CodeInline">withStyles</code> to
                    recieve the theme object as a prop for inline
                    styles and{" "}
                    <code className="CodeInline">withTheme</code> to
                    recieve the theme as an argument to your style
                    function in JSS. See examples below for both
                    methods or refer to{" "}
                    <a
                        className="Link"
                        href="https://material-ui-next.com/customization/themes"
                    >
                        Material-ui's Documentation
                    </a>{" "}
                    for more information.
                </P>
                <CodeBlock
                    collapseDisabled={true}
                    text={`// Access the theme object as a prop!
import React from 'react';
import { withTheme } from 'material-ui/styles';

const ThemeColorsEx = React.createClass({
    render() {
        const {
           theme: {
                palette: {
                    primary,
                }
            }
        } = this.props;


        return (
            <div
                style={{
                    backgroundColor: primary.main,
                    width: "75px",
                    height: "75px"
                }}
            />
        )
    }
});

export default withTheme()(ThemeColorsEx);`}
                />
                <CodeBlock
                    collapseDisabled={true}
                    text={`// Access the theme object with JSS!
import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    coloredTile: {
        height: 100px,
        width: 100px,
        backgroundColor: theme.palette.primary.main
    }
});

const ThemeColorsEx = React.createClass({
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.coloredTile}/>
        )
    }
});

export default withStyles(styles)(ThemeColorsEx);`}
                />
            </div>
        ),
    },
];

export default ThemeExList;
