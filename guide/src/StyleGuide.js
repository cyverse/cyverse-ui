import React from 'react';
import Scroll from 'react-scroll';

import { styles } from './styles';
import theme from './theme';
import 'normalize.css';

import './base.css';

import Examples from './ExampleList';
import { ActionList, Header, Figure, Hr, P, Title, Div, Section } from './components';

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
                <nav id="sideBar" 
                    style={ this.style().sideBar }
                >
                    <Title
                        h1
                        title
                    >
                        Component List
                    </Title>
                    <Hr/>
                    <ActionList 
                        list={ this.ExampleLinks() } 
                        onTouch={ this.scrollTo }
                    />
                </nav>
                <main style={ this.style().main }>
                    <container style={{ maxWidth: "800px", display: "block" }}>
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
                    </container>
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

            sideBar: {
                position: "fixed",
                top: "0px",
                bottom: "0px",
                width: "250px",
                marginTop: "50px",
                padding: "20px",
                background: "#EEEEEE",
                overflowY: "auto", 
            },

            main: {
                background: "whitesmoke",
                width: "100%",
                margin: "50px 0px 0px 250px", 
                padding: "40px"
            },
        }
    }
})
