import React from "react";
import R from "ramda";
import Scroll from "react-scroll";
import { withStyles } from "material-ui/styles";
import List, {
    ListItem,
    ListItemIcon,
    ListItemText,
} from "material-ui/List";
import Collapse from "material-ui/transitions/Collapse";
import * as componentDocs from "../componentDocs";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Typography } from "material-ui";

const scroller = Scroll.scroller;
const scrollTo = target => () => {
    scroller.scrollTo(target, {
        duration: 1000,
        smooth: true,
    });
};

const styles = theme => ({
    indentedList: {
        paddingLeft: theme.spacing.unit * 4,
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
                <ListItem
                    button={true}
                    className={classes.indentedList}
                    key={name}
                    onClick={scrollTo(target)}
                >
                    <ListItemText> {name} </ListItemText>
                </ListItem>
            );
        });
    };

    render() {
        const { open } = this.state;
        return (
            <List>
                <ListItem button={true} onClick={this.handleClick}>
                    <ListItemText>Components</ListItemText>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {this.renderComponentLinks()}
                </Collapse>
            </List>
        );
    }
}

export default withStyles(styles)(ComponentLinkList);
