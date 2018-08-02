import React from "react";
import data from "../../data/users";
import randomcolor from "randomcolor";
import MenuItem from "material-ui/Menu/MenuItem";
import Avatar from "material-ui/Avatar";
import Checkbox from "material-ui/Checkbox";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from "@material-ui/icons/Person";
import EditIcon from "@material-ui/icons/Edit";
import FavoritedIcon from "@material-ui/icons/Favorite";
import FavoriteIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {
    MediaCard,
    Pill,
    MediaCardGroup,
    MDBlock,
    VerticalMenu,
    SummaryText,
} from "cyverse-ui";
import { Button } from "material-ui";

export default class extends React.Component {
    state = {
        batchMode: true,
        selectedItems: [],
    };

    onCheck = (e, item) => {
        const list = this.state.selectedItems;
        // We can set or use any prop we want for this check
        const curr = item.props.uid;
        const selectedItems = list.includes(curr)
            ? list.filter(i => curr !== i)
            : [...list, curr];
        this.setState({ selectedItems });
    };

    render() {
        const { selectedItems } = this.state;
        return (
            <MediaCardGroup>
                {data.map((item, i) => {
                    const isFavorited = i === 2;
                    const RenderFavoriteIcon = isFavorited ? (
                        <IconButton style={{ color: "red" }}>
                            <FavoritedIcon/>
                        </IconButton>
                    ) : (
                        <IconButton>
                            <FavoriteIcon />
                        </IconButton>
                    );

                    return (
                        <MediaCard
                            uid={i}
                            key={i}
                            batchMode={selectedItems.length > 0}
                            checked={selectedItems.includes(i)}
                            onBatchClick={this.onCheck}
                            avatar={
                                <Avatar
                                    style={{
                                        backgroundColor: "tomato",
                                    }}
                                    children={item.name[0]}
                                />
                            }
                            primaryText={item.name}
                            secondaryText={item.tagline}
                            summary={
                                <SummaryText
                                    children={item.description}
                                />
                            }
                            detail={
                                <MDBlock text={item.description} />
                            }
                            quickActions={
                                <React.Fragment>
                                    <IconButton onClick={() => {}}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </React.Fragment>
                            }
                            persistActions={
                                <IconButton style={{ color: "red" }}>
                                    {RenderFavoriteIcon}
                                </IconButton>
                            }
                            contextMenu={<VerticalMenu />}
                        />
                    );
                })}
            </MediaCardGroup>
        );
    }
}
