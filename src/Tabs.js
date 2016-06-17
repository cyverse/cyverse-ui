import React from 'react';
import { ClearFix } from './utils';
import { styles, variables } from './styles';

export default React.createClass({
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
                color: variables.grey.mid,
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
            </li>
        )
        

    },

    render() {
        return (
            <ClearFix>
                <ul style={this.style().list}>
                    {
                        this.props.tabList
                            .map(this.renderLink)
                    }
                </ul>
            </ClearFix>
        )
    },

    style(i) {
        let s = styles;
        let v = variables;

        return {
            list: {
                ...s.boxShadow.sm,   
                display: "block",
                position: "relative",
                padding: "0px 10px",

            },
            listItem: {
                ...s.t.body1,
                cursor: "pointer",
                display: "inline-block",
                position: "relative",
                listStyle: "none",
                padding: "10px 0px",
                marginRight: "15px",
                textTransform: "uppercase",
                transition: "all 0.2s ease",
            },
        }
    },
});
