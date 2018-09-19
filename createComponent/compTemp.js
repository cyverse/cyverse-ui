module.exports = name =>
`import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "material-ui";
import classnames from "classnames";

// Define static styles here.
// Each key of the returned object will be available as a className below under the classes prop.
const styleSheet = theme => ({
    wrapper: {
        color: "tomato",
        fontSize: "23px"
    }
});

/**
 * ${name} is used to...
 */
const ${name} = ({children, classes, className}) => {

    const wrapperClasses = classnames(
        { [className]: className },
        "CY-${name}",
        classes.wrapper
    );

    return(
        <div className={wrapperClasses}>
            {children}
        </div>
    )
};
${name}.displayName = "${name}";

${name}.propTypes = {
    /**
     * Expects...
     */
    children: PropTypes.node
};

export default withStyles(styleSheet)(${name})
`;
