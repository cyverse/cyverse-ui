import React from 'react';
import { marg } from '../styles';
import ClearFix from './ClearFix';

export default React.createClass({
    render() {
        const { children, pullR, pullL } = this.props;

        let style = {
            display: "flex",
            flexWrap: "wrap",
        };
        if ( pullR ) {
            style.float = "right";
        }
        if ( pullL ) {
            style.float = "left";
        }

        let renderChildren = React.Children.map(children,
            (child, i) => {
                if (i === children.length - 1) {
                    return React.cloneElement(child, {
                        style: { ...marg({ mv: 1 }) }
                    });
                } else {
                    return React.cloneElement(child, {
                        style: { ...marg({ mr: 3, mv: 1 }) }
                    })
                }
            }
        );
        return (
            <ClearFix>
                <div style={ style }>
                    { renderChildren }
                </div>
            </ClearFix>
        )
    }
});
