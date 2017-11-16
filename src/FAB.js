import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import { FloatingActionButton } from 'material-ui';
import Tooltip from 'cyverse-ui/Tooltip';
import ContentAdd from 'material-ui/svg-icons/content/add';

/**
* FAB (Floating Action Button) is an extention of the Material-ui FloatingActionButton. See their documentation for full API.

FAB should be used for creating content in place of a new button. It should be positioned absolutely or fixed in either the top or bottom right corners of the view port. In tropospher it is located half covering the bottom edge of the appbar.
 */
const FAB = createClass({
    getInitialState() {
        return {
            isOpen: false
        }
    },

    displayName: "FAB",

    propTypes: {
        /**
         * Override the add icon with your own icon or other element
         */
        children: PropTypes.node,
        /**
         * The list of actions that show when FAB is clicked.
         *
         * For best results pass an array of MUI's `FloatingActionButton`s see FAB example.
         */
        actions: PropTypes.array,
    },

    handleClick() {
        const {
            props: {
                onTouchTap,
                actions
            }, state: { isOpen }
        } = this;

        if (onTouchTap) {
            onTouchTap()
        }
        if (actions) {
            this.setState({
                isOpen: !isOpen
            })
        }
    },
    renderActionList(actions) {
        return (
            <ul style={this.style().actionList}>
                { actions.map( ({ render, label }, i) => (
                    <li style={this.style().li} key={ i }>
                        <Tooltip
                            direction="left"
                            message={label}
                        >
                            { render }
                        </Tooltip>
                    </li>
                ))}
            </ul>
        )
    },

    render() {
        const { secondary, actions } = this.props;
        const background = this.state.isOpen ? "#585858" : null;
        return (
            <div style={ this.style().root }>
                <FloatingActionButton
                    {...this.props}
                    backgroundColor={background}
                    secondary={this.state.isOpen ? false : secondary }
                    onTouchTap={ this.handleClick }
                    children={
                        <ContentAdd style={this.style().icon}/>
                    }
                />
                { actions ? this.renderActionList(actions) : null }
           </div>
       )
    },

    style() {
        return {
            root: {
                position: "relative"
            },
            actionList: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "absolute",
                width: "100%",
                top: "100%",
                listStyle: "none",
                padding: "0",
                transform: this.state.isOpen ? "scale(1)" : "scale(0)",
                transition: "transform ease .1s",
                transformOrigin: "top"
            },
            item: {
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px"
            },
            li: {
                position: "relative",
                padding: "10px 0",
                transform: this.state.isOpen ? "scale(1)" : "scale(0)",
                transition: "transform ease .1s",
            },
            icon: {
                transform: this.state.isOpen ? "rotate(45deg)" : "rotate(0)",
                transition: "transform ease .1s"
            }
        }
    }
});



export default FAB;
