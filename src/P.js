import React from 'react';
import injectSheet, { withTheme } from "react-jss";
import Element from "./Element";

const styles = theme => ({
    wrapper: {
        maxWidth: "600px",
        lineHeight: "24px",
        margin: 0,
        ...theme.whitespace.mb3,
    }
})

class P extends React.Component {
    /**
     * P is a typography component for rendering a paragraph with the proper styles.
     */
    static displayName = "P"
    render() {
        const { classes } = this.props;
        return (
            <Element
                root="p"
                whitespace="mb3"
                className={classes.wrapper}
            >
                { this.props.children }
            </Element>
        )
    }
}

export default withTheme(injectSheet(styles)(P));
