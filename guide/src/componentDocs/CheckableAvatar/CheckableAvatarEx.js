import React, { Component } from "react";
import { CheckableAvatar, ProgressAvatar, Element } from "cyverse-ui";
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

    onMouseEnter = () => {
        const isHovered = true
        this.setState({
            isHovered,
        });
    };
    onMouseLeave = () => {
        const isHovered = false
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
            <Paper>
                <Element
                    whiteSpace={{ mb: 4, p: 3 }}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                >
                    <CheckableAvatar
                        whiteSpace={{ mr: 3 }}
                        isCheckable={ isHovered || isChecked}
                        checked={ isChecked }
                        onCheck={ this.onCheck }
                    >
                        <Avatar backgroundColor="tomato">
                            M
                        </Avatar>
                    </CheckableAvatar>
                    <CheckableAvatar
                        isCheckable={ isHovered || isChecked}
                        checked={ isChecked }
                        onCheck={ this.onCheck }
                    >
                        <ProgressAvatar percent={60} backgroundColor="tomato">
                            M
                        </ProgressAvatar>
                    </CheckableAvatar>
                </Element>
            </Paper>
        );
    }
}

export default CheckableAvatarEx;
