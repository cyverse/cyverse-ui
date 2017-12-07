import React from 'react';
import { ActionGroup } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';
import Paper from 'material-ui/Paper';

const ActionGroupEx = props => (
    <Paper
        style={{
            ...marg({ mb: 4 }),
            ...pad({ p: 3 }),
        }}
    >
        <ActionGroup/>
    </Paper>
);

export default ActionGroupEx;