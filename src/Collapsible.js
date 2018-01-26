import React, { Component } from "react";
import PropTypes from "prop-types";
/**
 * Collapsible is a state machine for building collapsible components.
 *
 * It uses the [render prop pattern](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce) and makes no assumptions about your structure by returning what you pass as a render function with the props object to manage your component's state passed as the single argument.
 * One can either use `CollapsibleSummary` and `CollapsibleDetail` to build a quick collapsible component or pass anything you want to build custom collapsible components.
 **/
class Collapsible extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.initOpen ? true : false
        };
    }

    onToggleOpen = () =>
        this.setState({ isOpen: !this.state.isOpen });

    render() {
        const { render } = this.props;
        const { isOpen } = this.state;
        return render({ isOpen, onToggleOpen: this.onToggleOpen });
    }
}

Collapsible.displayName = "Collapsible";

Collapsible.propTypes = {
    /**
     * Expects a render function that returns what you want Collapsible to control. The props `onToggleOpen` and  `isOpen` will be passed as an object to your render function
     */
    render: PropTypes.func.isRequired
};

export default Collapsible;
