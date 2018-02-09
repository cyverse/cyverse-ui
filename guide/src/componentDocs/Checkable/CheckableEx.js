import React, { Component } from "react";
import { Checkable, Paper } from "cyverse-ui";
import { Avatar, Checkbox } from "material-ui";

class CheckableEx extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstIsHovered: false,
            secondIsHovered: false,
            isChecked: [],
        };
    }

    onEnter = element => () => {
        this.setState({
            [element + "IsHovered"]: true,
        });
    };

    onLeave = element => () => {
        this.setState({
            [element + "IsHovered"]: false,
        });
    };

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
                    onMouseEnter={this.onEnter("first")}
                    onMouseLeave={this.onLeave("first")}
                    size={60}
                    isCheckable={
                        firstIsHovered || isChecked.includes("first")
                    }
                    checkboxProps={{
                        checked: isChecked.includes("first"),
                        onCheck: this.onCheck("first"),
                    }}
                >
                    <Avatar
                        size={60}
                        backgroundColor="cornflowerblue"
                    >
                        B
                    </Avatar>
                </Checkable>
                <Checkable
                    whitespace="mb3"
                    size={60}
                    isCheckable={
                        true
                    }
                    checkboxProps={{
                        checked: isChecked.includes("first"),
                        onCheck: this.onCheck("first"),
                    }}
                >
                    <Avatar
                        size={60}
                        backgroundColor="cornflowerblue"
                    >
                        B
                    </Avatar>
                </Checkable>
                <Checkable
                    onMouseEnter={this.onEnter("second")}
                    onMouseLeave={this.onLeave("second")}
                    isCheckable={
                        secondIsHovered ||
                        isChecked.includes("second")
                    }
                    checkboxProps={{
                        checked: isChecked.includes("second"),
                        onCheck: this.onCheck("second"),
                    }}
                >
                    <Avatar backgroundColor="tomato">M</Avatar>
                </Checkable>
            </Paper>
        );
    }
}

export default CheckableEx;
