import React from 'react';

export default React.createClass({
    propTypes: {
        message: React.PropTypes.string,
    },

    getInitialState: function() {
        return ({
            showTooltip: false,
        })
    },

    showTooltip() {
        this.setState({
            showTooltip: true,
        });
    },

    hideTooltip() {
        this.setState({
            showTooltip: false,
            animate: {
                opacity: "0",
                bottom: "50px",
            }
        });
    },

    onMouseEnter() {
        if (!this.props.isDisabled) {
            this.showTooltip();
        }
    },

    onMouseLeave() {
        this.hideTooltip();
    },

    onTouch() {
        this.props.onTouch();
        setTimeout( ()=> this.hideTooltip(), 2000);
    },

    tooltip() {
        let message = this.props.message;
        if (this.state.showTooltip) {
            return (
                <span style={this.style.content}>
                    <div>
                        {message}
                    </div>
                    <div style={this.style.originPoint}/>
                </span>
            )
        }
    }, 

    style: {
        content: {
            display: "inline-block",
            transition: "all ease .2s",
            position: "absolute",
            right: "0px",
            left: "0px",
            margin: "auto",
            bottom: "50px",
            padding: "10px",
            background: "black",
            boxShadow: "0px 2px 5px 0px rgba(0,0,0,.6)",
            borderRadius: "3px",
            color: "white",
            textAlign: "center",

        },

        originPoint: {
            position: "absolute",
            right: "0px",
            left: "0px",
            bottom: "-20px",
            margin:"auto",
            width: "10px",
            border: "solid 10px rgba(0,0,0,0)",
            borderTop: "solid 10px black",
        },
    },

    render: function() {

        return (
                <span 
                     style={{position: "relative"}}
                     onMouseEnter={ this.onMouseEnter }
                     onMouseLeave={ this.onMouseLeave }
                > 
                    { this.props.children }
                    { this.tooltip() }
                </span>
        )
    }
});
