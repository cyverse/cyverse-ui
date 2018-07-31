import React, { Component } from "react";
import randomcolor from "randomcolor";
import userData from "../../data/users";
import { Avatar, Button } from "material-ui";
import RefreshIcon from "@material-ui/icons/Refresh";
import { MediaCardGroup, MediaCard, P, Element } from "cyverse-ui";

const UserCard = user => (
    <MediaCard
        key={user.name}
        avatar={
            <Avatar
                style={{
                    backgroundColor: randomcolor({
                        seed: user.name,
                    }),
                }}
                children={user.name[0]}
            />
        }
        title={user.name}
        summary={user.tagline}
        detail={user.description}
    />
);

const MediaCardGroupEx = props => (
    <MediaCardGroup>
        {userData.map(UserCard)}
    </MediaCardGroup>
);

export default MediaCardGroupEx;
