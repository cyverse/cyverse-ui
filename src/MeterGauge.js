import React from "react";
import PropTypes from "prop-types";
import muiThemeable from "material-ui/styles/muiThemeable";
import { styles, marg } from "./styles";
import Element from "./Element";
import BarGraph from "./BarGraph";

/**
 * A MeterGauge is used to depict a percentage of a known quantity. A common use in Troposphere is to show how much of a total resource a user HAS consumed or WILL consume. In the case that a MeterGauge is showing how much of a known quantity a user WILL consume, in a form for example, an after value can be passed in addition to the start value.
 */
class MeterGauge extends React.Component {
    static displayName = "MeterGauge";

    static propTypes = {
        /**
         * The first bar value treated as percentage of total.
         */
        startValue: PropTypes.number,
        /**
         * The second bar value is treated as percentage. Usually represents what will happen as the result of an action.
         */
        afterValue: PropTypes.number,
        /**
         * Message shown when more that 100 percent of total is use.
         */
        alertMessage: PropTypes.string,
        /**
         * The label above MeterGauge.
         */
        label: PropTypes.string,
        /**
         * Text version of data.
         */
        data: PropTypes.string
    };

    static defaultProps = {
        startValue: 0,
        afterValue: 0,
        alertMessage: "",
        label: "",
        data: ""
    };

    isOver = () => {
        const { startValue, afterValue } = this.props;
        return startValue + afterValue >= 100;
    };

    alert = () => {
        const { alertMessage } = this.props;

        return this.isOver() ? (
            <div style={this.style().alertMessage}>
                {alertMessage}
            </div>
        ) : null;
    };

    render() {
        const style = this.style();
        const {
            hideLabel,
            muiTheme,
            startValue,
            afterValue,
            compact
        } = this.props;

        const {
            success,
            danger
        } = muiTheme.palette;

        const startColor = this.isOver() ? danger : success;

        return (
            <Element style={style.wrapper}>
                <dl>
                    <Element
                        tag="dt"
                        hide={hideLabel}
                        typography="label"
                    >
                        {this.props.label}
                    </Element>
                    <dd style={style.data}>
                        <div style={style.dataText}>
                            {this.props.data}
                        </div>
                        <BarGraph
                            startValue={startValue}
                            afterValue={afterValue}
                            barColor={startColor}
                            compact={compact}
                        />
                    </dd>
                    {this.alert()}
                </dl>
            </Element>
        );
    }

    style = () => {
        let { compact, muiTheme } = this.props;
        const { danger = "red" } = muiTheme.palette;

        // Start styles
        const wrapper = {
            ...marg(this.props),
            height: "70px"
        };

        const data = {
            maxWidth: compact ? "60px" : "100%",
            margin: 0
        };

        const dataTextColor = this.isOver() ? danger : "#333333";
        const dataTextAlighn = compact ? "center" : "left";
        const dataText = {
            ...styles.t.caption,
            textAlign: dataTextAlighn,
            color: dataTextColor,
            fontSize: "13px",
            margin: "0px 0px 3px"
        };

        const alertMessage = {
            marginTop: "5px",
            fontSize: "12px",
            color: danger
        };

        // Combine Styles
        return {
            wrapper,
            data,
            dataText,
            alertMessage
        };
    };
}

export default muiThemeable()(MeterGauge);
