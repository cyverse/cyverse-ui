module.exports = name =>
`import React from 'react';
import PropTypes from 'prop-types';
import { createStyleSheet } from 'jss-theme-reactor';
import getStyleManager from "./styles/getStyleManager";

// Define static styles here.
// Each key of the returned object will be available as a className below.
const styleSheet = () => (
    createStyleSheet('${name}',
        theme => ({
            wrapper: {
                color: "tomato",
                fontSize: "23px"
            }
        }
    ))
);
/**
 * ${name} is used to...
 */
const ${name} = (props) => {

    // Generate classes object and render corresponding style definitions in header.
    const classes = getStyleManager({})
    .render(styleSheet());

    return(
        <div className={ classes.wrapper }>
            Hello World
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

export default ${name}
`;
