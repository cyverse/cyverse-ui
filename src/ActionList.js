import React from 'react';
import Ink from 'react-ink';
import radium from 'radium';

const ActionList = React.createClass({

    render() {
        
        let style = {
            list: {
                padding: "6px 0px"
            },
            listItem: {
                cursor: "pointer",
                display: "block",
                padding: "10px 14px",
                textDecoration: "none",
                color: "#444444",
                ':hover': {
                    background: "rgba(0,0,0,.1)"
                }
            }
        };

        let List = this.props.list.map((option, i) => {
            if (option.href) {
                return (
                    <li 
                        key={i}
                        style={{
                            listStyle: "none", 
                            position: "relative"
                        }}
                    >
                        <a 
                            key={ option.href }
                            style={ style.listItem }
                            href={option.href}
                        >
                            { option.label }
                            <Ink/>
                        </a>    
                    </li>
                )
            }

            return (
                <li style={[ style.listItem,  {listStyle: "none"}]}> { option.label } </li>
                          )
        });
        return (
            <ul style={ style.list }>
                { List }
            </ul>
        )
    }
});

export default radium(ActionList);
