import React, { PropType } from 'react';
import { MeterGauge } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';

import Paper from 'material-ui/Paper';
import { Code, Sheet }  from '../components';
import theme from '../theme.js';

export default React.createClass({
    getInitialState() {
        return {
            currentValue: 0,
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
                <Paper style={{
                    ...marg({ mb: 4 })
                    }
                }>
                    <div 
                        style={{ 
                            maxWidth: "300px",
                        }}
                    >
                        <MeterGauge
                            label="Thing Usage"
                            data="Will total 40kg 0f 130kg"
                            startValue={5}
                            afterValue={20}
                            color={ theme.color.success }
                            overColor={ theme.color.danger }
                        />
                    </div>
                </Paper>
                <Code children={
                    /* This is a string for our code snippt. It is not indented because it messes up the formating in render 
                     * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<Sheet mb={ 4 }>
    <div 
        style={{ 
            maxWidth: "300px",
        }}
    >
        <MeterGauge
            label="Thing Usage"
            data="Will total 40kg 0f 130kg"
            startValue={5}
            afterValue={20}
            color={ theme.color.success }
            overColor={ theme.color.danger }
        />
    </div>
</Sheet>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});
