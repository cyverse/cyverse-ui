import "normalize.css";
import "../assets/css/base.css";
import "../assets/css/github.css";

import React from "react";
import R from "ramda";
import Scroll from "react-scroll";

import { Hr, P, Title, Element } from "cyverse-ui";
import * as componentDocs from "./componentDocs";
import ThemeExList from "./themeDocs/ThemeExList";
import { Header, SideNav, Figure, ThemeExamples } from "./components";
import IconSection from "./iconDocs/IconSection";

const scroller = Scroll.scroller;
const ScrollAnchor = Scroll.Element;

export default class extends React.Component {
    renderThemeExamples = () => {
        return ThemeExList.map((component, i) => (
            <ThemeExamples key={i} component={component} i={i} />
        ));
    };

    render() {
        const renderComponentList = R.toPairs(componentDocs).map(
            item => {
                let Doc = item[1];
                return <Doc key={item[0]} />;
            }
        );
        return (
            <Element style={{ display: "flex" }} id="bodyWrapper">
                <Header/>
                <SideNav isOpen />
                <main style={this.style().main}>
                    <div style={this.style().content}>
                        <Element root="section" whitespace="mb7">
                            <Element
                                root="h1"
                                typography="display2"
                                color="primary1Color"
                                whitespace="mb3"
                            >
                                CyVerse UI
                            </Element>
                            <P subheading>
                                A collection of UI components for
                                CyVerse that extend{" "}
                                <a
                                    className="Link"
                                    href="http://www.material-ui.com/"
                                    target="_blank"
                                    title="Material-UI"
                                >
                                    Material-UI
                                </a>{" "}
                                adding components that handle UI
                                patterns within the CyVerse ecosystem
                                not covered by Material-UI.
                            </P>
                        </Element>
                        <section>
                            <Element
                                root="h2"
                                typography="display1"
                                color="primary1Color"
                            >
                                Theming
                            </Element>
                            {this.renderThemeExamples()}
                        </section>
                        <section>
                            <Element
                                root="h2"
                                typography="display1"
                                color="primary1Color"
                            >
                                Components
                            </Element>
                            {renderComponentList}
                        </section>
                        <IconSection />
                    </div>
                </main>
                <footer />
            </Element>
        );
    }

    style = () => {
        return {
            main: {
                flex: 1,
                background: "whitesmoke",
                width: "0",
                marginTop: 56,
                padding: 40,
            },

            content: {
                maxWidth: 1200,
                margin: "auto",
            },
        };
    };
}
