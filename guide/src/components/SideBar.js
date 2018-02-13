import React from 'react';
import PropTypes from 'prop-types';

class SideBar extends React.Component {
    render() {
        const openWidth = 250;
        const currentWidth = this.props.isOpen ? openWidth : 0;
        const style = {
            wrapper: {
                position: "relative",
                width: openWidth,
            },
            sideBar: {
                position: "fixed",
                top: "0px",
                bottom: "0px",
                width: currentWidth,
                marginTop: "56px",
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
}

SideBar.propTypes = {
    className: PropTypes.string,
};

export default SideBar;
