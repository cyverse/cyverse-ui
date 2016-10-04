import React from 'react';
import { marg } from 'troposphere-ui/styles';
import ClearFix from './ClearFix';

export default React.createClass({
    render() {
        let children = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                    style: { ...marg({ mr: 4 }) }
                })
            );
        return (
            <ClearFix { ...this.props }>
                { children }
            </ClearFix>
        )
    }
});
