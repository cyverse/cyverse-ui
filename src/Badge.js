import React from 'react';
import styles from './styles/styles';

export default React.createClass({
    render() {
        let bg = this.props.color ? 
            { background: this.props.color } :
            styles.BgColors.greyXDark;
            
        return (
            <div 
                style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    padding: "3px",
                    lineHeight: "74%",
                    fontSize: "8px",
                    borderRadius: "9999px",
                    color: "white",
                    ...bg,
                }}
            >
                { this.props.children }
            </div>
        )
    }
});
