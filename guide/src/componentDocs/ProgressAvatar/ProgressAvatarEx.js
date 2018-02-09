import React from "react";
import { ProgressAvatar, Element, Paper } from "cyverse-ui";
import PlayIcon from "material-ui/svg-icons/av/play-arrow";
import PersonIcon from "material-ui/svg-icons/social/person";
import FlatButton from "material-ui/FlatButton";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 100,
        };
    }

    startProccess = () => {
        this.setState({
            progress: 20,
        });

        window.setTimeout(() => {
            this.setState({
                progress: 45,
            });
            window.setTimeout(() => {
                this.setState({
                    progress: 70,
                });
                window.setTimeout(() => {
                    this.setState({
                        progress: 90,
                    });
                    window.setTimeout(() => {
                        this.setState({
                            progress: 100,
                        });
                    }, 2500);
                }, 1000);
            }, 2000);
        }, 1200);
    };

    replayProccess = () => {
        this.setState({
            progress: 0,
        });
    };

    render() {
        return (
            <React.Fragment>
                <Element whiteSpace="mv5">
                    <FlatButton
                        style={{ marginBottom: "8px" }}
                        label="Play Progress"
                        onTouchTap={this.startProccess}
                        icon={<PlayIcon />}
                    />
                </Element>
                <Paper whitespace="p3">
                    <Element
                        whitespace="mb2"
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <ProgressAvatar
                            whitespace="mr2"
                            percent={this.state.progress}
                            src="https://www.fillmurray.com/100/100"
                        />
                        With an Image
                    </Element>
                    <Element
                        whitespace="mb2"
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <ProgressAvatar
                            whitespace="mr2"
                            percent={this.state.progress}
                            backgroundColor="purple"
                        >
                            W
                        </ProgressAvatar>
                        With Text
                    </Element>
                    <Element
                        whitespace="mb2"
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <ProgressAvatar
                            whitespace="mr2"
                            percent={this.state.progress}
                            backgroundColor="coral"
                            icon={<PersonIcon color="white" />}
                        />
                        With Icon
                    </Element>
                    <Element
                        whitespace="mb3"
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <ProgressAvatar
                            whitespace="mr2"
                            progressColor="gold"
                            percent={this.state.progress}
                            backgroundColor="royalblue"
                            size={60}
                            thickness={10}
                        >
                            C
                        </ProgressAvatar>
                        Custom Progress Color, Size, and Progress
                        Thickness!
                    </Element>
                </Paper>
            </React.Fragment>
        );
    }
}
