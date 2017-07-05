import React, { PropType } from 'react';
import { Tabs } from 'cyverse-ui';
import Paper from 'material-ui/Paper';
import theme from '../theme.js';

export default React.createClass({
    getInitialState() {
        return {
            currentTab: 0,
        }
    },

    onTabClick(currentTab) {
        this.setState({
            currentTab
        });
    },

    render() {
        return (
            <Paper
                style={{
                    padding: "0 10px",
                    marginBottom: "20px"
                }}
            >
                <Tabs
                    tabList={[
                        "Red Fish",
                        "Blue Fish",
                        "Green Fish",
                    ]}
                    current={this.state.currentTab}
                    onTabClick={ this.onTabClick }
                />
            </Paper>
        )
    }
});
