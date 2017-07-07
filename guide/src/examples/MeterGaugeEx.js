import React, { PropType } from 'react';
import Slider from 'material-ui/Slider'
import { MeterGauge } from 'cyverse-ui';
import { pad, marg, styles } from 'cyverse-ui/styles';

import Paper from 'material-ui/Paper';
import { Code }  from '../components';
import theme from '../theme.js';

export default React.createClass({
    getInitialState() {
        return {
            used: 40,
            willUse: 130,
            totalAllowed: 400,
        }   
    },

    data() {
        const { used, willUse, totalAllowed } = this.state;
        const startValue = (used / totalAllowed) * 100;
        const afterValue = (willUse / totalAllowed) * 100;
        return {
            startValue,
            afterValue,
        }
    },

    onStartChange(e, v) {
        const { totalAllowed } = this.state;
        const used = (v / 100) * totalAllowed;
        this.setState({
            used
        });
    },

    onAfterChange(e, v) {
        const { totalAllowed } = this.state;
        const willUse = (v / 100) * totalAllowed;
        this.setState({
            willUse
        });
    },

    render() {
        const { used, willUse, totalAllowed } = this.state;
        const { startValue, afterValue } = this.data();
        const dataTotal = Math.round(used + willUse);
        return (
            <Paper
                style={{
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
                        mb={ 3 }
                        label="Thing Usage"
                        data={ `Will total ${dataTotal}kg of ${totalAllowed}kg` }
                        startValue={startValue}
                        afterValue={afterValue}
                        alertMessage="Hey, let's not get greedy"
                    />
                    <div style={ styles.t.label } >
                        StartValue
                    </div>
                    <Slider
                        min={ 0 }
                        max={ 100 }
                        value={ startValue }
                        onChange={ this.onStartChange }
                    />
                    <div style={ styles.t.label } >
                        AfterValue
                    </div>
                    <Slider
                        min={ 0 }
                        max={ 100 }
                        value={ afterValue }
                        onChange={ this.onAfterChange }
                    />
                </div>
            </Paper>
        )
    }
});
