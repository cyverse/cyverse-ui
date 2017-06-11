# Style Information
## Whitespace  
The marg and pad style utilities allow us to easily expose a set of props props on our components that have a more terse and explicit way to set whitespace on components.
```
<MyComponent
    mb={3}
    pad={3}
/>
```
The following properties will take a number 1-10 and return the correct styles for setting the golden ratio from our smallest margin "1" to our largest "10". It is discuraged and might be prevented in later versions but a custom margin size can be set by passing a string value like "10px" or "30%".

### Available Props
#### Margins
- mr = marginRight
- mb = marginBottom
- ml = marginRight
- ms = marginRight, marginLeft

#### Padding
- pr = paddingRight
- pb = paddingBottom
- pl = paddingRight
- ps = paddingRight, PaddingLeft

## CyVerse Theme
We ship a Material-ui compatible theme `cyverseTheme.json` that can be used by consumers of this library to implement the CyVerse brand color pallete in their applications.

Running `npm run build` will use the `makeTheme.js` script to generate `cyverseTheme.json` found in the styles directory. Or run manually `node makeTheme.js`.

To consume the theme from your application:
```
import React from 'react';
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

export default muiThemeable()(ThemeColorsEx);
```
