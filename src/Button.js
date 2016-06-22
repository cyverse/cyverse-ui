import React from "react";
import radium from 'radium';
import tinyColor from "tinycolor2";
import Ink from 'react-ink';
import Tooltip from './Tooltip';
import { variables, styles } from './styles';

const Button = React.createClass({
    displayName: "Button",
    
    onTouchTap() {
        if (this.props.onTouchTap) {
            this.props.onTouchTap()
        }
    },

    style() {
        let btnColor = this.props.color ? 
            this.props.color : 
            variables.grey.xXLight;

        let txtColor = tinyColor(btnColor).isLight() ? 
            "#55555" : "white";
        
        let disabledStyle = this.props.disabled ? 
            {
                cursor: "not-allowed",
                opacity: ".5",
            } :
            {
                cursor: "pointer",
            };

        let hoverStyle = this.props.disabled ?
            null : {
                background: tinyColor(btnColor).darken(5).toString(),
                ...styles.boxShadow.md,
            };

        return {
            display: "inline-block", 
            position: "relative", 
            padding: "10px 15px", 
            background: btnColor,
            outline: "none",
            border: "none",
            borderRadius: "2px",
            color: txtColor,
            fontSize: "14px",
            textTransform: "uppercase",
            transition: "all ease .2s",
            ...disabledStyle,
            ...styles.boxShadow.sm,
            ':hover': {
                ...hoverStyle
            }
        }
    },

    ink() {
        if (this.props.disabled) return;
        return (
            <Ink/>
        )
    },

    render() {
        let disabled = this.props.isdisabled
        return (
            <Tooltip 
                message={ this.props.tooltipMessage }
                direction={ this.props.tooltipDirection }
            >
                <button
                    style={{
                        ...this.style(),
                        ...this.props.style,
                    }} 
                    type="button"
                    onClick={this.onTouchTap}
                    disabled={this.props.disabled}
                >
                    {this.props.children}
                    { this.ink() }
                </button>
            </Tooltip>
        )
    }

});

export default radium(Button);
