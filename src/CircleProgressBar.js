import React from 'react';
import { variables } from './styles';

export default React.createClass({
    render() {
        let stroke = this.props.stroke;
        let baseSize = 50 - stroke * .67;
        let length = 2 * Math.PI * baseSize;
        let percent = this.props.percent;
        let size = this.props.size;
        let offset = length * (1 - (percent * 0.01));



        return(
            <svg 
                style={{
                    width: size,
                    position: "relative",
                    display: "block",
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
                    stroke={ variables.grey.xLight }
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
                        transition: "all 1s ease",
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
