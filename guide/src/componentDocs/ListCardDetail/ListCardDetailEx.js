import React from "react";
import users from "../../data/users";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {
    ListCard,
    ListCardHeader,
    ListCardIdentity,
    ListCardSummary,
    ListCardActions,
    ListCardDetail,
    SummaryText,
    VerticalMenu,
    Identity,
    P
} from "cyverse-ui";
import { pad, marg } from "cyverse-ui/styles";
import { Avatar, MenuItem } from "material-ui";

const user = users[0];

const ListCardDetailEx = props => (
    <ListCard key={user.name}>
        <ListCardHeader>
            <ListCardIdentity>
                <Identity
                    primaryText={user.name}
                    secondaryText={user.tagline}
                    avatar={
                        <Avatar style={{background: "tomato"}}>
                            {user.name[0]}
                        </Avatar>
                    }
                />
            </ListCardIdentity>
            <ListCardSummary hide={true}>
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
                    <MenuItem key="1" children="Instance" />
                    <MenuItem key="2" children="Volume" />
                    <MenuItem key="3" children="Image" />
                </VerticalMenu>
            </ListCardActions>
        </ListCardHeader>
        <ListCardDetail  style={{border: "1px solid red"}}>
            <P>
                { user.description }
            </P>
        </ListCardDetail>
    </ListCard>
);

export default ListCardDetailEx;
