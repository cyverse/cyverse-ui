import React from "react";
import radium from 'radium';
import tinyColor from "tinycolor2";
import Ink from 'react-ink';
import Tooltip from './Tooltip';
import { variables, styles } from './styles';

const Button = React.createClass({
    displayName: "Button",
    
    onTouch() {
        if (this.props.onTouch) {
            this.props.onTouch()
        }
    },

    style() {
        let txtColor = this.props.color || variables.grey.xDark;
        
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
                background: "rgba(0,0,0,0.08)",
                padding: "5px",
            };

        return {
            display: "inline-block", 
            position: "relative", 
            background: "none",
            padding: "5px", 
            outline: "none",
            border: "none",
            borderRadius: "2px",
            color: txtColor,
            fontSize: "14px",
            textTransform: "uppercase",
            transition: "all ease .2s",
            ...disabledStyle,
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
                    onClick={this.onTouch}
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
