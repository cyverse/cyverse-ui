import React, { Component } from "react";
import PropTypes from "prop-types";
import marked from "marked";
import { Collapse } from "material-ui/transitions";
import { Button } from "material-ui";
import { Element } from "cyverse-ui";

const styles = {
    root: {
        marginTop: 20,
        marginBottom: 20,
        padding: "0 10px",
    },
};

class CodeBlock extends Component {
    state = { open: false };
    static propTypes = {
        style: PropTypes.object,
        text: PropTypes.string.isRequired,
    };

    static defaultProps = {
        text: "",
    };

    handleOpen = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    componentWillMount() {
        marked.setOptions({
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            language: "jsx",
            highlight: (code, lang) =>
                require("highlight.js").highlight(lang, code).value,
        });
    }

    render() {
        const { style, text } = this.props;
        const { open } = this.state;

        const renderCode = `\`\`\`jsx
${text}
\`\`\``;

        /* eslint-disable react/no-danger */
        return (
            <Element whitespace="pt3">
                <Button onClick={this.handleOpen}>
                    {`</> ${open ? "Hide" : "View"} Code Example`}
                </Button>

                <Collapse in={open}>
                    <div
                        style={{ ...styles.root, ...style }}
                        className="markdown-body"
                        dangerouslySetInnerHTML={{
                            __html: marked(renderCode),
                        }}
                    />
                </Collapse>
            </Element>
        );
        /* eslint-enable */
    }
}

export default CodeBlock;
