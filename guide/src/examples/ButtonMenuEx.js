import React, { PropType } from 'react';
import MenuItem from 'material-ui/MenuItem';
import { ButtonMenu } from 'cyverse-ui';
import { ClearFix, ButtonGroup } from 'cyverse-ui/utils';
import { Code }  from '../components';
import theme from '../theme.js';
import Paper from 'material-ui/Paper';

export default React.createClass({

    onSelectItem(e, item) {
        console.log(
            `${item.props.primaryText} was selected!`
        );
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
            <Paper style={{ padding: "10px", marginBottom: "20px" }}>
                <ButtonGroup>
                    <ButtonMenu
                        buttonLabel="Default"
                        onItemTouchTap={ this.onSelectItem }
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
        )
    }
});
