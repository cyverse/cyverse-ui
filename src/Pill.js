import React from 'react';
import { marg, variables } from './styles';

export default React.createClass({
    bgColor() {
        return variables.c.grey.xDark;
    },

    Icon() {
        const { icon, color } = this.props;
        if (icon) {
            return (
                React.cloneElement(icon, {
                    color: color || this.bgColor()
                })
            )
        }
    },

    render() {
        const style = this.style();    
        return (
            <span style={ style.wrapper }>
                <span style={ style.pill }>
                    { this.props.children }
                </span>
                { this.Icon() }
            </span>
        )
    },

    style() {
        const { color } = this.props;
        return {
            wrapper: {
                display: "inline-block",
                ...marg({mr: 2})
            },
            pill: {
                display: "inline-block",
                verticalAlign: "middle",
                padding: "3px",
                lineHeight: "74%",
                fontSize: "8px",
                borderRadius: "9999px",
                color: "white",
                background: color || this.bgColor(),
            }
        }
    },
});
