import React from 'react';
import injectSheet, { withTheme } from "react-jss";
import Element from './Element';

/**
 * Hr renders the proper styling on a horizontal rule.
 */
const styles = theme => {
    return {
        wrapper: {
            border:"0px",
            height: "1px",
            background: "rgba( 0, 0, 0, .1 )",
        }
    }
};

const Hr = ({ classes }) => {
    return (
        <Element root="hr" className={ classes.wrapper}/>
    )
}

export default withTheme(injectSheet(styles)(Hr));
