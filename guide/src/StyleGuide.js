import 'normalize.css';
import '../assets/css/base.css';
import '../assets/css/github.css';

import React from 'react';
import R from 'ramda';
import Scroll from 'react-scroll';

import { styles } from './styles';
import theme from './theme';

import {  Hr, P, Title, Div, Section } from 'cyverse-ui';
import * as componentDocs from './componentDocs'
import ThemeExList from './themeDocs/ThemeExList';
import { Header, SideNav, Figure, ThemeExamples } from './components';
import IconSection from './iconDocs/IconSection';

const scroller = Scroll.scroller;
const ScrollAnchor = Scroll.Element;

export default React.createClass({
    renderThemeExamples() {
        return  ThemeExList.map( (component, i) => (
                <ThemeExamples
                    key={ i }
                    component={ component }
                    i={ i }
                />
            )
        )
    },

    render() {
        const renderComponentList = R.toPairs(componentDocs)
            .map(item => {
                let Doc = item[1]
                return <Doc key={ item[0] } />
            });
        return (
            <Div
                id="bodyWrapper"
                flex
            >
                <Header
                    style={ this.style().header }
                />
                <SideNav isOpen />
                <main style={ this.style().main }>
                    <div style={ this.style().content }>
                        <Section mb={ 7 }>
                            <Title
                                h1
                                display2
                                color={ theme.color.primary }
                                mb={ 3 }
                            >
                                CyVerse UI
                            </Title>
                            <P subheading>
                                A collection of UI components for CyVerse that extend <a href="http://www.material-ui.com/" target="_blank" title="Material-UI">Material-UI</a> adding components that handle UI patterns within the CyVerse ecosystem not covered by Material-UI.
                            </P>
                        </Section>
                        <Section>
                            <Title
                                h2
                                display1
                                color={ theme.color.primary }
                            >
                                Theming
                            </Title>
                            { this.renderThemeExamples() }
			</Section>
                        <Section>
                            <Title
                                h2
                                display1
                                color={ theme.color.primary }
                            >
                                Components
                            </Title>
                            { renderComponentList }
                        </Section>
                        <IconSection/>
                    </div>
                </main>
                <footer/>
            </Div>
        )
    },

    style() {
        return {
            main: {
                background: "whitesmoke",
                width: "100%",
                marginTop: 59,
                padding: 40,
            },

            content: {
                maxWidth: 1200,
                margin: "auto",
            }
        }
    }
})
