import React from "react";
import { withStyles} from "material-ui/styles";
import classnames from "classnames";
import Element from "./Element";

const styles = theme => ({
    wrapper: {
        background: theme.palette.common.white
    }
})
const Paper = ({
    className,
    elevation = 3,
    classes,
    ...rest
}) => {
    const wrapperClasses = classnames(
        { [className]: className },
        "CY-Paper",
        classes.wrapper,
    );
    return (
        <Element
            {...rest}
            className={wrapperClasses}
            elevation={elevation}
        />
    );
};

export default withStyles(styles)(Paper);
