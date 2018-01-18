import React from "react";
import PropTypes from "prop-types";
import { marg, pad } from "./styles";

class Section extends React.Component {
    /**
     * Section is a layout primitive.
     */

    render() {
        return (
            <section style={this.styles()}>
                {this.props.children}
            </section>
        );
    }

    styles = () => {
        let displayType = this.props.flex
            ? { display: "flex" }
            : { display: "block" };

        return {
            position: "relative",
            ...displayType,
            ...marg(this.props),
            ...pad(this.props),
            ...this.props.styles,
        };
    };
}

Section.propTypes = {
    className: PropTypes.string,
};

export default Section;
