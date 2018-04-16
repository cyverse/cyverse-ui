import React from 'react';
import { SvgIcon } from 'material-ui';

const DetachInstanceIcon = ({ size = 24, style, ...rest }) => {
    return (
        <SvgIcon { ...rest }
            style={{
                height: size,
                width: size,
                ...style,
            }}
        >
            <path fillRule="evenodd" d="M14,6.8172043 L17,6.8172043 L12.5,2.35483871 L8,6.8172043 L11,6.8172043 L11,15.1400003 L14,15.1400003 L14,6.8172043 Z M2,20.2795699 L2,16.7096774 L22,16.7096774 L22,20.2795699 L2,20.2795699 Z M6,17.6021505 L4,17.6021505 L4,19.3870968 L6,19.3870968 L6,17.6021505 Z" id="path-1"></path>
        </SvgIcon>
    )
};

export default DetachInstanceIcon
