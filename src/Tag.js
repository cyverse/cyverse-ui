import React, { PropTypes } from 'react';
import Radium from 'radium';
import tinyColor from 'tinyColor2';

import { styles, variables } from './styles';
import { CloseIcon } from './icons';
import Tooltip from './Tooltip';

const s = styles;
const v = variables;

const Tag = React.createClass({

    onClose(e) {
        e.stopPropagation();
        e.preventDefault();
        this.props.onClose(e);

    },

    onTouch(e) {
        e.stopPropagation();
        e.preventDefault();
        if (this.props.onTouch) {
            this.props.onTouch(e)
        }
    },

    renderClose() {
        if (this.props.onClose) {
            return (
                <span 
                    onClick={ this.onClose }
                    key={ this.props.children.toString() }
                    style={ this.style().icon }
                >
                     <CloseIcon /> 
                </span>
            )
        }
        return
    },

    render() {
            return (
                <Tooltip message={ this.props.TooltipMessage }>
                    <span 
                        onClick={ this.onTouch }
                        style={ this.style().Tag } 
                    >
                        <span style={ this.style().label }>
                            { this.props.children }
                        </span>
                        { this.renderClose() }
                    </span>
                </Tooltip>
            )
    },

    style() {
        let padding = "4px 8px";
        let labelMargR = this.props.onClose ? 
            10 : 0;

        let background = this.props.background ?
            this.props.background :
            v.c.grey.xXLight;

        let color = tinyColor(background).isLight ?
            "white" : v.c.grey.xXDark;

        return {
            Tag: {
                cursor: "pointer",
                display: "inline-block",
                padding,
                background,
                color,
                borderRadius: 9999,
                fontSize: 11,
                ':hover': {
                    background: tinyColor(background).darken(10).toHexString()
                }
            },
            label: {
                marginRight: labelMargR
            },
            icon: {
                color: "rgba(0, 0, 0, .2)",
                position: "absolute",
                right: 5,
                top: "4",
                ':hover': {
                    color: "white",
                    background: "rgba(0,0,0,.3)",
                    borderRadius: 9999,
                }
            },

        }
    },
});

Tag.propTypes = {
    className: PropTypes.string,
};

export default Radium(Tag);
