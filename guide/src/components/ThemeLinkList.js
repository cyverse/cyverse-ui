import React from "react";
import { ListItem, ListItemText } from "material-ui/List";
import { Link } from "react-router-dom";

const ThemeLinkList = () => (
    <li style={{ listStyle: "none" }}>
        <ListItem button={true} component={Link} to={"/theming"}>
            <ListItemText disableTypography={true}>Theme and Colors</ListItemText>
        </ListItem>
    </li>
);

export default ThemeLinkList;
