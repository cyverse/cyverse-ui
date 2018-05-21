import React from "react";
import R from "ramda";
import classNames from "classnames";
import Scroll from "react-scroll";
import injectSheet from "react-jss";
import { withStyles } from "material-ui/styles";

import { Hr, P, Title, Element } from "cyverse-ui";
import * as componentDocs from "./componentDocs";
import ThemeExList from "./themeDocs/ThemeExList";
import { Header, SideNav, Figure, ThemeExamples } from "./components";
import IconSection from "./iconDocs/IconSection";
import Installation from "./components/Instalation";

const scroller = Scroll.scroller;
const ScrollAnchor = Scroll.Element;

const styles = theme => ({
    wrapper: {
        //color: theme.palette.textColor,
    },
    appContainer: {
        display: "flex",
    },
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
    main: {
        flex: 1,
        background: "whitesmoke",
        width: "0",
        padding: "100px 20px",
    },
    content: {
        maxWidth: 1200,
        margin: "auto",
    },
});

class StyleGuide extends React.Component {
    state = {
        bannerOpen: true,
    };
    renderThemeExamples = () => {
        return ThemeExList.map((component, i) => (
            <ThemeExamples key={i} component={component} i={i} />
        ));
    };

    render() {
        const { classes } = this.props;
        const renderComponentList = R.toPairs(componentDocs).map(
            item => {
                let Doc = item[1];
                return <Doc key={item[0]} />;
            }
        );
        return (
            <Element className={classes.wrapper} id="bodyWrapper">
                <Header />
                <Element
                    root="section"
                    className={classNames(classes.banner, {
                        [classes.banner__open]: this.state.bannerOpen,
                    })}
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
                        UI components for CyVerse that
                        extend{" "}
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
                <section className={classes.appContainer}>
                    <SideNav
                        onClick={() => {
                            this.setState({ bannerOpen: false });
                        }}
                        isOpen
                    />
                    <main className={classes.main}>
                        <div className={classes.content}>
                        <section>
                            <Installation/>
                        </section>
                                <section>
                                    <Element
                                        root="h2"
                                        typography="display2"
                                        themeColor="primary1Color"
                                    >
                                        Theming
                                    </Element>
                                    {this.renderThemeExamples()}
                                </section>
                            <section>
                                <Element
                                    root="h2"
                                    typography="display2"
                                    themeColor="primary1Color"
                                >
                                    Components
                                </Element>
                                {renderComponentList}
                            </section>
                            <IconSection />
                        </div>
                    </main>
                    <footer />
                </section>
            </Element>
        );
    }
}
export default withStyles(styles)(StyleGuide);
