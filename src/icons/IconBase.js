import { default as React, PropTypes } from 'react'
import { marg, variables } from '../styles';
const defaultSize = '1em'

const IconBase = ({ children, size, style, viewBox, ...props }, { reactIconBase }) => {
    const computedSize = size ? size : (reactIconBase && reactIconBase.size || defaultSize)
    const computedStyle = {
        verticalAlign: "middle",
        ...(reactIconBase && reactIconBase.style || {}),
        ...style,
        ...marg(props),
    };
    
    let fill = props.color ? props.color : variables.c.grey.xDark;

    return (
        <svg
            fill={ fill }
            preserveAspectRatio="xMidYMid meet"
            height={computedSize}
            width={computedSize}
            {...reactIconBase}
            viewBox={viewBox}
            style={computedStyle}
        >
            {children}
        </svg>
    );
}

IconBase.contextTypes = {
    reactIconBase: PropTypes.object
}

IconBase.propTypes = {
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    style: PropTypes.object
}

export default IconBase
