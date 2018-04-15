import React from 'react';
import { pad } from 'cyverse-ui/styles';
import { Paper, RaisedButton } from 'material-ui';
import { Tooltip } from 'cyverse-ui';
import { ButtonGroup } from 'cyverse-ui/utils';

const TooltipEx = () => (
    <Paper style={pad({p: 3})}>
        <ButtonGroup>
            <Tooltip
                message="I'm a default Tooltip"
            >
                <RaisedButton primary
                    label="Default Direction"
                />
            </Tooltip>
            <Tooltip
                message={`My direction prop is "right"`}
                direction="right"
            >
                <RaisedButton primary
                    label="Direction Right"
                />
            </Tooltip>
            <Tooltip
                message={`My direction prop is "bottom"`}
                direction="bottom"
            >
                <RaisedButton primary
                    label="Direction Bottom"
                />
            </Tooltip>
            <Tooltip
                message={`My direction prop is "left"`}
                direction="left"
            >
                <RaisedButton primary
                    label="Direction Left"
                />
            </Tooltip>
            <Tooltip
                message={`My direction prop is "top"`}
                direction="top"
            >
                <RaisedButton primary
                    label="Direction Top"
                />
            </Tooltip>
        </ButtonGroup>
    </Paper>
)

export default TooltipEx
