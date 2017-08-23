import React from 'react';
import PropTypes from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { Div } from 'cyverse-ui';
import { Avatar, CircularProgress } from 'material-ui';

/**
 * ProgressAvatar can be used in place of MUI's Avatar as a clear way to inform the user that a process is taking place on that item as well as what percentage of that process is finished without taking up valuable real estate and leveraging Avatar being a visual anchor for the item.
 */
const ProgressAvatar = React.createClass({
    displayName: "ProgressAvatar",
    propTypes: {
        /**
         * Optionally use an image source.
         */
        src: PropTypes.string,
        /**
         * Optionally use an Icon, expects MUI or CY-UI Icons.
         */
        icon: PropTypes.element,
        /**
         * The diameter of the Avatar.
         */
        size: PropTypes.number,
        /**
         * The thickness of the progress bar.
         */
        thickness: PropTypes.number,
        /**
         * The percentage of progress.
         */
        percent: PropTypes.number,
    },

    getDefaultProps() {
        return {
            size: 40,
            thickness: 3,
        }
    },

    render() {
        let {
            children,
            progressColor,
            backgroundColor,
            src,
            icon,
            size,
            thickness,
            percent,
            name,
            muiTheme,
            ...rest
        } = this.props;

        let { success = "green" } = muiTheme.palette;
        let opacity = 0;
        let wrapperOpacity: 1;
        let padding = 0;
        let avatarSize = size;
        let value = 0;
        let avatarColor = backgroundColor;
        
        if ( percent < 100 ) {
            value = percent;
            opacity = 1;
            wrapperOpacity = src ? .3 : 1;
            avatarColor = "lightgrey"
            avatarSize = size - (thickness * 2);
            padding = thickness;
        }

        let strokeColor = progressColor || success; 
        
        return (
            <Div { ...rest }>
                <div style = {{
                        position: "relative", 
                        padding,
                    }}
                >
                    <CircularProgress
                        style = {{ 
                            opacity, 
                            position: "absolute", 
                            top: "0px", 
                            left: "0px" 
                        }}
                        mode = "determinate"
                        value = { value }
                        color = { strokeColor }
                        size = { size }
                        thickness = { thickness }
                    />
                    <Avatar 
                        style = {{ opacity: wrapperOpacity }}
                        name = { name }
                        color = "rgba(255,255,255,.7)"
                        src = { src }
                        icon = { icon }
                        backgroundColor = { avatarColor } 
                        size = { avatarSize }
                    >
                        { children }
                    </Avatar>
                </div>
            </Div>
        );
    },
});

export default muiThemeable()(ProgressAvatar);
