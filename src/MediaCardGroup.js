import React, { PropTypes } from 'react';
import Scroll from 'react-scroll';
import { marg } from './styles';

const scroll = Scroll.animateScroll;

const MediaCardGroup = React.createClass({
    getInitialState() {
        return {
            expanded: null
        }
    },

    componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick, false);
    },

    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick, false);
    },

    handleDocumentClick(e) {
        let cards = this.refs.root;
        if (!cards.contains(e.target)) {
            this.setState({ expanded: null });
            }
    },

    onExpand(el) {
        let scrollAmount = this.state.expanded ?
          -30 : 30;
        if ( !this.props.noScroll ) {
            setTimeout(() => {scroll.scrollMore(scrollAmount, {
                duration: 70,
            })}, 2);
        }
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

