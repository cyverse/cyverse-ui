import { variables as styleVars } from "../styles";

const sizes = styleVars.l.margSizes;

const marg = props => {
    //
    // For more information on how to use this style util
    // see cyverse-ui/src/style/README.md
    //
    return Object.keys(props).reduce((style, rule) => {
        let metric = props[rule];
        let margin = metric;
        if (typeof metric == "number") {
            margin = metric === 0 ? 0 : sizes[metric - 1];
        }
        switch (rule) {
            case "m":
                style.marginTop = style.marginRight = style.marginBottom = style.marginLeft = margin;
                break;
            case "mt":
                style.marginTop = margin;
                break;
            case "mr":
                style.marginRight = margin;
                break;
            case "mb":
                style.marginBottom = margin;
                break;
            case "ml":
                style.marginLeft = margin;
                break;
            case "ms":
                style.marginRight = style.marginLeft = margin;
                break;
            case "mv":
                style.marginTop = style.marginBottom = margin;
                break;
        }

        return style;
    }, {});
};

export default marg;
