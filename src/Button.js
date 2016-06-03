import React from "react";
import radium from 'radium';
import tinyColor from "tinycolor2";
import Ink from 'react-ink';

const Button = React.createClass({
    displayName: "Button",

    componentDidMount() {
        console.log( tinyColor(this.props.color).isLight() ); 
    },

    style() {
        let btnColor = this.props.color;
        let txtColor = tinyColor(btnColor).isLight() ? 
            "#55555" : "white"; 

        return {
            cursor: "pointer",
            display: "inline-block", 
            position: "relative", 
            marginRight: "20px",
            padding: "10px 15px", 
            background: btnColor,
            outline: "none",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 1px 4px rgba(0, 0, 0, .5)",
            color: txtColor,
            fontSize: "14px",
            transition: "all ease .2s",
            ':hover': {
                background: tinyColor(this.props.color).darken(5).toString(),
                boxShadow: "0 1px 10px rgba(0, 0, 0, .5)",
            }
        }
    },

    render: function() {
        return ( 
            <button 
                style={this.style()} 
                onClick={this.props.onTouchTap}
            >
                {this.props.children}
                <Ink/>
            </button>
        )
    }

});

export default radium(Button);
