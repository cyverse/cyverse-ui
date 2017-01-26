import React from 'react';
import { variables, marg } from 'cyverse-ui/styles';

const v = variables

export default React.createClass({
    render() {
        return (
            <code
                style={{...this.style()}}
                children={this.props.children}
            />
        )
    },

    style() {
        return {
            display: "block",
            whiteSpace: "pre-wrap",
            padding: "20px",
            color: v.c.grey.dark,
            fontSize: "14px",
            borderLeft: `solid ${v.c.grey.mid} 5px`,
            background: "rgba(0,0,0,0.03)",
            ...marg(this.props),
        }
    },

});
