import React from 'react';
import Examples from './ExampleList';
import 'normalize.css';


const ExampleLinks = Examples
    .map( (Component) => {
        let Name = Component.name;
            return (
                <li>
                    <a href={`#${Name}`}> 
                        { Name }
                    </a>
                </li>
            )
    });

const ExampleSection = Examples
    .map( (Component) => {
        let Render = Component.render;
        let Name = Component.name;
            return (
                <section id={ Name }>
                    <h2> { Name } </h2>
                    <Render/>
                </section>
            )
    });

export default React.createClass({

    render() {
        return (
            <div id="bodyWrapper"
                style={{
                    display: "flex"
                }}
            >
                <header/>
                <div id="sideBar" 
                    style={{
                        minWidth: "300px",
                        background: "lightgrey"
                    }}
                >
                    <ul>
                        { ExampleLinks }
                    </ul>
                </div>
                <main style={{
                        maxWidth: "1200px",
                        width: "100%",
                        margin: "auto", 
                        padding: "20px"
                    }}
                >
                    { ExampleSection } 
                </main>
                <footer/>
            </div>
        )
    }
})
