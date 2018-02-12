import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Element from "./Element";

/**
 * Section is a layout primitive.
 */
const Section = ({ children, className, whitespace, ...rest }) => {
    const wrapperClasses = classnames(
        { [className]: className },
        "CY-Section"
    );
    return (
        <Element
            {...rest}
            root="section"
            className={wrapperClasses}
            whitespace="pv6"
        >
            {children}
        </Element>
    );
};

Section.propTypes = {
    className: PropTypes.string,
};

export default Section;
