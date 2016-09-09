import React from 'react';
import { variables, marg } from './styles';

export default React.createClass({
    render() {
        let stroke = this.props.stroke;
        let baseSize = 50 - stroke * .67;
        let length = 2 * Math.PI * baseSize;
        let percent = this.props.percent;
        let size = this.props.size;
        let offset = length * (1 - (percent * 0.01));

        let transition = "none";

        if ( percent > 0 ) {
            transition = "all 1s ease";
        }

        return(
            <svg 
                style={{
                    width: size + "px",
                    ...this.props.style,
                    ...marg(this.props),
                }}
                viewBox="0 0 100 100"
            >
                <circle
                    ref="path"
                    style={{
                        position: 'relative',
                    }}
                    cx="50"
                    cy="50"
                    r={ baseSize }
                    fill="none"
                    stroke="rgba(0,0,0,0.05)"
                    strokeWidth={ stroke }
                    strokeLinecap= "round"
                />
                <circle
                    ref="path"
                    style={{
                        position: 'relative',
                        transform: "rotate(180deg)",
                        transformOrigin: "center",
                        strokeDasharray: length,
                        strokeDashoffset: offset,         
                        transition,
                    }}
                    cx="50"
                    cy="50"
                    r={ baseSize }
                    fill="none"
                    stroke={ this.props.color }
                    strokeWidth={ stroke }
                    strokeLinecap= "round"
                />
            </svg>
        )
    }
});
