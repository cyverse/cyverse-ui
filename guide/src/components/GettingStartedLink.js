import React from "react";
import { ListItem, ListItemText } from "material-ui/List";
import { Link } from "react-router-dom";

const GettingStartedLink = () => (
    <li style={{listStyle: "none"}}>
        <ListItem
            button={true}
            component={Link}
            to={"/getting-started"}
        >
            <ListItemText disableTypography={true}>Getting Started</ListItemText>
        </ListItem>
    </li>
);

export default GettingStartedLink;
