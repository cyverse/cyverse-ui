import React from 'react';
import { marg } from './styles';

export default class extends React.Component {
    /**
     * Hr renders the proper styling on a horizontal rule.
     */
    static displayName = "Hr"
    style = () => {
        return {
            border:"0px",
            height: "1px",
            background: "rgba( 0, 0, 0, .1 )",
            ...marg(this.props),
            ...this.props.style,
        }
    };

    render() {
        return (
            <hr style={ this.style() }/>
        )
    }
}
