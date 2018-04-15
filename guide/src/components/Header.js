import React from "react";
import injectSheet, { withTheme } from "react-jss";

import { GithubIcon } from "cyverse-ui/icons";
import { pad } from "cyverse-ui/styles";
import { Element } from "cyverse-ui";
import { CyverseLogo } from "../icons";

const styles = {
    wrapper: {
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        width: "100%",
        zIndex: "700",
    },
    GithubLink: {
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "40px",
        width: "40px",
        "&:hover, &:focus": {
            background: "rgba(0,0,0,.2)",
            outline: "none",
        },
    },
};
const Header = ({ classes, ...rest }) => (
    <Element
        {...rest}
        className={classes.wrapper}
        root="header"
        themeBackground="primary1Color"
        whitespace="ps2"
    >
        <CyverseLogo fill="white" size="200" />
        <a
            className={classes.GithubLink}
            href="https://github.com/cyverse/cyverse-ui"
        >
            <GithubIcon size="32" style={{ fill: "white" }} />
        </a>
    </Element>
);

export default injectSheet(styles)(Header);
