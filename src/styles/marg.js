import React from 'react';
import { variables } from '../styles';

const sizes = variables.l.margSizes;

const marg = ( props ) => {

    //
    // For more information on how to use this style util
    // see cyverse-ui/src/style/README.md
    //

    return Object.keys(props).reduce((style, prop) => {
        let value = props[prop];

        let cssField;
        switch (prop) {
            case "mr":
                style.marginRight = typeof value == "number"
                    ? sizes[value - 1]
                    : value
                break;
            case "mb":
                style.marginBottom = typeof value == "number"
                    ? sizes[value - 1]
                    : value
                break;
            case "ml":
                style.marginLeft = typeof value == "number"
                    ? sizes[value - 1]
                    : value
                break;
            case "ms":
                style.marginRight = typeof value == "number"
                    ? sizes[value -1] * .5
                    : value
                style.marginLeft = typeof value == "number"
                    ? sizes[props.ms -1] * .5
                    : value
        }

        return style

    }, {});
}

export default marg;
