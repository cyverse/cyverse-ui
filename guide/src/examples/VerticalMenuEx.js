import React, { PropType } from 'react';
import MenuItem from 'material-ui/MenuItem';
import { VerticalMenu } from 'cyverse-ui';
import { Code }  from '../components';
import theme from '../theme.js';
import Paper from 'material-ui/Paper';

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
                <Paper style={{ padding: "10px", marginBottom: "20px" }}>
                        <VerticalMenu
                            onItemTouchTap={ this.onToggleMenu }
                            onTouchTap={ this.onToggleMenu }
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
                        </VerticalMenu>
                </Paper>
                <Code children={
                    /* This is a string for our code snippt. It is not indented because it messes up the formating in render 
                     * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<Paper style={{ padding: "10px", marginBottom: "20px" }}>
</Paper>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});
