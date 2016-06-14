import React from 'react';
import ClearFix from './ClearFix';

export default React.createClass({
    render() {
        let children = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                    style: { marginRight: "15px" }
                })
            );
        return (
            <ClearFix>
                { children }
            </ClearFix>
        )
    }
});
