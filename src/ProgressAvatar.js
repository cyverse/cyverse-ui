import React, { PropTypes } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Div } from 'cyverse-ui';
import Avatar from 'material-ui/Avatar';
import CircleProgressBar from 'material-ui/CircularProgress';

const ProgressAvatar = React.createClass({
    render() {
        let {
            children,
            progressColor,
            backgroundColor,
            src,
            icon,
            size = 40,
            thickness = 3,
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
                <div style={{ 
                        position: "relative", 
                        padding,
                    }}
                >
                    <CircleProgressBar 
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

ProgressAvatar.propTypes = {
    className: PropTypes.string,
};

export default muiThemeable()(ProgressAvatar);
