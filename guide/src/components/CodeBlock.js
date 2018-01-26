import React, { Component } from "react";
import PropTypes from "prop-types";
import marked from "marked";
import { FlatButton } from "material-ui";
import CodeIcon from "material-ui/svg-icons/action/code";
import { Collapsible, Element } from "cyverse-ui";

const styles = {
    root: {
        marginTop: 20,
        marginBottom: 20,
        padding: "0"
    }
};

class CodeBlock extends Component {
    static propTypes = {
        style: PropTypes.object,
        text: PropTypes.string.isRequired
    };

    static defaultProps = {
        text: ""
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
                require("highlight.js").highlight(lang, code).value
        });
    }

    render() {
        const { style, text } = this.props;

        const renderCode = `\`\`\`jsx
${text}
\`\`\``;

        /* eslint-disable react/no-danger */
        return (
            <Collapsible
                render={({ isOpen, onToggleOpen }) => (
                    <Element {...this.props}>
                        <FlatButton
                            style={{ width: "100%" }}
                            label={`${isOpen ? "Hide" : "Show"} Code`}
                            onTouchTap={onToggleOpen}
                            icon={<CodeIcon />}
                        />
                        <Element hide={!isOpen}>
                            <div
                                style={{ ...styles.root, ...style }}
                                className="markdown-body"
                                dangerouslySetInnerHTML={{
                                    __html: marked(renderCode)
                                }}
                            />
                        </Element>
                    </Element>
                )}
            />
        );
        /* eslint-enable */
    }
}

export default CodeBlock;
