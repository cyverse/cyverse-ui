import React, { PropType } from 'react';
import { Tabs } from 'cyverse-ui';
import { Code } from '../components';
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
            <div>
                <Tabs
                    tabList={[
                        "Red Fish",
                        "Blue Fish",
                        "Green Fish",
                    ]}
                    current={this.state.currentTab}
                    color={ theme.color.primary }
                    onTabClick={ this.onTabClick }
                />
                <Code children={
                    /* This is a string for our code snippt. It is not indented because it messes up the formating in render
                     * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<div style={{marginBottom: "20px"}}>
    <Tabs
        tabList={[
            "Red Fish",
            "Blue Fish",
            "Green Fish",
        ]}
        current={0}
        color={ theme.color.primary }
        onTabClick={ this.onTabClick }
    />
</div>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});
