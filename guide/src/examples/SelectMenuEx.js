import React, { PropType } from 'react';
import { SelectMenu, MenuItem } from 'cyverse-ui';
import { Sheet, Code }  from '../components';
import theme from '../theme.js';

export default React.createClass({
    getInitialState() {
        return {
            selected: "2",
        }
    },

    things: [
        {
            id: "1",
            name: "Red Fish",
            color: "Red",
            home: "Ocean",
        },
        {
            id: "2",
            name: "Blue Fish",
            color: "Blue",
            home: "Lake",
        },
        {
            id: "3",
            name: "Green Fish",
            color: "Green",
            home: "Pond"
        }
    ],

    onSelectChange(e, i, selected) {
        console.log(selected);
        this.setState({
            selected
        });
    },

    menuItem({ id, name }) { 
        return (
            <MenuItem
                value={ id }
                primaryText={ name }
                color={ theme.color.primary }
            />
        )
    },

    render() {

        return (
            <div>
                <Sheet mb={ 4 }>
                    <SelectMenu
                        floatingLabelText="testing"
                        value={ this.state.selected }
                        onClick={ this.onSelectChange }
                        color={ theme.color.primary }
                    >
                        { this.things.map(this.menuItem) }
                    </SelectMenu>
                </Sheet>
                <Code children={
                    /* This is a string for our code snippt. It is not indented because it messes up the formating in render 
                     * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<Sheet mb={ 4 }>
   <div 
        style={{ 
            maxWidth: "300px",
        }}
    >
        <SelectMenu
            list={ this.things }
            optionName={ this.optionName }
            color={ theme.color.primary }
            selected={ this.state.selected }
            onSelectChange={ this.onSelectChange }
        />
    </div>
</Sheet>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});
