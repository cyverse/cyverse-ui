import React from 'react';
import { hoverable } from './utils';
import { marg } from './styles';

const ShowMoreEllipsis = (props) => {
    const { 
        isHovered,
        onMouseEnter,
        onMouseLeave
    } = props;
    
    const styles = {
        ...marg({mt: 2}),
        cursor: "pointer",
        borderRadius: "3px", 
        padding: "0 3px 12px", 
        display: "inline-block",
        lineHeight: "0",
        verticalAlign: "middle",
        fontSize: "22px",
        background: "rgba(0,0,0,.1)",
        onHover: isHovered ? {
            background: "rgba(0,0,0,.3)"
        } : {}
    }
    return (
        <span 
            onMouseEnter={ onMouseEnter }
            onMouseLeave={ onMouseLeave }
            style={{
                ...styles,
                ...styles.onHover,
            }}
        >
            ...
        </span>
    )
};

export default hoverable(ShowMoreEllipsis);
