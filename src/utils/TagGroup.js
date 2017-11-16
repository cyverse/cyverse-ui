import React, { PropTypes } from 'react';
import { marg, styles } from '../styles';

const s = styles;

class TagGroup extends React.Component {
    listItems = (item) => {
        return (
            <li 
                key={ item.props.children.toString() }
                style={ this.styles().li }
            >
                { item }
            </li>
        )
    };

    render() {
        return (
            <ul style={ this.styles().ul }>
                { this.props.children.map(this.listItems) }
            </ul>
        );
    }

    styles = () => {
        return {

            li: {
                ...s.u.inlineLi,
                ...marg({ mr: 1, mb: 1 }),
            },

            ul: {
                ...s.u.inlineUl,
            }
        }
    };
}

TagGroup.propTypes = {
    className: PropTypes.string,
};

export default TagGroup;
