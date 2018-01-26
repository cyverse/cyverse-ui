import { variables } from '../styles';

const sizes = variables.l.padSizes;

const Pad = ( props ) => {

    //
    // For more information on how to use this style util
    // see cyverse-ui/src/style/README.md
    //

    return Object.keys(props).reduce((style, prop) => {
        let value = props[prop];

        switch (prop) {
            case "pr":
                style.paddingRight = typeof value == "number"
                    ? sizes[value - 1]
                    : value
                break;
            case "pt":
                style.paddingTop = typeof value == "number"
                    ? sizes[value - 1]
                    : value
                break
            case "pb":
                style.paddingBottom = typeof value == "number"
                    ? sizes[value - 1]
                    : value
                break;
            case "pl":
                style.paddingLeft = typeof value == "number"
                    ? sizes[value - 1]
                    : value
                break;
            case "ps":
                style.paddingRight = typeof value == "number"
                    ? sizes[value -1]
                    : value
                style.paddingLeft = typeof value == "number"
                    ? sizes[value -1]
                    : value
                break;
            case "p":
                style.paddingTop = typeof value == "number"
                    ? sizes[value -1]
                    : value
                style.paddingRight = typeof value == "number"
                    ? sizes[value -1]
                    : value
                style.paddingBottom = typeof value == "number"
                    ? sizes[value -1]
                    : value
                style.paddingLeft = typeof value == "number"
                    ? sizes[value -1]
                    : value
                break;
        }
        return style

    }, {});
}

export default Pad;
