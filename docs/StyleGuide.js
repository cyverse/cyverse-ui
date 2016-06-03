import React from 'react';
import Examples from './ExampleList';
import { ActionList } from '../src';
import { Hr } from '../src';
import { Github } from '../src/icons';
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
                    <h2> { Name } </h2>
                    <Hr/>
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
                <header 
                    style={{
                        padding: "15px", 
                        background: "#0971AB", 
                        position: "fixed", 
                        width: "100%", 
                        zIndex: "99999"
                    }} 
                >
                    <div style={{float: "right"}}>
                        <Github size="30" fill="white"/>
                    </div>
                </header>

                <div id="sideBar" 
                    style={{
                        position: "fixed",
                        top: "0",
                        bottom: "0",
                        minWidth: "250px",
                        marginTop: "60px",
                        padding: "20px",
                        background: "#EEEEEE",
                        boxShadow: "rgba(0, 0, 0, 0.498039) 0px 1px 4px"
                    }}
                >
                    <h3>Component List</h3>
                    <Hr/>
                    <ActionList list={ ExampleLinks } />
                </div>
                
                <div id="sideBarSpace"
                    style={{
                        position: "reletive",
                        width: "400px"
                    }}
                />
                <main style={{
                        maxWidth: "1200px",
                        width: "100%",
                        margin: "60px auto", 
                        padding: "20px"
                    }}
                >
                    <h1>Troosphere UI</h1>
                    <Hr/>
                    <p>A collection of UI components for Troposphere.</p>
                    { ExampleSection } 
                </main>
                <footer/>
            </div>
        )
    }
})
