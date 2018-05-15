import React, { PropType } from "react";
import Slider from "rc-slider";
import { withTheme } from "material-ui/styles";
import "rc-slider/assets/index.css";
import { MeterGauge, Element, Paper } from "cyverse-ui";

class MeterGaugeEx extends React.Component {
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

    onStartChange = e => {
        const { totalAllowed } = this.state;
        const used = e / 100 * totalAllowed;
        this.setState({
            used,
        });
    };

    onAfterChange = e => {
        const { totalAllowed } = this.state;
        const willUse = e / 100 * totalAllowed;
        this.setState({
            willUse,
        });
    };

    render() {
        const { theme } = this.props;
        const { used, willUse, totalAllowed } = this.state;
        const { startValue, afterValue } = this.data();
        const dataTotal = Math.round(used + willUse);
        const sliderStyles = {
            trackStyle: {
                backgroundColor: theme.palette.primary.main,
            },
            handleStyle: {
                backgroundColor: theme.palette.primary.main,
                border: "none",
            },
        };
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
                        {...sliderStyles}
                        style={{ marginBottom: theme.spacing.unit * 2 }}
                        min={0}
                        max={100}
                        value={startValue}
                        onChange={this.onStartChange}
                    />
                    <Element typography="label">AfterValue</Element>
                    <Slider
                        {...sliderStyles}
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

export default withTheme()(MeterGaugeEx);
