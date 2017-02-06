import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const VerticalMenu = React.createClass({
    onTouch(e) {
        e.stopPropagation();
        e.preventDefault();
    },

    render() {
        return (
            <IconMenu
                { ...this.props }
                iconButtonElement={
                    <IconButton onClick={ this.onTouch }>
                        <MoreVertIcon />
                    </IconButton>
                }
		anchorOrigin={{horizontal: 'right', vertical: 'top'}}
		targetOrigin={{horizontal: 'right', vertical: 'top'}}
            />
        )
    },
});

export default VerticalMenu;
