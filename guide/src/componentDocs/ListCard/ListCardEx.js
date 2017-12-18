import React from "react";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import EditIcon from "material-ui/svg-icons/image/edit";
import {
    ListCard,
    ListCardHeader,
    ListCardIdentity,
    ListCardSummary,
    ListCardActions,
    Identity,
    VerticalMenu,
    SummaryText,
} from "cyverse-ui";
import { pad, marg } from "cyverse-ui/styles";
import users from "../../data/users";

import { Avatar, MenuItem } from "material-ui";

const ListCardEx = props => (
    <div>
        {users.map(user => (
            <ListCard key={user.name}>
                <ListCardHeader>
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
                        <SummaryText>
                            {user.description}
                        </SummaryText>
                    </ListCardSummary>
                    <ListCardActions>
                        <IconButton>
                            <EditIcon/>
                        </IconButton>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>
                        <VerticalMenu
                            onItemTouchTap={ (e, ch) => console.log( ch.props.primaryText )}
                        >
                            <MenuItem
                                key="1"
                                primaryText="Instance"
                            />
                            <MenuItem
                                key="2"
                                primaryText="Volume"
                            />
                            <MenuItem
                                key="3"
                                primaryText="Image"
                            />
                        </VerticalMenu>
                    </ListCardActions>
                </ListCardHeader>
            </ListCard>
        ))}
    </div>
);

export default ListCardEx;
