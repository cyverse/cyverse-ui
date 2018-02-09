import React from "react";
import {  RaisedButton } from "material-ui";
import { Tooltip, Element, Paper } from "cyverse-ui";
import { ButtonGroup } from "cyverse-ui/utils";

const TooltipEx = () => (
    <Paper whitespace="p3">
        <ButtonGroup>
            <Tooltip message="I'm a default Tooltip">
                <RaisedButton primary label="Default Direction" />
            </Tooltip>
            <Tooltip
                message={`My direction prop is "right"`}
                direction="right"
            >
                <RaisedButton primary label="Direction Right" />
            </Tooltip>
            <Tooltip
                message={`My direction prop is "bottom"`}
                direction="bottom"
            >
                <RaisedButton primary label="Direction Bottom" />
            </Tooltip>
            <Tooltip
                message={`My direction prop is "left"`}
                direction="left"
            >
                <RaisedButton primary label="Direction Left" />
            </Tooltip>
            <Tooltip
                message={`My direction prop is "top". I also hav a really really long message. It requires different styling so... ya. This works!`}
                direction="top"
            >
                <RaisedButton primary label="Direction Top" />
            </Tooltip>
        </ButtonGroup>
    </Paper>
);

export default TooltipEx;
