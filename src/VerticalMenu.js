import React from 'react';
import radium from 'radium';
import { VerticalMenuIcon } from './icons';

const VerticalMenu = React.createClass({
    getInitialState() {
        return({
            isOpen: false,
        })
    },

    componentDidMount: function() {
        document.addEventListener('click', this.handleDocumentClick, false);
    },

    componentWillUnmount: function() {
        document.removeEventListener('click', this.handleDocumentClick, false);
    },

    handleDocumentClick: function(e) {
        let menu = this.refs.root.getDOMNode();
        if (!menu.contains(e.target) && this.state.isOpen) {
            this.setState({ isOpen: false });
        }
    },

    onTouch(e) {
        e.stopPropagation();
        e.preventDefault();
        let isOpen = this.state.isOpen ?
            false : true;
        this.setState({
            isOpen,
        })
    },

    onSelectOption(action, e) {
        e.stopPropagation();
        e.preventDefault();
        action();
        let isOpen = this.state.isOpen ?
            false : true;
        this.setState({
            isOpen
        })
    },

    renderMenuItem(item, i) {
        return (
            <li
                key={i}
                style={{
                    display: "block",
                    padding: "10px 14px",
                    listStyle: "none",
                    ':hover': {
                        background: "#EFEFEF"          
                    },
                }}
                onClick={this.onSelectOption.bind(this, item.action)}
            >
                {item.render}
            </li>
        )
    },

    render() {
        let menuItemList = this.props.menuItemList.map(this.renderMenuItem);
        let showList = this.state.isOpen ?
            "block" : "none";
        let openMenuStyle = this.state.isOpen ?
            {
                background: "#EFEFEF",
                color: "black",
            } :
            { color: "grey" };

        return (
            <div ref="root">
                <div
                    style={{
                        ...openMenuStyle,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "17px",
                        borderRadius: "50%",
                        height: "35px",
                        width: "35px",
                    }}
                    onClick={this.onTouch}
                >
                    <VerticalMenuIcon size={24} style={{top:"0"}} />
                </div>
                <ul 
                    style={{
                        display: showList,
                        width: "200px",
                        position: "absolute",
                        background: "white",
                        right: "40px",
                        top: "0",
                        padding: "6px 0",
                        zIndex: "200",
                        boxShadow: "0 -1px 0 #e5e5e5, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24)",
                    }}
                >
                    {menuItemList}
                </ul>
            </div>
        )
    },
});

export default radium(VerticalMenu);
