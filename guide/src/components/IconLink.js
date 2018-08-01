import React from "react";
import { ListItem, ListItemText } from "material-ui/List";
import { Link } from "react-router-dom";

const IconLink = () => (
    <li style={{ listStyle: "none" }}>
        <ListItem button={true} to="/icons" component={Link}>
            <ListItemText disableTypography={true}>
                SVG Icons
            </ListItemText>
        </ListItem>
    </li>
);

export default IconLink;
