import React from "react";
import data from "../../data/users";
import randomcolor from "randomcolor";
import MenuItem from "material-ui/MenuItem";
import Avatar from "material-ui/Avatar";
import Checkbox from "material-ui/Checkbox";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import PersonIcon from "material-ui/svg-icons/social/person";
import EditIcon from "material-ui/svg-icons/image/edit";
import FavoriteIcon from "material-ui/svg-icons/action/favorite";
import FavoriteBorderIcon from "material-ui/svg-icons/action/favorite-border";
import { MediaCard, Pill, MediaCardGroup, MDBlock, SummaryText } from "cyverse-ui";

export default class extends React.Component {
    state = {
        batchMode: true,
        selectedItems: []
    };

    onCheck = (e, item) => {
        const list = this.state.selectedItems;
        // We can set or use any prop we want for this check
        const curr = item.props.uid;
        const selectedItems = list.includes(curr)
            ? list.filter(i => curr !== i)
            : [...list, curr];
        this.setState({ selectedItems });
    }

    render() {
        const { selectedItems } = this.state;
        return (
            <MediaCardGroup>
                {data.map((item, i) => {
                    return (
                        <MediaCard
                            uid={i}
                            key={i}
                            batchMode={selectedItems.length > 0}
                            checked={selectedItems.includes(i)}
                            onBatchClick={this.onCheck}
                            image={
                                <Avatar
                                    children={item.name[0]}
                                    backgroundColor={randomcolor({
                                        seed: item.name
                                    })}
                                    color="rgba(255,255,255,.7)"
                                />
                            }
                            title={item.name}
                            subTitle={item.tagline}
                            summary={<SummaryText children={item.description}/>}
                            detail={ <MDBlock text={item.description}/> }
                            menuItems={[
                                <MenuItem
                                    key="1"
                                    primaryText="Refresh"
                                />,
                                <MenuItem
                                    key="2"
                                    primaryText="Send feedback"
                                />,
                                <MenuItem
                                    key="3"
                                    primaryText="Settings"
                                />,
                                <MenuItem
                                    key="4"
                                    primaryText="Help"
                                />
                            ]}
                            quickLinks={[
                                <IconButton>
                                    <FavoriteIcon color="red" />
                                </IconButton>,
                                <IconButton>
                                    <EditIcon />
                                </IconButton>,
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            ]}
                            activeQuickLinks={[
                                <IconButton>
                                    <FavoriteIcon color="red" />
                                </IconButton>
                            ]}
                        />
                    );
                })}
            </MediaCardGroup>
        );
    }
}
