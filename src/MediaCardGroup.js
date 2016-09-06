import React, { PropTypes } from 'react';
import { marg } from './styles';

const MediaCardGroup = React.createClass({
    getInitialState() {
        return {
            expanded: null
        }
    },
    
    componentDidMount: function() {
        document.addEventListener('click', this.handleDocumentClick, false);
    },

    componentWillUnmount: function() {
        document.removeEventListener('click', this.handleDocumentClick, false);
    },

    handleDocumentClick: function(e) {
        let cards = this.refs.root;
        if (!cards.contains(e.target)) {
            this.setState({ expanded: null });
        }
    },

    onExpand(el) {
        let expanded = this.state.expanded === el ?
            null : el;
        this.setState({
            expanded
        })
    },

    render() {
        let children = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                    onExpand: this.onExpand.bind(this, child),
                    isExpanded: this.state.expanded === child,
                })
            );
        return (
            <div 
                style={ marg({ ...this.props}) }
                ref="root"
            >
                { children } 
            </div>
        );
    }
});

MediaCardGroup.propTypes = {
    className: PropTypes.string,
};

export default MediaCardGroup;

