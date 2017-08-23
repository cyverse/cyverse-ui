import React from 'react';
import { VerticalMenu } from 'cyverse-ui';
import { Paper, MenuItem } from 'material-ui';

const VerticalMenuEx = React.createClass({
    onSelect(e, ch) {
        console.log(ch.props.primaryText);
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

export default VerticalMenuEx;
