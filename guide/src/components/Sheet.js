import React, { PropTypes } from 'react';
import { styles, pad, marg } from '../styles';

const Sheet = React.createClass({

    render() {
        return (
            <div style={ this.styles() }>
                { this.props.children }
            </div>
        );
    },

    styles() {
        let size = { p: 3 };
        return {
            background: "white",
            ...styles.boxShadow.sm,
            ...pad(size),
            ...marg(this.props),
        }
    }
});

Sheet.propTypes = {
    className: PropTypes.string,
};

export default Sheet;
