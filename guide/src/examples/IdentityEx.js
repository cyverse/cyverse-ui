import React from 'react';
import { Identity, Title } from 'cyverse-ui';
import { marg, pad } from 'cyverse-ui/styles';
import { Avatar, Paper } from 'material-ui';

export default props => (
    <Paper
        style={{
            ...marg({ mb: 4 }),
            ...pad({ p: 3 }),
        }}
    >
        <Identity
            lg
            mb={ 5 }
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
