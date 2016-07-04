import React from 'react';
import theme from '../theme';
import { Toggle } from 'troposphere-ui';
import { Sheet, Code }  from '../components';

export default React.createClass({
    render() {
        return (
            <div>
                <Sheet mb={ 4 }> 
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
                </Sheet>
                <Code 
                    mb={ 4 }
                    children= {
`<Sheet mb={ 4 }> 
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
</Sheet>`
                    }
                />
                <Sheet mb={ 4 }>
                    <p>
                        Sometimes it might make since to show the label. In that case just add the "showLabel" prop.
                    </p>
                    <Toggle
                        color={ theme.color.primary }
                        label="Showing my label"
                        id="toggle-with-label"
                        showLabel
                    />
                </Sheet>

                <Code children={
/* This is a string for our code snippt. It is not indented because it messes up the formating in render 
 * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<Sheet mb={ 4 }>
    <p>
        Sometimes it might make since to show the label. In that case just add the "showLabel" prop.
    </p>
    <Toggle
        color={ theme.color.primary }
        label="Showing my label"
        id="toggle-with-label"
        showLabel
    />
</Sheet>`

                    /* Code string ends here */
                }/>
            </div>
        )
    },
});
