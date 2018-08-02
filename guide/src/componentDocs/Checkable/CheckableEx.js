import React, { Component } from "react";
import { Identity, Checkable, Paper } from "cyverse-ui";
import { Avatar, List, ListItem, ListItemText } from "material-ui";
import { LaunchIcon } from "cyverse-ui/icons";

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
        const { isChecked } = this.state;

        return (
            <Paper whitespace="p3">
                <List>
                    <ListItem>
                        <Checkable
                            isCheckable={isChecked.length > 0}
                            checkboxProps={{
                                value: "first",
                                checked: isChecked.includes("first"),
                                onChange: this.onCheck("first"),
                            }}
                        >
                            <Avatar>Y</Avatar>
                        </Checkable>
                    </ListItem>
                    <ListItem>
                        <Identity
                            avatar={
                                <Checkable
                                    isCheckable={isChecked.length > 0}
                                    checkboxProps={{
                                        value: "second",
                                        checked: isChecked.includes(
                                            "second"
                                        ),
                                        onChange: this.onCheck(
                                            "second"
                                        ),
                                    }}
                                >
                                    <Avatar>B</Avatar>
                                </Checkable>
                            }
                            primaryText="Works with Identity"
                            secondaryText="Aug 2, 2018"
                        />
                    </ListItem>
                    <ListItem>
                        <Checkable
                            isCheckable={isChecked.length > 0}
                            checkboxProps={{
                                value: "third",
                                checked: isChecked.includes("third"),
                                onChange: this.onCheck("third"),
                            }}
                        >
                            <Avatar>M</Avatar>
                        </Checkable>
                        <ListItemText
                            primary="Or Material-UI ListItemText"
                            secondary="Jan 9, 2014"
                        />
                    </ListItem>
                    <ListItem>
                        <Checkable
                            isCheckable={isChecked.length > 0}
                            size="32px"
                            checkboxProps={{
                                value: "fourth",
                                checked: isChecked.includes("fourth"),
                                onChange: this.onCheck("fourth"),
                            }}
                        >
                            <LaunchIcon />
                        </Checkable>
                        <ListItemText primary="Not just for Avatar" />
                    </ListItem>
                </List>
            </Paper>
        );
    }
}

export default CheckableEx;
