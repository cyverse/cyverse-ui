import React from 'react';
import { ListCardIdentity } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';
import Paper from 'material-ui/Paper';

const ListCardIdentityEx = props => (
    <Paper
        style={{
            ...marg({ mb: 4 }),
            ...pad({ p: 3 }),
        }}
    >
        <ListCardIdentity/>
    </Paper>
);

export default ListCardIdentityEx;