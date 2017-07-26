import React from 'react';
import IconMenu from 'material-ui/IconMenu';

import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const VerticalMenu = React.createClass({
    onTouch(e) {
        e.stopPropagation();
        e.preventDefault();
    },

    render() {
        const {
            anchorOrigin = { horizontal: 'right', vertical: 'bottom' },
            targetOrigin = { horizontal: 'right', vertical: 'top' }
        } = this.props;

        return (
            <IconMenu
                { ...this.props }
                iconButtonElement={
                    <IconButton onClick={ this.onTouch }>
                        <MoreVertIcon />
                    </IconButton>
                }
		anchorOrigin={ anchorOrigin }
		targetOrigin={ targetOrigin }
            />
        )
    },
});

export default VerticalMenu;
