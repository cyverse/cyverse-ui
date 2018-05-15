import React from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';
import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import * as colors from "material-ui/colors";
import Element from "./Element";
import BarGraph from "./BarGraph";

/**
 * A MeterGauge is used to depict a percentage of a known quantity. A common use in Troposphere is to show how much of a total resource a user HAS consumed or WILL consume. In the case that a MeterGauge is showing how much of a known quantity a user WILL consume, in a form for example, an after value can be passed in addition to the start value.
 */

const styles = theme => ({
    wrapper: {
        height: "70px",
        marginTop: 0,
    },
    data: {
        margin: 0,
    },
    data__compact: {
        maxWidth: "60px",
    },
    dataText: {
        ...theme.typography.caption,
        ...theme.whitespace.mb1
    },
    dataText__alert: {
        color: "red",
    },
    dataText__compact: {
        textAlign: "center",
    },
    alertMessage: {
        ...theme.typography.body1,
        color: "red",
    },
});

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
        data: PropTypes.string,
    };

    static defaultProps = {
        startValue: 0,
        afterValue: 0,
        alertMessage: "",
        label: "",
        data: "",
    };

    isOver = () => {
        const { startValue, afterValue } = this.props;
        return startValue + afterValue >= 100;
    };

    alert = () => {
        const { classes, alertMessage } = this.props;

        return this.isOver() ? (
            <div className={classes.alertMessage}>{alertMessage}</div>
        ) : null;
    };

    render() {
        const {
            classes,
            className,
            hideLabel,
            startValue,
            afterValue,
            compact,
            label,
            data,
            ...rest,
        } = this.props;

        const wrapperClasses = classnames(
            {[className]: className},
            "CY-MeterGauge",
            classes.wrapper
        )
        const dataClasses = classNames(
            "CY-MeterGauge-data",
            classes.data,
            { [classes.data__compact]: compact, }
        );
        const dataTextClasses = classNames(
            "CY-MeterGauge-dataText",
            classes.dataText,
            { [classes.dataText__compact]: compact },
            { [classes.dataText__alert]: this.isOver() }
        );

        const startColor = this.isOver() ? colors.red["500"] : colors.green["500"];
        return (
            <Element { ...rest }
                root="dl"
                className={wrapperClasses}
            >
                <Element
                    root="dt"
                    className="CY-MeterGauge-dataTitle"
                    hide={hideLabel}
                    typography="label"
                    whitespace="mb1"
                >
                    { label }
                </Element>
                <dd className={dataClasses}>
                    <div className={dataTextClasses}>
                        { data }
                    </div>
                    <BarGraph
                        startValue={startValue}
                        afterValue={afterValue}
                        barColor={startColor}
                        compact={compact}
                    />
                </dd>
                {this.alert()}
            </Element>
        );
    }
}

export default withStyles(styles)(MeterGauge);
