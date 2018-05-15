import React from "react";
import { Element } from "cyverse-ui";
import classnames from "classnames";
import PropTypes from "prop-types";

/**
 * MediaCardGroup is a wrapper for MediaCards that helps to manage opening and closing animation of MediaCards as children.
 */
class MediaCardGroup extends React.Component {
    static displayName = "MediaCardGroup";

    static propTypes = {
        /**
         * Expects children to have an "expanded" and "onExpand" prop to be controlled
         */
        children: PropTypes.node,
    };

    state = {
        expanded: null,
    };

    componentDidMount() {
        document.addEventListener(
            "click",
            this.handleDocumentClick,
            false
        );
    }

    componentWillUnmount() {
        document.removeEventListener(
            "click",
            this.handleDocumentClick,
            false
        );
    }

    handleDocumentClick = e => {
        let cards = this.group;
       /* if (!cards.contains(e.target)) {
            this.setState({ expanded: null });
        } */
    };

    onExpand = el => {
        let expanded = this.state.expanded === el ? null : el;
        this.setState({
            expanded,
        });
    };

    render() {
        const { className, children, ...rest } = this.props;
        const { expanded } = this.state;
        const wrapperClasses = classnames(
            { [className]: className },
            "CY-MediaCardGroup"
        );
        const renderChildren = React.Children.map(children, child =>
            React.cloneElement(child, {
                onExpand: this.onExpand.bind(this, child),
                isExpanded: expanded
                    ? expanded.key === child.key
                    : false,
            })
        );

        return (
            <Element {...rest} ref={ group => this.group = group} className={wrapperClasses}>
                {renderChildren}
            </Element>
        );
    }
}

export default MediaCardGroup;
