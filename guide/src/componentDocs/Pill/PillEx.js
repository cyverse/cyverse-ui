import React from "react";
import { Pill, Element, Paper } from "cyverse-ui";
import PersonIcon from "material-ui/svg-icons/social/person";
import NotificationIcon from "material-ui/svg-icons/social/notifications";
import AlertIcon from "material-ui/svg-icons/alert/warning";

class PillEx extends React.Component {
    render() {
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
                    <Pill color="danger" icon={<AlertIcon />}>3</Pill>
                </Element>
                <Element>
                    <Element root="h3" typography="title-1">
                        Custom Color
                    </Element>
                    <Pill color="darkmagenta" icon={<NotificationIcon />}>
                        230
                    </Pill>
                </Element>
            </Paper>
        );
    }
}

export default PillEx;
