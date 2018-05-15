import React, { Component } from "react";
import { Checkable, Paper } from "cyverse-ui";
import { Avatar, Checkbox } from "material-ui";

class CheckableEx extends Component {
    state = { isChecked: [] };

    onCheck = element => () => {
        const { isChecked } = this.state;
        const match = el => el !== element;
        this.setState({
            isChecked: isChecked.includes(element)
                ? isChecked.filter(match)
                : isChecked.concat(element),
        });
    };

    render() {
        const {
            firstIsHovered,
            secondIsHovered,
            isChecked,
        } = this.state;

        return (
            <Paper whitespace="p3">
                <Checkable
                    whitespace="mb3"
                    isCheckable={isChecked.length > 0}
                    checkboxProps={{
                        checked: isChecked.includes("first"),
                        onChange: this.onCheck("first"),
                    }}
                >
                    <Avatar>Y</Avatar>
                </Checkable>
                <Checkable
                    whitespace="mb3"
                    isCheckable={isChecked.length > 0}
                    checkboxProps={{
                        checked: isChecked.includes("second"),
                        value: "second",
                        onChange: this.onCheck("second"),
                    }}
                >
                    <Avatar>B</Avatar>
                </Checkable>
                <Checkable
                    isCheckable={isChecked.length > 0}
                    checkboxProps={{
                        checked: isChecked.includes("third"),
                        onChange: this.onCheck("third"),
                    }}
                >
                    <Avatar>M</Avatar>
                </Checkable>
            </Paper>
        );
    }
}

export default CheckableEx;
