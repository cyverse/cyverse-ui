import React from 'react';
import { ListCardHeader } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';
import Paper from 'material-ui/Paper';

const ListCardHeaderEx = props => (
    <Paper
        style={{
            ...marg({ mb: 4 }),
            ...pad({ p: 3 }),
        }}
    >
        <ListCardHeader/>
    </Paper>
);

export default ListCardHeaderEx;