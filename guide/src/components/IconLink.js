import React from "react";
import { ListItem, ListItemText } from "material-ui/List";
import { Link } from "react-router-dom";

const IconLink = () => (
    <ListItem button={true} to="/icons" component={Link}>
        <ListItemText> SVG Icons </ListItemText>
    </ListItem>
);

export default IconLink;
