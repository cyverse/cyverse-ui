import React from "react";
import radium from 'radium';
import tinyColor from "tinycolor2";
import Ink from 'react-ink';
import Tooltip from './Tooltip';
import { variables, styles } from './styles';

const v = variables;

const Button = React.createClass({
    displayName: "FlatButton",
    
    onTouch() {
        if (this.props.onTouch) {
            this.props.onTouch()
        }
    },


    ink() {
        if (this.props.disabled) return;
        return (
            <Ink/>
        )
    },

    renderIcon() {
        if ( this.props.icon ) {
            let Icon = React.cloneElement(
                this.props.icon, { size: 18 }
            );
            return (
                <span style={ this.style().icon } >
                    { Icon }
                </span>
            )
        }
    },

    render() {
        let disabled = this.props.isdisabled;

        return (
            <Tooltip 
                message={ this.props.tooltipMessage }
                direction={ this.props.tooltipDirection }
            >
                <button
                    style={{
                        ...this.style().button,
                        ...this.props.style,
                    }} 
                    type="button"
                    onClick={ this.onTouch }
                    disabled={ this.props.disabled }
                    id={ this.props.id }
                >
                    { this.renderIcon() }
                    <span style={ this.style().label } >
                        { this.props.children }
                    </span>
                    { this.ink() }
                </button>
            </Tooltip>
        )
    },

    style() {
        let txtColor = this.props.color || v.c.grey.xDark;
        
        let disabledStyle = this.props.disabled ? 
            {
                cursor: "not-allowed",
                opacity: ".5",
            } :
            {
                cursor: "pointer",
            };

        let label = this.props.icon ? 
            { marginLeft: "18px" } : {};

        let hoverStyle = this.props.disabled ?
            null : {
                background: "rgba(0,0,0,0.08)",
                padding: "5px",
            };

        return {
            button: {
                display: "inline-block", 
                position: "relative", 
                background: "none",
                padding: "5px", 
                outline: "none",
                border: "none",
                borderRadius: "2px",
                color: txtColor,
                textTransform: "uppercase",
                transition: "all ease .2s",
                ...styles.t.button1,
                ...disabledStyle,
                ':hover': {
                    ...hoverStyle
                }
            },
            label,
            icon: {
                position: "absolute",
                top: "3px",
                left: "3px",
            }
        }
    },

});

export default radium(Button);
