import React, { PropType } from 'react';
import { ButtonMenu, MenuItem } from 'troposphere-ui';
import { Sheet, Code }  from '../components';
import theme from '../theme.js';

export default React.createClass({
    getInitialState() {
        return {
            selected: "2",
            isOpen: false,	
        }
    },

    onSelectChange(e, i, selected) {
        console.log(selected);
        this.setState({
            selected
        });
    },

    onToggleMenu() {
        this.setState({
            isOpen: !this.state.isOpen,
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
		    <ButtonMenu
                        color={ theme.color.primary }
                        buttonLabel="New"
                        onItemTouchTap={ this.onToggleMenu }
                        onTouch={ this.onToggleMenu }
                        isOpen={ this.state.isOpen }
		    >
			<MenuItem 
			    primaryText="Instance" 
			/>
			<MenuItem 
			    primaryText="Volume" 
			/>
			<MenuItem            
			    primaryText="Image"
			/>
		    </ButtonMenu>

                </Sheet>
                <Code children={
                    /* This is a string for our code snippt. It is not indented because it messes up the formating in render 
                     * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<Sheet mb={ 4 }>
    <ButtonMenu
        color={ theme.color.primary }
        buttonLabel="New"
        onItemTouchTap={ this.onToggleMenu }
        onTouch={ this.onToggleMenu }
        isOpen={ this.state.isOpen }
    >
        <MenuItem 
            primaryText="Instance" 
        />
        <MenuItem 
            primaryText="Volume" 
        />
        <MenuItem            
            primaryText="Image"
        />
    </ButtonMenu>

</Sheet>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});
