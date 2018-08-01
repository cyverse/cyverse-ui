import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { Element } from "cyverse-ui";

const styles = theme => ({
    wrapper: {
        margin: "0px",
        border: "solid 1px lightgrey",
        padding: "10px",
    },
    figcaption: {
        background: theme.palette.primary.main,
        color: "white",
        padding: "10px",
        margin: "-11px -11px 20px",
    },
});
class Figure extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <figure className={classes.wrapper}>
                <Element
                    root="figcaption"
                    typography="title"
                    className={classes.figcaption}
                >
                        {this.props.caption}
                </Element>
                {this.props.children}
            </figure>
        );
    }
}

Figure.propTypes = {
    className: PropTypes.string,
};

export default withStyles(styles)(Figure);
