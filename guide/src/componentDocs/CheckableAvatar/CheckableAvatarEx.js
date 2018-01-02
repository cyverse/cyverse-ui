import React, { Component } from "react";
import { CheckableAvatar, Element } from "cyverse-ui";
import { pad, marg } from "cyverse-ui/styles";
import { Paper, Avatar } from "material-ui";

class CheckableAvatarEx extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            isChecked: false,
        };
    }

    onToggleHover = () => {
        const isHovered = !this.state.isHovered
        this.setState({
            isHovered,
        });
    };

    onCheck = () => {
        const isChecked = !this.state.isChecked
        this.setState({
            isChecked,
        });
    }

    render() {
        const { isHovered, isChecked } = this.state;
        return (
            <Paper
                style={{
                    ...marg({ mb: 4 }),
                    ...pad({ p: 3 })
                }}
            >
                <Element
                    onMouseEnter={this.onToggleHover}
                    onMouseLeave={this.onToggleHover}
                >
                    <CheckableAvatar
                        isCheckable={ isHovered || isChecked}
                        checked={ isChecked }
                        onCheck={ this.onCheck }
                        image={
                            <Avatar backgroundColor="tomato">
                                M
                            </Avatar>
                        }
                    />
                </Element>
            </Paper>
        );
    }
}

export default CheckableAvatarEx;
