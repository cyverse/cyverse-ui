import React from 'react';
import { styles, marg } from 'cyverse-ui/styles';
import Ink from 'react-ink';
import radium from 'radium';

const ActionList = React.createClass({

    onTouch(i) {
        this.props.onTouch(i)
    },

    List(option, i) {
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
                        style={ this.style().listItem }
                        href={option.href}
                    >
                        { option.label }
                        <Ink/>
                    </a>    
                </li>
            )
        }

        return (
            <li 
                key={ i }
                style={{ 
                    ...this.style().listItem,  
                    listStyle: "none"
                }}
                onClick={ this.onTouch.bind(this, i) }
            > 
                { option.label } 
                <Ink/>
            </li>
        )
    },

    render() {
        
        return (
            <ul style={ this.style().list }>
                { this.props.list.map(this.List) }
            </ul>
        )
    },

    style() {

        return {
            list: {
                padding: "6px 0px",
                ...marg(this.props),
            },
            listItem: {
                ...styles.t.button1,
                position: "relative",
                cursor: "pointer",
                display: "block",
                padding: "10px 14px",
                textDecoration: "none",
                color: "#444444",
                ':hover': {
                    background: "rgba(0,0,0,.1)"
                }
            }
        }
    }
});

export default radium(ActionList);
