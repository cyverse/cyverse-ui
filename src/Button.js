import React from "react";
import radium from 'radium';
import tinyColor from "tinycolor2";
import Ink from 'react-ink';
import Tooltip from './Tooltip';
import { variables, styles } from './styles';

const v = variables;

const Button = React.createClass({
    displayName: "Button",
    
    onTouch(e) {
        if (this.props.onTouch) {
            this.props.onTouch(e)
        }
    },
    
    renderIcon() {
        
        if ( this.props.icon ) {
            
            let Icon = React.cloneElement( 
                this.props.icon, { size: 18 }
            );

            return (
                <span
                    style={{
                        position: "absolute",
                        top: "8px",
                        left: "12px",
                    }}
                >
                     { Icon }
                </span>
            )
        }

        return 
    },

    renderInk() {
        if ( this.props.disabled ) { return };
        
        return (
            <Ink/>
        )
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
                    <span 
                        style={ this.style().label }
                    >
                        { this.props.children }
                    </span>
                    { this.renderInk() }
                </button>
            </Tooltip>
        )
    },

    style() {
        let btnColor = this.props.color ? 
            this.props.color : 
            v.c.grey.xXLight;

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
        let withIcon = this.props.icon ?
            {
                marginLeft: "20px",
            } : {};

        let hoverStyle = this.props.disabled ?
            null : {
                background: tinyColor(btnColor)
                    .darken(5).toString(),
                ...styles.boxShadow.md,
            };

        return {
            button: {
                display: "inline-block", 
                position: "relative", 
                padding: "10px 15px", 
                background: btnColor,
                outline: "none",
                border: "none",
                borderRadius: "2px",
                color: txtColor,
                textTransform: "uppercase",
                transition: "all ease .2s",
                ...disabledStyle,
                ...styles.t.button1,
                ...styles.boxShadow.sm,
                ':hover': {
                    ...hoverStyle
                }
            },
            label: {
                display: "inline-block",
                ...withIcon,
            }
        }
    },

});

export default radium(Button);
