import React, { PropTypes } from 'react';
import { marg, pad } from 'troposphere-ui/styles';

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
