import React from 'react';
import { variables } from './styles';

export default React.createClass({
    style() {
        return {
            display: "block",
            whiteSpace: "pre-wrap",
            padding: "20px",
            color: variables.grey.dark,
            fontSize: "14px",
            borderLeft: `solid ${variables.grey.dark} 5px`,
            background: "rgba(0,0,0,0.03)",
        }
    },

    render() {
        return (
            <code 
                style={{...this.style()}}
                children={this.props.children}
            />
        )
   }
});
