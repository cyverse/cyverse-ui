import React from "react";
import classnames from "classnames";
import Element from "./Element";

const Paper = ({
    className,
    elevation = 3,
    themeBackground = "canvasColor",
    ...rest
}) => {
    const wrapperClasses = classnames(
        { [className]: className },
        "CY-Paper"
    );
    return (
        <Element
            {...rest}
            className={wrapperClasses}
            elevation={elevation}
            themeBackground={themeBackground}
        />
    );
};

export default Paper;
