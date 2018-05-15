import React from "react";
import { withStyles } from "material-ui/styles";
import { Pill, Element, Paper } from "cyverse-ui";
import PersonIcon from "@material-ui/icons/person";
import NotificationIcon from "@material-ui/icons/notifications";
import AlertIcon from "@material-ui/icons/warning";

const styles = theme => ({
    pillCustom: {
        background: "darkmagenta !important"
    },
    iconCustom: {
        color: "darkmagenta !important"
    },
});
class PillEx extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Paper whitespace="p3">
                <Element whitespace="mb2">
                    <Element root="h3" typography="title-1">
                        Default Color
                    </Element>
                    <Pill>Featured</Pill>
                    <Pill icon={<PersonIcon />}>22</Pill>
                </Element>
                <Element whitespace="mb2">
                    <Element root="h3" typography="title-1">
                        Theme Color
                    </Element>
                    <Pill
                        color="primary"
                        icon={<AlertIcon />}
                    >
                        3
                    </Pill>
                </Element>
                <Element>
                    <Element root="h3" typography="title-1">
                        Custom Color
                    </Element>
                    <Pill
                        pillClassName={classes.pillCustom}
                        iconClassName={classes.iconCustom}
                        icon={<NotificationIcon />}
                    >
                        230
                    </Pill>
                </Element>
            </Paper>
        );
    }
}

export default withStyles(styles)(PillEx);
