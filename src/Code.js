import React from 'react';

export default React.createClass({
    style() {
        return {
            display: "block",
            whiteSpace: "pre-wrap",
            padding: "20px",
            color: "darkgrey",
            borderLeft: "solid darkgrey 5px",
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
