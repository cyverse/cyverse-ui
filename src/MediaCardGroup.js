import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import Stagger from 'react-css-stagger';
import { marg } from './styles';

const scroll = Scroll.animateScroll;

/**
 * MediaCardGroup is a wrapper for MediaCards that helps to manage opening and closing, scroll animation, and stagger animation of MediaCards as children.
*/
const MediaCardGroup = React.createClass({
    displayName: "MediaCardGroup",
    propTypes: {
        /**
        * If true the stagger animation is enabled
        */
        stagger: PropTypes.bool,
        /**
        * If true auto scrolling when card is expaned is disabled
        */
        noScroll: PropTypes.bool
    },

    getDefaultProps() {
        return {
            stagger: false,
            noScroll: false,
        }
    },

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
          -40 : 40;
        if ( !this.props.noScroll ) {
            setTimeout(() => {scroll.scrollMore(scrollAmount, {
                duration: 60,
            })}, 1);
        }
        let expanded = this.state.expanded === el ?
            null : el;
        this.setState({
            expanded
        })
    },

    render() {
        const { stagger } = this.props;

        const children = React.Children.map(
            this.props.children,
            (child) => React.cloneElement(child, {
                    onExpand: this.onExpand.bind(this, child),
                    isExpanded: this.state.expanded === child,
                }
            )
        );

        const renderList = stagger ? (
                <Stagger
                    transition="MediaCard__animation"
                    delay={70}
                >
                    { children }
                </Stagger>
        ) : children;

        return (
            <div
                style={ marg(this.props) }
                ref="root"
            >
                { renderList }
            </div>
        );
    }
});



export default MediaCardGroup;

