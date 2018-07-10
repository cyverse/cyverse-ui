import React from "react";
import { withStyles } from "material-ui/styles";
import classNames from 'classnames';
import { Element } from "cyverse-ui";

const styles = theme => ({
    banner: {
        overFlow: "none",
        height: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: theme.palette.primary.main,
        textShadow: "1px 1px 1px rgba(0,0,0,.3)",
    },
    banner__open: {
        height: "400px",
    },
});

const Banner = ({ classes }) => (
    <Element
        role="banner"
        root="section"
        className={classNames(classes.banner, classes.banner__open)}
    >
        <Element
            style={{ color: "white" }}
            root="h1"
            typography="display3"
            themeColor="primary1Color"
            whitespace="mb3"
        >
            CyVerse UI
        </Element>
        <Element
            style={{ color: "white", maxWidth: "700px" }}
            typography="headline"
        >
            UI components for CyVerse that extend{" "}
            <a
                className="Link"
                style={{ color: "rgba(256,256,256,.7" }}
                href="http://www.material-ui.com/"
                target="_blank"
                title="Material-UI"
            >
                Material-UI.
            </a>
        </Element>
    </Element>
);

export default withStyles(styles)(Banner);
