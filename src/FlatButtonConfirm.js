import React from 'react';
import {
    FlatButton,
    RaisedButton,
    Popover,
} from 'material-ui/';

import { ButtonGroup, ClearFix } from './utils';

export default class PopoverExampleSimple extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            anchorEl: null,
        };
    }

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    onConfirm = () => {
        this.handleRequestClose();
        this.props.onConfirm();
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        const {
            label,
            confirmLabel,
            content,
            style,
            disabled,
            icon,
            primary
        } = this.props;

        return (
            <span>
                <FlatButton
                    primary={ primary }
                    icon={ icon }
                    style={ style }
                    onTouchTap={this.handleTouchTap}
                    label={ label }
                />
                <Popover
                    style={{ minWidth: "200px" }}
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{
                        horizontal: 'left',
                        vertical: 'top'
                    }}
                    targetOrigin={{
                        horizontal: 'left',
                        vertical: 'bottom'
                    }}
                    onRequestClose={ this.handleRequestClose }
                >
                    <div
                        style={{ margin: "20px" }}
                    >
                        { content }
                        <ClearFix>
                            <ButtonGroup
                                pullR
                                mt={ 6 }
                            >
                                <RaisedButton
                                    label="Cancel"
                                    onTouchTap={ this.handleRequestClose }
                                />
                                <RaisedButton
                                    primary
                                    label={ confirmLabel }
                                    onTouchTap={ this.onConfirm }
                                />
                            </ButtonGroup>
                        </ClearFix>
                    </div>
                </Popover>
            </span>
        );
    }
}
