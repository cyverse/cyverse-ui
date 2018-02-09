import React from "react";
import classnames from "classnames";
import Element from "./Element";

const Paper = ({
    className,
    elevation = 3,
    background = "white",
    ...rest
}) => {
    const wrapperClasses = classnames(
        { [className]: className },
        "Paper"
    );
    return (
        <Element
            {...rest}
            className={wrapperClasses}
            elevation={elevation}
            background={background}
        />
    );
};

export default Paper;
