import React from 'react';
import PropTypes from 'prop-types';
import Element from './Element';

/**
 * Section is a layout primitive.
 */
const Section = ({ children, ...rest }) => {
    return (
        <Element { ...rest } root="section" whitespace={[ "pv6" ]}>
            { children }
        </Element>
    );
}

Section.propTypes = {
    className: PropTypes.string,
};

export default Section;
