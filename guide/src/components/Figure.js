import React from 'react';
import PropTypes from 'prop-types';
import { styles } from 'cyverse-ui/styles';
import { Element } from 'cyverse-ui';

class Figure extends React.Component {
    render() {
        return (
            <figure style={{
                    margin: "0px",
                    border: "solid 1px lightgrey",
                    padding: "10px",
                }}
            >
                <Element
                    root="figcaption"
                    typography="title"
                    themeBackground="primary1Color"
                    style={{
                        color: "white",
                        padding: "10px",
                        margin: "-11px -11px 20px",
                    }}
                >
                    <Element typography="title" m={ 0 }>
                        { this.props.caption }
                    </Element>
                </Element>
                { this.props.children }
            </figure>

        );
    }
}

Figure.propTypes = {
    className: PropTypes.string,
};

export default Figure;
