import React from 'react';
import theme from '../theme';
import { ProgressAvatar } from 'cyverse-ui';
import { Sheet, Code }  from '../components';
import { PlayIcon, ReplayIcon } from '../icons';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

export default React.createClass({
    getInitialState() {
        return {
            progress: 0
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
                    <ProgressAvatar
                        name = "Danny Boy"
                        percent = { this.state.progress }
                        color = { theme.color.success }
                        size = { 50 }
                        stroke = { 10 }
                    />
                </Paper>
                <div style={{marginBottom: "20px"}}>
                    <FlatButton
                        label="PLay"
                        onTouchTap={ this.startProccess }
                        icon={ <PlayIcon/> }
                    />
                    <FlatButton
                        label="Reset"
                        onTouchTap={ this.replayProccess }
                        icon={ <ReplayIcon/> }
                    />
                </div>
                <Code
                    children={

`<Paper style={{ padding: "10px", marginBottom: "20px"}}>
    <CircleProgressBar
        percent={ this.state.progress }
        color={ theme.color.success }
        size="50px"
        stroke={ 10 }
    />
</Paper>`
                    }
                />
            </div>
        )
    }
});
