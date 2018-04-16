import React from "react";
import { SvgIcon } from "material-ui";

const AttachInstanceIcon = ({ size = 24, style, ...rest }) => {
    return (
        <SvgIcon
            {...rest}
            style={{
                height: size,
                width: size,
                ...style,
            }}
        >
            <path
                fillRule="evenodd"
                d="M11,11.3548387 L8,11.3548387 L12.5,15.8172043 L17,11.3548387 L14,11.3548387 L14,3 L11,3 L11,11.3548387 Z M2,20.2795699 L2,16.7096774 L22,16.7096774 L22,20.2795699 L2,20.2795699 Z M6,17.6021505 L4,17.6021505 L4,19.3870968 L6,19.3870968 L6,17.6021505 Z"
                id="path-1"
            />
        </SvgIcon>
    );
};

export default AttachInstanceIcon;
