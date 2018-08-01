import React from 'react';
import { withStyles } from "material-ui/styles";
import Element from '../Element';

const styles = {
    wrapper: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            marginRight: "16px",
        },
        "& > *:last-child": {
            marginRight: 0
        }
    }
}


class ButtonGroup extends React.Component {
    static displayName = "ButtonGroup"
    render() {
        const { children, classes, ...rest } = this.props;
        return (
                <Element { ...rest} className={ `${classes.wrapper} ButtonGroup` }>
                    { children }
                </Element>
        )
    }
}

export default withStyles(styles)(ButtonGroup)
