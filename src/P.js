import React from "react";
import { styles, marg } from "./styles";

export default class extends React.Component {
    /**
     * P is a typography component for rendering a paragraph with the proper styles.
     */
    static displayName = "P";
    render() {
        return (
            <p
                style={{
                    ...this.style(),
                    ...this.props.style,
                }}
            >
                {this.props.children}
            </p>
        );
    }

    style = () => {
        const { lineHeight = "1.7" } = this.props;
        let textStyle = styles.t.body1;

        if (this.props.body1) {
            textStyle = styles.t.body1;
        }

        if (this.props.body2) {
            textStyle = styles.t.body2;
        }

        if (this.props.subheading) {
            textStyle = styles.t.subheading;
        }

        if (this.props.caption) {
            textStyle = styles.t.caption;
        }

        return {
            ...textStyle,
            maxWidth: "600px",
            lineHeight,
            margin: "0px",
            marginBottom: "34px",
            ...marg(this.props),
        };
    };
}
