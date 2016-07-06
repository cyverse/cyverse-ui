import React from 'react';
import { marg } from '../styles';

export default React.createClass({
    style() {
        return {
            border:"0px", 
            height: "1px", 
            background: "rgba( 0, 0, 0, .1 )",
            ...marg(this.props),
            ...this.props.style,
        }
    },

    render() {
        return (
            <hr style={ this.style() }/>
        )
    }
});
