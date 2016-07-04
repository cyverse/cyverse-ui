import React from 'react';
import IconBase from './IconBase';

export default React.createClass({
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <path d="M8 5v14l11-7z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </IconBase>
        )
    }
});
