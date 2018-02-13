import React from "react";
import { ActionGroup, Paper } from "cyverse-ui";
import { IconButton } from "material-ui";
import * as Icons from "cyverse-ui/icons";

const ActionGroupEx = props => (
    <Paper whitespace={["mb3", "p2"]}>
        <ActionGroup>
            <IconButton>
                <Icons.LaunchIcon />
            </IconButton>
            <IconButton>
                <Icons.LinkIcon />
            </IconButton>
            <IconButton>
                <Icons.VolumeIcon />
            </IconButton>
        </ActionGroup>
    </Paper>
);

export default ActionGroupEx;
