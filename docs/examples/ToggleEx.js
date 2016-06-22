import React from 'react';
import theme from '../theme';
import { Toggle, Code } from '../../src';

export default React.createClass({
    render() {
        return (
            <div>
                <div 
                    style={{
                        marginBottom: "20px",
                    }}
                >
                    <Toggle
                        color={ theme.color.primary }
                        label="Basic Toggle"
                        id="toggle-without-label"
                    />
                    <Toggle
                        color={ theme.color.primary }
                        label="Defaulted to toggled"
                        id="toggle-defaulted-toggled"
                        defaultToggled
                    />
                    <Toggle
                        color={ theme.color.primary }
                        label="I'm disabled"
                        id="toggle-disabled"
                        disabled
                    />
                </div>
                    <Code children= {
`<div 
    style={{
        marginBottom: "20px",
    }}
>
    <Toggle
        color={ theme.color.primary }
        label="Toggle Example"
        id="toggle-without-label"
    />
    <Toggle
        color={ theme.color.primary }
        label="Defaulted to Toggeled"
        id="toggle-default-toggled"
        defaultToggled
    />
    <Toggle
        color={ theme.color.primary }
        label="I'm Disabled"
        id="toggle-disabled"
        disabled
    />
</div>`
                    }
                />
                <div style={{
                        marginBottom: "20px",
                    }}
                >
                <p>
                        Sometimes we it might make since to show the label. In that case just add the "showLabel" prop.                   </p>
                    <Toggle
                        color={ theme.color.primary }
                        label="Showing my label"
                        id="toggle-with-label"
                        showLabel
                    />
                </div>

                <Code children={
/* This is a string for our code snippt. It is not indented because it messes up the formating in render 
 * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<div style={{
        marginBottom: "20px",
    }}
>
    <Toggle
        color={ theme.color.primary }
        label="Showing my label"
        id="toggle-with-label"
        showLabel
    />
</div>`

                    /* Code string ends here */
                }/>
            </div>
        )
    },
});
