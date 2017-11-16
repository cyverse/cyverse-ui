import React from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { variables, styles, marg } from './styles';

const v = variables;

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
        const {
            startValue,
            afterValue,
        } = this.props;
        return (
            startValue + afterValue >= 100
        );
    };

    alert = () => {
        const {
            alertMessage
        } = this.props;

        return this.isOver() ? (
            <div style={ this.style().alertMessage } >
                { alertMessage }
            </div>
        ) : null;
    };

    render() {
        const style = this.style();

        return (
            <div style={ style.wrapper }>
                <dl>
                    <dt style={ styles.t.label } >
                        {this.props.label}
                    </dt>

                    <dd style={{margin: "0px"}}>
                        <div style={ style.data }>
                            {this.props.data}
                        </div>
                        <div style={ style.bar }>
                            <div style={ style.barBefore }/>
                            <div style={ style.barAfter }/>
                        </div>
                        { this.alert() }
                    </dd>
                </dl>
            </div>
        );
    }

    style = () => {
        let {
            startValue,
            afterValue,
            muiTheme
        } = this.props;

        const {
            success = "green",
            danger = "red"
        } = muiTheme.palette;

        const startColor = this.isOver() ?
            danger : success;

        const dataText = this.isOver() ?
            danger : "#333333";

        // Start styles
        const wrapper = {
            ...marg(this.props),
            height: "70px"
        }

        const data = {
            ...styles.t.caption,
            color: dataText,
            fontSize: "13px",
            margin: "0px 0px 3px",
        }
        const bar = {
            display: "flex",
            background: v.c.grey.xLight
        }
        const barBefore = {
            transition: "flex-basis ease .3s",
            height:"10px",
            float: "left",
            flexShrink: "0",
            maxWidth: "100%",
            flexBasis: startValue + "%",
            background: startColor
        }
        const barAfter = {
            transition: "flex-basis ease .3s",
            height:"10px",
            float: "left",
            flexBasis: afterValue + "%",
            background: startColor,
            opacity:".5"
        }
        const alertMessage = {
            marginTop: "5px",
            fontSize: "12px",
            color: danger,
        }

        // Combine Styles
        return {
            wrapper,
            data,
            bar,
            barBefore,
            barAfter,
            alertMessage
        }
    };
}

export default muiThemeable()(MeterGauge);
