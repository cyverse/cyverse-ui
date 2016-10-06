import React, { PropTypes } from 'react';
import Avatar from './Avatar';
import CircleProgressBar from './CircleProgressBar';

const ProgressAvatar = React.createClass({

    render() {
        let { color, size, stroke, percent, name } = this.props;
        let opacity = 0; 
        let padding = 0;
        let avatarSize = size;

        let avatarColor;
        if ( percent < 100 ) {
            opacity = 1;
            avatarColor = "lightgrey"
            avatarSize = size - ((size / stroke) * 2);
            padding = ( size / stroke );
        }

        return (
            <div style={{ 
                    display: "inline-block", 
                    transition: "all ease .2s", 
                    position: "relative", 
                    padding 
                }}
            >
                <CircleProgressBar 
                    style = {{ 
                        opacity, 
                        position: "absolute", 
                        top: "0px", 
                        left: "0px" 
                    }}
                    percent = { percent }
                    color = { color }
                    size = { size }
                    stroke = { stroke }
                />
                <Avatar 
                    name = { name }
                    color = { avatarColor } 
                    size = { avatarSize }
                />
            </div>
        );
    },
});

ProgressAvatar.propTypes = {
    className: PropTypes.string,
};

export default ProgressAvatar;
