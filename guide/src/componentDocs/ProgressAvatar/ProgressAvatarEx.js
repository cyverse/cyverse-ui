import React from "react";
import theme from "../../theme";
import { ProgressAvatar, Element } from "cyverse-ui";
import { PlayIcon, PersonIcon } from "../../icons";
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
            <div>
                <Paper
                    style={{ padding: "10px", marginBottom: "20px" }}
                >
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
                </Paper>
                <div style={{ marginBottom: "20px" }}>
                    <FlatButton
                        label="PLay"
                        onTouchTap={this.startProccess}
                        icon={<PlayIcon />}
                    />
                </div>
            </div>
        );
    }
}
