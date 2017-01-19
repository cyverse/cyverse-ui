import React from 'react';
import Scroll from 'react-scroll';

// These two lines are necessary to interop with material-ui. It's supposed to
// be temporary. When the installation no longer mentions it, I suppose these
// can be removed.
// http://www.material-ui.com/#/get-started/installation
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { styles } from './styles';
import theme from './theme';
import 'normalize.css';

import './base.css';

import Examples from './ExampleList';
import { Header, SideBar, ActionList, Figure, Hr, P, Title, Div, Section } from './components';

const scroller = Scroll.scroller;
const ScrollAnchor = Scroll.Element;

export default React.createClass({
    scrollTo(i) {
        let target = Examples[i].name.replace(/\s+/g, '-');
        scroller.scrollTo(target, {
            duration: 1000,
            smooth: true,
        });
    },

    ExampleLinks() {
        return Examples.map( (Component, i) => {
            let Name = Component.name;
                return {
                    label: Name,
                }
        });
    },

    renderExamples() {
        return Examples.map((Component, i) => {
        let Name = Component.name;
        let Description = Component.desc;
        let Render = Component.render;
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
                <SideBar isOpen >
                    <Title h1 title >
                        Component List
                    </Title>
                    <Hr/>
                    <ActionList 
                        list={ this.ExampleLinks() } 
                        onTouch={ this.scrollTo }
                    />
                </SideBar>
                <main style={ this.style().main }>
                    <div style={ this.style().content }>
                        <Section mb={ 7 }>
                            <Title
                                h1
                                display1
                                color={ theme.color.primary }
                            >
                                Troposphere UI
                            </Title>
                            <P subheading>
                            A collection of UI components for Troposphere. The purpose of this collection is to maintain a consistant look and feel across Troposphere while reducing development time and limiting duplication of work. 
                            </P>
                            <P subheading>
                            Unlike a traditional component library the API for these components is very small and intentionally inflexible, this is to enforce design decisions and reduce complexity. 
                            </P>
                        </Section>
                        { this.renderExamples() } 
                    </div>
                </main>
                <footer/>
            </Div>
        )
    },

    style() {
        return {

            header: {
                height: "50px",
            },

            main: {
                background: "whitesmoke",
                width: "100%",
                marginTop: 50, 
                padding: 40,
            },

            content: {
                maxWidth: 1200,
                margin: "auto",
            }
        }
    }
})
