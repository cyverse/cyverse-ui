import React from 'react';
import { CheckableAvatar } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';
import Paper from 'material-ui/Paper';

const CheckableAvatarEx = props => (
    <Paper
        style={{
            ...marg({ mb: 4 }),
            ...pad({ p: 3 }),
        }}
    >
        <CheckableAvatar/>
    </Paper>
);

export default CheckableAvatarEx;