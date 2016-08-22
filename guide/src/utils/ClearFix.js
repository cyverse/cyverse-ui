import React from 'react';
import { marg } from 'troposphere-ui/lib/styles';


export default class ClearFix extends React.Component {
    render() {
        const beforeStyle = {
            display: 'table'
        };

        const afterStyle = {
            ...beforeStyle,
            clear: 'both'
        };

        return (
            <div 
                style={{
                    ...this.props.style,
                    ...marg(this.props),
                }}
            >
                <div style={beforeStyle}/>
                    {this.props.children}
                <div style={afterStyle}/>
            </div>
        );
    }
}
