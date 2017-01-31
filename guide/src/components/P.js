import React from 'react';
import { styles } from 'cyverse-ui/styles';

export default React.createClass({
    render() {
        return (
            <p style={{ 
                    ...this.style(),
                    ...this.props.style,
                }} 
            >
                { this.props.children }
            </p>
        )
    },

    style() {
        let textStyle = styles.t.body1;

        if ( this.props.body1 ) {
            textStyle = styles.t.body1;
        }

        if ( this.props.body2 ) {
            textStyle = styles.t.body2;
        }
        
        if ( this.props.subheading ) {
            textStyle = styles.t.subheading;
        }

        return {
            ...textStyle,
            maxWidth: "600px", 
            lineHeight: "24px",
            margin: "0px",
            marginBottom: "34px",
        }
    }
});
