import React, { PropTypes } from 'react';
import { marg, pad } from './styles';

const Section = React.createClass({

    render() {
        return (
            <section style={this.styles()}>
                { this.props.children }
            </section>
        );
    },

    styles() {
        let displayType = (this.props.flex) ?
            { display: "flex" } :
            { display: "block" };
       console.log(marg(this.props)); 
        return {
            position: "relative",
            ...displayType,
            ...marg(this.props),
            ...pad(this.props),
            ...this.props.styles,
        }
    },
});

Section.propTypes = {
    className: PropTypes.string,
};

export default Section;
