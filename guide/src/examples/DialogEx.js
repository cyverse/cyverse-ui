import React, { PropTypes } from 'react';
import { Dialog, FlatButton } from 'troposphere-ui';
import { ButtonGroup } from 'troposphere-ui/lib/utils';
const DialogEx = React.createClass({
    getInitialState() {
        return {
            isOpen: false
        }
    },

    onOpen() {
        this.setState({
            isOpen: true 
        });
    },

    onClose() {
        this.setState({
            isOpen: false 
        });
    },

    renderActions() {
        return ([
            <ButtonGroup>
                <FlatButton 
                    onTouch={ this.onClose }
                    children="Cancel"
                />
                <FlatButton 
                    onTouch={ this.onClose }
                    children="Save"
                />
            </ButtonGroup>
        ])
    },

    render() {
        return (
            <div>
                <FlatButton
                    onTouch={ this.onOpen }
                    children="Open Dialog"
                />
                <Dialog
                    title="The Title"
                    open={ this.state.isOpen }
                    actions={ this.renderActions() }
                />
            </div>
        );
    }
});

DialogEx.propTypes = {
    className: PropTypes.string,
};

export default DialogEx;
