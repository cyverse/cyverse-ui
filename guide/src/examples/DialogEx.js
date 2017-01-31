import React, { PropTypes } from 'react';
import { Dialog, FlatButton } from 'cyverse-ui';
import { ButtonGroup } from 'cyverse-ui/utils';
import { Code, Sheet } from '../components';
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
                <Sheet mb={ 4 }>
                    <FlatButton
                        onTouch={ this.onOpen }
                        children="Open Dialog"
                    />
                    <Dialog
                        title="The Title"
                        open={ this.state.isOpen }
                        actions={ this.renderActions() }
                        onRequestClose={ this.onClose }
                    />
                </Sheet>
                        <Code children={ 
                    /* This is a string for our code snippt. It is not indented because it messes up the formating in render 
                     * started off using toJSX(Example) which was awesome but it renders the Radium wrapper instead of Button :( */
`<Sheet mb={ 4 }>
    <FlatButton
        onTouch={ this.onOpen }
        children="Open Dialog"
    />
    <Dialog
        title="The Title"
        open={ this.state.isOpen }
        actions={ this.renderActions() }
    />
</Sheet>`
                        }
                    />
            </div>
        );
    }
});

DialogEx.propTypes = {
    className: PropTypes.string,
};

export default DialogEx;
