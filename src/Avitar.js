import React from "react";
import radium from 'radium';
import tinyColor from "tinycolor2";

const Button = React.createClass({
    displayName: "Avitar",

    render: function() {
        let letter = this.props.name[0].toUpperCase();
        let size = this.props.size;
        let color = this.props.color;

        return ( 
            <div style={{
                    display: "inline-block",
                    textAlign: "center",
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: "999px",
                    background: color,
                    fontSize: `${(size * .7)}px`,
                    lineHeight: `${size + 2}px`,
                    color: "rgba(255,255,255,.7)",
                    ...this.props.style,
                }}
            >
                { letter }
            </div>
        )
    }

});

export default radium(Button);
