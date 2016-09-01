import React from 'react';
import radium from 'radium';
import tinyColor from 'tinycolor2';
import randomcolor from 'randomcolor';
import { marg } from './styles';

const Avatar = React.createClass({
    displayName: "Avatar",

    render: function() {
        let letter = this.props.name[0].toUpperCase();

        return (
            <div style={ this.styles() }>
                { letter }
            </div>
        );
    },

    styles() {
        let size = this.props.size;
        let color = randomcolor({
          seed: this.props.name  
        });

        return {
            display: "inline-block",
            textAlign: "center",
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "999px",
            background: color,
            fontSize: `${(size * .7)}px`,
            lineHeight: `${size + 2}px`,
            color: "rgba(255,255,255,.7)",
            ...marg(this.props),
            ...this.props.style,
        }

    }

});

export default radium(Avatar);
