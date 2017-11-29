import React from 'react';
import PropTypes from 'prop-types';
import { marg, pad } from './styles';

class Div extends React.Component {
    /**
     * Div is a primitive layout component
     */
    render() {
        return (
            <div
                id={ this.props.id }
                style={ this.styles() }
            >
                { this.props.children }
            </div>
        );
    }

    styles = () => {
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
    };
}

Div.propTypes = {
    className: PropTypes.string,
};

export default Div;
