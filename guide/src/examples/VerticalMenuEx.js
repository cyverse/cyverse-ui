import React, { PropType } from 'react';
import MenuItem from 'material-ui/MenuItem';
import { VerticalMenu } from 'cyverse-ui';
import { Code }  from '../components';
import theme from '../theme.js';
import Paper from 'material-ui/Paper';

export default React.createClass({
    onSelect(e, ch) {
        console.log(ch.props.primaryText)
    },

    render() {
        return (
            <div>
                <Paper style={{ padding: "10px", marginBottom: "20px" }}>
                    <VerticalMenu
                        onItemTouchTap={ this.onSelect }
                    >
                        <MenuItem
                            key="1"
                            primaryText="Instance"
                        />
                        <MenuItem 
                            key="2"
                            primaryText="Volume"
                        />
                        <MenuItem
                            key="3"
                            primaryText="Image"
                        />
                    </VerticalMenu>
                </Paper>
            </div>
        )
    }
});
