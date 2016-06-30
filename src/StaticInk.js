import React from 'react';

export default React.createClass({
    render() {
        return (
            <span 
                style={ this.style() }

            />
        )
    },

    style() {
        let background = this.props.isFocused? 
            "rgba(0,0,0,.1)" :
            "rgba(0,0,0,0)";
        let scale = this.props.isFocused? 
            "scale(1.75)" : 
            "scale(1)";
        let size = "100%"
        let width = size;
        let height = size;
        return {
            display: "block",
            transition: "all ease .3s",
            position: "absolute",
            transform: scale,
            transformOrigin: "50% 50%",
            background,
            width,
            height,
            borderRadius: "999px"
        }
    }
})
