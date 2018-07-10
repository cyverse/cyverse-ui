import React from "react";
import { withStyles } from "material-ui/styles";

import { GithubIcon } from "cyverse-ui/icons";
import { pad } from "cyverse-ui/styles";
import { Element } from "cyverse-ui";
import { CyverseLogo } from "../icons";
import { Link } from "react-router-dom";

const styles = theme => ({
    wrapper: {
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: "700",
        background: theme.palette.primary.main
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
});

const Header = ({ classes, ...rest }) => (
    <Element
        {...rest}
        className={classes.wrapper}
        root="header"
        themeBackground="primary1Color"
        whitespace="ps2"
    >
        <Link to="/">
            <CyverseLogo fill="white" size="200" />
        </Link>
        <a
            className={classes.GithubLink}
            href="https://github.com/cyverse/cyverse-ui"
        >
            <GithubIcon size="32" style={{ fill: "white" }} />
        </a>
    </Element>
);

export default withStyles(styles)(Header);
