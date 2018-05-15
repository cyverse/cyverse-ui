import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import {
    MenuList,
    Paper,
    ClickAwayListener,
    Grow,
} from "material-ui";
import { Popper, Target, Manager } from "react-popper";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Element from "./Element";

const styles = theme => ({
    target: {
        display: "table",
    },
    menuWrapper: {
        zIndex: 700,
    },
    menu: {
        transformOrigin: "0 0 0",
    },
    menu__closed: {
        display: "none",
    },
});
/**
 *  VerticalMenu is a combination of MUI's IconButton, some MUI utilities and "react-popper". Since a common use case is to have a Vertical Menu for context actions on a card or detail view, we have provided a basic drop in emplementation for general use. If you need more customization, examples of other implementations they can be found in [MUI's Menu Documentation](https://material-ui-next.com/demos/menus/)
 **/

class VerticalMenu extends React.Component {
    static propTypes = {
        /**
         * The position the menu will try to stick to. It will adjust to veiwport constraints when unable. Example: if opened at the bottom of the viewport menu would open above the menu button. Expects ["top", "right", "left", "bottom"] with the modifiers "-start" and "-end" ie: ("bottom-start")
         **/
        placement: PropTypes.string,
    };

    static defaultProps = {
        placement: "bottom-end",
    };

    state = {
        open: false,
    };

    handleClose = event => {
        this.setState({ open: false });
    };

    handleToggleOpen = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const {
            classes,
            className,
            children,
            placement = "bottom-end",
        } = this.props;
        const { open, ...rest } = this.state;

        const wrapperClasses = classNames(
            { [className]: className },
            "Cy-VerticalMenu"
        );
        return (
            <Element {...rest} className={wrapperClasses}>
                <ClickAwayListener onClickAway={this.handleClose}>
                    <Manager>
                        <Target>
                            {({ targetProps }) => (
                                <div
                                    {...targetProps}
                                    className={classes.target}
                                >
                                    <IconButton
                                        onClick={
                                            this.handleToggleOpen
                                        }
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                </div>
                            )}
                        </Target>
                        <Popper placement={placement}>
                            {({ popperProps, restProps }) => (
                                <div
                                    {...popperProps}
                                    className={classes.menuWrapper}
                                >
                                    <Grow
                                        in={open}
                                        className={classNames(
                                            classes.menu,
                                            {
                                                [classes.menu__closed]: !open,
                                            }
                                        )}
                                    >
                                        <Paper>
                                            <MenuList>
                                                {children}
                                            </MenuList>
                                        </Paper>
                                    </Grow>
                                </div>
                            )}
                        </Popper>
                    </Manager>
                </ClickAwayListener>
            </Element>
        );
    }
}

export default withStyles(styles)(VerticalMenu);
