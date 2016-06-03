import React from 'react';

export default React.createClass({
    style() {
        return {
            border:"0", 
            height: "1px", 
            background: "rgba( 0, 0, 0, .1 )"
        }
    },

    render() {
        return (
            <hr style={ this.style() }/>
        )
    }
});
