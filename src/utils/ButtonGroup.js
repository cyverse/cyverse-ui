import React from 'react';
import injectSheet from 'react-jss';
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

export default injectSheet(styles)(ButtonGroup)
