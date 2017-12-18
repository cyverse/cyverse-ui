import React from "react";
import PropTypes from "prop-types";
import * as event from "./utils/events";
import filterDomProps from 'filter-react-dom-props';

import { marg, pad } from "./styles";

class Div extends React.Component {
    /**
     * Div is a primitive layout component
     */

    clickHandler = e => {
        const { stopPropagation, onClick } = this.props
        stopPropagation ? event.stopPropagation(e) : null;
        onClick ? onClick(e) : null;
    }

    render() {
        const { styles, children, ...rest} = this.props;
        return (
            <div
                { ...filterDomProps(rest) }
                onClick={ this.clickHandler }
                style={{ ...this.styles(), ...styles}}
            >
                { children }
            </div>
        );
    }

    styles = () => {
        let display = "block";

        if (this.props.flex) {
            display = "flex";
        }

        if (this.props.inlineBlock) {
            display = "inline-block";
        }

        if (this.props.hide) {
            display = "none";
        }

        return {
            display,
            ...marg(this.props),
            ...pad(this.props),
            ...this.props.style
        };
    };
}

Div.propTypes = {
    className: PropTypes.string
};

export default Div;
