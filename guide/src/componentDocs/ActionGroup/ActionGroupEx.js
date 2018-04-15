import React from 'react';
import { ActionGroup } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';
import { Paper, IconButton } from 'material-ui';
import * as Icons from 'cyverse-ui/icons';

const ActionGroupEx = props => (
    <Paper
        style={{
            ...marg({ mb: 4 }),
            ...pad({ p: 3 }),
        }}
    >
        <ActionGroup>
            <IconButton>
                <Icons.LaunchIcon/>
            </IconButton>
            <IconButton>
                <Icons.LinkIcon/>
            </IconButton>
            <IconButton>
                <Icons.VolumeIcon/>
            </IconButton>
        </ActionGroup>
    </Paper>
);

export default ActionGroupEx;
