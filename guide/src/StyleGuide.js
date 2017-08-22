import React from 'react';
import Scroll from 'react-scroll';
import {  Hr, P, Title, Div, Section } from 'cyverse-ui'; 
import 'cyverse-ui/styles/animation.css'

import { styles } from './styles';
import theme from './theme';
import 'normalize.css';
import './base.css';
import './github.css';

import ComponentExList from './ComponentExList';
import ThemeExList from './ThemeExList';
import { Header, SideNav, Figure, ThemeExamples } from './components';
import MarkdownElement from './components/MarkdownElement';
import IconSection from './components/IconSection';

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

    renderComponentExamples() {
        return ComponentExList.map((Component, i) => {
        let Name = Component.name;
        let Description = Component.desc;
        let Render = Component.render;
        let code = Component.code;
        return (
                <Section
                    key={ i }
                    mb={ 7 }
                >
                    <ScrollAnchor
                        name={ Name.replace(/\s+/g, '-') }
                        style={{
                            position: "absolute", 
                            top:"-50px" 
                        }}
                    />

                    <Hr mb={ 6 }/>
                    <Title 
                        h1
                        headline
                        color={ theme.color.primary }
                    > 
                        { Name } 
                    </Title>
                    <Div> 
                        { Description } 
                    </Div>
                    <Figure
                        caption={ `${Name} Example` }
                        color={ theme.color.primary }
                    >
                        <Render/>
                        <MarkdownElement
                            style={{
                                overflow: "scroll",
                            }}
                            text={ code }
                        />

                    </Figure>
                </Section>
            )
        });
    },

    render() {
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
                            { this.renderComponentExamples() } 
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
