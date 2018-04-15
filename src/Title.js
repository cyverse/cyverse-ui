import React from 'react';
import PropTypes from 'prop-types';
import { styles, marg, pad } from './styles';

class Title extends React.Component {
    /**
     * Title is a typography element for rendering titles with the proper markup and styles
     */

    render() {
        let HTag = 'h1';

        if (this.props.h1) {
            HTag = 'h1';
        }
        if (this.props.h2) {
            HTag = 'h2';
        }
        if (this.props.h3) {
            HTag = 'h3';
        }
        if (this.props.h4) {
            HTag = 'h4';
        }
            return (
                <HTag style={ this.styles() }>
                    { this.props.children }
                </HTag>
            )
    }

    styles = () => {
        let color = this.props.color;

        let fontStyle;
        if (this.props.display4) {
            fontStyle = styles.t.display4;
        }

        if (this.props.display3) {
            fontStyle = styles.t.display3;
        }

        if (this.props.display2) {
            fontStyle = styles.t.display2;
        }

        if (this.props.display1) {
            fontStyle = styles.t.display1;
        }

        if (this.props.headline) {
            fontStyle = styles.t.headline;
        }

        if (this.props.title) {
            fontStyle = styles.t.title;
        }

        if (this.props.caption) {
            fontStyle = styles.t.caption;
        }

        if (this.props.body2) {
            fontStyle = styles.t.body2;
        }

        let margSize;
        if (!this.props.noMarg) {
            margSize = marg({mb: 4})
        }

        return {
            color,
            ...fontStyle,
            ...margSize,
            ...marg( this.props ),
            ...pad( this.props ),
        }
    };
}

Title.propTypes = {
    className: PropTypes.string,
};

export default Title;
