import React from "react";
import { ListItem, ListItemText } from "material-ui/List";
import { Link } from "react-router-dom";

const GettingStartedLink = () => (
    <ListItem button={true} component={Link} to={"/getting-started"}>
        <ListItemText>Getting Started</ListItemText>
    </ListItem>
);

export default GettingStartedLink;
