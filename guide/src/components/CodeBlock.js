import React, { Component } from "react";
import PropTypes from "prop-types";
import marked from "marked";
import { Collapse } from "material-ui/transitions";
import { Button } from "material-ui";
import { Element } from "cyverse-ui";

const styles = {
    root: {
        marginBottom: 20,
    },
    buttonWrapper: {
        display: "flex",
        justifyContent: "flex-end",
        paddingTop: "8px"
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
        const { style, text, collapseDisabled } = this.props;
        const { open } = this.state;

        const renderCode = `\`\`\`jsx
${text}
\`\`\``;

        /* eslint-disable react/no-danger */
        return (
            <Element>
                {collapseDisabled ? null : (
                    <div style={styles.buttonWrapper}>
                        <Button onClick={this.handleOpen}>
                            {`</> ${
                                open ? "Hide" : "View"
                            } Code Example`}
                        </Button>
                    </div>
                )}

                <Collapse in={open || collapseDisabled}>
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
