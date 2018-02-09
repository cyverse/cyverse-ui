import React, { PropType } from "react";
import { MeterGauge, Element, Paper } from "cyverse-ui";
import Slider from "material-ui/Slider";

export default class extends React.Component {
    state = {
        used: 40,
        willUse: 130,
        totalAllowed: 400,
    };

    data = () => {
        const { used, willUse, totalAllowed } = this.state;
        const startValue = Math.round(used / totalAllowed * 100);
        const afterValue = Math.round(willUse / totalAllowed * 100);
        return {
            startValue,
            afterValue,
        };
    };

    onStartChange = (e, v) => {
        const { totalAllowed } = this.state;
        const used = v / 100 * totalAllowed;
        this.setState({
            used,
        });
    };

    onAfterChange = (e, v) => {
        const { totalAllowed } = this.state;
        const willUse = v / 100 * totalAllowed;
        this.setState({
            willUse,
        });
    };

    render() {
        const { used, willUse, totalAllowed } = this.state;
        const { startValue, afterValue } = this.data();
        const dataTotal = Math.round(used + willUse);
        return (
            <Paper whitespace="p3">
                <div
                    style={{
                        maxWidth: "300px",
                    }}
                >
                    <MeterGauge
                        whitespace="mb3"
                        label="Thing Usage"
                        data={`Will total ${dataTotal}kg of ${totalAllowed}kg`}
                        startValue={startValue}
                        afterValue={afterValue}
                        alertMessage="Hey, let's not get greedy"
                    />
                    <MeterGauge
                        whitespace="mb3"
                        compact
                        hideLabel
                        label="Compact"
                        data={`${startValue + afterValue}%`}
                        startValue={startValue + afterValue}
                        alertMessage="Hey, let's not get greedy"
                    />
                    <Element typography="label">StartValue</Element>
                    <Slider
                        min={0}
                        max={100}
                        value={startValue}
                        onChange={this.onStartChange}
                    />
                    <Element typography="label">AfterValue</Element>
                    <Slider
                        min={0}
                        max={100}
                        value={afterValue}
                        onChange={this.onAfterChange}
                    />
                </div>
            </Paper>
        );
    }
}
