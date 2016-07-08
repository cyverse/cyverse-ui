import React, { PropTypes } from 'react';
import { Dialog } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const DialogRender = React.createClass({

    render() {
        return (
	<MuiThemeProvider>
            <Dialog { ...this.props }/>
	</MuiThemeProvider> 
        );
    }
});

DialogRender.propTypes = {
    className: PropTypes.string,
};

export default DialogRender;
