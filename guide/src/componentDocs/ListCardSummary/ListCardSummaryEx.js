import React from 'react';
import { ListCardSummary } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';
import Paper from 'material-ui/Paper';

const ListCardSummaryEx = props => (
    <Paper
        style={{
            ...marg({ mb: 4 }),
            ...pad({ p: 3 }),
        }}
    >
        <ListCardSummary/>
    </Paper>
);

export default ListCardSummaryEx;