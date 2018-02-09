import React from 'react';
import { Identity, Paper } from 'cyverse-ui';
import { Avatar } from 'material-ui';

export default props => (
    <Paper whitespace="p2">
        <Identity
            lg
            whitespace="mb3"
            image={
                <Avatar
                    children="T"
                    color="rgba(255,255,255,.6)"
                    backgroundColor="tomato"
                />
            }
            primaryText="Large Identity"
            secondaryText="Ceratopsid Herbivorous"
        />
        <Identity
            image={
                <Avatar
                    children="G"
                    color="rgba(255,255,255,.6)"
                    backgroundColor="gold"
                />
            }
            primaryText="Small Identity"
            secondaryText="It is so cute it hurts"
        />
    </Paper>
)
