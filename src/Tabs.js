import React from 'react';
import radium from 'radium';
import { ClearFix } from './utils';
import Ink from 'react-ink';
import { styles, variables, marg } from './styles';

const v = variables;

const Tabs = React.createClass({
    displayName: "Tabs",

    propTypes: {
        current: React.PropTypes.number.isRequired,
        tabList: React.PropTypes.array.isRequired,
        onChangeView: React.PropTypes.func
    },

    onTabClick(i) {
        this.props.onTabClick(i);
    },

    UnderLine(isActive) {
        let width = "0%";
        if (isActive) {
            width = "100%";
        }

        return (
            <div style={{
                    transition: "all 0.2s ease",
                    position: "absolute",
                    bottom: "0px",
                    right: "0px",
                    left: "0px",
                    margin: "auto",
                    height: "3px",
                    background: this.props.color,
                    width,
                }}
            />
        )          
    },


    renderLink(item, i) {
        
        let isActive = i === this.props.current;
        let onTabClick = this.onTabClick.bind(this, i);

        let activeStyle = isActive ?
            {
                color: "black",   
            } :
            {
                color: v.c.grey.mid,
            };

        return (
            <li key={i}
                style={{
                    ...this.style().listItem,
                    ...activeStyle,
                }}
                onClick={onTabClick}
            >
                    {item}
                    { this.UnderLine(isActive) }
                    <Ink
                        background={false}/>
            </li>
        )
        

    },

    render() {
        return (
            <ul style={this.style().list}>
                {
                    this.props.tabList
                        .map(this.renderLink)
                }
            </ul>
        )
    },

    style(i) {
        let s = styles;
        let v = variables;

        return {
            list: {
                ...s.boxShadow.sm,
                background: "white",
                display: "block",
                position: "relative",
                padding: "0px 10px",
                ...marg({mb: 4}),

            },
            listItem: {
                ...s.t.button1,
                cursor: "pointer",
                display: "inline-block",
                position: "relative",
                listStyle: "none",
                padding: "15px 0px",
                marginRight: "15px",
                textTransform: "uppercase",
                transition: "all 0.2s ease",
                ':hover': {
                    color: "black",
                    transition: "all 0.2s ease",
                },
            },
        }
    },
});

export default radium(Tabs);
