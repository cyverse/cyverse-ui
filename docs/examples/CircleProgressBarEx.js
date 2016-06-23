import React from 'react';
import theme from '../theme';
import { CircleProgressBar, Code, FlatButton } from '../../src';
import { PlayIcon, ReplayIcon } from '../../src/icons';
import { ButtonGroup } from '../../src/utils';

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
                }, 3000);
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
                <div style={{marginBottom: "20px"}}>
                    <CircleProgressBar
                        percent={ this.state.progress }
                        color={ theme.color.success }
                        size="50px"
                        stroke={ 10 }
                    />
                </div>
                <div style={{marginBottom: "20px"}}>
                    <ButtonGroup>
                        <FlatButton
                            onTouch={ this.startProccess }
                        >
                            <PlayIcon
                                style={{
                                    position: "relative", 
                                    top: "-2px",
                                }} 
                                size={ 16 }    
                            />
                            Play
                        </FlatButton>
                        <FlatButton
                            onTouch={ this.replayProccess }
                        >
                            <ReplayIcon
                                style={{
                                    position: "relative", 
                                    top: "-2px",
                                }} 
                                size={ 16 }    
                            />
                            Reset
                        </FlatButton>
                    </ButtonGroup>
                </div>
                <Code 
                    children={ 

`<div style={{marginBottom: "20px"}}>
    <CircleProgressBar
        percent={ this.state.progress }
        color={ theme.color.success }
        size="50px"
        stroke={ 10 }
    />
</div>`
                    }
                />
            </div>
        )
    }
});
