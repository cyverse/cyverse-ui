import React, { PropTypes } from 'react';
import { marg, pad } from './styles';

const Div = React.createClass({

    render() {
        return (
            <div 
                id={ this.props.id }
                style={ this.styles() }
            >
                { this.props.children }
            </div>
        );
    },

    styles() {
        let display="block";

        if (this.props.flex) {
            display="flex";
        }
        if (this.props.inlineBlock) {
            display="inline-block";
        }
        return {
            display,
            ...marg(this.props),
            ...pad(this.props),
            ...this.props.style,
        }
    },
});

Div.propTypes = {
    className: PropTypes.string,
};

export default Div;
