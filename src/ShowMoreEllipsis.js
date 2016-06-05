import React from 'react';

export default React.createClass({
    getInitialState: function() {
        return {
            isHovered: false
        }
    },

    onEnter: function() {
        console.log("hovered");
        this.setState({
            isHovered: true
        })
    },

    onLeave: function() {
        console.log("left");
        this.setState({
            isHovered: false
        })
    },

    render: function() {
        let background = this.state.isHovered ? "lightgrey" : "#EFEFEF";
        return (
                <div onMouseEnter={this.onEnter} onMouseLeave={this.onLeave} style={{
                        background: background,
                        borderRadius: "8px", 
                        padding: "0 3px 12px", 
                        display: "inline-block",
                        lineHeight: "0",
                        verticalAlign: "middle",
                        fontSize: "22px",
                    }}>...</div>
        )
    }
})
