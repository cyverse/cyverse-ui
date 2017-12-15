import React from "react";
import users from "../../data/users";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import EditIcon from "material-ui/svg-icons/image/edit";
import {
    ListCard,
    ListCardHeader,
    ListCardIdentity,
    ListCardSummary,
    ListCardActions,
    SummaryText,
    VerticalMenu,
    Identity
} from "cyverse-ui";
import { pad, marg } from "cyverse-ui/styles";
import { Avatar, MenuItem } from "material-ui";

const user = users[0];

const ListCardHeaderEx = props => (
    <ListCard>
        <ListCardHeader style={{border: "1px solid red"}}>
            <ListCardIdentity>
                <Identity
                    primaryText={user.name}
                    secondaryText={user.tagline}
                    image={
                        <Avatar backgroundColor="tomato">
                            {user.name[0]}
                        </Avatar>
                    }
                />
            </ListCardIdentity>
            <ListCardSummary>
                <SummaryText>{user.description}</SummaryText>
            </ListCardSummary>
            <ListCardActions>
                <IconButton>
                    <EditIcon/>
                </IconButton>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
                <VerticalMenu
                    onItemTouchTap={(e, ch) =>
                        console.log(ch.props.primaryText)
                    }
                >
                    <MenuItem key="1" primaryText="Instance" />
                    <MenuItem key="2" primaryText="Volume" />
                    <MenuItem key="3" primaryText="Image" />
                </VerticalMenu>
            </ListCardActions>
        </ListCardHeader>
    </ListCard>
);

export default ListCardHeaderEx;
