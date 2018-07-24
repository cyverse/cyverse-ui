import React from "react";
import R from "ramda";
import { withStyles } from "material-ui/styles";
import * as componentDocs from "./componentDocs";
import { Header, SideNav } from "./components";
import IconSection from "./iconDocs/IconSection";
import Installation from "./components/Installation";
import Banner from "./components/Banner";
import Theming from "./components/Theming";

import { BrowserRouter as Router, Route } from "react-router-dom";

const styles = {
    appContainer: {
        display: "flex",
    },
    main: {
        flex: 1,
        background: "whitesmoke",
        width: "0",
        padding: "48px",
    },
    content: {
        maxWidth: 1200,
        margin: "auto",
    },
};

const ComponentRoutes = () =>
    R.toPairs(componentDocs)
        .map(item => {
            const Doc = item[1];
            const componentPath = item[0]
                .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
                .replace(
                    /([A-Z])/g,
                    ([letter]) => `-${letter.toLowerCase()}`
                );
            return (
                <Route
                    path={`/components/${componentPath}`}
                    component={Doc}
                />
            );
        })
        .map(route => route);

class StyleGuide extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Router>
                <section>
                    <Header />
                    <Route exact path="/" component={Banner} />
                    <section className={classes.appContainer}>
                        <SideNav
                            onClick={() => {
                                this.setState({ bannerOpen: false });
                            }}
                            isOpen
                        />
                        <main className={classes.main}>
                            <section className={classes.content}>
                                <Route
                                    exact
                                    path="/getting-started"
                                    component={Installation}
                                />
                                <Route
                                    exact
                                    path="/"
                                    component={Installation}
                                />
                                <Route
                                    exact
                                    path="/theming"
                                    component={Theming}
                                />
                                <ComponentRoutes />
                                <Route
                                    exact
                                    path="/icons"
                                    component={IconSection}
                                />
                            </section>
                        </main>
                        <footer />
                    </section>
                </section>
            </Router>
        );
    }
}
export default withStyles(styles)(StyleGuide);
