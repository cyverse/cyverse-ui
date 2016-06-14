import React from "react";
import radium from 'radium';
import styles from './styles/styles';
import tinyColor from "tinycolor2";
import Ink from 'react-ink';

const Button = React.createClass({
    displayName: "Button",

    style() {
        let btnColor = this.props.color;
        let txtColor = tinyColor(btnColor).isLight() ? 
            "#55555" : "white"; 

        return {
            cursor: "pointer",
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
            ...styles.boxShadow.sm,
            ':hover': {
                background: tinyColor(this.props.color).darken(5).toString(),
                ...styles.boxShadow.md,
            }
        }
    },

    render() {
        return (
                <button 
                    style={{
                        ...this.style(),
                        ...this.props.style,
                    }} 
                    onClick={this.props.onTouchTap}
                >
                    {this.props.children}
                    <Ink/>
                </button>
        )
    }

});

export default radium(Button);
