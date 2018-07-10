import React from "react";
import { withStyles } from "material-ui/styles";
import { ListItem, ListItemText } from "material-ui/List";
import Collapse from "material-ui/transitions/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ThemeExList from "../themeDocs/ThemeExList";
import { Link } from "react-router-dom";

const styles = theme => ({
    indentedList: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class ThemeLinkList extends React.Component {
    state = { open: false };

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    renderComponentLinks = () => {
        const { classes } = this.props;
        return ThemeExList.map(example => {
            const name = example.name;

            return (
                <ListItem
                    className={classes.indentedList}
                    key={name}
                    component={Link}
                    to={`/theming/#${name
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                    button={true}
                >
                    <ListItemText> {name} </ListItemText>
                </ListItem>
            );
        });
    };

    render() {
        const { open } = this.state;
        return (
            <React.Fragment>
                <ListItem button={true} onClick={this.handleClick}>
                    <ListItemText>Using Theme</ListItemText>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {this.renderComponentLinks()}
                </Collapse>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ThemeLinkList);
