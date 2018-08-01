import React from "react";
import { withStyles } from "material-ui/styles";
import classnames from "classnames";
import Element from "./Element";

const styles = theme => ({
    wrapper: {
        maxWidth: "600px",
        lineHeight: "24px",
        marginTop: 0,
    },
});

class P extends React.Component {
    /**
     * P is a typography component for rendering a paragraph with the proper styles.
     */
    static displayName = "P";
    render() {
        const { classes, className, whitespace="mb4", ...rest } = this.props;
        const wrapperClasses = classnames(
            { [className]: className },
            "CY-P",
            classes.wrapper
        );
        return (
            <Element
                root="p"
                {...rest}
                whitespace={whitespace}
                className={wrapperClasses}
            >
                {this.props.children}
            </Element>
        );
    }
}

export default withStyles(styles)(P);
