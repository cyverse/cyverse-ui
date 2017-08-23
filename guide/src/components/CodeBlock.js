import React, {Component} from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

const styles = {
    root: {
        marginTop: 20,
        marginBottom: 20,
        padding: '0 10px',
    },
};

class CodeBlock extends Component {

    static propTypes = {
        style: PropTypes.object,
        text: PropTypes.string.isRequired,
    };

    static defaultProps = {
        text: '',
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
            language: 'jsx',
            highlight: (code, lang) => (
                require('highlight.js').highlight(lang, code).value
            ),
        });
    }

    render() {
        const {
            style,
            text,
        } = this.props;

        const renderCode = (
`\`\`\`jsx
${text}
\`\`\``
        );

        /* eslint-disable react/no-danger */
        return (
            <div
                style={{ ...styles.root, ...style}}
                className="markdown-body"
                dangerouslySetInnerHTML={{__html: marked(renderCode)}}
            />
        );
        /* eslint-enable */
    }
}

export default CodeBlock;
