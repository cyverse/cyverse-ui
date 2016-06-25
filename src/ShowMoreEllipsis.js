import React from 'react';
import radium from 'radium';

const ShowMoreEllipsis = React.createClass({

    render: function() {
        return (
                <span style={{
                        cursor: "pointer",
                        background: "rgba(0,0,0,0.1)",
                        borderRadius: "3px", 
                        padding: "0 3px 12px", 
                        display: "inline-block",
                        marginTop: "10px",
                        lineHeight: "0",
                        verticalAlign: "middle",
                        fontSize: "22px",
                        ':hover': {
                            background: "rgba(0,0,0,0.2)",
                        }
                }}>
                    ...
                </span>
        )
    }
});

export default radium(ShowMoreEllipsis);
