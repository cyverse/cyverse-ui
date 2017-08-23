import React from 'react';
import PropTypes from 'prop-types';

import { IconButton, IconMenu } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

/**
 * A VerticalMenu is a menu that can be displayed by pressing a VerticalMenuIcon. In Troposphere a VerticalMenu is used in the top right corner of a header or MediaCard to hold a list of actions that are applied to the item or items within that context.

Because VerticalMenus should appear to the top right corner this component defaults to opening from the right and down but this behavior can be overridden using `anchorOrigin` and `targetOrigin`. See  [Material-UI's IconMenu](http://www.material-ui.com/#/components/icon-menu) for better documentation.
 */
const VerticalMenu = React.createClass({
    displayName: "VerticalMenu",
    propTypes: {
        /**
         * This is the point on the icon where the menu targetOrigin will attach. Options: vertical: [top, center, bottom] horizontal: [left, middle, right].
         */
        anchorOrigin: PropTypes.object,
        /**
         * This is the point on the menu which will stick to the menu origin. Options: vertical: [top, center, bottom] horizontal: [left, middle, right].
         */
        targetOrigin: PropTypes.object,
        /**
         * Should be used to pass MenuItem components.
         */
        children: PropTypes.node,
    },
    getDefaultProps() {
        return {
            anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
            targetOrigin: { horizontal: 'right', vertical: 'top' }
        }
    },
    onTouch(e) {
        e.stopPropagation();
        e.preventDefault();
    },

    render() {
        const {
            anchorOrigin,
            targetOrigin
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
