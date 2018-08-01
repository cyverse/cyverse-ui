import React from "react";
import {  Button } from "material-ui";
import { Tooltip, Element, Paper } from "cyverse-ui";
import { ButtonGroup } from "cyverse-ui/utils";

const TooltipEx = () => (
    <Paper whitespace="p3">
        <ButtonGroup>
            <Tooltip message="I'm a default Tooltip">
                <Button color="primary" children="Default Direction" />
            </Tooltip>
            <Tooltip
                message={`My direction prop is "right"`}
                direction="right"
            >
                <Button color="primary" children="Direction Right" />
            </Tooltip>
            <Tooltip
                message={`My direction prop is "bottom"`}
                direction="bottom"
            >
                <Button color="primary" children="Direction Bottom" />
            </Tooltip>
            <Tooltip
                message={`My direction prop is "left"`}
                direction="left"
            >
                <Button color="primary" children="Direction Left" />
            </Tooltip>
            <Tooltip
                message={`My direction prop is "top". I also have a really really long message. It requires different styling so... ya. This works!`}
                direction="top"
            >
                <Button color="primary" children="Direction Top" />
            </Tooltip>
        </ButtonGroup>
    </Paper>
);

export default TooltipEx;
