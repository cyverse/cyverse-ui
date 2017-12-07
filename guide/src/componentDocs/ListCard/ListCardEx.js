import React from 'react';
import { ListCard, Identity } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';
import { ActionPermIdentity } from 'material-ui/svg-icons/action/perm-identity';
import { Avatar } from 'material-ui';

const ListCardEx = props => (
    <div>
        <ListCard white = {{ p:2 }}>
            <Identity
                primaryText="Superman"
                secondaryText="The man of steel"
                image={
                    <Avatar
                        backgroundColor="tomato"
                    >
                        S
                    </Avatar>
                }
            />
        </ListCard>
        <ListCard white = {{ p:2 }}>
            <Identity
                primaryText="Batman"
                secondaryText="The dark night"
                image={
                    <Avatar
                        backgroundColor="darkblue"
                    >
                        B
                    </Avatar>
                }
            />
        </ListCard>
        <ListCard white = {{ p:2 }}>
            <Identity
                primaryText="Wolverine"
                secondaryText="The weapon X"
                image={
                    <Avatar
                        backgroundColor="gold"
                    >
                        S
                    </Avatar>
                }
            />
        </ListCard>
    </div>
);

export default ListCardEx;
