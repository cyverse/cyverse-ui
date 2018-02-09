import React from "react";

export default class ClearFix extends React.Component {
    render() {
        const beforeStyle = {
            display: "table",
        };

        const afterStyle = {
            ...beforeStyle,
            clear: "both",
        };

        return (
            <React.Fragment>
                <div style={beforeStyle} />
                {this.props.children}
                <div style={afterStyle} />
            </React.Fragment>
        );
    }
}
