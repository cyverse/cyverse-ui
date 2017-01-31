import React from 'react';
import theme from '../theme';
import { ProgressAvatar, FlatButton } from 'cyverse-ui';
import { Sheet, Code }  from '../components';
import { PlayIcon, ReplayIcon } from '../icons';
import { ButtonGroup } from '../utils';

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
                <Sheet mb={ 4 }>
                    <ProgressAvatar
                        name = "Danny Boy"
                        percent = { this.state.progress }
                        color = { theme.color.success }
                        size = { 50 }
                        stroke = { 10 }
                    />
                </Sheet>
                <div style={{marginBottom: "20px"}}>
                    <ButtonGroup>
                        <FlatButton
                            children="PLay"
                            onTouch={ this.startProccess }
                            icon={ <PlayIcon/> }
                        />
                        <FlatButton
                            children="Reset"
                            onTouch={ this.replayProccess }
                            icon={ <ReplayIcon/> }
                        />
                    </ButtonGroup>
                </div>
                <Code 
                    children={ 

`<Sheet mb={ 4 }>
    <CircleProgressBar
        percent={ this.state.progress }
        color={ theme.color.success }
        size="50px"
        stroke={ 10 }
    />
</Sheet>`
                    }
                />
            </div>
        )
    }
});
