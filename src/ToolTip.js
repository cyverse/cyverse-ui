import React from 'react';
import { ClearFix } from './utils';
import { Motion, spring } from 'react-motion';

export default React.createClass({
    propTypes: {
        message: React.PropTypes.string,
    },

    getInitialState() {
        return ({
            showTooltip: false,
        })
    },

    showTooltip() {
        if (this.props.message) {
            this.setState({
                showTooltip: true,
            });
        }
    },

    hideTooltip() {
        this.setState({
            showTooltip: false,
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

    directionStyle() {
        let direction = this.props.direction;
        switch(direction) {
            case "top":
                return {
                    transformOrigin: "0% 100%",
                    bottom: "calc(100% + 5px)",
                }
            case "right":
                return {
                    transformOrigin: "0% 50%",
                    bottom: "10%",
                    left: "calc(100% + 5px)",
                }
            case "bottom":
                return {
                    transformOrigin: "0% 0%",
                    top: "calc(100% + 5px)",
                }
            case "left":
                return {
                    transformOrigin: "100% 50%",
                    bottom: "10%",
                    right: "calc(100% + 5px)",
                }
            default:
                return {
                    transformOrigin: "0 100%",
                    bottom: "calc(100% + 5px)",
                }
        }
    },

    style() {
        return {
            content: {
                ...this.directionStyle(),
                zIndex: "999999999999",
                display: "block",
                padding: "5px",
                background: "black",
                boxShadow: "0px 2px 5px 0px rgba(0,0,0,.6)",
                borderRadius: "3px",
                color: "white",
                fontSize: "11px",
                textAlign: "center",
                whiteSpace: "nowrap",
                position: "absolute",
            }
        }
    },

    render() {

        return (
                <span
                    style={{
                        position: "relative",
                        display: "inline-block"
                    }}
                    onMouseEnter={ this.onMouseEnter }
                    onMouseLeave={ this.onMouseLeave }
                > 
                        { this.props.children }
                        <Motion
                            style={{
                                x: spring(
                                    (
                                        this.state.showTooltip ? 
                                            1 : 0
                                    ), 
                                    { 
                                        stiffness: 360, 
                                        damping: 16 
                                    }
                                ) 
                            }}
                        >
                            {({x})=> {
                                return (
                                    <span style={{ ...this.style().content, opacity: x, transform: `scale(${x})`}}>
                                        <div>
                                            { this.props.message }
                                        </div>
                                    </span>
                                )
                            }}
                        </Motion>
                </span>
        )
    }
});
