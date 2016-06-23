import React from 'react';
import theme from '../theme';
import { CircleProgressBar, Code, Button } from '../../src';

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
                }, 3500);
            }, 2000);
        }, 1200);
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

                <Button
                    onTouch={ this.startProccess }
                >
                    Start Proccess
                </Button>
            </div>
        )
    }
});
