
import React from 'react';
import IconBase from './IconBase';

export default class Warning extends React.Component {
    render() {
        return (
                <IconBase viewBox="0 0 24 24" {...this.props}>
                        <path xmlns="http://www.w3.org/2000/svg" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                </IconBase>
        )
    }
}

