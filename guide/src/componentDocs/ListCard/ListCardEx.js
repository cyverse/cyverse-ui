import React from "react";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import EditIcon from "material-ui/svg-icons/image/edit";
import users from "../../data/users";
import { Avatar, MenuItem } from "material-ui";
import {
    ListCard,
    MediaCardGroup,
    ListCardHeader,
    ListCardIdentity,
    ListCardSummary,
    ListCardActions,
    Identity,
    VerticalMenu,
    SummaryText,
} from "cyverse-ui";

const ListCardEx = props => (
    <div>
        <MediaCardGroup>
            {users.map((user, i) => (
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
                                <EditIcon />
                            </IconButton>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                            <VerticalMenu
                                onItemTouchTap={(e, ch) =>
                                    console.log(ch.props.primaryText)
                                }
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
        </MediaCardGroup>
    </div>
);

export default ListCardEx;
