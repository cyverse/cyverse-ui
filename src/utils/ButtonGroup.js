import React from 'react';
import { marg } from '../styles';
import ClearFix from './ClearFix';

export default React.createClass({
    render() {
        const { children, pullR, pullL } = this.props;

        let style = {};
        if ( pullR ) {
            style = { float: "right" }
        }
        if ( pullL ) {
            style = { float: "left" }
        }

        let renderChildren = React.Children.map(children,
            (child, i) => {
                if (i === children.length - 1) {
                    return React.cloneElement(child);
                } else {
                    return React.cloneElement(child, {
                        style: { ...marg({ mr: 4 }) }
                    })
                }
            }
        );
        return (
            <div style={ style }>
                <ClearFix { ...this.props }>
                    { renderChildren }
                </ClearFix>
            </div>
        )
    }
});
