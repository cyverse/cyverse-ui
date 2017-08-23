import React from 'react';
import PropTypes from 'prop-types';
import { marg, variables } from './styles';

/**
 * A Pill is used to indicate meta data like number of active users or if an item is featured or recommended. It is sort of like a badge but smaller to fit under a title or in the footer of a card.
 */
export default React.createClass({
    displayName: "Pill",
    propTypes: {
        /**
         *The background color.
         */
        color: PropTypes.string,
        /**
         *Displays an Icon, expects MUI or CY-UI icons.
         */
        icon: PropTypes.element,
        /**
         *The text that is displayed, can optionally pass an icon here and style if not MUI or CY-UI.
         */
        children: PropTypes.node,
    },

    getDefaultProps() {
        return {
            color: variables.c.grey.xDark
        }
    },

    Icon() {
        const { icon, color } = this.props;
        if (icon) {
            return (
                React.cloneElement(icon, {
                    color: color,
                    style: {
                        width: "16px",
                        height: "16px",
                    }
                })
            )
        }
    },

    render() {
        const style = this.style();    
        return (
            <span style={ style.wrapper }>
                <span style={ style.flex }>
                    <span style={ style.pill }>
                        { this.props.children }
                    </span>
                    { this.Icon() }
                </span>
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
            flex: {
                display: "flex",
                alignItems: "center"
            },
            pill: {
                display: "inline-block",
                verticalAlign: "middle",
                padding: "3px",
                lineHeight: "74%",
                fontSize: "8px",
                borderRadius: "9999px",
                color: "white",
                background: color,
            }
        }
    },
});
