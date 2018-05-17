import React from "react";
import { withStyles } from "material-ui/styles";
import Scroll from "react-scroll";
import List, {
    ListItem,
    ListItemIcon,
    ListItemText,
} from "material-ui/List";
import Collapse from "material-ui/transitions/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Typography } from "material-ui";
import ThemeExList from "../themeDocs/ThemeExList";

const scroller = Scroll.scroller;
const scrollTo = name => {
    return () => {
        const target = name
        .toLowerCase().split(" ").join("-");
        console.log(target)
        scroller.scrollTo(target, {
            duration: 1000,
            smooth: true,
        });
    };
};
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
                    button={true}
                    className={classes.indentedList}
                    key={name}
                    onClick={scrollTo(name)}
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
