import React from 'react';

const hoverable = (component) => {
    return React.createClass({
        getInitialState() {
            return {
                isHovered: false
            }
        },

        onMouseEnter() {
            this.setState({
                isHovered: true
            });
        },

        onMouseLeave() {
            this.setState({
                isHovered: false
            });
        },

        render() {
            const { isHovered } = this.state;
            return React.createElement(
                component,
                { 
                    isHovered,
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave,
                    ...this.props,
                });
        }
    });
}

export default hoverable;
