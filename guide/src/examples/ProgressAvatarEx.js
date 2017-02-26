import React from 'react';
import theme from '../theme';
import { ProgressAvatar, Div } from 'cyverse-ui';
import { Sheet, Code }  from '../components';
import { PlayIcon, PersonIcon } from '../icons';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

export default React.createClass({
    getInitialState() {
        return {
            progress: 100
        }
    },

    startProccess() {

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
    },

    replayProccess() {
        this.setState({
            progress: 0
        });
    },

    render() {
        return (
            <div>
                <Paper style={{ padding: "10px", marginBottom: "20px"}}>
                    <Div mb = { 3 } style={{ display: "flex", alignItems: "center" }}>
                        <ProgressAvatar
                            mr = { 3 }
                            percent = { this.state.progress }
                            src='https://www.fillmurray.com/500/500'
                        />
                        With an Image
                    </Div>
                    <Div mb = { 3 } style={{ display: "flex", alignItems: "center" }}>
                        <ProgressAvatar
                            mr = { 3 }
                            percent = { this.state.progress }
                            backgroundColor = "purple"
                        >
                            W
                        </ProgressAvatar>
                        With Text
                    </Div>
                    <Div mb = { 3 } style={{ display: "flex", alignItems: "center" }}>
                        <ProgressAvatar
                            mr = { 3 }
                            percent = { this.state.progress }
                            backgroundColor = "coral"
                            icon = { <PersonIcon color = "white"/> }
                        />
                        With Icon
                    </Div>
                    <Div style={{ display: "flex", alignItems: "center" }}>
                        <ProgressAvatar
                            mr = { 3 }
                            progressColor = "gold"
                            percent = { this.state.progress }
                            backgroundColor = "royalblue"
                            size = { 60 }
                            thickness = { 10 }
                        >
                            C
                        </ProgressAvatar>
                        Custom Progress Color, Size, and Progress Thickness!
                    </Div>
                </Paper>
                <div style={{marginBottom: "20px"}}>
                    <FlatButton
                        label="PLay"
                        onTouchTap={ this.startProccess }
                        icon={ <PlayIcon/> }
                    />
                </div>
                <Code
                    children={

`<Paper style={{ padding: "10px", marginBottom: "20px"}}>
    <Div mb = { 3 } style={{ display: "flex", alignItems: "center" }}>
        <ProgressAvatar
            mr = { 3 }
            percent = { this.state.progress }
            src='https://www.fillmurray.com/500/500'
        />
        With an Image
    </Div>
    <Div mb = { 3 } style={{ display: "flex", alignItems: "center" }}>
        <ProgressAvatar
            mr = { 3 }
            percent = { this.state.progress }
            backgroundColor = "purple"
        >
            W
        </ProgressAvatar>
        With Text
    </Div>
    <Div mb = { 3 } style={{ display: "flex", alignItems: "center" }}>
        <ProgressAvatar
            mr = { 3 }
            percent = { this.state.progress }
            backgroundColor = "coral"
            icon = { <PersonIcon color = "white"/> }
        />
        With Icon
    </Div>
    <Div style={{ display: "flex", alignItems: "center" }}>
        <ProgressAvatar
            mr = { 3 }
            progressColor = "gold"
            percent = { this.state.progress }
            backgroundColor = "royalblue"
            size = { 60 }
            thickness = { 10 }
        >
            C
        </ProgressAvatar>
        Custom Progress Color, Size, and Progress Thickness!
    </Div>
</Paper>`
                    }
                />
            </div>
        )
    }
});
