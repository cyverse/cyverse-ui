import React from "react";
import theme from "../../theme";
import { ProgressAvatar, Element } from "cyverse-ui";
import PlayIcon from "material-ui/svg-icons/av/play-arrow";
import PersonIcon from "material-ui/svg-icons/social/person"
import FlatButton from "material-ui/FlatButton";
import Paper from "material-ui/Paper";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 100
        };
    }

    startProccess = () => {
        this.setState({
            progress: 20
        });

        window.setTimeout(() => {
            this.setState({
                progress: 45
            });
            window.setTimeout(() => {
                this.setState({
                    progress: 70
                });
                window.setTimeout(() => {
                    this.setState({
                        progress: 90
                    });
                    window.setTimeout(() => {
                        this.setState({
                            progress: 100
                        });
                    }, 2500);
                }, 1000);
            }, 2000);
        }, 1200);
    };

    replayProccess = () => {
        this.setState({
            progress: 0
        });
    };

    render() {
        return (
            <React.Fragment>
                <Element whiteSpace={{ mv: 5 }}>
                    <FlatButton
                        label="Play Progress"
                        onTouchTap={this.startProccess}
                        icon={<PlayIcon />}
                    />
                </Element>
                <Paper>
                    <Element whiteSpace={{ p: 3 }}>
                        <Element
                            whiteSpace={{ mb: 3 }}
                            display="flex"
                            style={{ alignItems: "center" }}
                        >
                            <ProgressAvatar
                                whiteSpace={{ mr: 3 }}
                                percent={this.state.progress}
                                src="https://www.fillmurray.com/100/100"
                            />
                            With an Image
                        </Element>
                        <Element
                            whiteSpace={{ mb: 3 }}
                            display="flex"
                            style={{ alignItems: "center" }}
                        >
                            <ProgressAvatar
                                whiteSpace={{ mr: 3 }}
                                percent={this.state.progress}
                                backgroundColor="purple"
                            >
                                W
                            </ProgressAvatar>
                            With Text
                        </Element>
                        <Element
                            whiteSpace={{ mb: 3 }}
                            display="flex"
                            style={{ alignItems: "center" }}
                        >
                            <ProgressAvatar
                                whiteSpace={{ mr: 3 }}
                                percent={this.state.progress}
                                backgroundColor="coral"
                                icon={<PersonIcon color="white" />}
                            />
                            With Icon
                        </Element>
                        <Element
                            whiteSpace={{ mb: 3 }}
                            display="flex"
                            style={{ alignItems: "center" }}
                        >
                            <ProgressAvatar
                                whiteSpace={{ mr: 3 }}
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
                    </Element>
                </Paper>
            </React.Fragment>
        );
    }
}
