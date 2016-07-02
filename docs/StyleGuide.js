import React from 'react';
import Scroll from 'react-scroll';

import { styles } from '../src/styles';
import theme from './theme';
import 'normalize.css';
import './base.css';

import Examples from './ExampleList';
import Header from './Header';
import Figure from './Figure';
import { ActionList, Hr, P, Title, Div, Section } from '../src';

const scroller = Scroll.scroller;
const ScrollAnchor = Scroll.Element;


const ExampleSection = Examples
    .map( (Component, i) => {
        let Name = Component.name;
        let Description = Component.desc;
        let Render = Component.render;
        return (
                <Section
                    key={i}
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

export default React.createClass({
    scrollTo(i) {
        let target = Examples[i].name.replace(/\s+/g, '-');
        scroller.scrollTo(target, {
            duration: 1000,
            smooth: true,
        });
    },

    ExampleLinks() {
        return Examples
            .map( (Component, i) => {
                let Name = Component.name;
                    return {
                        label: Name,
                    }
            });
    },

    render() {
        return (
            <Div 
                id="bodyWrapper"
                flex
            >
                <Header />
                <nav id="sideBar" 
                    style={{
                        position: "fixed",
                        top: "0px",
                        bottom: "0px",
                        width: "250px",
                        marginTop: "50px",
                        padding: "20px",
                        background: "#EEEEEE",
                    }}
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
                
                <div id="sideBarSpacer"
                    style={{
                        position: "reletive",
                        width: "300px"
                    }}
                />
                <main style={{
                        background: "whitesmoke",
                        maxWidth: "1200px",
                        width: "100%",
                        margin: "50px auto", 
                        padding: "20px 40px"
                    }}
                >
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
                    { ExampleSection } 
                </main>
                <footer/>
            </Div>
        )
    }
})
