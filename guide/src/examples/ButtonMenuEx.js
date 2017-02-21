import React, { PropType } from 'react';
import MenuItem from 'material-ui/MenuItem';
import { ButtonMenu } from 'cyverse-ui';
import { ClearFix, ButtonGroup } from 'cyverse-ui/utils';
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
                    <ButtonGroup>
                        <ButtonMenu
                            buttonLabel="Default"
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
                        </ButtonMenu>
                        <ButtonMenu
                            primary
                            buttonLabel="Primary"
                            onItemTouchTap={ this.onToggleMenu }
                            onTouchTap={ this.onToggleMenu }
                            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
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
                        <ButtonMenu
                            secondary
                            buttonLabel="Secondary"
                            onItemTouchTap={ this.onToggleMenu }
                            onTouchTap={ this.onToggleMenu }
                            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                            targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
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
                    </ButtonGroup>
                </Paper>
                <Code children={
                    /* This is a string for our code snippt. It is not indented because it messes up the formating in render 
                     * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<Paper style={{ padding: "10px", marginBottom: "20px" }}>
    <ButtonGroup>
        <ButtonMenu
            buttonLabel="Default"
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
        </ButtonMenu>
        <ButtonMenu
            primary
            buttonLabel="Primary"
            onItemTouchTap={ this.onToggleMenu }
            onTouchTap={ this.onToggleMenu }
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
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
        <ButtonMenu
            secondary
            buttonLabel="Secondary"
            onItemTouchTap={ this.onToggleMenu }
            onTouchTap={ this.onToggleMenu }
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
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
    </ButtonGroup>
</Paper>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});
