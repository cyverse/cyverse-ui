import React from 'react';
import Examples from './ExampleList';
import Header from './Header';
import { ActionList } from '../src';
import { Hr } from '../src';
import 'normalize.css';
import './base.css';

const ExampleLinks = Examples
    .map( (Component) => {
        let Name = Component.name;
            return {
                label: Name,
                href: `#${Name.replace(/\s+/g, '-')
                    .toLowerCase()}`
            }
    });

const ExampleSection = Examples
    .map( (Component) => {
        let Name = Component.name;
        let Description = Component.desc;
        let Render = Component.render;
            return (
                <section 
                    id={ Name.replace(/\s+/g, '-')
                        .toLowerCase()}
                >
                    <Hr/>
                    <h2> { Name } </h2>
                    <p> { Description } </p>
                    <Render/>
                </section>
            )
    });

export default React.createClass({
    componentDidMount() {
        console.log(ExampleLinks);
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
                        top: "0",
                        bottom: "0",
                        minWidth: "250px",
                        marginTop: "50px",
                        padding: "20px",
                        background: "#EEEEEE",
                    }}
                >
                    <h3>Component List</h3>
                    <Hr/>
                    <ActionList list={ ExampleLinks } />
                </div>
                
                <div id="sideBarSpace"
                    style={{
                        position: "reletive",
                        width: "300px"
                    }}
                />
                <main style={{
                        maxWidth: "1200px",
                        width: "100%",
                        margin: "50px auto", 
                        padding: "20px 40px"
                    }}
                >
                    <h1>Troosphere UI</h1>
                    <p>
                    A collection of UI components for Troposphere. The purpose of this collection is to maintain a consistant look and feel across Troposphere while reducing development time and limiting duplication of work. 
                    </p>
                    <p>
                    Unlike a traditional component library the API for these components is very small and intentionally inflexible, this is to enforce design decisions and reduce complexity. 
                    </p>
                    { ExampleSection } 
                </main>
                <footer/>
            </div>
        )
    }
})
