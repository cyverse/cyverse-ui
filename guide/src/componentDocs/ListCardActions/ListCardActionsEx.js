import React from 'react';
import { ListCardActions } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';
import Paper from 'material-ui/Paper';

const ListCardActionsEx = props => (
    <Paper
        style={{
            ...marg({ mb: 4 }),
            ...pad({ p: 3 }),
        }}
    >
        <ListCardActions/>
    </Paper>
);

export default ListCardActionsEx;