import React from 'react';
import radium from 'radium';

const ShowMoreEllipsis = React.createClass({

    render: function() {
        return (
                <div style={{
                        background: "#EFEFEF",
                        borderRadius: "8px", 
                        padding: "0 3px 12px", 
                        display: "inline-block",
                        lineHeight: "0",
                        verticalAlign: "middle",
                        fontSize: "22px",
                        ':hover': {
                            background: "lightgrey",
                        }
                    }}>...</div>
        )
    }
});

export default radium(ShowMoreEllipsis);
