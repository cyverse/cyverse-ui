import React from 'react';
import { styles, marg }from './styles';

export default React.createClass({
    render() {
            
        return (
            <span style={ this.style() }>
                { this.props.children }
            </span>
        )
    },

    style() {
        let bg = this.props.color ? 
            { background: this.props.color } :
            styles.BgColors.greyXDark;

        return {
            display: "inline-block",
            verticalAlign: "middle",
            padding: "3px",
            lineHeight: "74%",
            fontSize: "8px",
            borderRadius: "9999px",
            color: "white",
            ...bg,
            ...this.props.style,
            ...marg(this.props)
        }
    },
});
