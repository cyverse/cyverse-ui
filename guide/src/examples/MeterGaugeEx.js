import React, { PropType } from 'react';
import { MeterGauge } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';

import Paper from 'material-ui/Paper';
import { Code }  from '../components';
import theme from '../theme.js';

export default React.createClass({

    render() {
        return (
            <div>
                <Paper style={{
                        ...marg({ mb:4 }),
                        ...pad({ p:3 }),
                    }}
                >
                    <div 
                        style={{ 
                            maxWidth: "300px",
                        }}
                    >
                        <MeterGauge
                            label="Thing Usage"
                            data="Will total 40kg 0f 130kg"
                            startValue={80}
                            afterValue={25}
                        />
                    </div>
                </Paper>
                <Code children={
                    /* This is a string for our code snippt. It is not indented because it messes up the formating in render
                     * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<Paper style={{
        ...marg({ mb:4 }),
        ...pad({ p:3 }),
    }}
>
    <div 
        style={{ 
            maxWidth: "300px",
        }}
    >
        <MeterGauge
            label="Thing Usage"
            data="Will total 40kg 0f 130kg"
            startValue={10}
            afterValue={25}
        />
    </div>
</Paper>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});
