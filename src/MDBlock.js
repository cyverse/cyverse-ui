import React, { Component } from "react";
import PropTypes from "prop-types";
import marked from "marked";

const styles = {
    root: {
        marginTop: 20,
        marginBottom: 20,
    },
};

class MDBlock extends Component {
    static propTypes = {
        style: PropTypes.object,
    };

    static defaultProps = {
        text: "",
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
        });
    }

    render() {
        const { style, text } = this.props;

        /* eslint-disable react/no-danger */
        return (
            <div
                style={{ ...styles.root, ...style }}
                className="markdown-body md-description"
                dangerouslySetInnerHTML={{ __html: marked(text) }}
            />
        );
        /* eslint-enable */
    }
}

export default MDBlock;
