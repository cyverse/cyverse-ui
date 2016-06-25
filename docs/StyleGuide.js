import React from 'react';
import Scroll from 'react-scroll';

import { styles } from '../src/styles';
import theme from './theme';
import 'normalize.css';
import './base.css';

import Examples from './ExampleList';
import Header from './Header';
import { ActionList, Hr, P } from '../src';

const scroller = Scroll.scroller;
const Element = Scroll.Element;


const ExampleSection = Examples
    .map( (Component, i) => {
        let Name = Component.name;
        let Description = Component.desc;
        let Render = Component.render;
        return (
                <section
                    key={i}
                    style={{
                        position: "relative", 
                        marginBottom: "100px"
                    }}
                >
                    <div
                        style={{
                            position: "absolute", 
                            top:"-50px" 
                        }}
                    >
                        <Element
                            name={ Name.replace(/\s+/g, '-') }
                        />
                    </div>
                    <Hr style={{ marginBottom: "50px" }}/>
                    <h2 
                        style={{ 
                            ...styles.t.headline,
                            color: theme.color.primary,
                        }}
                    > 
                        { Name } 
                    </h2>
                    <div> 
                        { Description } 
                    </div>
                    
                    <div style={{
                            border: "solid 1px lightgrey",
                            padding: "10px",
                        }}
                    >
                        <div style={{
                                ...styles.t.title,
                                background: theme.color.primary,
                                color: "white",
                                padding: "10px",
                                margin: "-11px -11px 20px",
                            }}
                        >
                            Example
                        </div>
                        <Render/>
                    </div>
                </section>
            )
    });

export default React.createClass({
    componentDidMount() {
        console.log(this.ExampleLinks());
    },

    scrollTo(i) {
        let target = Examples[i].name.replace(/\s+/g, '-');
        console.log(target);
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
            <div id="bodyWrapper"
                style={{
                    display: "flex"
                }}
            >
                <Header />
                <div id="sideBar" 
                    style={{
                        position: "fixed",
                        top: "0px",
                        bottom: "0px",
                        minWidth: "250px",
                        marginTop: "50px",
                        padding: "20px",
                        background: "#EEEEEE",
                    }}
                >
                    <h3 style={ styles.t.title }>Component List</h3>
                    <Hr/>
                    <ActionList 
                        list={ this.ExampleLinks() } 
                        onTouch={ this.scrollTo }
                    />
                </div>
                
                <div id="sideBarSpace"
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
                    <h1 
                        style={{
                            ...styles.t.display1,
                            color: theme.color.primary,
                        }}
                    >
                        Troposphere UI
                    </h1>
                    <P subheading>
                    A collection of UI components for Troposphere. The purpose of this collection is to maintain a consistant look and feel across Troposphere while reducing development time and limiting duplication of work. 
                    </P>
                    <P 
                        style={{ 
                            marginBottom: "100px" 
                        }}
                        subheading
                    >
                    Unlike a traditional component library the API for these components is very small and intentionally inflexible, this is to enforce design decisions and reduce complexity. 
                    </P>
                        { ExampleSection } 
                </main>
                <footer/>
            </div>
        )
    }
})
