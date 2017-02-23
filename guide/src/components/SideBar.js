import React, { PropTypes } from 'react';

const SideBar = React.createClass({
    render() {
        const openWidth = 250;
        const currentWidth = this.props.isOpen ? openWidth : 0; 
        const style = {
            wrapper: {
                flex: "1 0 auto",
                position: "relative",
                width: openWidth,
            },
            sideBar: {
                position: "fixed",
                top: "0px",
                bottom: "0px",
                width: currentWidth,
                marginTop: "59px",
                padding: "20px 0",
                background: "#EEEEEE",
                overflowY: "auto", 
            },
        };

        return (
            <nav id="sideBar" 
                style={ style.wrapper }
            >
                <div style={ style.sideBar } >
                    { this.props.children }
                </div>
            </nav>
        )
    }
});

SideBar.propTypes = {
    className: PropTypes.string,
};

export default SideBar;
