import React from "react";
import R from "ramda";
import { withStyles } from "material-ui/styles";
import List, { ListItem, ListItemText } from "material-ui/List";
import Collapse from "material-ui/transitions/Collapse";
import * as componentDocs from "../componentDocs";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

const styles = theme => ({
    indentedList: {
        paddingLeft: theme.spacing.unit * 6,
    },
});

class ComponentLinkList extends React.Component {
    state = { open: false };

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    renderComponentLinks = () => {
        const { classes } = this.props;
        return R.toPairs(componentDocs).map(item => {
            // This is kind of lame because the file ends with "doc"
            // Probably a better way to get the name off the component
            const name = item[0].slice(0, -3);
            const target = name
                .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
                .replace(
                    /([A-Z])/g,
                    ([letter]) => `-${letter.toLowerCase()}`
                );
            return (
                <li style={{ listStyle: "none" }}>
                    <ListItem
                        button={true}
                        className={classes.indentedList}
                        key={name}
                        component={Link}
                        to={`/components/${target}-doc`}
                    >
                        <ListItemText disableTypography={true}>
                            {" "}
                            {name}{" "}
                        </ListItemText>
                    </ListItem>
                </li>
            );
        });
    };

    render() {
        const { open } = this.state;
        return (
            <li style={{ listStyle: "none" }}>
                <ListItem button={true} onClick={this.handleClick}>
                    <ListItemText disableTypography={true}>
                        Components
                    </ListItemText>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <ul style={{ margin: 0, padding: 0 }}>
                        {this.renderComponentLinks()}
                    </ul>
                </Collapse>
            </li>
        );
    }
}

export default withStyles(styles)(ComponentLinkList);
