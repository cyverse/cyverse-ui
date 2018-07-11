import React from "react";
import { ListItem, ListItemText } from "material-ui/List";
import { Link } from "react-router-dom";

const ThemeLinkList = () => (
    <ListItem button={true} component={Link} to={"/theming"}>
        <ListItemText>Theme and Colors</ListItemText>
    </ListItem>
);

export default ThemeLinkList;
