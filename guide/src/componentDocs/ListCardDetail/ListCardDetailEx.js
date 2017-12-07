import React from 'react';
import { ListCardDetail } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';
import Paper from 'material-ui/Paper';

const ListCardDetailEx = props => (
    <Paper
        style={{
            ...marg({ mb: 4 }),
            ...pad({ p: 3 }),
        }}
    >
        <ListCardDetail/>
    </Paper>
);

export default ListCardDetailEx;