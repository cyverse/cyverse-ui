import React from 'react';
import { VerticalMenu, Paper } from 'cyverse-ui';
import { MenuItem } from 'material-ui';

class VerticalMenuEx extends React.Component {
    onSelect = (e, ch) => {
        console.log(ch.props.primaryText);
    };

    render() {
        return (
            <div>
                <Paper whitespace="p3">
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
}

export default VerticalMenuEx;
